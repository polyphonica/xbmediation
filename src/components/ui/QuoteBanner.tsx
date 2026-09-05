import type { QuoteBannerContent } from "@/types/content";
import { Container } from "@/components/ui/Container";

export function QuoteBanner({ content }: { content: QuoteBannerContent }) {
  return (
    <section className="bg-navy bg-grain relative py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span aria-hidden="true" className="font-display text-5xl text-olive/60">
            &ldquo;
          </span>
          <p className="font-display -mt-4 text-xl leading-snug font-medium text-cream sm:text-2xl">
            {content.text}
          </p>
          {content.attribution ? (
            <p className="mt-5 font-sans text-xs font-semibold tracking-[0.2em] text-cream/60 uppercase">
              {content.attribution}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
