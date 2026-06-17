"use client"
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls, Panel, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Typography } from '@/components/typography/typography';
import EditorNode from '@/components/editor-node';
import { Button } from '@/components/ui/button';
import AddNodeDialog from '@/components/add-node-dialog';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

// Dummy tool data with settings
const dummyTool1 = {
    id: "pdf-parser-001",
    name: "PDF Data Extractor",
    category: "Document Processing",
    icon: "📄",
    description: "Extract structured data from PDF documents using AI-powered parsing",
    inputs: ["pdf", "document"],
    outputs: ["json", "csv", "text"],
    status: "success",
    settings: {
        outputFormat: {
            name: "Output Format",
            type: "select",
            value: "json",
            options: ["json", "csv", "xml"],
            description: "Choose the format for extracted data"
        },
        extractImages: {
            name: "Extract Images",
            type: "boolean",
            value: true,
            description: "Extract images from PDF documents"
        },
        pageRange: {
            name: "Page Range",
            type: "text",
            value: "all",
            placeholder: "e.g., 1-5, all",
            description: "Specify which pages to process"
        },
        timeout: {
            name: "Timeout (seconds)",
            type: "number",
            value: 30,
            description: "Maximum time to wait for processing"
        },
        ocrEnabled: {
            name: "OCR Recognition",
            type: "boolean",
            value: true,
            description: "Enable optical character recognition for scanned documents"
        },
        customInstructions: {
            name: "Custom Instructions",
            type: "textarea",
            value: "",
            placeholder: "Enter any custom processing instructions...",
            description: "Additional instructions for data extraction"
        }
    }
}

const dummyTool2 = {
    id: "email-sender-002",
    name: "Email Notification",
    category: "Communication",
    icon: "📧",
    description: "Send email notifications with extracted data",
    inputs: ["json", "text", "template"],
    outputs: ["email_sent", "delivery_status"],
    status: "running",
    settings: {
        senderEmail: {
            name: "Sender Email",
            type: "email",
            value: "noreply@example.com",
            placeholder: "Enter sender email",
            description: "Email address to send from"
        },
        template: {
            name: "Email Template",
            type: "select",
            value: "default",
            options: ["default", "minimal", "branded", "custom"],
            description: "Choose email template"
        },
        priority: {
            name: "Email Priority",
            type: "select",
            value: "normal",
            options: ["low", "normal", "high", "urgent"],
            description: "Set email priority level"
        },
        includeAttachments: {
            name: "Include Attachments",
            type: "boolean",
            value: false,
            description: "Include processed files as attachments"
        },
        retryCount: {
            name: "Retry Count",
            type: "number",
            value: 3,
            description: "Number of retry attempts for failed sends"
        },
        customMessage: {
            name: "Custom Message",
            type: "textarea",
            value: "",
            placeholder: "Enter custom message...",
            description: "Additional message to include in email"
        }
    }
}

const dummyTool3 = {
    id: "database-store-003",
    name: "Database Storage",
    category: "Data Storage",
    icon: "🗄️",
    description: "Store processed data in database with indexing",
    inputs: ["json", "csv", "structured_data"],
    outputs: ["stored_record", "record_id"],
    status: "error",
    settings: {
        connectionString: {
            name: "Connection String",
            type: "text",
            value: "",
            placeholder: "postgresql://user:pass@localhost:5432/db",
            description: "Database connection string"
        },
        tableName: {
            name: "Table Name",
            type: "text",
            value: "extracted_documents",
            placeholder: "table_name",
            description: "Target table for data storage"
        },
        autoIndex: {
            name: "Auto Index",
            type: "boolean",
            value: true,
            description: "Automatically create indexes for better performance"
        },
        backupEnabled: {
            name: "Enable Backup",
            type: "boolean",
            value: false,
            description: "Create backup before storing new data"
        },
        batchSize: {
            name: "Batch Size",
            type: "number",
            value: 100,
            description: "Number of records to process in each batch"
        },
        conflictResolution: {
            name: "Conflict Resolution",
            type: "select",
            value: "update",
            options: ["ignore", "update", "error"],
            description: "How to handle duplicate records"
        }
    }
}

const dummyTool4 = {
    id: "api-webhook-004",
    name: "Webhook Sender",
    category: "Integration",
    icon: "🔗",
    description: "Send data to external APIs via webhooks",
    inputs: ["json", "xml", "text"],
    outputs: ["response", "status_code"],
    status: "idle",
    settings: {
        webhookUrl: {
            name: "Webhook URL",
            type: "url",
            value: "",
            placeholder: "https://api.example.com/webhook",
            description: "Target URL for webhook delivery"
        },
        httpMethod: {
            name: "HTTP Method",
            type: "select",
            value: "POST",
            options: ["GET", "POST", "PUT", "PATCH", "DELETE"],
            description: "HTTP method to use"
        },
        authToken: {
            name: "Authorization Token",
            type: "text",
            value: "",
            placeholder: "Bearer token or API key",
            description: "Authentication token for the API"
        },
        timeout: {
            name: "Request Timeout (ms)",
            type: "number",
            value: 5000,
            description: "Maximum time to wait for response"
        },
        includeHeaders: {
            name: "Include Custom Headers",
            type: "boolean",
            value: false,
            description: "Add custom headers to the request"
        },
        customHeaders: {
            name: "Custom Headers",
            type: "textarea",
            value: "",
            placeholder: '{"Content-Type": "application/json"}',
            description: "JSON object with custom headers"
        }
    }
}

const dummyTool5 = {
    id: "image-processor-005",
    name: "Image Optimizer",
    category: "Media Processing",
    icon: "🖼️",
    description: "Optimize and transform images",
    inputs: ["image", "raw_image"],
    outputs: ["optimized_image", "metadata"],
    status: "warning",
    settings: {
        quality: {
            name: "Image Quality (%)",
            type: "number",
            value: 85,
            description: "Compression quality (1-100)"
        },
        format: {
            name: "Output Format",
            type: "select",
            value: "webp",
            options: ["jpeg", "png", "webp", "avif"],
            description: "Target image format"
        },
        maxWidth: {
            name: "Max Width (px)",
            type: "number",
            value: 1920,
            description: "Maximum width for resized images"
        },
        maxHeight: {
            name: "Max Height (px)",
            type: "number",
            value: 1080,
            description: "Maximum height for resized images"
        },
        stripMetadata: {
            name: "Strip Metadata",
            type: "boolean",
            value: true,
            description: "Remove EXIF and other metadata"
        },
        progressive: {
            name: "Progressive JPEG",
            type: "boolean",
            value: false,
            description: "Enable progressive JPEG encoding"
        }
    }
}

const initialNodes:any = [];

const initialEdges:any = [];


const nodeTypes = {
    editorNode: EditorNode,
}

export default function WorkflowEditorPage() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const {id}:{id:string} = useParams();

    const onNodesChange = useCallback(
        (changes:any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes:any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params:any) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    const updateToolSettingsMutation = useMutation({
        mutationFn: async ({toolId, settings}: {toolId:string, settings:any}) => {
            try 
            {
                const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tool/settings/${toolId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({settings})
                });
                if (!resp.ok){
                    const respJson = await resp.json();
                    throw new Error(respJson.message || 'Failed to update tool settings');
                }
                console.log("Tools ..........");
                console.log(resp.json());
                return await resp.json();
            }
            catch(err)
            {
                toast.error('Failed to update tool settings.');
                console.error(err);
            }
        }
    });

    // Handle adding a new node from the dialog
    const handleAddNode = useCallback((tool:any) => {
        console.log('Adding tool to workflow:', nodes);
        const newNode = {
            id: `${tool.id}|${Date.now()}`,
            type: 'editorNode',
            position: {
                x: Math.random() * 300 + 100,
                y: Math.random() * 300 + 100
            },
            data: {
                tool: {
                    ...tool,
                    status: 'idle',
                },
                onSettingsClick: async(nodeId:string) => {},
                onOutputClick: (nodeId:string) => console.log('Output clicked for:', nodeId),
                onSettingsUpdate: async (nodeId:string, settings:any) => {
                    saveWorkflowMutation.mutate();
                    // Update local node data
                    setNodes((prevNodes:any) => prevNodes.map((n:any) => {
                        if (n.id === nodeId) {
                            return {
                                ...n,
                                data: {
                                    ...n.data,
                                    tool: {
                                        ...n.data.tool,
                                        settings: settings
                                    }
                                }
                            };
                        }
                        return n;
                    }));
                } 
            }
        };

        setNodes((prevNodes:any) => [...prevNodes, newNode]);
    }, [setNodes]);

    const getWorkflowQuery = useQuery({
        queryKey: ['workflow', id],
        queryFn: async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workflows/${id}`)
                const respJson = await response.json();
                if (!response.ok) {
                    throw new Error(respJson.message || 'Failed to fetch workflow data');
                }
                console.log(respJson);

                const steps = respJson.workflow?.Steps || [];

                if (steps.length === 0) {
                    setNodes([]);
                    setEdges([]);
                    return respJson;
                }

                // Build a map of step relationships: parentId -> step
                const stepById: Record<string, any> = {};
                steps.forEach((step: any) => {
                    stepById[step.id] = step;
                });

                // Find the first step
                const firstStep = steps.find((step: any) => step.firstStep === true);

                // Create nodes and edges by traversing the linked list
                const newNodes: any[] = [];
                const newEdges: any[] = [];

                let currentStep = firstStep;
                let positionX = 100;
                const positionY = 200;
                const horizontalSpacing = 300;

                while (currentStep) {
                    const nodeId = `${currentStep.tool?.id || currentStep.toolId}|${currentStep.id}`;

                    // Create node
                    const node = {
                        id: nodeId,
                        type: 'editorNode',
                        position: {
                            x: positionX,
                            y: positionY
                        },
                        data: {
                            stepId: currentStep.id, // Store the actual step ID for updates
                            tool: {
                                id: currentStep.tool?.id || currentStep.toolId,
                                name: currentStep.tool?.name || currentStep.name,
                                category: "General",
                                icon: "🔧",
                                description: currentStep.tool?.description || "",
                                inputs: currentStep.tool?.inputType?.split(",") || [],
                                outputs: currentStep.tool?.outputType?.split(",") || [],
                                status: 'idle',
                                settings: currentStep.settings || {},
                                settingsSchema: currentStep.tool?.settingsSchema || {}
                            },
                            onSettingsClick: async (nodeId: string) => { },
                            onOutputClick: (nodeId: string) => console.log('Output clicked for:', nodeId),
                            onSettingsUpdate: async (nodeId: string, settings: any) => {
                                saveWorkflowMutation.mutate();
                                // Update local node data
                                setNodes((prevNodes: any) => prevNodes.map((n: any) => {
                                    if (n.id === nodeId) {
                                        return {
                                            ...n,
                                            data: {
                                                ...n.data,
                                                tool: {
                                                    ...n.data.tool,
                                                    settings: settings
                                                }
                                            }
                                        };
                                    }
                                    return n;
                                }));
                            }
                        }
                    };

                    newNodes.push(node);
                    positionX += horizontalSpacing;

                    // Find the child step (next step in the chain)
                    const childStep = currentStep.children?.[0]
                        ? stepById[currentStep.children[0].id]
                        : null;

                    // Create edge if there's a child
                    if (childStep) {
                        const childNodeId = `${childStep.tool?.id || childStep.toolId}|${childStep.id}`;
                        newEdges.push({
                            id: `edge-${nodeId}-${childNodeId}`,
                            source: nodeId,
                            target: childNodeId,
                            type: 'default'
                        });
                    }

                    currentStep = childStep;
                }

                setNodes(newNodes);
                setEdges(newEdges);

                return respJson;
            }
            catch (err) {
                toast.error('Failed to load workflow data.');
                console.error(err);
                throw err;
            }
        }
    })

    function extractSettingsValues(settings: Record<string, any>): Record<string, any> {
        const values: Record<string, any> = {};
        for (const [key, field] of Object.entries(settings)) {
            if (field && typeof field === 'object' && 'value' in field) {
                values[key] = field.value;
            } else {
                values[key] = field;
            }
        }
        return values;
    }

    const saveWorkflowMutation = useMutation({
        mutationFn: async () => {
            try {
                if (nodes.length === 0) {
                    toast.error('Cannot save an empty workflow.');
                    return;
                }

                const workflowData: { name: string, steps: any[] } = {
                    name: getWorkflowQuery.data?.workflow?.name || "Untitled Workflow",
                    steps: []
                };

                // Build node map for traversal (source -> target)
                const nodeMap: Record<string, string> = {};
                for (const edge of edges) {
                    nodeMap[edge.source] = edge.target;
                }

                // Find starting node (no incoming edges)
                const startingNode = nodes.find((n: any) => {
                    const incomingEdges = edges.filter((e: any) => e.target === n.id);
                    return incomingEdges.length === 0;
                });

                if (!startingNode && nodes.length > 0) {
                    // If no starting node found but we have nodes, just use the first one
                    // This handles the case of a single node with no edges
                }

                // Traverse and build steps array
                let currentNodeId = startingNode?.id || nodes[0]?.id;
                while (currentNodeId) {
                    const currentNode = nodes.find((n: any) => n.id === currentNodeId);
                    if (!currentNode) break;

                    // Extract the actual tool ID from the node ID (format: "toolId|timestamp" or "toolId|stepId")
                    const toolIdPart = currentNode.data.tool.id.includes('|')
                        ? currentNode.data.tool.id.split('|')[0]
                        : currentNode.data.tool.id;

                    const stepData: any = {
                        name: currentNode.data.tool.name,
                        toolId: toolIdPart,
                        settings: extractSettingsValues(currentNode.data.tool.settings || currentNode.data.tool.settingsSchema || {}),
                    };

                    // Include step ID if this is an existing step (for updates)
                    if (currentNode.data.stepId) {
                        stepData.id = currentNode.data.stepId;
                    }

                    workflowData.steps.push(stepData);
                    currentNodeId = nodeMap[currentNodeId];
                }

                console.log('Prepared workflow data:', workflowData);

                const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workflow/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(workflowData)
                });

                if (!resp.ok) {
                    const respJson = await resp.json();
                    throw new Error(respJson.error || 'Failed to save workflow');
                }

                toast.success('Workflow saved successfully!');
                return await resp.json();
            }
            catch (err: any) {
                toast.error(err.message || 'Failed to save workflow.');
                console.error(err);
            }
        }
    });
    return (
        <div>
            <div className='flex items-center justify-between'>
                <Typography variant="h3" weight={"normal"}>
                    {getWorkflowQuery.data ? getWorkflowQuery?.data?.workflow?.name : 'Loading...'}
                </Typography>
                <div className="flex gap-2">
                    <AddNodeDialog onToolSelect={handleAddNode}/>
                    <Button className='w-fit' onClick={()=>{saveWorkflowMutation.mutate()}} disabled={saveWorkflowMutation.isPending}>
                        {saveWorkflowMutation.isPending && <Loader2 className='animate-spin'/>}
                        Save
                    </Button>
                </div>
            </div>
            <div style={{ height: '85vh' }} className='flex flex-col align-end justify-end'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Background />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </div>
        </div>
    );
}