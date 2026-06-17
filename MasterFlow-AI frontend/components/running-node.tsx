import React from 'react'
import { Typography } from './typography/typography'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import {
    SettingsIcon,
    BarChart3Icon,
    RefreshCwIcon,
} from 'lucide-react'
import { Handle, NodeProps, Position } from '@xyflow/react'
import { Badge } from './ui/badge'

interface ToolData {
    id: string
    name: string
    category: string
    icon: string
    description: string
    inputs: string[]
    outputs: string[]
    status?: 'idle' | 'running' | 'success' | 'error' | 'warning'
    settings?: Record<string, any>
}

interface EditorNodeProps extends NodeProps {
    data: {
        tool: ToolData
        onSettingsClick?: (nodeId: string) => void
        onOutputClick?: (nodeId: string) => void
    }
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'running':
            return 'border-blue-500/20 bg-blue-50 dark:bg-blue-950/20'
        case 'success':
            return 'border-green-500/20 bg-green-50 dark:bg-green-950/20'
        case 'error':
            return 'border-destructive/20 bg-destructive/5'
        case 'warning':
            return 'border-yellow-500/20 bg-yellow-50 dark:bg-yellow-950/20'
        default:
            return 'border-border'
    }
}

export default function RunningNode({ data, selected, id }: EditorNodeProps) {
    const { tool, onSettingsClick, onOutputClick } = data
    const status = tool.status || 'idle'

    return (
        <div className="editor-node">
            {/* Input Handle */}
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-muted-foreground border-2 border-background hover:bg-primary transition-colors"
            />

            <Card className={`
                transition-all duration-200 bg-background
                
            `}>
                <CardContent className=" flex flex-col gap-1">
                    {/* Tool Info */}
                    <div className="flex items-center gap-3">
                        <Typography variant="bodySmall" weight="semibold" className="truncate flex-1">
                            {tool.name}
                        </Typography>
                    </div>

                    {/* Status badge */}
                    <div>
                        <span className='text-xs font-xs'>
                            Status: <Badge className="ml-2 text-sm align-middle h-4 w-fit" variant={
                                status === 'running' ? 'blue' :
                                    status === 'success' ? 'success' :
                                        status === 'error' ? 'destructive' :
                                            status === 'warning' ? 'warning' :
                                                'default'
                            }>
                                <span className='text-xs'>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                            </Badge>
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-1">
                        <Button
                            variant="default"
                            size="sm"
                            className="flex-1 h-8 text-xs"
                            onClick={() => onOutputClick?.(id)}
                        >
                            <BarChart3Icon />

                        </Button>
                        <Button
                            variant="secondary"
                            size="sm"
                            className="flex-1 h-8 text-xs"
                        >
                            <RefreshCwIcon />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-muted-foreground border-2 border-background hover:bg-primary transition-colors"
            />
        </div>
    )
}