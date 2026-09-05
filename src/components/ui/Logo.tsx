import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="group inline-flex flex-col leading-none">
      <span
        className={cn(
          "font-display text-xl font-medium tracking-tight",
          tone === "dark" ? "text-navy" : "text-cream",
        )}
      >
        XB{" "}
        <span className={tone === "dark" ? "text-olive-dark" : "text-olive"}>
          Mediation
        </span>
      </span>
      <span
        className={cn(
          "mt-1 hidden font-sans text-[0.65rem] font-medium tracking-[0.16em] uppercase sm:block",
          tone === "dark" ? "text-ink-soft" : "text-cream/60",
        )}
      >
        {site.tagline}
      </span>
    </Link>
  );
}
