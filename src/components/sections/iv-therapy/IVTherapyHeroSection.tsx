import React, { useState } from 'react';
import { IVTherapyHeroContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion, useReducedMotion, Variants } from 'motion/react';

interface IVTherapyHeroSectionProps {
  content: IVTherapyHeroContent;
  onScrollToKits: () => void;
}

export default function IVTherapyHeroSection({ content, onScrollToKits }: IVTherapyHeroSectionProps) {
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

  const renderHeadline = () => {
    if (!content.accentWord || !content.headline.includes(content.accentWord)) {
      return content.headline;
    }

    const [before, after] = content.headline.split(content.accentWord, 2);

    return (
      <>
        <span className="block">
          {before.trim()}
        </span>
        <span className="font-script normal-case font-light tracking-normal block w-full text-left text-[1.62em] md:text-[1.7em] leading-[0.78] mt-[-0.02em] pl-[0.78em] md:pl-[0.94em]">
          {content.accentWord}
        </span>
        {after.trim() ? (
          <span className="block">
            {after.trim()}
          </span>
        ) : null}
      </>
    );
  };

  return (
    <section className="relative hero-viewport overflow-hidden bg-base-900 isolation-isolate">
      <div className="absolute inset-0 z-0">
        <HeroMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay={true}
        onLoaded={() => setIsMediaReady(true)}
        />
      </div>

      <Container className="relative z-10 flex hero-content-viewport w-full items-center">
          <motion.div
             variants={containerVariants}
             initial="hidden"
             animate="visible"
             className="max-w-[48rem]"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <HeroTrustPill>4.9 Google · West Palm Beach · Miami, FL</HeroTrustPill>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-[clamp(3rem,6.6vw,5.35rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase text-base-300 drop-shadow-md mb-8">
              {renderHeadline()}
              <span className="block text-[clamp(0.9rem,1.8vw,1.35rem)] font-medium normal-case tracking-[0.02em] text-base-300/70 mt-3 leading-[1.4]">
                en West Palm Beach
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base-300 text-lg mb-12 max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-md">
              {content.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScrollToKits}
                  className="!bg-base-100 px-10 py-4 !text-base-900 shadow-subtle hover:!bg-white hover:shadow-subtle transition-shadow w-full sm:w-auto"
                >
                  {content.ctaLabel}
                </Button>
            </motion.div>
          </motion.div>
      </Container>
    </section>
  );
}
