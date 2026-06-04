import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import HeroMedia from '../../ui/HeroMedia';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion, useReducedMotion, Variants } from 'motion/react';
import { useState } from 'react';

export default function DeepFacialHeroSection() {
  const { hero } = deepFacialContent;
  const [mediaLoaded, setMediaLoaded] = useState(false);
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const handleBookingClick = () => {
    window.open('https://squareup.com/appointments/book/dermam', '_blank');
  };

  return (
    <section className="relative min-h-[86vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-base-900 py-20 lg:py-24 isolation-isolate">
      <div className="absolute inset-0 z-0">
        <HeroMedia
          type="image"
          src={hero.image.src}
          alt={hero.image.alt}
          onLoaded={() => setMediaLoaded(true)}
          overlay={true}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-[48rem] pt-20 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="mb-6 flex flex-col items-start gap-3">
            <HeroTrustPill>{hero.trustLine}</HeroTrustPill>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3rem,6.6vw,5.35rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase text-base-300 mb-8"
          >
            {(() => {
              const full = hero.headline;
              const idx = full.lastIndexOf(' en ');
              const treatment = idx >= 0 ? full.slice(0, idx) : full;
              return (
                <>
                  {treatment}
                  <span className="block text-[clamp(0.9rem,1.8vw,1.35rem)] font-medium normal-case tracking-[0.02em] text-base-300/70 mt-3 leading-[1.4]">
                    en West Palm Beach · Miami
                  </span>
                </>
              );
            })()}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base-300 text-lg mb-12 max-w-lg font-light leading-[1.65] tracking-normal"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
                onClick={handleBookingClick}
                className="!bg-base-100 px-10 py-4 !text-base-900 shadow-subtle hover:!bg-white hover:shadow-subtle transition-shadow w-full sm:w-auto"
            >
              {hero.primaryCTA}
            </Button>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
