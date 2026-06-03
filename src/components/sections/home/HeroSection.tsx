import { useState } from 'react';
import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import HeroMedia from '../../ui/HeroMedia';
import TrustItem from '../../ui/TrustItem';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion, useReducedMotion, Variants } from 'motion/react';

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
    <section className="relative min-h-[86vh] flex items-center overflow-hidden bg-base-900 py-20 lg:py-24 isolation-isolate">
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
          className="max-w-[48rem] pt-20 lg:pt-0"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-8">
            <HeroTrustPill>{hero.eyebrow}</HeroTrustPill>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(3.25rem,7.8vw,6.25rem)] font-extrabold leading-[0.96] tracking-[-0.045em] uppercase mb-8 text-base-300"
          >
            <span className="font-extrabold text-base-300">
              {hero.headlinePrefix}
            </span>
            <span className="script-accent inline-block normal-case text-base-300 ml-2 text-[1.42em] align-[-0.08em]">
              {hero.headlineAccent}
            </span>
            <span className="font-extrabold text-base-300">
              {hero.headlineSuffix}
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-base-300 text-lg mb-12 max-w-lg font-light leading-[1.65] tracking-normal"
          >
            {hero.subheadline}
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button
              variant="primary"
              to="/es/reservar"
              className="!bg-base-100 px-10 py-4 !text-base-900 shadow-lg hover:!bg-white hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              {hero.primaryCTA}
            </Button>
            <Button variant="outline" href="#treatments" className="!border-white/10 !bg-white/[0.08] px-10 py-4 !text-base-100 hover:!bg-white/[0.12] w-full sm:w-auto">
              {hero.secondaryCTA}
            </Button>
          </motion.div>
          
          {/* Trust Items */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4"
          >
            {hero.trustItems.map((item, idx) => (
              <div key={idx}>
                <TrustItem item={item} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

    </section>
  );
}
