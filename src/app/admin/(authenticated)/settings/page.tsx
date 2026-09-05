import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ChangePasswordForm } from "@/components/admin/ChangePasswordForm";

export const metadata: Metadata = {
  title: "Einstellungen – XB Mediation Admin",
  robots: { index: false, follow: false },
};

export default function AdminSettingsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-md">
        <h1 className="font-display text-3xl font-medium text-navy">Einstellungen</h1>
        <div className="border-border/70 bg-stone/40 mt-8 rounded-2xl border p-8">
          <h2 className="mb-6 font-display text-lg font-medium text-navy">
            Passwort ändern
          </h2>
          <ChangePasswordForm />
        </div>
      </Container>
    </section>
  );
}
