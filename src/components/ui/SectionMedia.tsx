import { ReactNode } from 'react';
import ResponsiveImage from './ResponsiveImage';
import { motion, useReducedMotion } from 'motion/react';

interface SectionMediaProps {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
  overlay?: 'none' | 'soft' | 'sage' | 'ivory' | 'gradient';
  position?: 'center' | 'left' | 'right' | 'top' | 'bottom';
  opacity?: number;
  className?: string;
  priority?: boolean;
}

export default function SectionMedia({
  type,
  src,
  poster,
  alt = '',
  overlay = 'soft',
  position = 'center',
  opacity = 1,
  className = '',
  priority = false,
}: SectionMediaProps) {
  const shouldReduceMotion = useReducedMotion();

  const overlays = {
    none: '',
    soft: 'bg-canvas/45',
    ivory: 'bg-[rgba(242,240,241,0.75)]',
    sage: 'bg-[rgba(204,202,202,0.35)]',
    gradient: 'bg-gradient-to-r from-[rgba(242,240,241,0.95)] via-[rgba(242,240,241,0.75)] to-[rgba(242,240,241,0.35)]',
  };

  const positions = {
    center: 'object-center',
    left: 'object-left',
    right: 'object-right',
    top: 'object-top',
    bottom: 'object-bottom',
  };

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      {type === 'video' && !shouldReduceMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className={`w-full h-full object-cover ${positions[position]} max-md:object-center`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <ResponsiveImage
          src={shouldReduceMotion && poster ? poster : src}
          alt={alt}
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover ${positions[position]} max-md:object-center`}
        />
      )}
      
      {overlay !== 'none' && (
        <div className={`absolute inset-0 z-[1] ${overlays[overlay]}`} />
      )}
    </div>
  );
}
