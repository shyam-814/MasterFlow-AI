"use client"

import React, { useState } from 'react'
import { Typography } from './typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
    SearchIcon,
    PlusIcon,
    ToolCase,
    FilterIcon,
} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { USERID } from '@/lib/utils'

interface SettingField {
    name: string
    type: 'text' | 'number' | 'boolean' | 'select' | 'textarea' | 'email' | 'url'
    value: any
    options?: string[]
    placeholder?: string
    description?: string
}

interface ToolData {
    id: string
    name: string
    category: string
    icon: string
    description: string
    inputs: string[]
    outputs: string[]
    status?: 'idle' | 'running' | 'success' | 'error' | 'warning'
    settings?: Record<string, SettingField>
}

interface AddNodeDialogProps {
    onToolSelect: (tool: ToolData) => void
    trigger?: React.ReactNode
}

// Mock data for available tools


export default function AddNodeDialog({
    onToolSelect,
    trigger
}: AddNodeDialogProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [defaultAvailableTools, setDefaultAvailableTools] = useState<ToolData[]>([])

    // Get unique categories from available tools
    const categories = ["all", ...Array.from(new Set(defaultAvailableTools.map(tool => tool.category)))]

    // Filter tools based on search and category
    const filteredTools = defaultAvailableTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.category.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory

        return matchesSearch && matchesCategory
    })

    const handleToolSelect = (tool: ToolData) => {
        console.log('Tool selected:', tool)
        onToolSelect(tool)
        setIsOpen(false)
        // Reset filters
        setSearchTerm("")
        setSelectedCategory("all")
    }

    const getToolsQuery = useQuery({
        queryKey: ['availableTools'],
        queryFn: async () => {
            try 
            {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tools/user/${USERID}`)
                const respJson = await response.json();
                if(!response.ok)
                {
                    throw new Error(respJson.message || 'Failed to fetch tools');
                }
                setDefaultAvailableTools(respJson.tools as ToolData[]);
                return respJson.tools as ToolData[];
            }
            catch(err)
            {
                toast.error('Failed to load tools.');
                console.error(err);
                return [];
            }
        },
        staleTime: 10 * 60 * 1000, // 5 minutes
    })

    const defaultTrigger = (
        <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Node
        </Button>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="min-w-8xl max-h-[80vh] overflow-hidden flex flex-col">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <ToolCase className="h-5 w-5" />
                        Add Tool to Workflow
                    </DialogTitle>
                    <DialogDescription>
                        Choose a tool from your library to add to the workflow
                    </DialogDescription>
                </DialogHeader>

                {/* Search and Filter Controls */}
                <div className="flex gap-4 py-4 border-b">
                    <div className="flex-1 relative">
                        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search tools..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-48">
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                                <FilterIcon className="h-4 w-4 mr-2" />
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                {categories.slice(1).map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Tools Grid */}
                <div className="flex-1 overflow-y-auto">
                    {filteredTools.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1">
                            {getToolsQuery?.data?.map((tool) => (
                                <Card
                                    key={tool.id}
                                    className="cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-200"
                                    onClick={() => handleToolSelect(tool)}
                                >
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                                                    {tool.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-base">{tool.name}</CardTitle>
                                                    <Badge variant="outline" className="text-xs mt-1">
                                                        {tool.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleToolSelect(tool)
                                                }}
                                            >
                                                <PlusIcon className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <CardDescription className="text-sm mb-3">
                                            {tool.description}
                                        </CardDescription>

                                        {/* <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Typography variant="caption" className="text-green-600 font-medium">
                                                    Inputs:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1">
                                                    {tool.inputs.slice(0, 3).map((input, index) => (
                                                        <Badge key={index} variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                                                            {input}
                                                        </Badge>
                                                    ))}
                                                    {tool.inputs.length > 3 && (
                                                        <Typography variant="caption" color="muted">
                                                            +{tool.inputs.length - 3} more
                                                        </Typography>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <Typography variant="caption" className="text-blue-600 font-medium">
                                                    Outputs:
                                                </Typography>
                                                <div className="flex flex-wrap gap-1">
                                                    {tool.outputs.slice(0, 3).map((output, index) => (
                                                        <Badge key={index} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                                            {output}
                                                        </Badge>
                                                    ))}
                                                    {tool.outputs.length > 3 && (
                                                        <Typography variant="caption" color="muted">
                                                            +{tool.outputs.length - 3} more
                                                        </Typography>
                                                    )}
                                                </div>
                                            </div>
                                        </div> */}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                            <ToolCase className="h-12 w-12 text-muted-foreground mb-4" />
                            <Typography variant="h4" weight="medium" className="mb-2">
                                No tools found
                            </Typography>
                            <Typography variant="muted">
                                Try adjusting your search terms or category filter
                            </Typography>
                        </div>
                    )}
                </div>

                {/* Footer with Results Count */}
                <div className="border-t pt-4">
                    <Typography variant="small" color="muted">
                        Showing {filteredTools.length} of {defaultAvailableTools.length} tools
                        {selectedCategory !== "all" && ` in ${selectedCategory}`}
                    </Typography>
                </div>
            </DialogContent>
        </Dialog>
    )
}