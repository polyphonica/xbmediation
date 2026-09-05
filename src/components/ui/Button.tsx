import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline-light" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-olive text-cream hover:bg-olive-dark shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(24,37,65,0.18)]",
  "outline-light":
    "border border-cream/40 text-cream hover:bg-cream/10",
  "outline-dark": "border border-navy/25 text-navy hover:bg-navy/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out";

export function Button({
  href,
  variant = "primary",
  className,
  type,
  disabled,
  children,
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} disabled={disabled} className={cn(classes, disabled && "opacity-60")}>
      {children}
    </button>
  );
}
