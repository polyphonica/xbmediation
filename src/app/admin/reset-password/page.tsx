import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ResetPasswordForm } from "@/components/admin/ResetPasswordForm";

export const metadata: Metadata = {
  title: "Passwort zurücksetzen – XB Mediation Admin",
  robots: { index: false, follow: false },
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <section className="flex min-h-full items-center justify-center py-16">
      <Container className="max-w-sm">
        <div className="mb-8 text-center">
          <Logo />
        </div>
        <div className="border-border/70 bg-stone/40 rounded-2xl border p-8">
          <h1 className="mb-6 font-display text-xl font-medium text-navy">
            Neues Passwort festlegen
          </h1>
          {token ? (
            <ResetPasswordForm token={token} />
          ) : (
            <p className="text-sm text-red-700">
              Der Link zum Zurücksetzen ist ungültig. Bitte fordern Sie einen neuen an.
            </p>
          )}
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
