import { ImageAsset } from './common';

export type TreatmentCategory = 'Facial' | 'Corporal' | 'Láser & Luz' | 'Dental';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  category: TreatmentCategory;
  href: string;
  image: ImageAsset;
  featured: boolean;
}
