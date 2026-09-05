"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

const MIN_PASSWORD_LENGTH = 10;

export type ChangePasswordState = {
  error?: string;
  success?: string;
};

export async function changePassword(
  _prevState: ChangePasswordState,
  formData: FormData,
): Promise<ChangePasswordState> {
  await requireSession();

  const currentPassword = formData.get("currentPassword")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";
  const confirmPassword = formData.get("confirmPassword")?.toString() ?? "";

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
  if (!credential) {
    return { error: "Es ist noch kein Administratorkonto eingerichtet." };
  }

  const valid = await bcrypt.compare(currentPassword, credential.passwordHash);
  if (!valid) {
    return { error: "Das aktuelle Passwort ist falsch." };
  }

  const passwordHash = await bcrypt.hash(newPassword, 12);
  await prisma.adminCredential.update({
    where: { id: "singleton" },
    data: { passwordHash, failedAttempts: 0, lockedUntil: null },
  });

  return { success: "Passwort wurde geändert." };
}
