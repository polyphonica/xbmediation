import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon } from "@/lib/icons";
import { site } from "@/content/site";
import { formHeading, intro, meta, pageHeading } from "@/content/kontakt";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function KontaktPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="font-display text-4xl font-medium text-navy sm:text-5xl">
            {pageHeading}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">{intro}</p>

          <div className="border-border/70 mt-10 space-y-5 border-t pt-8">
            <p className="font-display text-lg font-medium text-navy">{site.mediatorName}</p>
            <p className="text-sm text-ink-soft">{site.name}</p>

            <div className="flex items-start gap-3">
              <Icon name="phone" className="text-olive-dark mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm text-ink-soft">{site.phone}</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="mail" className="text-olive-dark mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm text-ink-soft">{site.email}</p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="map-pin" className="text-olive-dark mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm text-ink-soft">
                {site.locations.join(" · ")}
                <br />
                {site.appointmentNote}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="monitor" className="text-olive-dark mt-0.5 h-5 w-5 shrink-0" />
              <p className="text-sm text-ink-soft">{site.serviceArea}</p>
            </div>
          </div>
        </div>

        <div className="border-border/70 bg-stone/40 rounded-2xl border p-8 sm:p-10">
          <h2 className="font-display text-xl font-medium text-navy">{formHeading}</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
