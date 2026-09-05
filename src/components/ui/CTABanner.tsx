import type { CTAContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTABanner({ content }: { content: CTAContent }) {
  return (
    <section className="bg-navy bg-grain relative py-14 sm:py-16">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display max-w-xl text-xl leading-snug font-medium text-cream sm:text-2xl">
          {content.heading}
        </p>
        <Button href={content.ctaHref} className="shrink-0">
          {content.ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
