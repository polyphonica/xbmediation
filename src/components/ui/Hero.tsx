import type { HeroContent } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { cn } from "@/lib/cn";

export function Hero({ content }: { content: HeroContent }) {
  // Photos bleed full-height to the page edge, like a background photo.
  // Contained images (e.g. the home logo) aren't photos and shouldn't be
  // stretched to fill the section — they sit in the grid, sized to match
  // the text column next to them.
  const bleed = !content.image.contain;

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {bleed ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <HeroImage image={content.image} bleed />
        </div>
      ) : null}

      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="animate-fade-up relative">
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
          className={cn(
            "animate-fade-up",
            bleed
              ? // Mobile/tablet only: desktop shows the full-bleed photo instead.
                "lg:hidden"
              : // Contained image: stays in flow and sized to match the text column.
                "mx-auto w-full max-w-sm lg:mx-0",
          )}
          style={{ animationDelay: "120ms" }}
        >
          <HeroImage image={content.image} />
        </div>
      </Container>
    </section>
  );
}
