import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { StepList } from "@/components/ui/StepList";
import { CTABanner } from "@/components/ui/CTABanner";
import { Icon } from "@/lib/icons";
import {
  cta,
  introBody,
  introHeading,
  kostenBody,
  kostenHeading,
  meta,
  modeHeading,
  modeItems,
  pageHeading,
  steps,
} from "@/content/ablauf-kosten";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function AblaufKostenPage() {
  return (
    <>
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <Container>
          <h1 className="font-display text-4xl font-medium text-navy sm:text-5xl">
            {pageHeading}
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl font-medium text-navy">
            {introHeading}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{introBody}</p>
        </Container>
      </section>

      <section className="pb-24 sm:pb-28">
        <Container className="grid gap-6 lg:grid-cols-3 lg:items-start">
          <div className="border-border/70 bg-cream rounded-xl border p-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-olive-dark uppercase">
              Ablauf
            </p>
            <div className="mt-5">
              <StepList steps={steps} />
            </div>
          </div>

          <div className="bg-sage border-border/60 rounded-xl border p-7">
            <h2 className="font-display text-lg font-medium text-navy">{kostenHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{kostenBody}</p>
          </div>

          <div className="border-border/70 bg-cream rounded-xl border p-7">
            <h2 className="font-display text-lg font-medium text-navy">{modeHeading}</h2>
            <ul className="mt-5 space-y-5">
              {modeItems.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <Icon name={item.icon} className="text-olive-dark mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABanner content={cta} />
    </>
  );
}
