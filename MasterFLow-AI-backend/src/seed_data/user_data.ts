

const USERJSONDATA = (ids:string[])=>{
    return {
    'workflowName':"Test Workflow",
    'steps':[
        {
            "name":"Step 1",
            "toolId": ids[0],
        },
        {
            "name":"Step 2",
            "toolId": ids[1],
        },
    ]
}
}

export { USERJSONDATA };