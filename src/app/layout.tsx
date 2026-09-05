import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/content/site";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s`,
  },
  description:
    "Familien- und Wirtschaftsmediation in Marktheidenfeld, Main-Spessart, Würzburg und Aschaffenburg sowie online im gesamten deutschsprachigen Raum.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="bg-cream flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
