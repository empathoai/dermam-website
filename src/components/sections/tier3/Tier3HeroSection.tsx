import React, { useState } from 'react';
import { MediaAsset } from '../../../types/common';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion, useReducedMotion, Variants } from 'motion/react';

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
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden bg-base-900 py-20 lg:py-24 isolation-isolate">
      <div className="absolute inset-0 z-0">
        <HeroMedia
        {...media}
        overlay={true}
        onLoaded={() => setIsMediaReady(true)}
        />
      </div>

      <Container className="relative z-10 w-full">
          <motion.div
             variants={containerVariants}
             initial="hidden"
             animate="visible"
             className="max-w-[48rem] pt-20 lg:pt-0"
          >
            <div className="mb-6 flex flex-col items-start gap-3">
              <motion.div
                variants={itemVariants}
              >
                <HeroTrustPill>4.9 Google · Atención profesional</HeroTrustPill>
              </motion.div>
              <motion.span
                 variants={itemVariants}
                 className="inline-block px-3 py-1 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/10 text-xs text-base-200 font-light tracking-normal normal-case"
              >
                  {eyebrow}
              </motion.span>
            </div>
            
            <motion.h1 variants={itemVariants} className="text-[clamp(3rem,6.6vw,5.35rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase text-base-300 drop-shadow-md mb-8">
              {h1}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base-300 text-lg mb-12 max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-md">
              {subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScrollToContent}
                  className="!bg-base-100 px-10 py-4 !text-base-900 shadow-lg hover:!bg-white hover:shadow-xl transition-shadow w-full sm:w-auto"
                >
                  {ctaLabel}
                </Button>
                

            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
}
