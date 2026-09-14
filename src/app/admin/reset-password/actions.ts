"use server";

import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const MIN_PASSWORD_LENGTH = 10;

export type ResetPasswordState = {
  error?: string;
  success?: string;
};

export async function resetPassword(
  _prevState: ResetPasswordState,
  formData: FormData,
): Promise<ResetPasswordState> {
  const token = formData.get("token")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

  if (!token) {
    return { error: "Der Link zum Zurücksetzen ist ungültig." };
  }
  if (newPassword.length < MIN_PASSWORD_LENGTH) {
    return {
      error: `Das neue Passwort muss mindestens ${MIN_PASSWORD_LENGTH} Zeichen lang sein.`,
    };
  }
  if (newPassword !== confirmPassword) {
    return { error: "Die neuen Passwörter stimmen nicht überein." };
  }

  const credential = await prisma.adminCredential.findUnique({
    where: { id: "singleton" },
  });

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const valid =
    credential?.resetTokenHash &&
    credential.resetTokenExpiresAt &&
    credential.resetTokenExpiresAt > new Date() &&
    crypto.timingSafeEqual(
      Buffer.from(credential.resetTokenHash),
      Buffer.from(tokenHash),
    );

  if (!valid) {
    return {
      error:
        "Der Link zum Zurücksetzen ist ungültig oder abgelaufen. Bitte fordern Sie einen neuen an.",
    };
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await prisma.adminCredential.update({
    where: { id: "singleton" },
    data: {
      passwordHash,
      failedAttempts: 0,
      lockedUntil: null,
      resetTokenHash: null,
      resetTokenExpiresAt: null,
    },
  });

  return { success: "Passwort wurde zurückgesetzt. Sie können sich jetzt anmelden." };
}
