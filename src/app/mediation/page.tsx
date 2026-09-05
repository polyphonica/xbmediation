import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid } from "@/components/ui/IconGrid";
import { StepFlowHorizontal } from "@/components/ui/StepFlowHorizontal";
import { CTABanner } from "@/components/ui/CTABanner";
import {
  cta,
  hero,
  meta,
  phases,
  phasesHeading,
  principles,
  principlesHeading,
} from "@/content/mediation";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function MediationPage() {
  return (
    <>
      <Hero content={hero} />

      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading heading={principlesHeading} align="center" />
          <div className="mt-10">
            <IconGrid items={principles} columns={5} />
          </div>
        </Container>
      </section>

      <section className="bg-stone/50 py-20 sm:py-28">
        <Container>
          <SectionHeading heading={phasesHeading} align="center" />
          <div className="mt-12">
            <StepFlowHorizontal steps={phases} />
          </div>
        </Container>
      </section>

      <CTABanner content={cta} />
    </>
  );
}
