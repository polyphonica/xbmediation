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
}: {
  placeholder: Placeholder;
  alt: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "bg-grain relative aspect-4/5 w-full overflow-hidden rounded-2xl sm:aspect-3/4",
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
      <div className="ring-navy/8 pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset" />
    </div>
  );
}

function Scene({ placeholder }: { placeholder: Placeholder }) {
  switch (placeholder) {
    case "portrait":
      return (
        <>
          <defs>
            <linearGradient id="g-portrait" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dfe3d4" />
              <stop offset="100%" stopColor="#f2efe6" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g-portrait)" />
          <circle cx="200" cy="205" r="180" fill="none" stroke="#18254122" strokeWidth="1" />
          <circle cx="200" cy="205" r="130" fill="none" stroke="#18254122" strokeWidth="1" />
          <circle cx="200" cy="185" r="62" fill="#182541" opacity="0.85" />
          <path
            d="M92 470c8-84 56-140 108-140s100 56 108 140"
            fill="#182541"
            opacity="0.85"
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
              <stop offset="100%" stopColor="#c9cbc0" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#g-office)" />
          <rect x="40" y="60" width="320" height="180" fill="none" stroke="#18254133" strokeWidth="1.5" />
          <line x1="200" y1="60" x2="200" y2="240" stroke="#18254122" />
          <rect x="80" y="300" width="240" height="110" rx="6" fill="#182541" opacity="0.12" />
          {[100, 160, 220, 280].map((x) => (
            <rect key={x} x={x} y="420" width="20" height="46" rx="3" fill="#182541" opacity="0.35" />
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
