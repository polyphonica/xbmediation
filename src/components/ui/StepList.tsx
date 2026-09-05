import type { StepContent } from "@/types/content";
import { cn } from "@/lib/cn";

export function StepList({
  steps,
  compact = false,
  className,
}: {
  steps: StepContent[];
  compact?: boolean;
  className?: string;
}) {
  return (
    <ol className={cn("space-y-5", className)}>
      {steps.map((step) => (
        <li key={step.number} className="flex gap-4">
          <span className="border-olive/40 text-olive-dark font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-medium">
            {step.number}
          </span>
          <div className={compact ? "pt-1.5" : ""}>
            <p className="font-display font-medium text-navy">{step.title}</p>
            {!compact && step.body ? (
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
