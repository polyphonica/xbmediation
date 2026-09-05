import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { heading, meta, paragraphs } from "@/content/vsbg";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function StreitbeilegungPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl font-medium text-navy sm:text-4xl">{heading}</h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-ink-soft">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
