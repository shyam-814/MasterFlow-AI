import { createClient } from "redis";
import { start } from "repl";
import { queueTask } from "../types/types";

async function startWorker() {

const redis = createClient();
await redis.connect();

console.log("Worker started — waiting for tasks...");

const QUEUE_NAME = "task-queue"
const ORCHESTRATOR_ENDPOINT = "http://localhost:5000/workflowRun/stepRun/"
const TOOLS_BACKEND_ENDPOINT = "http://localhost:8000"


while (true) {
  // BRPOP blocks until an item appears
  const result = await redis.brPop(QUEUE_NAME, 0);
  const task = JSON.parse(result?.element || "{}");
  const taskData: queueTask = task.data;

  console.log(`⚙️  Processing task ${task.id}...`);
  console.log(task);
  

  // Simulate doing work
    // const resp = await fetch(TOOLS_BACKEND_ENDPOINT + taskData.tool.toolLink, {
    //   method: "POST",
    //   body: JSON.stringify({settings: taskData.tool.settings}),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // const respData = await resp.json();
    // // console.log("Tool response:", respData);
    // // update the orchestrator about the task being done 
    // // call the orchestrator endpoint 
    // task.data.status = "COMPLETE";
    // task.data.output = respData.response;
    // // also change the output
    try {
        console.log(`Updating orchestrator for step ${task.data.stepId}...`);
        // console.log(task.data);
        const response = await fetch(ORCHESTRATOR_ENDPOINT + task.data.stepId, {
            method: "POST",
            body: JSON.stringify(task.data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.error(`Failed to update orchestrator: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Error updating orchestrator for step ${task.data.stepId}:`, error);
    }

  console.log(`✅ Done task ${task.id}`);
}


    
}

startWorker();