import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/ui/Container";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { areaOptions } from "@/content/kontakt";

export const metadata: Metadata = {
  title: "Admin – XB Mediation",
  robots: { index: false, follow: false },
};

// Always fetch fresh data — this page must never be statically cached.
export const dynamic = "force-dynamic";

const areaLabels = Object.fromEntries(
  areaOptions.map((option) => [option.value, option.label]),
);

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h1 className="font-display text-3xl font-medium text-navy">
          Eingegangene Anfragen
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {leads.length} {leads.length === 1 ? "Anfrage" : "Anfragen"} insgesamt.
        </p>

        <div className="border-border/70 mt-8 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[840px] text-left text-sm">
            <thead className="bg-stone/50 text-xs font-semibold tracking-wide text-ink-soft uppercase">
              <tr>
                <th className="px-4 py-3">Datum</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Kontakt</th>
                <th className="px-4 py-3">Bereich</th>
                <th className="px-4 py-3">Anliegen</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-border/70 divide-y">
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="text-ink-soft px-4 py-3 whitespace-nowrap">
                    {lead.createdAt.toLocaleString("de-DE", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-4 py-3 font-medium text-navy">{lead.name}</td>
                  <td className="text-ink-soft px-4 py-3">
                    <div>{lead.email}</div>
                    {lead.phone ? <div>{lead.phone}</div> : null}
                  </td>
                  <td className="text-ink-soft px-4 py-3">
                    {lead.area ? areaLabels[lead.area] : "–"}
                  </td>
                  <td className="text-ink-soft max-w-xs px-4 py-3">{lead.message}</td>
                  <td className="px-4 py-3">
                    <StatusSelect leadId={lead.id} status={lead.status} />
                  </td>
                </tr>
              ))}
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-ink-soft px-4 py-8 text-center">
                    Noch keine Anfragen eingegangen.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
