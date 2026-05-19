export type BookingType = "square" | "whatsapp" | "internal";

export interface BookingTreatment {
  id: string;
  title: string;
  description: string;
  bookingType: BookingType;
  squareUrl?: string;
  whatsappMessage?: string;
  ctaLabel: string;
  featured?: boolean;
  trackingLabel: string;
}

export interface BookingInfoCard {
  title: string;
  description: string;
}

export interface BookingPageContent {
  hero: {
    headline: string;
    subheadline: string;
    trustLine: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
  selector: {
    headline: string;
    subheadline: string;
    treatments: BookingTreatment[];
  };
  whatsappAlternative: {
    headline: string;
    cards: Array<{
      title: string;
      copy: string;
      cta: string;
      href: string;
      type: "whatsapp" | "phone";
      emphasized?: boolean;
    }>;
  };
  info: {
    cards: BookingInfoCard[];
  };
}
