import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { meta, sections } from "@/content/datenschutz";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium text-navy sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-lg font-medium text-navy">
                {section.heading}
              </h2>
              <div className="mt-2 space-y-3 text-sm leading-relaxed text-ink-soft">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
