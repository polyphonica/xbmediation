import type {
  CalloutContent,
  CTAContent,
  HeroContent,
  IconGridItemContent,
  PageMeta,
} from "@/types/content";

export const meta: PageMeta = {
  title: "Wirtschaftsmediation – XB Mediation",
  description:
    "Wirtschaftsmediation bei Gesellschafterkonflikten, Nachfolge und Veränderungsprozessen – mit wirtschaftlichem Verständnis und neutraler Konfliktbegleitung.",
};

export const hero: HeroContent = {
  eyebrow: "Wirtschaftsmediation",
  heading: "Wenn Konflikte Zusammenarbeit",
  headingAccent: "und Entscheidungen belasten.",
  intro:
    "In Unternehmen treffen unterschiedliche Interessen, Verantwortlichkeiten und Erwartungen aufeinander. Mediation kann helfen, wieder Klarheit zu schaffen, Vertrauen aufzubauen und gemeinsam tragfähige Lösungen für die Zukunft zu entwickeln.",
  image: {
    placeholder: "office",
    alt: "Modernes Besprechungszimmer als Ort konstruktiver Wirtschaftsmediation",
  },
};

export const topicsHeading = "Typische Konfliktfelder";

export const topics: IconGridItemContent[] = [
  { icon: "users", title: "Gesellschafterkonflikte" },
  { icon: "briefcase", title: "Geschäftsführer & Führungskräfte" },
  { icon: "handshake", title: "Geschäftspartner & Kooperation" },
  { icon: "users-round", title: "Team- und Mitarbeiterkonflikte" },
  { icon: "milestone", title: "Unternehmensnachfolge" },
  { icon: "building-2", title: "Familienunternehmen" },
  { icon: "refresh-cw", title: "Veränderungsprozesse" },
  { icon: "more-horizontal", title: "Weitere Themen" },
];

export const roleHeading = "Was ich mitbringe";

export const roleBody =
  "Ich verbinde meine Mediationskompetenz mit langjähriger Erfahrung aus Finance, Controlling und Führung. Ich kenne die Dynamik unternehmerischer Veränderungsprozesse und wirtschaftlicher Zusammenhänge – und bleibe dabei neutral in meiner Rolle als Mediator.";

export const callout: CalloutContent = {
  eyebrow: "Wirtschaftliches Verständnis.",
  text: "Neutrale Konfliktbegleitung.",
};

export const cta: CTAContent = {
  heading: "Möchten Sie herausfinden, ob Mediation für Ihre Situation geeignet ist?",
  ctaLabel: "Erstgespräch vereinbaren",
  ctaHref: "/kontakt",
};
