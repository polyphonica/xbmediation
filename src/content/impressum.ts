import type { PageMeta } from "@/types/content";

export const meta: PageMeta = {
  title: "Impressum – XB Mediation",
  description: "Angaben gemäß § 5 TMG.",
};

// TODO before launch: every "[… bitte ergänzen]" placeholder below must be
// filled in with the client's real, verified details. Never invent legal or
// registration information — an inaccurate Impressum is a legal liability.
export const sections = [
  {
    heading: "Diensteanbieter gemäß § 5 TMG",
    lines: [
      "Xaver Behl",
      "XB Mediation",
      "Schneeleinsweg 3, 97855 Triefenstein",
      "Deutschland",
    ],
  },
  {
    heading: "Kontakt",
    lines: ["Telefon: +49 175 5 909 725", "E-Mail: kontakt@xb-mediation.de"],
  },
  {
    heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
    lines: [
      "Mediator nach Abschluss einer vom IMI (International Mediation Institute) zertifizierten Mediationsausbildung",
    ],
  },
  {
    heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    lines: ["Xaver Behl (Anschrift wie oben)"],
  },
  {
    heading: "Streitschlichtung",
    lines: [
      "Hinweise zur Verbraucherstreitbeilegung finden Sie unter „Hinweis nach § 36 VSBG“.",
    ],
  },
] as const;
