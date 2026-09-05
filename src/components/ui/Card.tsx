import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon, type IconName } from "@/lib/icons";

export function Card({
  icon,
  title,
  body,
  href,
  linkLabel,
}: {
  icon?: IconName;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
}) {
  const content = (
    <>
      {icon ? (
        <span className="bg-sage text-olive-dark mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full">
          <Icon name={icon} className="h-5 w-5" />
        </span>
      ) : null}
      <h3 className="font-display text-xl font-medium text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
      {href && linkLabel ? (
        <span className="text-olive-dark mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
          {linkLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group border-border/70 bg-cream/60 hover:border-olive/40 hover:shadow-[0_12px_32px_rgba(24,37,65,0.08)] rounded-xl border p-7 transition-all duration-200";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
