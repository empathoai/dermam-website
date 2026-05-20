export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  prompt?: string;
}

export interface MediaAsset {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
  overlay?: 'none' | 'soft' | 'sage' | 'ivory' | 'gradient';
  position?: 'center' | 'left' | 'right' | 'top' | 'bottom';
  opacity?: number;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TrustItem {
  icon: string; // Lucide icon name
  label: string;
}
