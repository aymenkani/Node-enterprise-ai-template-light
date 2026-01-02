/*
  Warnings:

  - You are about to drop the column `createdAt` on the `BlacklistedToken` table. All the data in the column will be lost.
  - You are about to drop the column `expires` on the `BlacklistedToken` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `embedding` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `metadata` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileHash` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileKey` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `isPublic` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `mimeType` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `originalName` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PasswordResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `expires` on the `PasswordResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `opaqueToken` on the `PasswordResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `PasswordResetToken` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `expires` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `RefreshToken` table. All the data in the column will be lost.
  - You are about to drop the column `googleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `passwordHistory` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `provider` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "File_fileHash_idx";

-- DropIndex
DROP INDEX "File_isPublic_idx";

-- DropIndex
DROP INDEX "PasswordResetToken_opaqueToken_key";

-- DropIndex
DROP INDEX "RefreshToken_token_key";

-- DropIndex
DROP INDEX "User_googleId_key";

-- AlterTable
ALTER TABLE "BlacklistedToken" DROP COLUMN "createdAt",
DROP COLUMN "expires";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "embedding",
DROP COLUMN "metadata";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "createdAt",
DROP COLUMN "fileHash",
DROP COLUMN "fileKey",
DROP COLUMN "isPublic",
DROP COLUMN "mimeType",
DROP COLUMN "originalName",
DROP COLUMN "status",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "createdAt",
DROP COLUMN "message",
DROP COLUMN "status",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "PasswordResetToken" DROP COLUMN "createdAt",
DROP COLUMN "expires",
DROP COLUMN "opaqueToken",
DROP COLUMN "token";

-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "createdAt",
DROP COLUMN "expires",
DROP COLUMN "token";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "googleId",
DROP COLUMN "passwordHistory",
DROP COLUMN "provider";

-- DropEnum
DROP TYPE "AuthProvider";

-- DropEnum
DROP TYPE "FileStatus";

-- DropEnum
DROP TYPE "NotificationStatus";
