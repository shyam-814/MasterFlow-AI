/*
  Warnings:

  - You are about to drop the column `childStepId` on the `Step` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Step` table. All the data in the column will be lost.
  - You are about to drop the column `childStepRunId` on the `StepRuns` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `Step` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Step" DROP COLUMN "childStepId",
DROP COLUMN "description",
ADD COLUMN     "parentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."StepRuns" DROP COLUMN "childStepRunId",
ADD COLUMN     "parentStepId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Step" ADD CONSTRAINT "Step_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Step"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
