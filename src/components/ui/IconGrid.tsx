import type { IconGridItemContent } from "@/types/content";
import { Icon } from "@/lib/icons";
import { cn } from "@/lib/cn";

export function IconGrid({
  items,
  columns = 4,
}: {
  items: IconGridItemContent[];
  columns?: 4 | 5;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3",
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5",
      )}
    >
      {items.map((item) => (
        <div key={item.title} className="text-center">
          <span className="bg-sage text-olive-dark mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-base font-medium text-navy">
            {item.title}
          </h3>
          {item.body ? (
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {item.body}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
