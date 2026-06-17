import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  CreditCardIcon,
  TrendingUpIcon,
  UsersIcon,
  ActivityIcon,
  CalendarIcon,
  DollarSignIcon,
  BarChart3Icon,
  PlusIcon,
  StopCircleIcon,
  PlayIcon,
  ClockIcon
} from 'lucide-react'
import React from 'react'

// Mock data for running workflows
const runningWorkflows = [
  {
    id: "wf-001",
    name: "Customer Data Migration",
    status: "Running",
    progress: 45,
    startTime: "10:30 AM",
    estimatedTime: "~15 min remaining"
  },
  {
    id: "wf-002",
    name: "Email Campaign Automation",
    status: "Running",
    progress: 78,
    startTime: "09:45 AM",
    estimatedTime: "~5 min remaining"
  },
  {
    id: "wf-003",
    name: "Report Generation",
    status: "Running",
    progress: 23,
    startTime: "11:15 AM",
    estimatedTime: "~25 min remaining"
  },
  {
    id: "wf-004",
    name: "Database Backup Process",
    status: "Running",
    progress: 92,
    startTime: "08:00 AM",
    estimatedTime: "~2 min remaining"
  }
]

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <Typography variant="h3" weight="medium" className="mb-2">
            Hi, Rishabh <span role="img" aria-label="waving hand">👋</span>
          </Typography>
          <Typography variant="muted" className="text-base">
            Here's what's happening with your account.
          </Typography>
        </div>
        <Button className="flex items-center gap-2">
          <PlusIcon className="h-4 w-4" />
          Create New Flow
        </Button>
      </div>

      {/* Stats Overview Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Flows</CardTitle>
            <ActivityIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <Typography variant="small" color="success" className="flex items-center gap-1">
              <TrendingUpIcon className="h-3 w-3" />
              +20.1% from last month
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <Typography variant="small" color="success" className="flex items-center gap-1">
              <TrendingUpIcon className="h-3 w-3" />
              +180.1% from last month
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Usage</CardTitle>
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <Progress value={89} className="mt-2" />
            <Typography variant="small" color="muted">
              8,900 / 10,000 requests
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234</div>
            <Typography variant="small" color="success" className="flex items-center gap-1">
              <TrendingUpIcon className="h-3 w-3" />
              +12% from last month
            </Typography>
          </CardContent>
        </Card>
      </div> */}

      {/* Currently Running Workflows Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <PlayIcon className="h-5 w-5 text-green-500" />
                Currently Running Workflows
              </CardTitle>
              <CardDescription>Monitor your active workflow executions</CardDescription>
            </div>
            <Badge variant="secondary" className="flex items-center gap-1">
              <ClockIcon className="h-3 w-3" />
              {runningWorkflows.length} Running
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workflow Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Started</TableHead>
                <TableHead>Est. Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {runningWorkflows.map((workflow) => (
                <TableRow key={workflow.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                        <ActivityIcon className="h-4 w-4 text-primary" />
                      </div>
                      <Typography variant="bodySmall" weight="medium">
                        {workflow.name}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      {workflow.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Typography variant="small" weight="medium">{workflow.progress}%</Typography>
                      </div>
                      <Progress value={workflow.progress} className="w-[100px]" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Typography variant="small" color="muted">
                      {workflow.startTime}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="small" color="muted">
                      {workflow.estimatedTime}
                    </Typography>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                    >
                      <StopCircleIcon className="h-4 w-4 mr-1" />
                      Stop
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {runningWorkflows.length === 0 && (
            <div className="text-center py-8">
              <Typography variant="muted">No workflows currently running</Typography>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Flows */}
      {/* <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Flows</CardTitle>
              <CardDescription>Your most recently created or modified flows</CardDescription>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Customer Onboarding", status: "Active", lastRun: "2 hours ago", runs: "1,234" },
              { name: "Data Processing Pipeline", status: "Draft", lastRun: "1 day ago", runs: "856" },
              { name: "Email Automation", status: "Active", lastRun: "3 hours ago", runs: "2,100" },
            ].map((flow, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ActivityIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Typography variant="bodySmall" weight="semibold">{flow.name}</Typography>
                    <Typography variant="caption" color="muted">Last run: {flow.lastRun}</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <Typography variant="bodySmall" weight="medium">{flow.runs} runs</Typography>
                    <Badge variant={flow.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                      {flow.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  )
}