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
  // Portraits of a person don't bleed either: an upright photo in the wide
  // bleed frame gets cropped to a slice of the face, so it sits in the grid
  // as a card next to the text instead.
  const portrait = Boolean(content.image.portrait);
  const bleed = !content.image.contain && !portrait;

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28",
        // Portrait card: tighter vertical padding on desktop so the upright
        // photo doesn't make the hero fill the screen.
        portrait ? "lg:pt-10 lg:pb-10" : null,
      )}
    >
      {bleed ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <HeroImage image={content.image} bleed />
        </div>
      ) : null}

      <Container
        className={cn(
          "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
          // Contained image: stretch the row so the image column matches
          // the text column's rendered height (top of heading to bottom
          // of the button), not the section's padded height.
          bleed || portrait ? null : "lg:items-stretch",
        )}
      >
        <div className="animate-fade-up relative lg:self-center">
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
              : portrait
                ? null
                : // Contained image: sized to match the text column on mobile,
                  // stretched to its full rendered height on desktop.
                  "mx-auto flex w-full max-w-sm items-center justify-center lg:mx-0 lg:h-full lg:max-w-none",
          )}
          style={{ animationDelay: "120ms" }}
        >
          <HeroImage
            image={content.image}
            className={
              bleed
                ? undefined
                : portrait
                  ? // A little smaller and centered on mobile; on desktop a
                    // fixed-size card at the start of the image column, so
                    // it sits close to the text.
                    "mx-auto w-[90%] lg:mx-0 lg:w-[min(20vw,25rem)]"
                  : "lg:aspect-auto lg:h-full lg:max-w-full"
            }
          />
        </div>
      </Container>
    </section>
  );
}
