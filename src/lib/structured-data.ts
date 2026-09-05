import { site } from "@/content/site";

/**
 * Sitewide LocalBusiness/ProfessionalService JSON-LD. Built entirely from
 * src/content/site.ts so it stays in sync automatically once the phone
 * number TODO there is resolved.
 *
 * TODO: add a `address` (PostalAddress: streetAddress, postalCode,
 * addressLocality, addressCountry) field once the real street address is
 * confirmed — see the TODO in src/content/impressum.ts. Omitted for now
 * rather than publishing placeholder text as structured data.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    alternateName: site.mediatorName,
    description:
      "Familien- und Wirtschaftsmediation in Marktheidenfeld, Main-Spessart, Würzburg und Aschaffenburg sowie online im gesamten deutschsprachigen Raum.",
    url: "https://xb-mediation.de",
    telephone: site.phone,
    email: site.email,
    areaServed: [...site.locations, "Deutschland (online)"],
    availableLanguage: "de",
  };
}
