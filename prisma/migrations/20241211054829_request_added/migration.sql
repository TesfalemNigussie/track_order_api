-- CreateTable
CREATE TABLE "request" (
    "id" INTEGER NOT NULL,
    "itemName" TEXT NOT NULL,
    "PickupLat" DECIMAL(65,30) NOT NULL,
    "PickupLng" DECIMAL(65,30) NOT NULL,
    "pickupName" TEXT NOT NULL,
    "desLat" DECIMAL(65,30) NOT NULL,
    "desLng" DECIMAL(65,30) NOT NULL,
    "desName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "currentLoctionLat" DECIMAL(65,30) NOT NULL,
    "currentLocationLng" DECIMAL(65,30) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "request_id_key" ON "request"("id");
