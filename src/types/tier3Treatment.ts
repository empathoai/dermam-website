import { ImageAsset, MediaAsset } from './common';

export type Tier3TreatmentCategory =
  | "facial"
  | "body"
  | "laser-light"
  | "dental"
  | "iv-therapy";

export type Tier3TreatmentIntensity =
  | "entry"
  | "moderate"
  | "advanced";

export type Tier3BookingMode =
  | "square"
  | "whatsapp"
  | "evaluation";

export interface Tier3Treatment {
  id: string;
  slugEs: string;
  slugEn?: string;

  category: Tier3TreatmentCategory;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  canonicalEs: string;
  canonicalEn?: string;

  eyebrow: string;
  h1: string;
  subheadline: string;

  primaryCta: {
    label: string;
    href: string;
    mode: Tier3BookingMode;
    trackingLabel: string;
  };

  secondaryCta?: {
    label: string;
    href: string;
    mode: Tier3BookingMode;
    trackingLabel: string;
  };

  heroMedia: MediaAsset;

  quickFacts: Array<{
    label: string;
    value: string;
  }>;

  quickFit: {
    title: string;
    items: string[];
  };

  explanation: {
    title: string;
    body: string;
    media?: ImageAsset;
  };

  benefits: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;

  sessionSteps: Array<{
    title: string;
    description: string;
  }>;

  candidates: Array<string>;

  safety: {
    title: string;
    items: string[];
    disclaimer?: string;
  };

  results?: {
    title: string;
    description: string;
    images: Array<{
      before: ImageAsset;
      after: ImageAsset;
      label?: string;
    }>;
    disclaimer: string;
  };

  faqs: Array<{
    question: string;
    answer: string;
  }>;

  relatedTreatmentIds: string[];

  finalCta: {
    title: string;
    copy: string;
    primaryLabel: string;
    secondaryLabel: string;
    image: ImageAsset;
  };

  showPrice: boolean;
  price?: number;
  squareUrl?: string;
  whatsappMessage: string;
  isPublished: boolean;
}
