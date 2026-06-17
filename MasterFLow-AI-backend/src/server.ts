import express, { Request, Response } from "express";
import cors from "cors";
import 'dotenv/config'
import { logger } from "./logger/logger";
import { redisClient } from "./redis/redisClient";

import { TOOLS } from "./seed_data/tools";
import { PrismaClient, Step, Tools, Workflow } from "./generated/prisma";
import { USERJSONDATA } from "./seed_data/user_data";
import { queueTask } from "./types/types";
import { TaskQueue } from "./queue/queueClient";

// APP CONFIG
const app = express();
const PORT = process.env.BACKEND_PORT || 3000;

// IMPORTANT MIDDLEWARES
app.use(express.json());
app.use(cors());

// PRISMA CONNECTION
const prisma = new PrismaClient();

// QUEUE: Critical for Main Task Processing
const taskQueue = new TaskQueue();

// SETUP ALL THE SUBSERVICES
async function initializeServices() {
  try {
    // REDIS: Critical for Main Task queue and Caching
    await redisClient.connect();

    const health = await redisClient.getHealth();
    if (health.connected) {
      logger.info(`Redis Health: Connected (ping ${health.ping})`);
    } else {
      logger.info(`Redis Health: Connection failed!`);
    }
  } catch (error) {
    logger.error("Failed to initalize Redis: ", error);
    // exit the process
    // process.exit(1);
  }
}

initializeServices();

// HEALTH ENDPOINT
app.get("/health", async (req: Request, res: Response) => {
  return res.json({
    Health: "Server Running Perfectly!",
  });
});

// SEED DATABASE
// app.get("/seed", async (req: Request, res: Response) => {
//   // create tools first
//   await prisma.tools.createMany({
//     data: TOOLS,
//   });

//   // get tools ids from db
//   const toolsInDB: Tools[] = await prisma.tools.findMany({});
//   const idlist = toolsInDB.map((tool: Tools) => tool.id);

//   // get the workflow json with ids
//   const userSideJson = USERJSONDATA(idlist);
//   // create the workflow first in db
//   const workflow: Workflow = await prisma.workflow.create({
//     data: {
//       name: userSideJson.workflowName,
//     },
//   });
//   // now create the steps
//   const parentIds: string[] = [];
//   for (let i = 0; i < userSideJson.steps.length; i++) {
//     const step = userSideJson.steps[i];

//     const stepFromDb = await prisma.step.create({
//       data: {
//         name: step?.name || "Step",
//         toolId: step?.toolId ?? "",
//         workflowId: workflow.id,
//         // Fix: Use null instead of empty string for first step
//         parentId: i === 0 ? null : parentIds[i - 1] ?? null,
//         firstStep: i === 0, // Mark first step
//       },
//     });

//     parentIds.push(stepFromDb.id);
//   }

//   return res.json({
//     Status: "Seeded Database!",
//   });
// });


// SERVICE ENDPOINTS 
app.post("/workflow/run/:workflowId", async (req: Request, res: Response) => {
  const { workflowId } = req.params;
  const { input }: { input: string } = req.body;

  if (!workflowId) {
    return res.status(400).json({ error: "workflowId is required" });
  }

  // create a workflow run instance 
  const workflowRunInstance = await prisma.workflowRuns.create({
    data: {
      workflowId: workflowId,
      status: "RUNNING"
    }
  })

  const firstStep = await prisma.step.findFirst({
    where: {
      workflowId: workflowId as string,
      firstStep: true
    },
    include: {
      children: true,
      tool: true,
    }
  });

  if (!firstStep) {
    await prisma.workflowRuns.update({
      where: { id: workflowRunInstance.id },
      data: { status: "ERROR" }
    });
    return res.status(400).json({
      error: "Workflow has no steps. Please add steps before running."
    });
  }

  // create the step run also 
  const stepRunInstance = await prisma.stepRuns.create({
    data: {
      workflowRunId: workflowRunInstance.id,
      parentStepId: null,
      output: {}
    }
  })

  // prepare the queue json put this first step into queue with the input 
  const queueJsonForFirstStep: queueTask = {
    "workflowRunId": workflowRunInstance.id,
    "childId": firstStep.children[0]?.id || "",
    "parentId": undefined,
    "stepId": stepRunInstance.id,
    "tool": {
      "toolLink": firstStep.tool.toolLink || "",
      "settings": (firstStep.settings as any) || {},
      "input": input || ""
    },
    "runNextStep": true,
    "output": "{}",
    "status": "IDLE",
  }

  taskQueue.enqueueTask(queueJsonForFirstStep);

  return res.json({
    "workflowRunId": workflowRunInstance.id
  })
})

app.post("/workflowRun/stepRun/:stepRunId", async (req: Request, res: Response) => {
  const { stepRunId } = req.params;
  const body = req.body as queueTask;

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid or missing request body" });
  }

  const stepRun = await prisma.stepRuns.update({
    where: {
      id: stepRunId || "",
    },
    data: {
      status: body.status,
      output: body.output
    },
  })

  logger.debug(`Current stepRunId: ${stepRunId}, status: ${body.status}, childId: ${body.childId}, workflowRunId: ${body.workflowRunId}`);

  if (body.status == "COMPLETE") {
    const nextStep = await prisma.step.findFirst({
      where: {
        id: body.childId
      },
      include: {
        children: true,
        tool: true,
      }
    })
    logger.debug(`Processing next step for workflowRunId: ${body.workflowRunId}, current stepRunId: ${stepRunId}, nextStepId: ${nextStep?.id}`);
    logger.info(`Step completed. stepRunId: ${stepRunId}, status: ${body.status}`);

    
    if (!nextStep) {
      const completedWorkflow = await prisma.workflowRuns.update({
        where: {
          id: body.workflowRunId
        },
        data: {
          status: "COMPLETE"
        }
      })
      logger.info(`Workflow completed. workflowRunId: ${completedWorkflow.id}, status: ${completedWorkflow.status}`);
      logger.debug(`No next step found for childId: ${body.childId}. Workflow may be complete.`);
      return res.json({ message: "No next step to process. Workflow may be complete." });
    }

    const stepRunIn = await prisma.stepRuns.create({
      data: {
        workflowRunId: body.workflowRunId,
        parentStepId: body.stepId,
        output: {}
      }
    })

    const nextTaskForQueue: queueTask = {
      workflowRunId: body.workflowRunId,
      parentId: stepRun.id,
      childId: nextStep.children[0]?.id || "",
      output: "",
      status: "IDLE",
      runNextStep: body.runNextStep,
      stepId: stepRunIn.id,
      tool: {
        toolLink: nextStep.tool.toolLink || "",
        input: JSON.stringify(stepRun.output) || "",
        settings: (nextStep.settings as any) || {}
      }
    }

    taskQueue.enqueueTask(nextTaskForQueue);

    return res.json({ message: "Pushed to queue next task", stepId: stepRunIn.id })
  }
  else {
    await prisma.workflowRuns.update({
      where: {
        id: body.workflowRunId
      },
      data: {
        status: "ERROR"
      }
    })
    return res.json({ message: "Step failed, workflow marked as ERROR" });
  }
})



// CLIENT ENDPOINT TO CHECK WORKFLOW STATUS 
// ye tym implement kr dena 
// fetch the whole workflow along with steps, 
app.post("/workflowRun/:workflowRunId", async (req: Request, res: Response) => {
  const { workflowRunId } = req.params;

  const workflowRun = await prisma.workflowRuns.findUnique({
    where: {
      id: workflowRunId || ""
    },
    select: {
      id: true,
      status: true,
      runningSteps: {
        select: {
          id: true,
          output: true,
          status: true,
        }
      }
    }
  })

  return res.json({ message: "Retrieval Successfull!", workflowRun });
});


// CRUD ENDPOINTS FOR TOOLS, WORKFLOWS, STEPS CAN BE ADDED HERE

// workflow 

app.get("/workflows", async (req: Request, res: Response) => {
  const workflows = await prisma.workflow.findMany({});
  return res.json({ message: "Workflows Retrieved!", workflows });
});

app.get("/workflows/:workflowId", async (req: Request, res: Response) => {
  try 
  {
    const { workflowId } = req.params;
    const workflow = await prisma.workflow.findUnique({
      where: {
        id: workflowId || ""
      },
      include: {
        Steps: {
          include: {
            tool: true,
            children: true
          }
        }
      }
    });
    return res.json({ message: "Workflow Retrieved!", workflow });
  }
  catch(err) 
  {
    console.log(`Error in workflows fetching endpoint: ${err}`)
    return res.status(500).json({message:"Failed to retrieve workflow!"})
  }
});

app.post("/workflow", async (req: Request, res: Response) => {
  const { name, userId } = req.body;
  const workflow = await prisma.workflow.create({
    data: {
      name: name || "New Workflow",
      description: req.body.description || "",
      userId: userId,
      settings: {}
    },
  });
  return res.json({ message: "Workflow Created!", workflow });
});

app.put("/workflow/:workflowId", async (req: Request, res: Response) => {
  const { workflowId } = req.params;
  const { name, steps } = req.body;

  if (!workflowId) {
    return res.status(400).json({ error: "workflowId is required" });
  }

  if (!steps || !Array.isArray(steps)) {
    return res.status(400).json({ error: "steps array is required" });
  }

  try {
    // 1. Get IDs of steps being kept/updated
    const keepStepIds = steps.filter(s => s.id).map(s => s.id);

    // 2. Delete removed steps
    await prisma.step.deleteMany({
      where: {
        workflowId: workflowId,
        id: { notIn: keepStepIds }
      }
    });

    // 3. Create/Update steps
    let previousStepId: string | null = null;
    const createdSteps: Step[] = [];

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      let stepDetails: Step;

      if (step.id) {
        // Update existing step
        stepDetails = await prisma.step.update({
          where: { id: step.id },
          data: {
            name: step.name || "Step",
            settings: step.settings || {},
            toolId: step.toolId,
            parentId: previousStepId,
            firstStep: i === 0,
          }
        });
      } else {
        // Create new step
        stepDetails = await prisma.step.create({
          data: {
            name: step.name || "Step",
            settings: step.settings || {},
            toolId: step.toolId,
            workflowId: workflowId,
            parentId: previousStepId,
            firstStep: i === 0,
          }
        });
      }

      createdSteps.push(stepDetails);
      previousStepId = stepDetails.id;
    }

    // 4. Update workflow name
    const updatedWorkflow = await prisma.workflow.update({
      where: { id: workflowId },
      data: { name: name },
      include: { Steps: true }
    });

    return res.json({
      message: "Workflow Updated!",
      workflow: updatedWorkflow,
      steps: createdSteps
    });

  } catch (error) {
    console.error("Error updating workflow:", error);
    return res.status(500).json({ error: "Failed to update workflow" });
  }
});

// tools 
app.post("/tool", async (req: Request, res: Response) => {
  const { name, toolLink, description, inputTypes, outputTypes, settingsSchema, price } = req.body;
  console.log(req.body);
  const tool = await prisma.tools.create({
    data: {
      name: name || "New Tool",
      toolLink: toolLink || "",
      description: description || "",
      inputType: inputTypes?.join(",") || "",
      outputType: outputTypes?.join(",") || "",
      settingsSchema: settingsSchema || {},
      price: price || 0
    },
  });
  return res.json({ message: "Tool Created!", tool });
});

app.get("/tools", async (req: Request, res: Response) => {
  const tools = await prisma.tools.findMany({});
  return res.json({ message: "Tools Retrieved!", tools });
});

app.get("/tools/user/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  if (!userId) return res.status(422).json({ message: "UserId Missing!" });

  const userTools = await prisma.userTools.findMany({
    where: {
      userId: userId
    },
    include: {
      tools: true
    }
  });

  if (userTools.length === 0) {
    return res.json({ message: "No tools found for user", tools: [] });
  }

  // Flatten the tools array from UserTools
  const tools = userTools.flatMap(ut => ut.tools);
  return res.json({ message: "User Tools Retrieved!", tools });
});

app.get("/tools/detail/:toolId", async (req: Request, res: Response) => {
  const { toolId } = req.params;
  if (!toolId) return res.status(422).json({ message: "Tool Id Missing!" });

  const tool = await prisma.tools.findUnique({
    where: {
      id: toolId
    },
    select: {
      id: true,
      name: true,
      description: true,
      inputType: true,
      outputType: true,
      settingsSchema: true,
      price: true,
      toolLink: true
    }
  });

  if (!tool) {
    return res.status(404).json({ message: "Tool not found" });
  }

  // FIX #6: Actually return the tool data (was missing before)
  return res.json({ message: "Tool Retrieved!", tool });
});

// app.post("/tool/settings/:toolId", async (req: Request, res: Response)=>{
//   const {toolId} = req.params;
//   const {settings} = req.body;
//   if (!toolId) return res.json({message:"Tool Id Missing!"}).status(422);
//   const toolSettings = await prisma.toolSettings.update({
//     where:{
//       id:toolId
//     },
//     data:{
//       settings:settings
//     }
//   })
//   return res.json({message:"Tool Settings Updated!",toolSettings}).status(200)
// })

app.get("/user/:userId/tool/:toolId", async (req: Request, res: Response)=>{
  const {userId,toolId} = req.params;
  if (!userId || !toolId) return res.json({message:"UserId or ToolId Missing!"}).status(422);
  const userTool = await prisma.userTools.create({
    data:{
      userId:userId,
      tools:{
        connect: {
          id:toolId
        }
      }
    }
  })
  return res.json({message:"Tool Added to User!",userTool}).status(200)
})

app.get("/tools/:toolId", async (req: Request, res:Response)=>{
  const {toolId} = req.params;
  if (!toolId) return res.json({message:"Tool Id Missing!"}).status(422);
  const tool = await prisma.tools.findUnique({
    where:{
      id:toolId
    },
    select:{
      id:true, 
      inputType:true,
      outputType:true, 
      settingsSchema:true 
    }
  })
  return res.json({message:"Tool Retrieved!"}).status(200)
})

// START LISTENING
app.listen(PORT, () => {
  logger.info("Server Started! PORT: " + PORT);
});
