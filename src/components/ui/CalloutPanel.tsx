import type { CalloutContent } from "@/types/content";

export function CalloutPanel({ content }: { content: CalloutContent }) {
  return (
    <div className="bg-sage border-border/60 rounded-xl border p-8">
      {content.eyebrow ? (
        <p className="font-display text-lg leading-snug font-medium text-navy">
          {content.eyebrow}
        </p>
      ) : null}
      <p className="text-olive-dark mt-1 font-display text-lg leading-snug font-medium">
        {content.text}
      </p>
    </div>
  );
}
