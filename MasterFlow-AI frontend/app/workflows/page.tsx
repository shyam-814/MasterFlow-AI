"use client"
import React, { useState } from 'react'
import { Typography } from '@/components/typography/typography'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  PlusIcon,
  SearchIcon,
  MoreHorizontalIcon,
  PlayIcon,
  PauseIcon,
  EditIcon,
  TrashIcon,
  CopyIcon,
  ActivityIcon,
  CalendarIcon,
  FilterIcon,
  DownloadIcon,
  ChevronsRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon
} from 'lucide-react'
import CreateWorkflowDialog from '@/components/add-workflow-dialog'
import { useRouter } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import Link from 'next/link'
import { USERID } from '@/lib/utils'

// Mock data for workflows
const workflows = [
  {
    id: "wf-001",
    name: "Customer Data Migration",
    description: "Automated migration of customer data from legacy systems",
    status: "Active",
    lastRun: "2 hours ago",
    created: "Nov 15, 2024",
    runs: 1234,
    success_rate: 98.5,
    category: "Data Processing"
  },
  {
    id: "wf-002",
    name: "Email Campaign Automation",
    description: "Sends personalized email campaigns based on user behavior",
    status: "Running",
    lastRun: "Currently running",
    created: "Nov 10, 2024",
    runs: 856,
    success_rate: 99.2,
    category: "Marketing"
  },
  {
    id: "wf-003",
    name: "Report Generation",
    description: "Weekly automated report generation for management",
    status: "Draft",
    lastRun: "Never",
    created: "Nov 20, 2024",
    runs: 0,
    success_rate: 0,
    category: "Reporting"
  },
  {
    id: "wf-004",
    name: "Database Backup Process",
    description: "Daily backup of critical database tables",
    status: "Active",
    lastRun: "1 day ago",
    created: "Oct 28, 2024",
    runs: 2100,
    success_rate: 99.8,
    category: "Data Processing"
  },
  {
    id: "wf-005",
    name: "User Onboarding Flow",
    description: "Automated sequence for new user registration and setup",
    status: "Paused",
    lastRun: "3 days ago",
    created: "Nov 5, 2024",
    runs: 445,
    success_rate: 97.1,
    category: "Automation"
  },
  {
    id: "wf-006",
    name: "Inventory Sync",
    description: "Synchronizes inventory levels across multiple platforms",
    status: "Error",
    lastRun: "5 hours ago",
    created: "Nov 12, 2024",
    runs: 678,
    success_rate: 94.2,
    category: "Integration"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Active</Badge>
    case 'Running':
      return (
        <Badge variant="default" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-pulse"></div>
          Running
        </Badge>
      )
    case 'Paused':
      return <Badge variant="secondary">Paused</Badge>
    case 'Draft':
      return <Badge variant="outline">Draft</Badge>
    case 'Error':
      return <Badge variant="destructive">Error</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function Workflows() {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const totalPages = Math.ceil(workflows.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentWorkflows = workflows.slice(startIndex, endIndex)

  const goToFirstPage = () => setCurrentPage(1)
  const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1))
  const goToNextPage = () => setCurrentPage(Math.min(totalPages, currentPage + 1))
  const goToLastPage = () => setCurrentPage(totalPages)

  const router = useRouter();

  const getWorkflowQuery = useQuery({
    queryKey: ['workflows'],
    queryFn: async () => {
      // Fetch workflows from API
      const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workflows`)
      const respJson = await resp.json();
      return respJson.workflows;
    }
  })

  const createWorkflowMutation =
    useMutation({
      mutationFn: async (input:{name:string, description:string}) => {
        try {
          const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/workflow`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: input.name,
              description: input.description,
              userId: USERID
            })
          })

          const respJson = await resp.json();

          toast.success('Workflow created successfully!', {
            action: {
              label: 'Edit Now',
              onClick: () => {
                router.push(`/workflows/edit/${respJson.workflow.id}`)
              }
            }
          })
        }
        catch (err) {
          toast.error('Failed to create workflow.')
        }
      }

    })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <Typography variant="h3" weight="medium" className="mb-2">
            Workflows
          </Typography>
          <Typography variant="muted" className="text-base">
            Manage and monitor all your automated workflows
          </Typography>
        </div>
        <CreateWorkflowDialog
          trigger={<Button className="flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            Create Workflow
          </Button>}
          onCreateWorkflow={({name, description}) => {
            createWorkflowMutation.mutate({name:name, description:description || ""})
          }}
          isLoading={createWorkflowMutation.isPending}
        />

      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Typography variant="small" color="muted">Total Workflows</Typography>
                <Typography variant="h3" weight="bold">{workflows.length}</Typography>
              </div>
              <ActivityIcon className="h-10 w-10 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Typography variant="small" color="muted">Active</Typography>
                <Typography variant="h3" weight="bold" color="success">
                  {workflows.filter(w => w.status === 'Active').length}
                </Typography>
              </div>
              <PlayIcon className="h-10 w-10 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Typography variant="small" color="muted">Running</Typography>
                <Typography variant="h3" weight="bold" color="info">
                  {workflows.filter(w => w.status === 'Running').length}
                </Typography>
              </div>
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Typography variant="small" color="muted">Success Rate</Typography>
                <Typography variant="h3" weight="bold">
                  {Math.round(workflows.reduce((acc, w) => acc + w.success_rate, 0) / workflows.length)}%
                </Typography>
              </div>
              <CalendarIcon className="h-10 w-10 text-muted-foreground" />
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
                  placeholder="Search workflows..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[150px]">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="running">Running</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="data-processing">Data Processing</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="reporting">Reporting</SelectItem>
                  <SelectItem value="automation">Automation</SelectItem>
                  <SelectItem value="integration">Integration</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <DownloadIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflows Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Workflows</CardTitle>
          <CardDescription>
            View and manage all your workflow configurations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getWorkflowQuery.data?.map((workflow: any) => (
                <TableRow key={workflow.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="space-y-1">
                      <Typography variant="bodySmall" weight="medium" className='hover:underline'>
                        <Link href={"/workflows/edit/"+workflow.id}>
                        {workflow.name}
                        </Link>
                      </Typography>
                      <Typography variant="caption" color="muted">
                        {workflow.description}
                      </Typography>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Typography variant="small" color="muted">
                      {workflow.created}
                    </Typography>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {workflow.status === 'Running' ? (
                        <Button variant="outline" size="sm">
                          <PauseIcon className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                      ) : workflow.status === 'Paused' ? (
                        <Button variant="outline" size="sm">
                          <PlayIcon className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled={workflow.status === 'Draft'}>
                          <PlayIcon className="h-4 w-4 mr-1" />
                          Run
                        </Button>
                      )}

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <EditIcon className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CopyIcon className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <DownloadIcon className="h-4 w-4 mr-2" />
                            Export
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <TrashIcon className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex items-center gap-2">
              <Typography variant="small" color="muted">
                Rows per page
              </Typography>
              <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1)
              }}>
                <SelectTrigger className="w-[70px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Typography variant="small" color="muted">
                {startIndex + 1}-{Math.min(endIndex, workflows.length)} of {workflows.length}
              </Typography>

              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToFirstPage}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeftIcon className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToLastPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {workflows.length === 0 && (
            <div className="text-center py-12">
              <ActivityIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <Typography variant="h4" weight="medium" className="mb-2">
                No workflows found
              </Typography>
              <Typography variant="muted" className="mb-6">
                Create your first workflow to get started with automation
              </Typography>
              <Button>
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Your First Workflow
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}