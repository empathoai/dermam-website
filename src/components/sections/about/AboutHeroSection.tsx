import { aboutContent } from '../../../data/aboutContent';
import Container from '../../ui/Container';
import HeroMedia from '../../ui/HeroMedia';
import { motion, Variants } from 'motion/react';
import { useState } from 'react';

export default function AboutHeroSection() {
  const { hero } = aboutContent;
  const [mediaLoaded, setMediaLoaded] = useState(false);

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative h-[60vh] lg:h-[80vh] flex items-center overflow-hidden bg-canvas isolation-isolate">
      <div className="absolute inset-0 z-0">
        <HeroMedia
          type="image"
          src={hero.image.src}
          alt={hero.image.alt}
          onLoaded={() => setMediaLoaded(true)}
          overlay={true}
          overlayType="dark"
        />
      </div>

      <Container className="relative z-10 w-full text-center lg:text-left">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-3xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-sm font-serif"
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-lg md:text-xl mb-10 max-w-xl leading-relaxed drop-shadow-sm"
          >
            {hero.subheadline}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
