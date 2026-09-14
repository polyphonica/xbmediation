import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ForgotPasswordForm } from "@/components/admin/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Passwort vergessen – XB Mediation Admin",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <section className="flex min-h-full items-center justify-center py-16">
      <Container className="max-w-sm">
        <div className="mb-8 text-center">
          <Logo />
        </div>
        <div className="border-border/70 bg-stone/40 rounded-2xl border p-8">
          <h1 className="mb-6 font-display text-xl font-medium text-navy">
            Passwort vergessen
          </h1>
          <ForgotPasswordForm />
        </div>
        <p className="mt-6 text-center text-sm text-ink-soft">
          <Link href="/admin/login" className="text-olive-dark hover:underline">
            Zurück zur Anmeldung
          </Link>
        </p>
      </Container>
    </section>
  );
}
