import { cn } from "@/lib/cn";

const fieldClasses =
  "border-border w-full rounded-lg border bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 transition-colors";

export function FormField({
  label,
  name,
  type = "text",
  required,
  error,
  as = "input",
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  as?: "input" | "textarea" | "select";
  children?: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required ? <span className="text-olive-dark"> *</span> : null}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={5}
          aria-invalid={Boolean(error)}
          className={cn(fieldClasses, "resize-none")}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          aria-invalid={Boolean(error)}
          className={cn(fieldClasses, "appearance-none")}
          defaultValue=""
        >
          {children}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          aria-invalid={Boolean(error)}
          className={fieldClasses}
        />
      )}
      {error ? <p className="mt-1.5 text-xs text-red-700">{error}</p> : null}
    </div>
  );
}
