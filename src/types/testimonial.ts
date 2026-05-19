export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  treatment?: string;
  rating: number;
  source: 'Google' | 'Direct';
  isPlaceholder: boolean;
}
