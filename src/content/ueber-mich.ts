import type { PageMeta, QuoteBannerContent } from "@/types/content";

export const meta: PageMeta = {
  title: "Über mich – XB Mediation",
  description:
    "Xaver Behl, Mediator bei XB Mediation: beruflicher Hintergrund, Ausbildung in Mediation sowie Verantwortung und Engagement.",
};

export const hero = {
  heading: "Konflikte verstehen.",
  headingAccent: "Menschen begleiten.",
  intro:
    "Ich arbeite strukturiert, neutral und einfühlsam. Mein Ziel ist es, dass sich alle Beteiligten verstanden fühlen und gemeinsam tragfähige Lösungen ermöglichen.",
  image: {
    placeholder: "portrait" as const,
    alt: "Xaver Behl, Mediator bei XB Mediation",
  },
};

export const backgroundHeading = "Mein beruflicher Hintergrund";
// TODO: exact wording, employer names and years to be confirmed by the client before launch.
export const backgroundBody =
  "Betriebswirt (B.A.) mit Schwerpunkt Finance und Controlling. Rund 10 Jahre Berufserfahrung, davon mehrere Jahre im Bereich Global Finance & Controlling in einem internationalen Umfeld.";

export const trainingHeading = "Meine Ausbildung in Mediation";
// TODO: confirm exact institute name and course dates.
export const trainingBody =
  "Ausbildung zum zertifizierten Mediator am Kernstamm Campus, 25.02.–28.06.2026. Abschluss mit Zertifikat und Kolloquium (Fallsimulation & Fachthemen).";

export const engagementHeading = "Verantwortung & Engagement";
// TODO: confirm exact roles/organisations before publishing.
export const engagementBody =
  "Aktives Mitglied der freiwilligen Feuerwehr, Kassierer im Feuerwehrausschuss, Vater von zwei Kindern und in der Nachbarschaftshilfe engagiert.";

export const closingQuote: QuoteBannerContent = {
  text: "Struktur gibt Orientierung, Empathie schafft den Raum für Lösungen. Daran glaube ich. Dafür arbeite ich.",
  attribution: "Xaver Behl",
};
