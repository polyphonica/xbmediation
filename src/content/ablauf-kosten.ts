import type { CTAContent, PageMeta, StepContent } from "@/types/content";

export const meta: PageMeta = {
  title: "Ablauf & Kosten – XB Mediation",
  description:
    "Der Ablauf einer Mediation von der Kontaktaufnahme bis zur Vereinbarung sowie transparente Informationen zu den Kosten.",
};

export const pageHeading = "Ablauf & Kosten";
export const introHeading = "Der Weg beginnt mit einem ersten Gespräch";
export const introBody =
  "Sie müssen Ihren Konflikt noch nicht vollständig verstanden haben. Sie müssen auch noch nicht mediationserfahren sein.";

export const steps: StepContent[] = [
  {
    number: "01",
    title: "Kontakt aufnehmen",
    body: "Sie schildern mir Ihr Anliegen telefonisch, per E-Mail oder über das Kontaktformular.",
  },
  {
    number: "02",
    title: "Erstgespräch",
    body: "Wir besprechen die Situation und klären die grundsätzlichen Rahmenbedingungen.",
  },
  {
    number: "03",
    title: "Vorbereitung",
    body: "Wenn Mediation grundsätzlich geeignet erscheint, wird der Rahmen gemeinsam abgestimmt.",
  },
  {
    number: "04",
    title: "Mediation",
    body: "Die Beteiligten bearbeiten den Konflikt strukturiert und Schritt für Schritt.",
  },
  {
    number: "05",
    title: "Lösungen entwickeln",
    body: "Aus den Interessen und Bedürfnissen entstehen konkrete Lösungsmöglichkeiten.",
  },
  {
    number: "06",
    title: "Vereinbarung",
    body: "Wenn eine gemeinsame Lösung gefunden wurde, werden die Ergebnisse dokumentiert.",
  },
];

export const kostenHeading = "Kosten";
// TODO: publish concrete hourly/flat rates once pricing is finalised.
export const kostenBody =
  "Die Honorare richten sich nach Zeitaufwand oder als individuell vereinbarte Pauschale. Vor Beginn der Mediation werden die finanziellen Rahmenbedingungen gemeinsam besprochen. Die konkreten Honorare werden hier nach Festlegung veröffentlicht.";

export const modeHeading = "Online oder persönlich?";
export const modeItems = [
  {
    icon: "map-pin" as const,
    text: "Persönliche Termine in Marktheidenfeld, Main-Spessart, Lohr, Würzburg und Aschaffenburg.",
  },
  {
    icon: "monitor" as const,
    text: "Online-Mediation deutschlandweit und im deutschsprachigen Raum.",
  },
];

export const cta: CTAContent = {
  heading: "Fragen zum Ablauf oder zu den Kosten?",
  ctaLabel: "Erstgespräch vereinbaren",
  ctaHref: "/kontakt",
};
