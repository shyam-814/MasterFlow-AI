import React, { useState } from 'react'
import { Typography } from './typography/typography'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import {
    SettingsIcon,
    GripVerticalIcon,
    CircleIcon,
} from 'lucide-react'
import { Handle, NodeProps, Position } from '@xyflow/react'
import { Badge } from './ui/badge'
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from './ui/drawer'
import ToolSettingsRenderer from './tool-settings-renderer'
import { cn } from '@/lib/utils'

interface SettingField {
    name: string
    type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'email' | 'url' | 'para'
    value: any
    options?: string[]
    placeholder?: string
    description?: string
}

interface ToolData {
    id: string
    name: string
    description: string
    toolLink?: string
    createdAt?: string
    updatedAt?: string
    inputType?: string
    outputType?: string
    price?: number
    status?: 'idle' | 'running' | 'success' | 'error' | 'warning'
    settingsSchema?: Record<string, SettingField>
    settings?: Record<string, SettingField>
    stepId?: string
    // Optional fields that may not come from API
    category?: string
    icon?: string
    inputs?: string[]
    outputs?: string[]
}

interface EditorNodeProps extends NodeProps {
    data: {
        tool: ToolData
        onSettingsClick?: (nodeId: string) => void
        onOutputClick?: (nodeId: string) => void
        onSettingsUpdate?: (nodeId: string, settings: Record<string, SettingField>) => void
    }
}

const getStatusConfig = (status?: string) => {
    switch (status) {
        case 'running':
            return {
                color: 'text-blue-500',
                bgColor: 'bg-blue-50',
                borderColor: 'border-blue-200',
                label: 'Running',
                icon: <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            }
        case 'success':
            return {
                color: 'text-green-500',
                bgColor: 'bg-green-50',
                borderColor: 'border-green-200',
                label: 'Success',
                icon: <div className="w-2 h-2 bg-green-500 rounded-full" />
            }
        case 'error':
            return {
                color: 'text-red-500',
                bgColor: 'bg-red-50',
                borderColor: 'border-red-200',
                label: 'Error',
                icon: <div className="w-2 h-2 bg-red-500 rounded-full" />
            }
        case 'warning':
            return {
                color: 'text-yellow-500',
                bgColor: 'bg-yellow-50',
                borderColor: 'border-yellow-200',
                label: 'Warning',
                icon: <div className="w-2 h-2 bg-yellow-500 rounded-full" />
            }
        default:
            return {
                color: 'text-gray-500',
                bgColor: 'bg-gray-50',
                borderColor: 'border-gray-200',
                label: 'Idle',
                icon: <CircleIcon className="w-2 h-2 text-gray-400" />
            }
    }
}

export default function EditorNode({ data, selected, id }: EditorNodeProps) {
    const { tool, onSettingsClick, onOutputClick, onSettingsUpdate } = data
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const statusConfig = getStatusConfig(tool.status)

    const handleSettingsClick = () => {
        setIsDrawerOpen(true)
        onSettingsClick?.(id)
    }

    const handleSettingsSave = (settings: Record<string, SettingField>) => {
        onSettingsUpdate?.(id, settings)
        setIsDrawerOpen(false)
    }

    const handleSettingsReset = () => {
        // Optional: Add any reset logic here
    }

    // Get input/output display values - handle both array and string formats
    const inputDisplay = tool.inputType || (tool.inputs && tool.inputs[0]) || 'any'
    const outputDisplay = tool.outputType || (tool.outputs && tool.outputs[0]) || 'any'

    return (
        <div className="editor-node group">
            {/* Input Handle */}
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-white border-2 border-primary/50 hover:bg-primary hover:border-primary transition-all duration-200 shadow-sm"
            />

            <Card className={cn(
                "w-64 transition-all duration-200 shadow-sm hover:shadow-md border-2",
                selected && "ring-2 ring-primary",
                statusConfig.borderColor
            )}>
                {/* Header with status and drag handle */}
                <CardHeader className="pb-2 pt-3 px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {statusConfig.icon}
                            <Badge
                                variant="outline"
                                className={cn("text-xs", statusConfig.color, statusConfig.bgColor)}
                            >
                                {statusConfig.label}
                            </Badge>
                        </div>
                        <GripVerticalIcon className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-grab" />
                    </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 space-y-3">
                    {/* Tool Info */}
                    <div className="flex items-center gap-3 p-2 bg-muted/30 rounded-lg">
                        <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center text-lg">
                            {tool.icon || '🔧'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <Typography variant="small" weight="medium" className="truncate">
                                {tool.name}
                            </Typography>
                            <Typography variant="caption" color="muted" className="truncate">
                                {tool.category || tool.description || 'Tool'}
                            </Typography>
                        </div>
                    </div>

                    {/* Input/Output Types - Compact */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground font-medium">Input:</span>
                            <div className="flex gap-1 max-w-32">
                                <Badge variant="outline" className="text-xs h-5 px-1.5 bg-green-50 text-green-700 border-green-200">
                                    {inputDisplay}
                                </Badge>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground font-medium">Output:</span>
                            <div className="flex gap-1 max-w-32">
                                <Badge variant="outline" className="text-xs h-5 px-1.5 bg-blue-50 text-blue-700 border-blue-200">
                                    {outputDisplay}
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                        <Drawer direction='right' open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                            <DrawerTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 px-3 w-full"
                                    onClick={handleSettingsClick}
                                >
                                    <SettingsIcon className="w-3 h-3 mr-2" />
                                    Settings
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className="w-96 h-full">
                                <ToolSettingsRenderer
                                    toolName={tool.name}
                                    toolIcon={tool.icon || '🔧'}
                                    settings={tool.settings || tool.settingsSchema || {}}
                                    settingsSchema={tool.settingsSchema || {}}
                                    onSave={handleSettingsSave}
                                    onReset={handleSettingsReset}
                                />
                            </DrawerContent>
                        </Drawer>
                    </div>
                </CardContent>
            </Card>

            {/* Output Handle */}
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-white border-2 border-primary/50 hover:bg-primary hover:border-primary transition-all duration-200 shadow-sm"
            />
        </div>
    )
}