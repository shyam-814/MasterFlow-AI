"use client"

import React, { useState } from 'react'
import { Typography } from './typography/typography'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs"
import {
    PlusIcon,
    ToolCase,
    Loader2Icon,
    XIcon,
    CodeIcon,
    InfoIcon,
} from 'lucide-react'

interface CreateToolData {
    name: string
    description: string
    toolLink: string
    inputTypes: string[]
    outputTypes: string[]
    settingsSchema: Record<string, any>
}

interface CreateToolDialogProps {
    onCreateTool: (toolData: CreateToolData) => Promise<void> | void
    trigger?: React.ReactNode
    isLoading?: boolean
}

// Common input/output types for suggestions
const commonDataTypes = [
    "json", "csv", "xml", "text", "pdf", "image", "video", "audio",
    "html", "markdown", "excel", "word", "zip", "email", "url", "file"
]

// Default settings schema template
const defaultSettingsSchema = {
    "timeout": {
        "name": "Timeout (seconds)",
        "type": "number",
        "value": 30,
        "description": "Maximum time to wait for processing"
    },
    "enabled": {
        "name": "Enable Tool",
        "type": "boolean",
        "value": true,
        "description": "Enable or disable this tool"
    }
}

export default function CreateToolDialog({
    onCreateTool,
    trigger,
    isLoading = false
}: CreateToolDialogProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [currentTab, setCurrentTab] = useState("basic")
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Form state
    const [toolName, setToolName] = useState("")
    const [toolDescription, setToolDescription] = useState("")
    const [toolLink, setToolLink] = useState("")
    const [inputTypes, setInputTypes] = useState<string[]>([])
    const [outputTypes, setOutputTypes] = useState<string[]>([])
    const [settingsSchema, setSettingsSchema] = useState(JSON.stringify(defaultSettingsSchema, null, 2))

    // Input/Output type management
    const [newInputType, setNewInputType] = useState("")
    const [newOutputType, setNewOutputType] = useState("")

    const addInputType = () => {
        if (newInputType.trim() && !inputTypes.includes(newInputType.trim().toLowerCase())) {
            setInputTypes([...inputTypes, newInputType.trim().toLowerCase()])
            setNewInputType("")
        }
    }

    const addOutputType = () => {
        if (newOutputType.trim() && !outputTypes.includes(newOutputType.trim().toLowerCase())) {
            setOutputTypes([...outputTypes, newOutputType.trim().toLowerCase()])
            setNewOutputType("")
        }
    }

    const removeInputType = (typeToRemove: string) => {
        setInputTypes(inputTypes.filter(type => type !== typeToRemove))
    }

    const removeOutputType = (typeToRemove: string) => {
        setOutputTypes(outputTypes.filter(type => type !== typeToRemove))
    }

    const addSuggestedType = (type: string, isInput: boolean) => {
        if (isInput && !inputTypes.includes(type)) {
            setInputTypes([...inputTypes, type])
        } else if (!isInput && !outputTypes.includes(type)) {
            setOutputTypes([...outputTypes, type])
        }
    }

    // Validation
    const isBasicFormValid = toolName.trim().length > 0 &&
        toolDescription.trim().length > 0 &&
        toolLink.trim().length > 0

    const isTypesValid = inputTypes.length > 0 && outputTypes.length > 0

    let isSchemaValid = true
    try {
        JSON.parse(settingsSchema)
    } catch {
        isSchemaValid = false
    }

    const isFormValid = isBasicFormValid && isTypesValid && isSchemaValid

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!isFormValid) {
            return
        }

        setIsSubmitting(true)

        try {
            let parsedSettingsSchema = {}
            try {
                parsedSettingsSchema = JSON.parse(settingsSchema)
            } catch (error) {
                throw new Error("Invalid JSON in settings schema")
            }

            await onCreateTool({
                name: toolName.trim(),
                description: toolDescription.trim(),
                toolLink: toolLink.trim(),
                inputTypes,
                outputTypes,
                settingsSchema: parsedSettingsSchema
            })

            // Reset form and close dialog on success
            resetForm()
            setIsOpen(false)
        } catch (error) {
            console.error('Failed to create tool:', error)
            // Handle error (you might want to show a toast notification)
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setToolName("")
        setToolDescription("")
        setToolLink("")
        setInputTypes([])
        setOutputTypes([])
        setSettingsSchema(JSON.stringify(defaultSettingsSchema, null, 2))
        setNewInputType("")
        setNewOutputType("")
        setCurrentTab("basic")
    }

    const handleCancel = () => {
        resetForm()
        setIsOpen(false)
    }

    const defaultTrigger = (
        <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Tool
        </Button>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <ToolCase className="h-5 w-5" />
                        Create New Tool
                    </DialogTitle>
                    <DialogDescription>
                        Create a custom tool that can be used in workflows. Configure its settings, input/output types, and behavior.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex-1 overflow-hidden">
                    <Tabs value={currentTab} onValueChange={setCurrentTab} className="flex-1 flex flex-col">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="basic" className="flex items-center gap-2">
                                <InfoIcon className="h-4 w-4" />
                                Basic Info
                            </TabsTrigger>
                            <TabsTrigger value="types" className="flex items-center gap-2">
                                <ToolCase className="h-4 w-4" />
                                Input/Output
                            </TabsTrigger>
                            <TabsTrigger value="settings" className="flex items-center gap-2">
                                <CodeIcon className="h-4 w-4" />
                                Settings Schema
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex-1 overflow-y-auto py-4">
                            <TabsContent value="basic" className="space-y-4 mt-0">
                                <div className="space-y-2">
                                    <Label htmlFor="tool-name" className="text-sm font-medium">
                                        Tool Name *
                                    </Label>
                                    <Input
                                        id="tool-name"
                                        placeholder="Enter tool name..."
                                        value={toolName}
                                        onChange={(e) => setToolName(e.target.value)}
                                        disabled={isSubmitting}
                                        maxLength={100}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tool-description" className="text-sm font-medium">
                                        Description *
                                    </Label>
                                    <Textarea
                                        id="tool-description"
                                        placeholder="Describe what this tool does..."
                                        value={toolDescription}
                                        onChange={(e) => setToolDescription(e.target.value)}
                                        disabled={isSubmitting}
                                        className="min-h-[80px] resize-none"
                                        maxLength={500}
                                        required
                                    />
                                    <Typography variant="caption" color="muted">
                                        {toolDescription.length}/500 characters
                                    </Typography>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="tool-link" className="text-sm font-medium">
                                        Tool Link/Endpoint *
                                    </Label>
                                    <Input
                                        id="tool-link"
                                        placeholder="https://api.example.com/tool or /path/to/script"
                                        value={toolLink}
                                        onChange={(e) => setToolLink(e.target.value)}
                                        disabled={isSubmitting}
                                        required
                                    />
                                    <Typography variant="caption" color="muted">
                                        URL or path where this tool can be accessed
                                    </Typography>
                                </div>
                            </TabsContent>

                            <TabsContent value="types" className="space-y-6 mt-0">
                                {/* Input Types */}
                                <div className="space-y-4">
                                    <div>
                                        <Label className="text-sm font-medium">Input Types *</Label>
                                        <Typography variant="caption" color="muted" className="block">
                                            Data types this tool can accept as input
                                        </Typography>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Select value={newInputType} onValueChange={setNewInputType}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select or type input type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {commonDataTypes
                                                        .filter(type => !inputTypes.includes(type))
                                                        .map(type => (
                                                            <SelectItem key={type} value={type}>
                                                                {type}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Input
                                            placeholder="Or type custom..."
                                            value={newInputType}
                                            onChange={(e) => setNewInputType(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInputType())}
                                            className="flex-1"
                                        />
                                        <Button type="button" onClick={addInputType} disabled={!newInputType.trim()}>
                                            Add
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {inputTypes.map((type) => (
                                            <Badge key={type} variant="secondary" className="flex items-center gap-1">
                                                {type}
                                                <XIcon
                                                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                                                    onClick={() => removeInputType(type)}
                                                />
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Output Types */}
                                <div className="space-y-4">
                                    <div>
                                        <Label className="text-sm font-medium">Output Types *</Label>
                                        <Typography variant="caption" color="muted" className="block">
                                            Data types this tool produces as output
                                        </Typography>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Select value={newOutputType} onValueChange={setNewOutputType}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select or type output type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {commonDataTypes
                                                        .filter(type => !outputTypes.includes(type))
                                                        .map(type => (
                                                            <SelectItem key={type} value={type}>
                                                                {type}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Input
                                            placeholder="Or type custom..."
                                            value={newOutputType}
                                            onChange={(e) => setNewOutputType(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addOutputType())}
                                            className="flex-1"
                                        />
                                        <Button type="button" onClick={addOutputType} disabled={!newOutputType.trim()}>
                                            Add
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {outputTypes.map((type) => (
                                            <Badge key={type} variant="secondary" className="flex items-center gap-1">
                                                {type}
                                                <XIcon
                                                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                                                    onClick={() => removeOutputType(type)}
                                                />
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="settings" className="space-y-4 mt-0">
                                <div>
                                    <Label htmlFor="settings-schema" className="text-sm font-medium">
                                        Settings Schema (JSON) *
                                    </Label>
                                    <Typography variant="caption" color="muted" className="block mb-2">
                                        Define the configuration options for this tool in JSON format
                                    </Typography>
                                </div>

                                <Textarea
                                    id="settings-schema"
                                    placeholder="Enter JSON schema..."
                                    value={settingsSchema}
                                    onChange={(e) => setSettingsSchema(e.target.value)}
                                    disabled={isSubmitting}
                                    className="min-h-[300px] font-mono text-sm"
                                    required
                                />

                                {!isSchemaValid && (
                                    <Typography variant="caption" className="text-destructive">
                                        Invalid JSON format. Please check your syntax.
                                    </Typography>
                                )}

                                <div className="p-3 bg-muted/50 rounded-md">
                                    <Typography variant="small" weight="medium" className="mb-2">
                                        Schema Format Example:
                                    </Typography>
                                    <pre className="text-xs overflow-x-auto">
                                        {`{
  "fieldName": {
    "name": "Display Name",
    "type": "text|number|boolean|select|textarea|email|url",
    "value": "default_value",
    "options": ["option1", "option2"], // for select type
    "placeholder": "placeholder text",
    "description": "Field description"
  }
}`}
                                    </pre>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>

                    <DialogFooter className="flex gap-2 pt-4 border-t">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleCancel}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={!isFormValid || isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2Icon className="h-4 w-4 mr-2 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <PlusIcon className="h-4 w-4 mr-2" />
                                    Create Tool
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}