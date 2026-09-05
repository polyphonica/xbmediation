import type {
  CardContent,
  HeroContent,
  PageMeta,
  StepContent,
} from "@/types/content";

export const meta: PageMeta = {
  title: "XB Mediation – Verstehen. Verbinden. Lösung gestalten.",
  description:
    "Mediation für Familien und Unternehmen in Marktheidenfeld, Main-Spessart, Würzburg und Aschaffenburg – sowie online im gesamten deutschsprachigen Raum.",
};

export const hero: HeroContent = {
  heading: "Verstehen. Verbinden.",
  headingAccent: "Lösung gestalten.",
  intro:
    "Konflikte klären. Lösungen gemeinsam entwickeln. Ich begleite Menschen und Unternehmen dabei, Konflikte strukturiert, neutral und einfühlsam zu bearbeiten – mit dem Ziel, tragfähige Lösungen zu entwickeln.",
  ctaLabel: "Erstgespräch vereinbaren",
  ctaHref: "/kontakt",
  image: {
    placeholder: "portrait",
    alt: "Xaver Behl, Mediator bei XB Mediation",
  },
};

export const cards: CardContent[] = [
  {
    icon: "users",
    title: "Familienmediation",
    body: "Wenn persönliche Beziehungen und unterschiedliche Interessen aufeinandertreffen.",
    href: "/familienmediation",
    linkLabel: "Mehr erfahren",
  },
  {
    icon: "briefcase",
    title: "Wirtschaftsmediation",
    body: "Wenn Konflikte die Zusammenarbeit und Entscheidungen belasten.",
    href: "/wirtschaftsmediation",
    linkLabel: "Mehr erfahren",
  },
  {
    icon: "lightbulb",
    title: "Mediation verstehen",
    body: "Was Mediation ist, wie sie funktioniert und wem sie hilft.",
    href: "/mediation",
    linkLabel: "Mehr erfahren",
  },
];

export const structureSection = {
  eyebrow: "Struktur gibt Orientierung.",
  body: "Eine Mediation ist ein strukturierter Prozess. Meine Aufgabe ist es, den Rahmen zu gestalten, in dem sich alle Beteiligten gehört und verstanden fühlen – und gemeinsam Lösungen entwickeln können.",
  linkLabel: "Mehr über mich",
  linkHref: "/ueber-mich",
};

export const stepsShort: StepContent[] = [
  { number: "01", title: "Kontakt aufnehmen" },
  { number: "02", title: "Erstgespräch" },
  { number: "03", title: "Mediation" },
  { number: "04", title: "Lösungen entwickeln" },
  { number: "05", title: "Vereinbarung" },
];

export const stepsShortLink = {
  label: "Zum Ablauf & Kosten",
  href: "/ablauf-kosten",
};
