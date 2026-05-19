import { useReducedMotion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

type MotionAvatarProps = {
  name: string;
  videoSrc?: string;
  posterSrc: string;
  imageFallbackSrc?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  autoPlay?: boolean;
  className?: string;
};

export default function MotionAvatar({
  name,
  videoSrc,
  posterSrc,
  imageFallbackSrc,
  alt,
  size = "md",
  autoPlay = true,
  className = "",
}: MotionAvatarProps) {
  const shouldReduceMotion = useReducedMotion();
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-48 h-48 md:w-56 md:h-56",
    lg: "w-64 h-64 md:w-80 md:h-80"
  };

  useEffect(() => {
    if (videoRef.current && !shouldReduceMotion && !videoError) {
      videoRef.current.play().catch(() => {
        // Silently handle play errors (e.g. browser policy)
        console.log("Video play interrupted/denied");
      });
    }
  }, [shouldReduceMotion, videoError]);

  return (
    <div 
      className={`relative inline-block rounded-full overflow-hidden aspect-square ring-4 ring-white/50 border border-sage-soft shadow-xl group transition-all duration-500 hover:ring-sage-soft/30 hover:shadow-sage-soft/20 ${sizeClasses[size]} ${className}`}
      aria-label={`Avatar de ${name}`}
    >
      {(videoSrc && !shouldReduceMotion && !videoError) ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          preload="metadata"
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <img
          src={imageFallbackSrc || posterSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      )}
    </div>
  );
}
