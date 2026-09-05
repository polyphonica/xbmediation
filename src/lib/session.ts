import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getIronSession } from "iron-session";

export type SessionData = {
  authenticated?: boolean;
};

const sessionOptions = {
  cookieName: "xbm_admin_session",
  password: process.env.SESSION_SECRET!,
  ttl: 60 * 60 * 12, // 12 hours
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
  },
};

export async function getSession() {
  return getIronSession<SessionData>(await cookies(), sessionOptions);
}

/** Redirects to /admin/login if there's no valid session. Call at the top
 * of every protected layout/page AND inside every sensitive server action —
 * a layout-level check alone doesn't stop an action from being invoked
 * directly. */
export async function requireSession() {
  const session = await getSession();
  if (!session.authenticated) {
    redirect("/admin/login");
  }
  return session;
}

export async function destroySession() {
  const session = await getSession();
  session.destroy();
}
