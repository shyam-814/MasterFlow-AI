import { createClient } from "redis";

const redis = createClient();
await redis.connect();

console.log("Worker started — waiting for tasks...");

const QUEUE_NAME = "task-queue"
const ORCHESTRATOR_ENDPOINT = "http://localhost:3000/workflowRun/stepRun/"

while (true) {
  // BRPOP blocks until an item appears
  const result = await redis.brPop(QUEUE_NAME, 0);
  const task = JSON.parse(result.element);

  console.log(`⚙️  Processing task ${task.id}...`);
//   console.log(task);

  // Simulate doing work
  await new Promise((res) => setTimeout(res, 1000 + Math.random() * 2000));

    // update the orchestrator about the task being done 
    // call the orchestrator endpoint 
    task.data.status = "COMPLETE";
    // also change the output
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
