/*
  Warnings:

  - You are about to drop the `Coffee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coffee";

-- CreateTable
CREATE TABLE "cafe" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ingredientes" TEXT[],
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,

    CONSTRAINT "cafe_pkey" PRIMARY KEY ("id")
);
