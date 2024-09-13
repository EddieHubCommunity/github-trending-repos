/*
  Warnings:

  - Added the required column `repoId` to the `Trending` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trending" ADD COLUMN     "repoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Repo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "daily" INTEGER NOT NULL,
    "weekly" INTEGER NOT NULL,
    "monthly" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Repo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trending" ADD CONSTRAINT "Trending_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
