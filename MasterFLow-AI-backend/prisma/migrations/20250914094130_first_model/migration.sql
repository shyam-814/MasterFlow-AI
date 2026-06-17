-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('COMPLETE', 'RUNNING', 'IDLE', 'ERROR');

-- CreateTable
CREATE TABLE "public"."Workflow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Step" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "toolId" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "childStepId" TEXT NOT NULL,
    "firstStep" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tools" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."WorkflowRuns" (
    "id" TEXT NOT NULL,
    "workflowId" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'IDLE',

    CONSTRAINT "WorkflowRuns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StepRuns" (
    "id" TEXT NOT NULL,
    "workflowRunId" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'IDLE',
    "output" JSONB NOT NULL,
    "childStepRunId" TEXT,

    CONSTRAINT "StepRuns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Step" ADD CONSTRAINT "Step_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "public"."Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Step" ADD CONSTRAINT "Step_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "public"."Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."WorkflowRuns" ADD CONSTRAINT "WorkflowRuns_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "public"."Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StepRuns" ADD CONSTRAINT "StepRuns_workflowRunId_fkey" FOREIGN KEY ("workflowRunId") REFERENCES "public"."WorkflowRuns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
