/*
  Warnings:

  - Added the required column `toolLink` to the `Tools` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Step" DROP CONSTRAINT "Step_parentId_fkey";

-- AlterTable
ALTER TABLE "public"."Step" ALTER COLUMN "parentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Tools" ADD COLUMN     "toolLink" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Step" ADD CONSTRAINT "Step_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Step"("id") ON DELETE SET NULL ON UPDATE CASCADE;
