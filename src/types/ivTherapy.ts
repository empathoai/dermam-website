import { ImageAsset, MediaAsset, CTA } from './common';

export interface IVKit {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  imagePrompt: string;
  badge?: string;
  squareUrl?: string;
  whatsappMessage?: string;
  price?: number;
  showPrice: boolean;
  ctaLabel: string;
  trackingLabel: string;
  isPlaceholderUrl?: boolean;
}

export interface IVTherapyFAQItem {
  question: string;
  answer: string;
}

export interface IVTherapyHeroContent {
  eyebrow: string;
  headline: string;
  accentWord?: string;
  subheadline: string;
  ctaLabel: string;
  image: ImageAsset;
}

export interface IVEducationSectionContent {
  title: string;
  copyOral: string;
  copyIV: string;
  stats: {
    label: string;
    value: string;
  }[];
  image: ImageAsset;
}

export interface IVTherapyFinalCTAContent {
  title: string;
  copy: string;
  primaryCTA: CTA;
  secondaryCTA: CTA & { whatsappMessage: string };
  image: ImageAsset;
}

export interface IVTherapyPageContent {
  hero: IVTherapyHeroContent;
  education: IVEducationSectionContent;
  kitsSection: {
    title: string;
    subtitle: string;
  };
  faqs: IVTherapyFAQItem[];
  finalCTA: IVTherapyFinalCTAContent;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
  };
}
