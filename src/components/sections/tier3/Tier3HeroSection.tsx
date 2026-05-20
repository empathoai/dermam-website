import React, { useState } from 'react';
import { MediaAsset } from '../../../types/common';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import { motion } from 'motion/react';
import { ArrowDown, Star } from 'lucide-react';

interface Tier3HeroSectionProps {
  eyebrow: string;
  h1: string;
  subheadline: string;
  media: MediaAsset;
  onScrollToContent: () => void;
  ctaLabel: string;
}

export default function Tier3HeroSection({ 
    eyebrow, 
    h1, 
    subheadline, 
    media, 
    onScrollToContent, 
    ctaLabel 
}: Tier3HeroSectionProps) {
  const [isMediaReady, setIsMediaReady] = useState(false);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-canvas isolation-isolate pt-20">
      <HeroMedia
        {...media}
        overlay={true}
        onLoaded={() => setIsMediaReady(true)}
      />

      <Container className="relative z-10 w-full mt-12 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {isMediaReady && (
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="max-w-2xl text-center lg:text-left"
            >
              <motion.span 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] md:text-xs text-white font-bold tracking-widest uppercase mb-6"
              >
                  {eyebrow}
              </motion.span>
              
              <h1 className="text-4xl md:text-6xl mb-6 leading-tight text-white drop-shadow-md font-serif">
                {h1}
              </h1>
              
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed drop-shadow-md">
                {subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                  <Button 
                    onClick={onScrollToContent}
                    className="bg-white text-sage hover:bg-white/90 min-w-[220px]"
                  >
                    {ctaLabel}
                  </Button>
                  
                  <div className="flex items-center gap-4 text-white/90 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-bold">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                    </div>
                    <span>4.9 Google</span>
                  </div>
              </div>
            </motion.div>
          )}
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.button
         initial={{ opacity: 0 }}
         animate={{ opacity: 0.6 }}
         transition={{ delay: 1.5, duration: 1 }}
        onClick={onScrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Explorar</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
