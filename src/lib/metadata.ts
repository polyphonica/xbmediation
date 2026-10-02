import type { Metadata } from "next";
import { site } from "@/content/site";
import type { PageMeta } from "@/types/content";

/**
 * Metadata for a marketing page: title/description from its content file,
 * the canonical URL, and the matching Open Graph/Twitter card fields for
 * link previews. The preview image is set here rather than via Next's
 * `opengraph-image` file convention, because a page's own `openGraph`
 * replaces (not merges with) one inherited from a parent segment.
 *
 * `path` is relative to `metadataBase` (set in the root layout).
 */
export function pageMetadata(meta: PageMeta, path: string): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: path,
      siteName: site.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: `${site.name} – ${site.tagline}`,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}
