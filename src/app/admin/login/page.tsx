import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin-Login – XB Mediation",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session.authenticated) {
    redirect("/admin");
  }

  return (
    <section className="flex min-h-full items-center justify-center py-16">
      <Container className="max-w-sm">
        <div className="mb-8 text-center">
          <Logo />
        </div>
        <div className="border-border/70 bg-stone/40 rounded-2xl border p-8">
          <h1 className="mb-6 font-display text-xl font-medium text-navy">
            Admin-Anmeldung
          </h1>
          <LoginForm />
        </div>
      </Container>
    </section>
  );
}
