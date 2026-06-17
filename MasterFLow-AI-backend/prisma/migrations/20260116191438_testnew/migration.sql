/*
  Warnings:

  - Added the required column `settings` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputType` to the `Tools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outputType` to the `Tools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settingsSchema` to the `Tools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settings` to the `Workflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Step" ADD COLUMN     "settings" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "public"."Tools" ADD COLUMN     "inputType" TEXT NOT NULL,
ADD COLUMN     "outputType" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "settingsSchema" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "public"."Workflow" ADD COLUMN     "settings" JSONB NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserTools" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserTools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_UserTools" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserTools_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "_UserTools_B_index" ON "public"."_UserTools"("B");

-- AddForeignKey
ALTER TABLE "public"."Workflow" ADD CONSTRAINT "Workflow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTools" ADD CONSTRAINT "UserTools_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserTools" ADD CONSTRAINT "_UserTools_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_UserTools" ADD CONSTRAINT "_UserTools_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."UserTools"("id") ON DELETE CASCADE ON UPDATE CASCADE;
