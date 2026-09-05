import type { HeroContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroArt } from "@/components/ui/HeroArt";

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="animate-fade-up">
          {content.eyebrow ? (
            <p className="font-sans text-xs font-semibold tracking-[0.28em] text-olive-dark uppercase">
              {content.eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-4xl leading-[1.08] font-medium text-balance text-navy sm:text-5xl">
            {content.heading}
            {content.headingAccent ? (
              <>
                <br />
                <span className="text-olive-dark">{content.headingAccent}</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {content.intro}
          </p>
          {content.ctaLabel && content.ctaHref ? (
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={content.ctaHref}>{content.ctaLabel}</Button>
              {content.secondaryCtaLabel && content.secondaryCtaHref ? (
                <Button href={content.secondaryCtaHref} variant="outline-dark">
                  {content.secondaryCtaLabel}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        <div
          className="animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <HeroArt placeholder={content.image.placeholder} alt={content.image.alt} />
        </div>
      </Container>
    </section>
  );
}
