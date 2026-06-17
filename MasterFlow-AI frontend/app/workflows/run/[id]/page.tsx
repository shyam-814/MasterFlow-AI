"use client"
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, Controls, Panel, MiniMap } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Typography } from '@/components/typography/typography';
import EditorNode from '@/components/editor-node';
import RunningNode from '@/components/running-node';

// Dummy tool data
const dummyTool = {
    id: "pdf-parser-001",
    name: "PDF Data Extractor",
    category: "Document Processing",
    icon: "📄",
    description: "Extract structured data from PDF documents using AI-powered parsing",
    inputs: ["pdf", "document"],
    outputs: ["json", "csv", "text"],
    status: "success",
    settings: {
        outputFormat: "json",
        extractImages: true,
        pageRange: "all",
        ocrEnabled: true
    },
    executionTime: 2340,
    lastRun: "2 hours ago"
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
        template: "default",
        sender: "noreply@example.com",
        priority: "normal"
    },
    executionTime: 890,
    lastRun: "5 minutes ago"
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
        table: "extracted_documents",
        autoIndex: true,
        backupEnabled: true
    },
    executionTime: 1560,
    lastRun: "1 hour ago"
}

const initialNodes = [
    {
        id: 'n1',
        position: { x: 100, y: 100 },
        type: 'editorNode',
        data: {
            tool: dummyTool,
            onSettingsClick: (nodeId) => console.log('Settings clicked for:', nodeId),
            onDeleteClick: (nodeId) => console.log('Delete clicked for:', nodeId),
            onDuplicateClick: (nodeId) => console.log('Duplicate clicked for:', nodeId),
            onRunClick: (nodeId) => console.log('Run clicked for:', nodeId)
        }
    },
    {
        id: 'n2',
        position: { x: 450, y: 50 },
        type: 'editorNode',
        data: {
            tool: dummyTool2,
            onSettingsClick: (nodeId) => console.log('Settings clicked for:', nodeId),
            onDeleteClick: (nodeId) => console.log('Delete clicked for:', nodeId),
            onDuplicateClick: (nodeId) => console.log('Duplicate clicked for:', nodeId),
            onRunClick: (nodeId) => console.log('Run clicked for:', nodeId)
        }
    },
    {
        id: 'n3',
        position: { x: 450, y: 200 },
        type: 'editorNode',
        data: {
            tool: dummyTool3,
            onSettingsClick: (nodeId) => console.log('Settings clicked for:', nodeId),
            onDeleteClick: (nodeId) => console.log('Delete clicked for:', nodeId),
            onDuplicateClick: (nodeId) => console.log('Duplicate clicked for:', nodeId),
            onRunClick: (nodeId) => console.log('Run clicked for:', nodeId)
        }
    }
];

const initialEdges = [
    { id: 'e1-2', source: 'n1', target: 'n2', animated: true },
    { id: 'e1-3', source: 'n1', target: 'n3', animated: true }
];

const nodeTypes = {
    editorNode: RunningNode,
}

export default function App() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div style={{ height: '80vh' }}>
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
                <Panel position="top-left">
                    <Typography variant="h4">PDF Processing Workflow</Typography>
                </Panel>
                <MiniMap />
            </ReactFlow>
        </div>
    );
}