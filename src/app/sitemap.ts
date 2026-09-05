import type { MetadataRoute } from "next";

const routes = [
  "",
  "/familienmediation",
  "/wirtschaftsmediation",
  "/mediation",
  "/ueber-mich",
  "/ablauf-kosten",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/streitbeilegung",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
