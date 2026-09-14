"use server";

import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";
import { sendPasswordResetEmail } from "@/lib/email";

const RESET_TOKEN_TTL_MINUTES = 60;

export type ForgotPasswordState = {
  success?: string;
  error?: string;
};

export async function requestPasswordReset(
  _prevState: ForgotPasswordState,
  _formData: FormData,
): Promise<ForgotPasswordState> {
  const credential = await prisma.adminCredential.findUnique({
    where: { id: "singleton" },
  });

  // Same generic response whether or not an account exists yet, so this
  // page can't be used to probe for that.
  const genericSuccess = {
    success:
      "Falls ein Administratorkonto eingerichtet ist, wurde ein Link zum Zurücksetzen an die hinterlegte E-Mail-Adresse gesendet.",
  };

  if (!credential) {
    return genericSuccess;
  }

  const token = crypto.randomBytes(32).toString("hex");
  const resetTokenHash = crypto.createHash("sha256").update(token).digest("hex");

  await prisma.adminCredential.update({
    where: { id: "singleton" },
    data: {
      resetTokenHash,
      resetTokenExpiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MINUTES * 60_000),
    },
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const resetUrl = `${siteUrl}/admin/reset-password?token=${token}`;

  try {
    await sendPasswordResetEmail(resetUrl);
  } catch (error) {
    console.error("[admin] failed to send password reset email", error);
    return {
      error:
        "Der Link konnte nicht per E-Mail versendet werden. Bitte versuchen Sie es später erneut.",
    };
  }

  return genericSuccess;
}
