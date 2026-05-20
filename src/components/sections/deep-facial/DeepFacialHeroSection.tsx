import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import HeroMedia from '../../ui/HeroMedia';
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center overflow-hidden bg-canvas isolation-isolate">
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
           className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-sage-soft text-[10px] md:text-xs font-semibold uppercase tracking-widest text-sage">
              {hero.eyebrow}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-text-primary"
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
                onClick={handleBookingClick}
                className="px-10 py-4 shadow-lg"
            >
              {hero.primaryCTA}
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-4 py-3 px-6 bg-white/30 backdrop-blur-md rounded-full border border-white/40"
          >
             <span className="text-[10px] md:text-xs font-semibold text-text-primary uppercase tracking-widest">
              {hero.trustLine}
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
