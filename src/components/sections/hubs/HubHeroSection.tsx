import { useState } from 'react';
import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface HubHeroSectionProps {
  content: HubPageContent['hero'];
}

export default function HubHeroSection({ content }: HubHeroSectionProps) {
  const [isMediaReady, setIsMediaReady] = useState(false);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-base-900 isolation-isolate">
      <div className="absolute inset-0 z-0">
        <HeroMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay={true}
        overlayType="dark"
        onLoaded={() => setIsMediaReady(true)}
        />
      </div>

      <Container className="relative z-10 w-full mt-10 md:mt-0">
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
               <Link to="/es/reservar">
                  <Button className="bg-white text-base-900 hover:bg-base-100 min-w-[200px] w-full sm:w-auto">
                    {content.ctaLabel}
                  </Button>
               </Link>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <HeroTrustPill>{content.trustLine}</HeroTrustPill>
                </motion.div>
            </div>
          </motion.div>
      </Container>
    </section>
  );
}
