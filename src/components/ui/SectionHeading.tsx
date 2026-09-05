import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  heading: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "font-sans text-xs font-semibold tracking-[0.2em] uppercase",
            tone === "dark" ? "text-olive-dark" : "text-cream/70",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight font-medium text-balance sm:text-4xl",
          tone === "dark" ? "text-navy" : "text-cream",
        )}
      >
        {heading}
      </h2>
    </div>
  );
}
