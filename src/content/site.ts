export const site = {
  name: "XB Mediation",
  mediatorName: "Xaver Behl",
  tagline: "Verstehen. Verbinden. Lösung gestalten.",
  // TODO: confirm real phone number, email domain and postal address with the client before launch.
  phone: "0151 123 456 78",
  email: "kontakt@xb-mediation.de",
  locations: [
    "Marktheidenfeld",
    "Main-Spessart",
    "Lohr",
    "Würzburg",
    "Aschaffenburg",
  ],
  serviceArea:
    "Online deutschlandweit und im deutschsprachigen Raum",
  appointmentNote: "Termine nach Vereinbarung",
} as const;

export const primaryNav = [
  { label: "Startseite", href: "/" },
  { label: "Familienmediation", href: "/familienmediation" },
  { label: "Wirtschaftsmediation", href: "/wirtschaftsmediation" },
  { label: "Mediation", href: "/mediation" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Ablauf & Kosten", href: "/ablauf-kosten" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const legalNav = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
  { label: "Hinweis nach § 36 VSBG", href: "/streitbeilegung" },
] as const;

export const headerCta = {
  label: "Erstgespräch vereinbaren",
  href: "/kontakt",
} as const;
