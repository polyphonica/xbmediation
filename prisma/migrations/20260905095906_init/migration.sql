-- CreateEnum
CREATE TYPE "MediationArea" AS ENUM ('FAMILIE', 'WIRTSCHAFT', 'UNSICHER');

-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEU', 'KONTAKTIERT', 'ABGESCHLOSSEN', 'ARCHIVIERT');

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "message" TEXT NOT NULL,
    "area" "MediationArea",
    "status" "LeadStatus" NOT NULL DEFAULT 'NEU',
    "source" TEXT DEFAULT 'kontaktformular',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_createdAt_idx" ON "Lead"("createdAt");
