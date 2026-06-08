export type HubType = 'facial' | 'body' | 'laser-light' | 'dental';

export interface HubTreatment {
  id: string;
  title: string;
  description?: string;
  ctaLabel: string;
  href: string;
  isPlaceholderRoute?: boolean;
  image: {
    src: string;
    alt: string;
    prompt?: string;
  };
  badge?: string;
  category?: string;
  featured?: boolean;
}

export interface HubFAQItem {
  question: string;
  answer: string;
}

export interface HubSocialProofItem {
  quote: string;
  author: string;
  role: string;
  isPlaceholder?: boolean;
}

export interface HubPageContent {
  type: HubType;
  colorTheme?: {
    primary: string; // e.g. 'text-sage'
    bgSoft: string;  // e.g. 'bg-canvas/30'
    accent: string;  // e.g. 'border-sage-soft'
  };
  seo: {
    title: string;
    description: string;
    canonical: string;
    hreflangEs: string;
    hreflangEn: string;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    accentWord?: string;
    accentClassName?: string;
    subheadline: string;
    ctaLabel: string;
    trustLine: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
  intro: {
    stats: Array<{ value: string; label: string }>;
    editorialLabel: string;
    editorialBody: string;
    benefits: Array<{ title: string; description: string }>;
  };
  featured: {
    headline: string;
    subheadline: string;
    items: HubTreatment[];
  };
  allGrid: {
    headline: string;
    items: HubTreatment[];
  };
  faqs: {
    headline: string;
    items: HubFAQItem[];
  };
  socialProof: {
    headline: string;
    items: HubSocialProofItem[];
    googleRating: string;
    googleLink: string;
  };
  finalCTA: {
    headline: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
    whatsappMessage?: string;
  };
}
