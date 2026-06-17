"use client"

import React, { useState } from 'react'
import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    PlusIcon,
    SearchIcon,
    MoreHorizontalIcon,
    UserIcon,
    CalendarIcon,
    TrendingUpIcon,
    SettingsIcon,
    ExternalLinkIcon,
    AlertCircleIcon,
    CheckCircleIcon,
    FilterIcon,
    ToolCase
} from 'lucide-react'
import CreateToolDialog from '@/components/add-tool-dialog'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

// Mock data for purchased tools
const purchasedTools = [
    {
        id: "tool-001",
        name: "Data Transformer Pro",
        description: "Advanced data transformation and cleaning tool with ML capabilities",
        publisher: "DataFlow Inc.",
        publisherAvatar: "/avatars/dataflow.png",
        category: "Data Processing",
        version: "2.1.4",
        purchaseDate: "Oct 15, 2024",
        quota: {
            used: 750,
            total: 1000,
            unit: "transformations"
        },
        status: "Active",
        lastUsed: "2 hours ago",
        totalUsage: 12500,
        icon: "🔄"
    },
    {
        id: "tool-002",
        name: "Email Campaign Builder",
        description: "Create and manage personalized email campaigns with analytics",
        publisher: "Marketing Labs",
        publisherAvatar: "/avatars/marketing-labs.png",
        category: "Marketing",
        version: "1.8.2",
        purchaseDate: "Nov 2, 2024",
        quota: {
            used: 450,
            total: 500,
            unit: "emails"
        },
        status: "Active",
        lastUsed: "1 day ago",
        totalUsage: 8750,
        icon: "📧"
    },
    {
        id: "tool-003",
        name: "PDF Generator Suite",
        description: "Generate custom PDF reports and documents from templates",
        publisher: "DocTools Corp",
        publisherAvatar: "/avatars/doctools.png",
        category: "Document Generation",
        version: "3.0.1",
        purchaseDate: "Sep 28, 2024",
        quota: {
            used: 89,
            total: 100,
            unit: "documents"
        },
        status: "Near Limit",
        lastUsed: "3 hours ago",
        totalUsage: 2340,
        icon: "📄"
    },
    {
        id: "tool-004",
        name: "API Connector Hub",
        description: "Connect and integrate with 500+ popular APIs and services",
        publisher: "Integration Masters",
        publisherAvatar: "/avatars/integration.png",
        category: "Integration",
        version: "4.2.0",
        purchaseDate: "Aug 20, 2024",
        quota: {
            used: 2340,
            total: 5000,
            unit: "API calls"
        },
        status: "Active",
        lastUsed: "5 minutes ago",
        totalUsage: 45600,
        icon: "🔗"
    },
    {
        id: "tool-005",
        name: "Cloud Storage Sync",
        description: "Synchronize files across multiple cloud storage providers",
        publisher: "CloudSync Pro",
        publisherAvatar: "/avatars/cloudsync.png",
        category: "Storage",
        version: "2.3.1",
        purchaseDate: "Nov 10, 2024",
        quota: {
            used: 15.7,
            total: 50,
            unit: "GB"
        },
        status: "Active",
        lastUsed: "1 hour ago",
        totalUsage: 156,
        icon: "☁️"
    },
    {
        id: "tool-006",
        name: "Image Processing Kit",
        description: "Batch image processing, resizing, and optimization tools",
        publisher: "PixelCraft Studios",
        publisherAvatar: "/avatars/pixelcraft.png",
        category: "Media",
        version: "1.5.3",
        purchaseDate: "Oct 5, 2024",
        quota: {
            used: 980,
            total: 1000,
            unit: "images"
        },
        status: "Near Limit",
        lastUsed: "6 hours ago",
        totalUsage: 7850,
        icon: "🖼️"
    }
]

const getStatusBadge = (status: string) => {
    switch (status) {
        case 'Active':
            return (
                <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                    <CheckCircleIcon className="h-3 w-3 mr-1" />
                    Active
                </Badge>
            )
        case 'Near Limit':
            return (
                <Badge variant="default" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    <AlertCircleIcon className="h-3 w-3 mr-1" />
                    Near Limit
                </Badge>
            )
        case 'Exceeded':
            return (
                <Badge variant="destructive">
                    <AlertCircleIcon className="h-3 w-3 mr-1" />
                    Exceeded
                </Badge>
            )
        default:
            return <Badge variant="secondary">{status}</Badge>
    }
}

const getQuotaPercentage = (used: number, total: number) => {
    return Math.round((used / total) * 100)
}

export default function MyTools() {
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [statusFilter, setStatusFilter] = useState("all")

    // Filter tools based on search and filters
    const filteredTools = purchasedTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.publisher.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter
        const matchesStatus = statusFilter === "all" || tool.status === statusFilter

        return matchesSearch && matchesCategory && matchesStatus
    })

    const addToolMutation = useMutation({
        mutationFn: async (newToolData: any) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tool`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newToolData),
            })
            console.log("new tool data saved", newToolData);
            if (!response.ok) {
                throw new Error('Failed to add new tool')
            }

            return response.json()
        },
        onSuccess: (data) => {
            // Handle successful tool addition (e.g., refresh tool list)
            toast.success('Tool added successfully!')
            console.log('Tool added successfully:', data)
        },
        onError: (error) => {
            // Handle error case
            toast.error('Error adding tool. Please try again.')
            console.error('Error adding tool:', error)
        },
    })

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <Typography variant="h3" weight="medium" className="mb-2">
                        My Tools
                    </Typography>
                    <Typography variant="muted" className="text-base">
                        Manage your purchased tools and monitor usage quotas
                    </Typography>
                </div>
                <div className='flex gap-2'>
                    <CreateToolDialog
                        trigger={<Button>
                            Add Tool
                        </Button>}
                        onCreateTool={(toolData:any)=>{
                            addToolMutation.mutate(toolData)
                        }}
                        
                    
                    />
                    
                <Button className="flex items-center gap-2">
                    <PlusIcon className="h-4 w-4" />
                    Browse Marketplace
                </Button>

                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <Typography variant="small" color="muted">Total Tools</Typography>
                                <Typography variant="h3" weight="bold">{purchasedTools.length}</Typography>
                            </div>
                            <ToolCase className="h-10 w-10 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <Typography variant="small" color="muted">Active Tools</Typography>
                                <Typography variant="h3" weight="bold" color="success">
                                    {purchasedTools.filter(t => t.status === 'Active').length}
                                </Typography>
                            </div>
                            <CheckCircleIcon className="h-10 w-10 text-green-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <Typography variant="small" color="muted">Near Quota Limit</Typography>
                                <Typography variant="h3" weight="bold" color="warning">
                                    {purchasedTools.filter(t => t.status === 'Near Limit').length}
                                </Typography>
                            </div>
                            <AlertCircleIcon className="h-10 w-10 text-yellow-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <Typography variant="small" color="muted">This Month</Typography>
                                <Typography variant="h3" weight="bold">
                                    {purchasedTools.reduce((acc, tool) => acc + tool.totalUsage, 0).toLocaleString()}
                                </Typography>
                            </div>
                            <TrendingUpIcon className="h-10 w-10 text-muted-foreground" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters and Search */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search tools or publishers..."
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                                <SelectTrigger className="w-[180px]">
                                    <FilterIcon className="h-4 w-4 mr-2" />
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="Data Processing">Data Processing</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                    <SelectItem value="Document Generation">Document Generation</SelectItem>
                                    <SelectItem value="Integration">Integration</SelectItem>
                                    <SelectItem value="Storage">Storage</SelectItem>
                                    <SelectItem value="Media">Media</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-[150px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Near Limit">Near Limit</SelectItem>
                                    <SelectItem value="Exceeded">Exceeded</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                    <Card key={tool.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                                        {tool.icon}
                                    </div>
                                    <div className="flex-1">
                                        <Typography variant="bodySmall" weight="semibold" className="mb-1">
                                            {tool.name}
                                        </Typography>
                                        <Typography variant="caption" color="muted">
                                            v{tool.version}
                                        </Typography>
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="sm">
                                            <MoreHorizontalIcon className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            <SettingsIcon className="h-4 w-4 mr-2" />
                                            Configure
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <ExternalLinkIcon className="h-4 w-4 mr-2" />
                                            View in Marketplace
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <TrendingUpIcon className="h-4 w-4 mr-2" />
                                            Usage Analytics
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                            <Typography variant="caption" color="muted" className="mt-2">
                                {tool.description}
                            </Typography>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            {/* Publisher Info */}
                            <div className="flex items-center gap-2">
                                <UserIcon className="h-4 w-4 text-muted-foreground" />
                                <Typography variant="small" color="muted">
                                    by {tool.publisher}
                                </Typography>
                            </div>

                            {/* Status and Category */}
                            <div className="flex items-center justify-between">
                                {getStatusBadge(tool.status)}
                                <Badge variant="outline" className="text-xs">
                                    {tool.category}
                                </Badge>
                            </div>

                            {/* Quota Usage */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Typography variant="small" weight="medium">
                                        Quota Usage
                                    </Typography>
                                    <Typography variant="small" color="muted">
                                        {tool.quota.used.toLocaleString()} / {tool.quota.total.toLocaleString()} {tool.quota.unit}
                                    </Typography>
                                </div>
                                <Progress
                                    value={getQuotaPercentage(tool.quota.used, tool.quota.total)}
                                    className="h-2"
                                />
                                <Typography variant="caption" color="muted">
                                    {getQuotaPercentage(tool.quota.used, tool.quota.total)}% used
                                </Typography>
                            </div>

                            {/* Usage Stats */}
                            <div className="pt-2 border-t space-y-2">
                                <div className="flex items-center justify-between">
                                    <Typography variant="caption" color="muted">Last used:</Typography>
                                    <Typography variant="caption">{tool.lastUsed}</Typography>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography variant="caption" color="muted">Total usage:</Typography>
                                    <Typography variant="caption">{tool.totalUsage.toLocaleString()}</Typography>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Typography variant="caption" color="muted">Purchased:</Typography>
                                    <Typography variant="caption">{tool.purchaseDate}</Typography>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 pt-2">
                                <Button size="sm" className="flex-1">
                                    <SettingsIcon className="h-4 w-4 mr-1" />
                                    Configure
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1">
                                    <TrendingUpIcon className="h-4 w-4 mr-1" />
                                    Analytics
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Empty State */}
            {filteredTools.length === 0 && (
                <div className="text-center py-12">
                    <ToolCase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <Typography variant="h4" weight="medium" className="mb-2">
                        {searchTerm || categoryFilter !== "all" || statusFilter !== "all"
                            ? "No tools match your filters"
                            : "No tools purchased yet"
                        }
                    </Typography>
                    <Typography variant="muted" className="mb-6">
                        {searchTerm || categoryFilter !== "all" || statusFilter !== "all"
                            ? "Try adjusting your search criteria or filters"
                            : "Browse our marketplace to discover powerful tools for your workflows"
                        }
                    </Typography>
                    
                    <Button>
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Browse Marketplace
                    </Button>
                </div>
            )}
        </div>
    )
}