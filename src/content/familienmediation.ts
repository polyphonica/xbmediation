import type {
  CalloutContent,
  CTAContent,
  HeroContent,
  IconGridItemContent,
  PageMeta,
} from "@/types/content";

export const meta: PageMeta = {
  title: "Familienmediation – XB Mediation",
  description:
    "Familienmediation bei Trennung, Scheidung, Erbschaft oder Generationenkonflikten – strukturiert, neutral und einfühlsam begleitet.",
};

export const hero: HeroContent = {
  eyebrow: "Familienmediation",
  heading: "Wenn Beziehungen bleiben sollen,",
  headingAccent: "aber Konflikte gelöst werden müssen.",
  intro:
    "Familienkonflikte sind häufig besonders emotional. Mediation schafft einen geschützten Rahmen, in dem unterschiedliche Sichtweisen ausgesprochen, verstanden und gemeinsam tragfähige Lösungen entwickelt werden können.",
  image: {
    placeholder: "lake",
    src: "/images/hero-familienmediation.jpg",
    alt: "Ruhiger Schreibtisch mit Notizbuch, Stift und Eukalyptuszweig als Sinnbild für Klarheit in der Familienmediation",
  },
};

export const topicsHeading = "Worum kann es gehen?";

export const topics: IconGridItemContent[] = [
  { icon: "heart-crack", title: "Trennung und Scheidung" },
  { icon: "users", title: "Eltern und Kinder" },
  { icon: "scroll", title: "Erbschaft und Nachlass" },
  { icon: "users-round", title: "Geschwisterkonflikte" },
  { icon: "history", title: "Generationenkonflikte" },
  { icon: "building-2", title: "Familienunternehmen" },
  { icon: "coins", title: "Vermögensfragen" },
  { icon: "more-horizontal", title: "Weitere Themen" },
];

export const roleHeading = "Meine Rolle";

export const roleBody =
  "Ich bin nicht Richter oder Entscheider. Ich gebe keine fertige Lösung vor, sondern strukturiere den Prozess und schaffe einen Rahmen, in dem alle Beteiligten ihre Perspektive einbringen und gehört werden – und dabei selbst neutral bleibe.";

export const callout: CalloutContent = {
  eyebrow: "Struktur gibt Orientierung.",
  text: "Empathie schafft den Raum für Lösungen.",
};

export const cta: CTAContent = {
  heading: "Möchten Sie herausfinden, ob Mediation für Ihre Situation geeignet ist?",
  ctaLabel: "Erstgespräch vereinbaren",
  ctaHref: "/kontakt",
};
