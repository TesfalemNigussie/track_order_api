/*
  Warnings:

  - You are about to drop the column `currentLocationLng` on the `request` table. All the data in the column will be lost.
  - You are about to drop the column `currentLoctionLat` on the `request` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "request" DROP COLUMN "currentLocationLng",
DROP COLUMN "currentLoctionLat";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "currentLocationLng" DECIMAL(65,30),
ADD COLUMN     "currentLoctionLat" DECIMAL(65,30);
