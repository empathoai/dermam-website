import { ImageAsset, CTA, MediaAsset } from './common';

export interface FounderContent {
  eyebrow?: string;
  name: string;
  title: string;
  bio?: string;
  quote: string;
  cta: string;
  image: ImageAsset;
  backgroundMedia?: MediaAsset;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonItem {
  label: string;
  prp: string;
  prf: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  image: ImageAsset;
}

export interface ProtocolStep {
  title: string;
  description: string;
}

export interface ResultItem {
  title: string;
  imageBefore: string;
  imageAfter: string;
  sessions: string;
}
