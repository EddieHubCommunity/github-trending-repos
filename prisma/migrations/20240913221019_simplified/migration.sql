/*
  Warnings:

  - You are about to drop the column `repoId` on the `Trending` table. All the data in the column will be lost.
  - You are about to drop the `Repo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trending" DROP CONSTRAINT "Trending_repoId_fkey";

-- AlterTable
ALTER TABLE "Trending" DROP COLUMN "repoId";

-- DropTable
DROP TABLE "Repo";
