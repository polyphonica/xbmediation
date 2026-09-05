import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import type { StepContent } from "@/types/content";

export function StepFlowHorizontal({ steps }: { steps: StepContent[] }) {
  return (
    <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex lg:items-start lg:gap-2">
      {steps.map((step, index) => (
        <Fragment key={step.number}>
          <li className="flex items-start gap-4 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
            <span className="border-olive/40 text-olive-dark font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-sm font-medium">
              {step.number}
            </span>
            <div className="lg:mt-4 lg:px-2">
              <p className="font-display text-base font-medium text-navy">
                {step.title}
              </p>
              {step.body ? (
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              ) : null}
            </div>
          </li>
          {index < steps.length - 1 ? (
            <li
              aria-hidden="true"
              className="hidden shrink-0 items-start justify-center pt-3 lg:flex"
            >
              <ChevronRight className="text-border h-5 w-5" />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ol>
  );
}
