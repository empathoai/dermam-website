import { useState } from 'react';
import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import Button from '../../ui/Button';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface HubHeroSectionProps {
  content: HubPageContent['hero'];
}

export default function HubHeroSection({ content }: HubHeroSectionProps) {
  const [isMediaReady, setIsMediaReady] = useState(false);

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-canvas isolation-isolate">
      <HeroMedia
        type="image"
        src={content.image.src}
        alt={content.image.alt}
        overlay={true}
        overlayType="dark"
        onLoaded={() => setIsMediaReady(true)}
      />

      <Container className="relative z-10 w-full mt-10 md:mt-0">
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

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
               <Link to="/es/reservar">
                  <Button className="bg-white text-base-900 hover:bg-base-100 min-w-[200px]">
                    {content.ctaLabel}
                  </Button>
               </Link>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] md:text-xs text-white/80 font-medium tracking-wide uppercase"
                >
                  {content.trustLine}
                </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
