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
    "Ich arbeite strukturiert, neutral und empathisch. Mein Ziel ist es, dass sich alle Beteiligten verstanden fühlen und gemeinsam tragfähige Lösungen ermöglichen.",
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
  "Ausbildung zum Mediator am Frankfurt Campus bei ConsensusFundierte Ausbildung im Bereich der Mediation mit dem Schwerpunkt auf professioneller Konfliktlösung, Gesprächsführung und der konstruktiven Begleitung von Konfliktparteien. Vermittlung theoretischer Grundlagen sowie praxisnaher Methoden und Techniken der Mediation.";
export const trainingCompletion = "Abschluss: Juni 2026";

export const engagementHeading = "Verantwortung & Engagement";
// TODO: confirm exact roles/organisations before publishing.
export const engagementBody =
  "Aktives Mitglied der freiwilligen Feuerwehr, Kassierer im Feuerwehrausschuss, Vater von zwei Kindern.";

export const roleHeading = "Meine Rolle";
export const roleBody =
  "Ich bin nicht Richter oder Entscheider. Ich gebe keine fertige Lösung vor, sondern strukturiere den Prozess und schaffe einen Rahmen, in dem alle Beteiligten ihre Perspektive einbringen und gehört werden – und dabei selbst neutral bleibe.";

export const understandingHeading = "Mein Mediationsverständnis";
export const understandingBody =
  "Für mich bedeutet Mediation, einen vertrauensvollen Rahmen für offene Gespräche und gegenseitiges Verständnis zu schaffen. Mit einer ruhigen, strukturierten, neutralen und empathischen Haltung begleite ich die Beteiligten auf dem Weg zu einer gemeinsamen und tragfähigen Lösung.";

export const valueHeading = "Mein Mehrwert für Ihre Mediation";
export const valueBody =
  "Ich verbinde eine analytische Denkweise und wirtschaftliche Erfahrung mit der Überzeugung, dass hinter jedem Prozess Menschen mit unterschiedlichen Interessen, Bedürfnissen und Perspektiven stehen.";

export const closingQuote: QuoteBannerContent = {
  text: "Struktur gibt Orientierung, Empathie schafft den Raum für Lösungen. Daran glaube ich. Dafür arbeite ich.",
  attribution: "Xaver Behl",
};
