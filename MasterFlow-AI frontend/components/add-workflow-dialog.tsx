"use client"

import React, { useState } from 'react'
import { Typography } from './typography/typography'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
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
    PlusIcon,
    WorkflowIcon,
    Loader2Icon,
} from 'lucide-react'

interface CreateWorkflowDialogProps {
    onCreateWorkflow: (workflowData: { name: string; description?: string }) => Promise<void> | void
    trigger?: React.ReactNode
    isLoading?: boolean
}

export default function CreateWorkflowDialog({
    onCreateWorkflow,
    trigger,
    isLoading = false
}: CreateWorkflowDialogProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [workflowName, setWorkflowName] = useState("")
    const [workflowDescription, setWorkflowDescription] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!workflowName.trim()) {
            return
        }

        setIsSubmitting(true)

        try {
            await onCreateWorkflow({
                name: workflowName.trim(),
                description: workflowDescription.trim() || undefined
            })

            // Reset form and close dialog on success
            setWorkflowName("")
            setWorkflowDescription("")
            setIsOpen(false)
        } catch (error) {
            console.error('Failed to create workflow:', error)
            // Handle error (you might want to show a toast notification)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        setWorkflowName("")
        setWorkflowDescription("")
        setIsOpen(false)
    }

    const isFormValid = workflowName.trim().length > 0

    const defaultTrigger = (
        <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            Create Workflow
        </Button>
    )

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <WorkflowIcon className="h-5 w-5" />
                            Create New Workflow
                        </DialogTitle>
                        <DialogDescription>
                            Create a new workflow to automate your tasks. You can add tools and configure steps after creation.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="workflow-name" className="text-sm font-medium">
                                Workflow Name *
                            </Label>
                            <Input
                                id="workflow-name"
                                placeholder="Enter workflow name..."
                                value={workflowName}
                                onChange={(e) => setWorkflowName(e.target.value)}
                                disabled={isSubmitting}
                                className="w-full"
                                maxLength={100}
                                required
                            />
                            <Typography variant="caption" color="muted">
                                Choose a descriptive name for your workflow
                            </Typography>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="workflow-description" className="text-sm font-medium">
                                Description (Optional)
                            </Label>
                            <Textarea
                                id="workflow-description"
                                placeholder="Describe what this workflow does..."
                                value={workflowDescription}
                                onChange={(e) => setWorkflowDescription(e.target.value)}
                                disabled={isSubmitting}
                                className="w-full min-h-[80px] resize-none"
                                maxLength={500}
                            />
                            <Typography variant="caption" color="muted">
                                {workflowDescription.length}/500 characters
                            </Typography>
                        </div>
                    </div>

                    <DialogFooter className="flex gap-2">
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
                                    Create Workflow
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}