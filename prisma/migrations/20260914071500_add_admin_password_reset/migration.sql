-- AlterTable
ALTER TABLE "AdminCredential" ADD COLUMN "resetTokenHash" TEXT,
ADD COLUMN "resetTokenExpiresAt" TIMESTAMP(3);
