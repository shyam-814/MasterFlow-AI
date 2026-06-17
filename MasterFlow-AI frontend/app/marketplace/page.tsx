"use client"

import React, { useState } from 'react'
import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    SearchIcon,
    FilterIcon,
    TrendingUpIcon,
    TagIcon,
    ZapIcon,
    ToolCase,
    ShoppingCartIcon
} from 'lucide-react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { USERID } from '@/lib/utils'

interface MarketPlaceTool {
    id: string
    name: string
    description: string
    inputType: string[]
    outputType: string[]
    price: string
}

export default function Marketplace() {
    const [searchTerm, setSearchTerm] = useState("")

    const getToolsQuery = useQuery({
        queryKey: ['marketplaceTools', searchTerm],
        queryFn: async () => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tools`)
            const respJson = await resp.json()
            console.log(respJson);
            return respJson.tools
        },
    })

    const addToLibrary = useMutation({
        mutationFn: async (toolId: string) => {
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${USERID}/tool/${toolId}`)
            if (!resp.ok) {
                throw new Error('Failed to add tool to library')
            }
            return resp.json()
        },
        onSuccess: () => {
            toast.success('Tool added to your library!')
        },
        onError: () => {
            toast.error('Failed to add tool to your library.')
        },
    })

    const handlePurchase = (toolId: string) => {
        console.log('Purchasing tool:', toolId)
        addToLibrary.mutate(toolId)
        // Add purchase logic here++
    }

    return (
        <div className="space-y-6 p-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
                <div className="max-w-2xl">
                    <Typography variant="h2" weight="bold" className="mb-4">
                        Discover Powerful Tools
                    </Typography>
                    <Typography variant="lead" color="muted" className="mb-6">
                        Enhance your workflows with our curated collection of premium tools and integrations.
                    </Typography>
                    <div className="flex gap-4">
                        <Button size="lg">
                            <ZapIcon className="h-5 w-5 mr-2" />
                            Browse All Tools
                        </Button>
                        <Button variant="outline" size="lg">
                            <TrendingUpIcon className="h-5 w-5 mr-2" />
                            View Trending
                        </Button>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="p-6 text-center">
                        <Typography variant="h3" weight="bold" color="primary" className="mb-2">
                            {getToolsQuery.data?.length || 0}+
                        </Typography>
                        <Typography variant="small" color="muted">Available Tools</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <Typography variant="h3" weight="bold" color="primary" className="mb-2">
                            50K+
                        </Typography>
                        <Typography variant="small" color="muted">Downloads</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <Typography variant="h3" weight="bold" color="primary" className="mb-2">
                            4.8★
                        </Typography>
                        <Typography variant="small" color="muted">Average Rating</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6 text-center">
                        <Typography variant="h3" weight="bold" color="primary" className="mb-2">
                            100+
                        </Typography>
                        <Typography variant="small" color="muted">Publishers</Typography>
                    </CardContent>
                </Card>
            </div>

            {/* Search Bar */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="Search tools by name or description..."
                                    className="pl-10"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button variant="outline">
                            <FilterIcon className="h-4 w-4 mr-2" />
                            Filters
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getToolsQuery.isLoading ? (
                    // Loading skeleton
                    Array.from({ length: 8 }).map((_, index) => (
                        <Card key={index} className="animate-pulse">
                            <CardHeader>
                                <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </CardContent>
                            <CardFooter>
                                <div className="h-10 bg-gray-200 rounded w-full"></div>
                            </CardFooter>
                        </Card>
                    ))
                ) : getToolsQuery.error ? (
                    <div className="col-span-full text-center py-12">
                        <Typography variant="h4" color="muted" className="mb-2">
                            Failed to load tools
                        </Typography>
                        <Typography variant="muted">
                            Please try again later or contact support.
                        </Typography>
                    </div>
                ) : getToolsQuery.data?.length === 0 ? (
                    <div className="col-span-full text-center py-12">
                        <ToolCase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <Typography variant="h4" color="muted" className="mb-2">
                            No tools found
                        </Typography>
                        <Typography variant="muted">
                            Try adjusting your search terms or check back later for new tools.
                        </Typography>
                    </div>
                ) : (
                    getToolsQuery.data?.map((tool: MarketPlaceTool) => (
                        <Card key={tool.id} className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                    <ToolCase className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg font-semibold line-clamp-1">
                                    {tool.name}
                                </CardTitle>
                                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                                    {tool.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-3 pb-4">
                                <div>
                                    <Typography variant="small" weight="medium" className="text-muted-foreground mb-1">
                                        Input Types:
                                    </Typography>
                                    <div className="flex flex-wrap gap-1">
                                        {Array.isArray(tool.inputType) ? (
                                            tool.inputType.slice(0, 2).map((type, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {type}
                                                </Badge>
                                            ))
                                        ) : (
                                            <Badge variant="outline" className="text-xs">
                                                {tool.inputType}
                                            </Badge>
                                        )}
                                        {Array.isArray(tool.inputType) && tool.inputType.length > 2 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{tool.inputType.length - 2}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Typography variant="small" weight="medium" className="text-muted-foreground mb-1">
                                        Output Types:
                                    </Typography>
                                    <div className="flex flex-wrap gap-1">
                                        {Array.isArray(tool.outputType) ? (
                                            tool.outputType.slice(0, 2).map((type, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {type}
                                                </Badge>
                                            ))
                                        ) : (
                                            <Badge variant="outline" className="text-xs">
                                                {tool.outputType}
                                            </Badge>
                                        )}
                                        {Array.isArray(tool.outputType) && tool.outputType.length > 2 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{tool.outputType.length - 2}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div>
                                        <Typography variant="small" weight="medium" className="text-muted-foreground">
                                            Price:
                                        </Typography>
                                        <Typography variant="bodySmall" weight="semibold" className="text-primary">
                                            {tool.price === "0" || tool.price === "free" ? "Free" : `$${tool.price}`}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-0">
                                <Button
                                    className="w-full"
                                    onClick={() => handlePurchase(tool.id)}
                                    variant={tool.price === "0" || tool.price === "free" ? "outline" : "default"}
                                    disabled={addToLibrary.isPending}
                                >
                                    <ShoppingCartIcon className="h-4 w-4 mr-2" />
                                    {/* {tool.price === "0" || tool.price === "free" ? "Add to Library" : "Purchase"} */}
                                    Add to Library
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                )}
            </div>

            {/* Results Summary */}
            {getToolsQuery.data && getToolsQuery.data.length > 0 && (
                <div className="text-center">
                    <Typography variant="small" color="muted">
                        Showing {getToolsQuery.data.length} tools
                        {searchTerm && ` for "${searchTerm}"`}
                    </Typography>
                </div>
            )}
        </div>
    )
}