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
    /** Real photo path under /public — takes precedence over the abstract
     * placeholder art when set. */
    src?: string;
    /** Skip Next's built-in image optimizer. Needed for the transparent
     * logo PNG: its re-encoding step converts the image to an indexed
     * palette and drops the alpha channel, rendering a solid white box
     * instead of transparency. */
    unoptimized?: boolean;
    /** Draws a thin inset ring around the image frame. Defaults to true;
     * set false for images (like a logo) that shouldn't be boxed in. */
    ring?: boolean;
    /** Fits the whole image within its frame instead of cropping to fill
     * it. Defaults to false (cover, as photos want); set true for images
     * (like a logo with text) that must never be cropped. */
    contain?: boolean;
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
