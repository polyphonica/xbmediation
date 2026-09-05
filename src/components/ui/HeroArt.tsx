import { cn } from "@/lib/cn";

type Placeholder = "portrait" | "lake" | "office" | "stones";

/**
 * Stand-in imagery until licensed stock/real photography is sourced (see
 * project plan). Each scene is a lightweight inline SVG matching the site's
 * calm navy/olive/cream palette — swap the `<HeroArt>` usage for
 * `next/image` once real files land in /public/images.
 */
export function HeroArt({
  placeholder,
  alt,
  className,
  bleed = false,
}: {
  placeholder: Placeholder;
  alt: string;
  className?: string;
  /** Full-bleed background-photo treatment (fills its container edge-to-edge,
   * no card framing) instead of the default contained, rounded box. */
  bleed?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "bg-grain relative w-full overflow-hidden",
        bleed
          ? "h-full rounded-l-3xl sm:rounded-l-[2.5rem]"
          : "aspect-4/5 rounded-2xl sm:aspect-3/4",
        className,
      )}
    >
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <Scene placeholder={placeholder} />
      </svg>
      <div
        className={cn(
          "ring-navy/8 pointer-events-none absolute inset-0 ring-1 ring-inset",
          bleed ? "rounded-l-3xl sm:rounded-l-[2.5rem]" : "rounded-2xl",
        )}
      />
    </div>
  );
}

function Scene({ placeholder }: { placeholder: Placeholder }) {
  switch (placeholder) {
    case "portrait":
      return (
        <>
          <defs>
            <radialGradient id="g-portrait" cx="50%" cy="32%" r="75%">
              <stop offset="0%" stopColor="#e9e7d8" />
              <stop offset="60%" stopColor="#cdd2bd" />
              <stop offset="100%" stopColor="#9aa48c" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g-portrait)" />
          {/* Bust filling the frame like a cropped portrait photo, not a small centered icon. */}
          <circle cx="200" cy="152" r="92" fill="#182541" opacity="0.92" />
          <path
            d="M18 500c0-132 82-224 182-224s182 92 182 224z"
            fill="#182541"
            opacity="0.92"
          />
        </>
      );
    case "lake":
      return (
        <>
          <defs>
            <linearGradient id="g-lake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cfd8cf" />
              <stop offset="55%" stopColor="#e4e6da" />
              <stop offset="100%" stopColor="#8fa08a" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g-lake)" />
          <rect y="270" width="400" height="2" fill="#18254133" />
          {[300, 330, 360, 390, 420, 450].map((y) => (
            <path key={y} d={`M0 ${y} Q200 ${y - 6} 400 ${y}`} stroke="#18254122" fill="none" />
          ))}
          <path d="M180 270 L220 270 L215 500 L185 500 Z" fill="#54613c" opacity="0.9" />
          {[300, 340, 380, 420, 460].map((y) => (
            <rect key={y} x="150" y={y} width="100" height="8" fill="#54613c" opacity="0.7" />
          ))}
        </>
      );
    case "office":
      return (
        <>
          <defs>
            <linearGradient id="g-office" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e7e5da" />
              <stop offset="100%" stopColor="#c1c4b7" />
            </linearGradient>
            <radialGradient id="g-office-light" cx="72%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Composition kept within the vertical middle band so it still
              reads correctly whether cropped tall (contained mobile card)
              or short (full-bleed desktop banner). */}
          <rect width="400" height="500" fill="url(#g-office)" />
          <rect width="400" height="500" fill="url(#g-office-light)" />
          <rect x="20" y="215" width="360" height="150" rx="12" fill="#182541" opacity="0.85" />
          {[70, 150, 250, 330].map((x) => (
            <rect key={x} x={x} y="375" width="28" height="46" rx="5" fill="#182541" opacity="0.4" />
          ))}
        </>
      );
    case "stones":
      return (
        <>
          <defs>
            <linearGradient id="g-stones" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#efece0" />
              <stop offset="100%" stopColor="#ddd6c0" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g-stones)" />
          {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map((y) => (
            <path key={y} d={`M0 ${y} Q200 ${y + 14} 400 ${y}`} stroke="#18254118" fill="none" />
          ))}
          <ellipse cx="150" cy="330" rx="46" ry="30" fill="#4b5266" opacity="0.85" />
          <ellipse cx="230" cy="290" rx="30" ry="20" fill="#4b5266" opacity="0.75" />
          <ellipse cx="250" cy="350" rx="20" ry="13" fill="#4b5266" opacity="0.65" />
        </>
      );
  }
}
