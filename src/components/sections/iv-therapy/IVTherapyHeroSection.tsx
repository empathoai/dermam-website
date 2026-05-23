import React, { useState } from 'react';
import { IVTherapyHeroContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface IVTherapyHeroSectionProps {
  content: IVTherapyHeroContent;
  onScrollToKits: () => void;
}

export default function IVTherapyHeroSection({ content, onScrollToKits }: IVTherapyHeroSectionProps) {
  const [isMediaReady, setIsMediaReady] = useState(false);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-base-900 isolation-isolate pt-20">
      <div className="absolute inset-0 z-0">
        <HeroMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
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
            <motion.span 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="inline-block px-3 py-1 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/10 text-xs text-base-200 font-light tracking-normal normal-case mb-6"
            >
                {content.eyebrow}
            </motion.span>
            
            <h1 className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-white drop-shadow-md mb-6">
              {content.headline}
            </h1>
            
            <p className="text-base-300 text-lg mb-10 max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-md">
              {content.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onScrollToKits}
                  className="bg-white text-base-900 hover:bg-base-100 min-w-[220px] w-full sm:w-auto"
                >
                  {content.ctaLabel}
                </Button>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  onClick={onScrollToKits}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs uppercase tracking-[0.15em] font-medium"
                >
                  <ArrowDown size={14} className="animate-bounce" />
                  Explorar
                </motion.button>
            </div>
          </motion.div>
      </Container>
    </section>
  );
}
