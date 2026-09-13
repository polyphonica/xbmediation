import Image from "next/image";
import { HeroArt } from "@/components/ui/HeroArt";
import { cn } from "@/lib/cn";
import type { HeroContent } from "@/types/content";

/**
 * Renders a page's hero image: a real photo (next/image) when
 * `image.src` is set, falling back to the abstract placeholder art
 * otherwise. Keeps the same framing (rounded corners, ring, aspect
 * ratio/bleed behavior) regardless of which one is used.
 */
export function HeroImage({
  image,
  bleed = false,
  className,
}: {
  image: HeroContent["image"];
  bleed?: boolean;
  className?: string;
}) {
  if (!image.src) {
    return (
      <HeroArt
        placeholder={image.placeholder}
        alt={image.alt}
        bleed={bleed}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        bleed
          ? "h-full rounded-l-3xl sm:rounded-l-[2.5rem]"
          : "aspect-4/5 rounded-2xl sm:aspect-3/4",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={bleed ? "44vw" : "(min-width: 640px) 50vw, 100vw"}
        className="object-cover"
        priority
      />
      <div
        className={cn(
          "ring-navy/8 pointer-events-none absolute inset-0 ring-1 ring-inset",
          bleed ? "rounded-l-3xl sm:rounded-l-[2.5rem]" : "rounded-2xl",
        )}
      />
    </div>
  );
}
