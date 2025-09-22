/*
  Warnings:

  - Added the required column `creator` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."categories" ADD COLUMN     "creator" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."products" ADD COLUMN     "creator" TEXT NOT NULL;
