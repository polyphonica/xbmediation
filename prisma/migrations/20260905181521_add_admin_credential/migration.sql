-- CreateTable
CREATE TABLE "AdminCredential" (
    "id" TEXT NOT NULL DEFAULT 'singleton',
    "passwordHash" TEXT NOT NULL,
    "failedAttempts" INTEGER NOT NULL DEFAULT 0,
    "lockedUntil" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminCredential_pkey" PRIMARY KEY ("id")
);
