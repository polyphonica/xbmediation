"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

const LOCKOUT_THRESHOLD = 5;
const LOCKOUT_MINUTES = 15;

export type LoginState = {
  error?: string;
};

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get("password")?.toString() ?? "";

  const credential = await prisma.adminCredential.findUnique({
    where: { id: "singleton" },
  });

  if (!credential) {
    return { error: "Es ist noch kein Administratorkonto eingerichtet." };
  }

  if (credential.lockedUntil && credential.lockedUntil > new Date()) {
    return {
      error:
        "Zu viele Fehlversuche. Bitte versuchen Sie es in ein paar Minuten erneut.",
    };
  }

  const valid = await bcrypt.compare(password, credential.passwordHash);

  if (!valid) {
    const attempts = credential.failedAttempts + 1;
    await prisma.adminCredential.update({
      where: { id: "singleton" },
      data: {
        failedAttempts: attempts,
        lockedUntil:
          attempts >= LOCKOUT_THRESHOLD
            ? new Date(Date.now() + LOCKOUT_MINUTES * 60_000)
            : null,
      },
    });
    return { error: "Falsches Passwort." };
  }

  await prisma.adminCredential.update({
    where: { id: "singleton" },
    data: { failedAttempts: 0, lockedUntil: null },
  });

  const session = await getSession();
  session.authenticated = true;
  await session.save();

  redirect("/admin");
}
