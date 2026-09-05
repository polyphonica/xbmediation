import type { IconName } from "@/lib/icons";

export type HeroContent = {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  intro: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  image: {
    placeholder: "portrait" | "lake" | "office" | "stones";
    alt: string;
  };
};

export type CardContent = {
  icon: IconName;
  title: string;
  body: string;
  href?: string;
  linkLabel?: string;
};

export type IconGridItemContent = {
  icon: IconName;
  title: string;
  body?: string;
};

export type StepContent = {
  number: string;
  title: string;
  body?: string;
};

export type CalloutContent = {
  eyebrow?: string;
  text: string;
};

export type QuoteBannerContent = {
  text: string;
  attribution?: string;
};

export type CTAContent = {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
};

export type PageMeta = {
  title: string;
  description: string;
};
