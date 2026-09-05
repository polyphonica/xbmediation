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
      "[Straße und Hausnummer – bitte ergänzen]",
      "[PLZ und Ort – bitte ergänzen]",
      "Deutschland",
    ],
  },
  {
    heading: "Kontakt",
    lines: ["Telefon: [Telefonnummer bestätigen]", "E-Mail: kontakt@xb-mediation.de"],
  },
  {
    heading: "Umsatzsteuer-Identifikationsnummer",
    lines: ["[sofern vorhanden – bitte ergänzen gemäß § 27a UStG]"],
  },
  {
    heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
    lines: [
      "Mediator, Ausbildung gemäß dem deutschen Mediationsgesetz (MediationsG).",
      "[Zuständige Kammer oder zuständiger Verband, sofern eine Mitgliedschaft besteht – bitte ergänzen]",
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
