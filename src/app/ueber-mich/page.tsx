import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/ui/Hero";
import { Card } from "@/components/ui/Card";
import { QuoteBanner } from "@/components/ui/QuoteBanner";
import {
  backgroundBody,
  backgroundHeading,
  closingQuote,
  engagementBody,
  engagementHeading,
  hero,
  meta,
  trainingBody,
  trainingHeading,
} from "@/content/ueber-mich";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function UeberMichPage() {
  return (
    <>
      <Hero content={hero} />

      <section className="pb-24 sm:pb-28">
        <Container className="grid gap-6 sm:grid-cols-3">
          <Card title={backgroundHeading} body={backgroundBody} />
          <Card title={trainingHeading} body={trainingBody} />
          <Card title={engagementHeading} body={engagementBody} />
        </Container>
      </section>

      <QuoteBanner content={closingQuote} />
    </>
  );
}
