import { logger } from "../logger/logger";
import { redisClient } from "../redis/redisClient";
import { queueTask } from "../types/types";


class TaskQueue {

    private readonly  QUEUE_NAME = "task-queue"


    async enqueueTask(task:queueTask){
        try 
        {
            logger.debug(task);
            await redisClient.queuePush(this.QUEUE_NAME, task);
        }
        catch(err)
        {
            logger.error("Error enqueuing task:", err);
            return;
        }
    }

    async dequeueTask(){
        try 
        {
            const task = await redisClient.queuePop(this.QUEUE_NAME);
            if(task)
            {
                return task;
            }
            return null;
        }
        catch(err)
        {
            logger.error("Error dequeuing task:", err);
            return null;
        }
    }
}

export { TaskQueue };