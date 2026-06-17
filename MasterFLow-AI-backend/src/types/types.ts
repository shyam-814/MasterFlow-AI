import z from "zod"



const queueTaskType = z.object({
    "workflowRunId": z.string(),
    "childId": z.string(),
    "parentId": z.string().optional(),
    "stepId": z.string(),
    "tool":z.object({
        "toolLink": z.string(),
        "settings": z.object(z.json()),
        "input": z.string()
    }),
    "runNextStep": z.boolean(),
    "status":z.enum(["RUNNING", "COMPLETE", "IDLE"]),
    "output": z.string()
})

export type queueTask = z.infer<typeof queueTaskType>


export { queueTaskType}