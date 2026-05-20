import { useState } from 'react';
import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import HeroMedia from '../../ui/HeroMedia';
import { motion, useReducedMotion, Variants } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { hero } = homeContent;
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
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center overflow-hidden bg-canvas isolation-isolate">
      {/* Background Media - Always takes priority */}
      <div className="absolute inset-0 z-0">
        <HeroMedia
          type={hero.video?.src ? 'video' : 'image'}
          src={hero.video?.src || hero.image.src}
          poster={hero.video?.poster || hero.image.src}
          alt={hero.image.alt}
          onLoaded={() => setMediaLoaded(true)}
        />
      </div>

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl pt-20 lg:pt-0"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-border-soft text-[10px] md:text-xs font-semibold uppercase tracking-widest text-text-secondary">
              {hero.eyebrow}
            </span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-8xl mb-8 leading-[1] text-text-primary"
          >
            {hero.headlinePrefix}
            <span className="script-accent inline-block italic font-serif text-base-900 ml-2">
              {hero.headlineAccent}
            </span>
            {hero.headlineSuffix}
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl mb-12 max-w-lg leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button variant="primary" to="/es/reservar" className="px-10 py-4 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
              {hero.primaryCTA}
            </Button>
            <Button variant="outline" href="#treatments" className="px-10 py-4 w-full sm:w-auto">
              {hero.secondaryCTA}
            </Button>
          </motion.div>
          
          {/* Trust Items */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 pt-8 border-t border-border-soft"
          >
            {hero.trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-base-900" />
                <span className="text-sm font-medium text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative botanical element or scroll indicator could go here */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: mediaLoaded ? 1 : 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-base-900 to-transparent" />
      </motion.div>
    </section>
  );
}
