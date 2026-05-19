import { useState, useEffect } from 'react';
import ResponsiveImage from './ResponsiveImage';
import { motion, useReducedMotion } from 'motion/react';

interface HeroMediaProps {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  onLoaded: () => void;
}

export default function HeroMedia({
  type,
  src,
  poster,
  alt,
  className = '',
  overlay = true,
  onLoaded
}: HeroMediaProps) {
  const [isReady, setIsReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMediaReady = () => {
    setIsReady(true);
    onLoaded();
  };

  useEffect(() => {
    // If it's an image and already cached, the onLoad might not trigger as expected in some cases 
    // or very fast. However, ResponsiveImage is a standard img tag.
  }, []);

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
          className="absolute inset-0 w-full h-full object-cover"
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
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlay && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-canvas/40 to-transparent z-[1]"
        />
      )}
    </div>
  );
}
