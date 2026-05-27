import React, { useState } from 'react';
import { MediaAsset } from '../../../types/common';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion } from 'motion/react';

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
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-base-900 isolation-isolate pt-20">
      <div className="absolute inset-0 z-0">
        <HeroMedia
        {...media}
        overlay={true}
        onLoaded={() => setIsMediaReady(true)}
        />
      </div>

      <Container className="relative z-10 w-full mt-12 md:mt-0">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-[48rem] pt-20 lg:pt-0"
          >
            <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <motion.span
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="inline-block px-3 py-1 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/10 text-xs text-base-200 font-light tracking-normal normal-case"
              >
                  {eyebrow}
              </motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <HeroTrustPill>4.9 Google · Atención profesional</HeroTrustPill>
              </motion.div>
            </div>
            
            <h1 className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-white drop-shadow-md mb-6">
              {h1}
            </h1>
            
            <p className="text-base-300 text-lg mb-10 max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-md">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScrollToContent}
                  className="bg-white text-base-900 hover:bg-base-100 min-w-[220px] w-full sm:w-auto"
                >
                  {ctaLabel}
                </Button>
                

            </div>
          </motion.div>
      </Container>
    </section>
  );
}
