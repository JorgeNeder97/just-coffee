-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ingredientes" TEXT[],
    "descripcion" TEXT NOT NULL,
    "imagenUrl" TEXT NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
