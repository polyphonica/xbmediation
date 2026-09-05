import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { StepList } from "@/components/ui/StepList";
import {
  cards,
  hero,
  meta,
  stepsShort,
  stepsShortLink,
  structureSection,
} from "@/content/home";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function Home() {
  return (
    <>
      <Hero content={hero} />

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container className="border-border/70 bg-stone/40 grid gap-10 rounded-2xl border p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-xl leading-snug font-medium text-navy">
              {structureSection.eyebrow}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {structureSection.body}
            </p>
            <Link
              href={structureSection.linkHref}
              className="text-olive-dark mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              {structureSection.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="border-border/70 bg-cream rounded-xl border p-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-olive-dark uppercase">
              Der Ablauf in Kurzform
            </p>
            <div className="mt-5">
              <StepList steps={stepsShort} compact />
            </div>
            <Link
              href={stepsShortLink.href}
              className="text-olive-dark mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              {stepsShortLink.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
