export type ContactMethodType = "whatsapp" | "phone" | "instagram" | "visit";

export interface ContactChannel {
  type: ContactMethodType;
  title: string;
  value: string;
  helper: string;
  cta: string;
  href: string;
  emphasized?: boolean;
}

export interface ContactFAQItem {
  question: string;
  answer: string;
}

export interface ContactPageContent {
  hero: {
    headline: string;
    subheadline: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
  channels: {
    headline: string;
    subheadline: string;
    items: ContactChannel[];
  };
  form: {
    headline: string;
    subheadline: string;
    treatments: string[];
    privacyNote: string;
    submitCTA: string;
  };
  map: {
    address: string;
    hours: Array<{ day: string; time: string }>;
    logistics: string;
    cta: string;
    embedUrl?: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
    clinicImage: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
  faqs: ContactFAQItem[];
}
