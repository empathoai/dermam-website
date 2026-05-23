import { useState, useEffect } from 'react';
import ResponsiveImage from './ResponsiveImage';
import { motion, useReducedMotion } from 'motion/react';

interface HeroMediaProps {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  overlay?: boolean;
  overlayType?: 'light' | 'dark';
  position?: 'center' | 'left' | 'right' | 'top' | 'bottom';
  onLoaded: () => void;
}

export default function HeroMedia({
  type,
  src,
  poster,
  alt = '',
  className = '',
  overlay = true,
  overlayType = 'light',
  position = 'center',
  onLoaded
}: HeroMediaProps) {
  const [isReady, setIsReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMediaReady = () => {
    setIsReady(true);
    onLoaded();
  };

  const positions = {
    center: 'object-center',
    left: 'object-left',
    right: 'object-right',
    top: 'object-top',
    bottom: 'object-bottom',
  };

  const overlayClasses = {
    light: 'bg-gradient-to-r from-base-900/95 via-base-900/70 to-base-900/15',
    dark: 'bg-gradient-to-r from-base-900/95 via-base-900/70 to-base-900/15'
  };

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {type === 'video' && !shouldReduceMotion ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onCanPlayThrough={handleMediaReady}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'} ${positions[position]} max-md:object-center`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <ResponsiveImage
          src={shouldReduceMotion && poster ? poster : src}
          alt={alt}
          fetchPriority="high"
          loading="eager"
          onLoad={handleMediaReady}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'} ${positions[position]} max-md:object-center`}
        />
      )}

      {/* Protective Overlay */}
      {overlay && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 z-[1] ${overlayClasses[overlayType]}`}
        />
      )}
    </div>
  );
}
