"use client"

import React, { useState } from 'react'
import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  PlayIcon,
  PauseIcon,
  EditIcon,
  ShareIcon,
  MoreHorizontalIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  AlertCircleIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ActivityIcon,
  CalendarIcon,
  UserIcon,
  EyeIcon,
  DownloadIcon,
  RefreshCwIcon,
  BarChart3Icon,
  CopyIcon,
  Settings2Icon
} from 'lucide-react'
import { useRouter } from 'next/navigation'

// Mock data for workflow
const workflowData = {
  id: "wf_001",
  name: "Document Processing Pipeline",
  description: "Automated workflow for processing PDF documents, extracting data, and sending notifications",
  status: "active",
  createdAt: "2024-11-15T10:30:00Z",
  updatedAt: "2024-11-21T14:20:00Z",
  owner: {
    id: "user_001",
    name: "Rishabh Patel",
    email: "rishabh@example.com",
    avatar: "/avatars/rishabh.jpg"
  },
  collaborators: [
    { id: "user_002", name: "Sarah Chen", email: "sarah@example.com", role: "Editor" },
    { id: "user_003", name: "Mike Johnson", email: "mike@example.com", role: "Viewer" }
  ],
  tags: ["document-processing", "automation", "notifications"],
  visibility: "private",
  totalSteps: 5,
  avgExecutionTime: 12.5,
  successRate: 94.2
}

// Mock stats data
const statsData = {
  totalRuns: 1247,
  successfulRuns: 1175,
  failedRuns: 72,
  averageRunTime: 12.5,
  lastRun: "2024-11-21T13:45:00Z",
  totalDataProcessed: "2.3 GB",
  trendsData: {
    runsThisWeek: 45,
    runsLastWeek: 38,
    avgTimeThisWeek: 11.2,
    avgTimeLastWeek: 13.8
  }
}

// Mock runs data
const runsData = [
  {
    id: "run_001",
    status: "success",
    startTime: "2024-11-21T13:45:00Z",
    endTime: "2024-11-21T13:45:15Z",
    duration: 15.2,
    inputData: "invoice_batch_001.pdf",
    outputData: "processed_data.json",
    stepsCompleted: 5,
    totalSteps: 5,
    triggeredBy: "manual"
  },
  {
    id: "run_002",
    status: "failed",
    startTime: "2024-11-21T12:30:00Z",
    endTime: "2024-11-21T12:30:08Z",
    duration: 8.1,
    inputData: "contract_scan.pdf",
    outputData: null,
    stepsCompleted: 2,
    totalSteps: 5,
    triggeredBy: "webhook",
    error: "PDF parsing failed: Invalid format"
  },
  {
    id: "run_003",
    status: "success",
    startTime: "2024-11-21T11:15:00Z",
    endTime: "2024-11-21T11:15:22Z",
    duration: 22.7,
    inputData: "report_q3.pdf",
    outputData: "extracted_report.json",
    stepsCompleted: 5,
    totalSteps: 5,
    triggeredBy: "schedule"
  },
  {
    id: "run_004",
    status: "running",
    startTime: "2024-11-21T14:20:00Z",
    endTime: null,
    duration: null,
    inputData: "financial_docs.pdf",
    outputData: null,
    stepsCompleted: 3,
    totalSteps: 5,
    triggeredBy: "manual"
  },
  {
    id: "run_005",
    status: "success",
    startTime: "2024-11-21T10:05:00Z",
    endTime: "2024-11-21T10:05:18Z",
    duration: 18.4,
    inputData: "presentation.pdf",
    outputData: "slide_content.json",
    stepsCompleted: 5,
    totalSteps: 5,
    triggeredBy: "api"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'success':
      return <CheckCircleIcon className="h-4 w-4 text-green-500" />
    case 'failed':
      return <XCircleIcon className="h-4 w-4 text-red-500" />
    case 'running':
      return <RefreshCwIcon className="h-4 w-4 text-blue-500 animate-spin" />
    default:
      return <ClockIcon className="h-4 w-4 text-gray-500" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'success':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Success</Badge>
    case 'failed':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
    case 'running':
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Running</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}

const formatDuration = (seconds: number) => {
  return `${seconds.toFixed(1)}s`
}

export default function WorkflowDetailsPage({ params }: { params: { id: string } }) {
  const [selectedRun, setSelectedRun] = useState(null)
  const router = useRouter();

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Typography variant="h3" weight="medium">
              {workflowData.name}
            </Typography>
            <Badge variant={workflowData.status === 'active' ? 'default' : 'secondary'}>
              {workflowData.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
          </div>
          <Typography variant="muted" className="max-w-2xl">
            {workflowData.description}
          </Typography>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              Created by {workflowData.owner.name}
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              {formatDate(workflowData.createdAt)}
            </div>
            <div className="flex items-center gap-1">
              <ActivityIcon className="h-4 w-4" />
              {workflowData.totalSteps} steps
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={()=>{router.push(`/workflows/edit/${workflowData.id}`)}}>
            <EditIcon className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button size="sm">
            <PlayIcon className="h-4 w-4 mr-2" />
            Run Workflow
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <ShareIcon className="h-4 w-4 mr-2" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon className="h-4 w-4 mr-2" />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings2Icon className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <PauseIcon className="h-4 w-4 mr-2" />
                Disable
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Runs</CardTitle>
            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalRuns.toLocaleString()}</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUpIcon className="h-3 w-3 mr-1" />
              +{statsData.trendsData.runsThisWeek - statsData.trendsData.runsLastWeek} this week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <CheckCircleIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{workflowData.successRate}%</div>
            <div className="text-xs text-muted-foreground">
              {statsData.successfulRuns} successful, {statsData.failedRuns} failed
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Runtime</CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.averageRunTime}s</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingDownIcon className="h-3 w-3 mr-1" />
              -{(statsData.trendsData.avgTimeLastWeek - statsData.trendsData.avgTimeThisWeek).toFixed(1)}s improved
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Processed</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalDataProcessed}</div>
            <div className="text-xs text-muted-foreground">
              Last run: {new Date(statsData.lastRun).toLocaleTimeString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="runs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="runs">Recent Runs</TabsTrigger>
          <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="runs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Workflow Runs</CardTitle>
                  <CardDescription>
                    Recent executions of this workflow
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Run ID</TableHead>
                    <TableHead>Started</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Input</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Triggered By</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {runsData.map((run) => (
                    <TableRow key={run.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(run.status)}
                          {getStatusBadge(run.status)}
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {run.id}
                      </TableCell>
                      <TableCell>
                        {formatDate(run.startTime)}
                      </TableCell>
                      <TableCell>
                        {run.duration ? formatDuration(run.duration) : '-'}
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {run.inputData}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            {run.stepsCompleted}/{run.totalSteps}
                          </div>
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${(run.stepsCompleted / run.totalSteps) * 100}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {run.triggeredBy}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>Run Details - {run.id}</DialogTitle>
                              <DialogDescription>
                                Detailed information about this workflow execution
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Typography variant="small" weight="medium">Status</Typography>
                                  <div className="flex items-center gap-2 mt-1">
                                    {getStatusIcon(run.status)}
                                    {getStatusBadge(run.status)}
                                  </div>
                                </div>
                                <div>
                                  <Typography variant="small" weight="medium">Duration</Typography>
                                  <Typography variant="small" color="muted">
                                    {run.duration ? formatDuration(run.duration) : 'In progress...'}
                                  </Typography>
                                </div>
                                <div>
                                  <Typography variant="small" weight="medium">Started</Typography>
                                  <Typography variant="small" color="muted">
                                    {formatDate(run.startTime)}
                                  </Typography>
                                </div>
                                <div>
                                  <Typography variant="small" weight="medium">Triggered By</Typography>
                                  <Badge variant="outline" className="capitalize mt-1">
                                    {run.triggeredBy}
                                  </Badge>
                                </div>
                              </div>

                              <div>
                                <Typography variant="small" weight="medium">Input Data</Typography>
                                <Typography variant="small" color="muted">
                                  {run.inputData}
                                </Typography>
                              </div>

                              {run.outputData && (
                                <div>
                                  <Typography variant="small" weight="medium">Output Data</Typography>
                                  <Typography variant="small" color="muted">
                                    {run.outputData}
                                  </Typography>
                                </div>
                              )}

                              {run.error && (
                                <div>
                                  <Typography variant="small" weight="medium">Error</Typography>
                                  <div className="p-3 bg-red-50 border border-red-200 rounded-md mt-1">
                                    <Typography variant="small" className="text-red-800">
                                      {run.error}
                                    </Typography>
                                  </div>
                                </div>
                              )}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}