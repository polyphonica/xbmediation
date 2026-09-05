import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid } from "@/components/ui/IconGrid";
import { CalloutPanel } from "@/components/ui/CalloutPanel";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  callout,
  cta,
  hero,
  meta,
  roleBody,
  roleHeading,
  topics,
  topicsHeading,
} from "@/content/wirtschaftsmediation";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function WirtschaftsmediationPage() {
  return (
    <>
      <Hero content={hero} />

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading heading={topicsHeading} />
          <div className="mt-10">
            <IconGrid items={topics} />
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-medium text-navy">{roleHeading}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{roleBody}</p>
          </div>
          <CalloutPanel content={callout} />
        </Container>
      </section>

      <CTABanner content={cta} />
    </>
  );
}
