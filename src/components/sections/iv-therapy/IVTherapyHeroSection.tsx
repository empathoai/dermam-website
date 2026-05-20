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
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-canvas isolation-isolate pt-20">
      <HeroMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay={true}
        onLoaded={() => setIsMediaReady(true)}
      />

      <Container className="relative z-10 w-full mt-12 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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
                {content.eyebrow}
            </motion.span>
            
            <h1 className="text-4xl md:text-6xl mb-6 leading-tight text-white drop-shadow-md font-serif">
              {content.headline}
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed drop-shadow-md">
              {content.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Button 
                  onClick={onScrollToKits}
                  className="bg-white text-sage hover:bg-white/90 min-w-[220px]"
                >
                  {content.ctaLabel}
                </Button>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  onClick={onScrollToKits}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                >
                  <ArrowDown size={14} className="animate-bounce" />
                  Explorar
                </motion.button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
