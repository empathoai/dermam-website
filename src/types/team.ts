export type TeamSpecialty = "Faciales" | "Corporales" | "Láser" | "Dental" | "Fundadora";

export interface TeamMember {
  id: string;
  name: string;
  displayName: string;
  role: string;
  specialties: TeamSpecialty[];
  shortBio: string;
  videoSrc?: string;
  posterSrc: string;
  imageFallbackSrc?: string;
  vcardUrl?: string;
  qrImage?: string;
  featured?: boolean;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface AboutContent {
  hero: {
    headline: string;
    subheadline: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
  };
  story: {
    eyebrow: string;
    headline: string;
    subcopy: string;
    storyCopy: string;
    quote: string;
    image: {
      src: string;
      alt: string;
      prompt: string;
    };
    stats: Array<{ label: string; value: string }>;
  };
  values: {
    headline: string;
    items: ValueItem[];
  };
}
