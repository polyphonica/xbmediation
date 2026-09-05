import type {
  CTAContent,
  HeroContent,
  IconGridItemContent,
  PageMeta,
  StepContent,
} from "@/types/content";

export const meta: PageMeta = {
  title: "Was ist Mediation? – XB Mediation",
  description:
    "Mediation ist ein freiwilliger, vertraulicher und strukturierter Prozess. Die Grundprinzipien und die fünf Phasen der Mediation im Überblick.",
};

export const hero: HeroContent = {
  eyebrow: "Mediation",
  heading: "Konflikte verstehen.",
  headingAccent: "Gemeinsam Lösungen entwickeln.",
  intro:
    "Mediation ist ein freiwilliger, vertraulicher und strukturierter Prozess. Ein neutraler Mediator unterstützt die Beteiligten dabei, ihre unterschiedlichen Sichtweisen, Interessen und Bedürfnisse zu besprechen und miteinander eine Lösung zu erarbeiten.",
  image: {
    placeholder: "stones",
    src: "/images/hero-mediation.jpg",
    alt: "Hölzerner Steg durch die Dünen zum Meer bei Sonnenuntergang als Sinnbild für den gemeinsamen Weg in der Mediation",
  },
};

export const principlesHeading = "Die Grundprinzipien";

export const principles: IconGridItemContent[] = [
  {
    icon: "door-open",
    title: "Freiwilligkeit",
    body: "Die Beteiligten entscheiden selbst über die Teilnahme und können die Mediation jederzeit beenden.",
  },
  {
    icon: "scale",
    title: "Neutralität",
    body: "Der Mediator ergreift keine Partei und ist allen Beteiligten gleichermaßen verpflichtet.",
  },
  {
    icon: "shield-check",
    title: "Vertraulichkeit",
    body: "Alles, was in der Mediation besprochen wird, bleibt vertraulich.",
  },
  {
    icon: "user-check",
    title: "Eigenverantwortung",
    body: "Die Beteiligten entwickeln und entscheiden ihre Lösung eigenverantwortlich.",
  },
  {
    icon: "compass",
    title: "Ergebnisoffenheit",
    body: "Zu Beginn steht noch nicht fest, wie die Lösung am Ende aussieht.",
  },
];

export const phasesHeading = "Die fünf Phasen der Mediation";

export const phases: StepContent[] = [
  {
    number: "01",
    title: "Einstieg & Rahmen",
    body: "Ablauf, Rollen und Rahmenbedingungen werden geklärt.",
  },
  {
    number: "02",
    title: "Sichtweisen & Themen",
    body: "Jede Seite schildert ihre Wahrnehmung, die zu klärenden Themen werden gesammelt.",
  },
  {
    number: "03",
    title: "Interessen & Bedürfnisse",
    body: "Hinter den Positionen werden die eigentlichen Interessen und Bedürfnisse sichtbar.",
  },
  {
    number: "04",
    title: "Lösungen entwickeln",
    body: "Gemeinsam werden Optionen entwickelt und geprüft.",
  },
  {
    number: "05",
    title: "Vereinbarung",
    body: "Die Ergebnisse werden in einer Vereinbarung festgehalten.",
  },
];

export const cta: CTAContent = {
  heading: "Sie möchten mehr über Mediation erfahren?",
  ctaLabel: "Erstgespräch vereinbaren",
  ctaHref: "/kontakt",
};
