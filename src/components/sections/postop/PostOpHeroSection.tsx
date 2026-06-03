import { postOpContent } from '../../../data/postOpLanding';
import { siteConfig } from '../../../data/siteConfig';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import HeroMedia from '../../ui/HeroMedia';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion, useReducedMotion, Variants } from 'motion/react';
import { useState } from 'react';

export default function PostOpHeroSection() {
  const { hero } = postOpContent;
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

  const handleConsultClick = () => {
    const message = siteConfig.whatsappMessagePostOp;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center overflow-hidden bg-base-900 isolation-isolate">
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
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.08] px-4 py-1.5 text-xs font-light tracking-normal normal-case text-base-200 backdrop-blur-sm">
              {hero.eyebrow}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-base-100 mb-6"
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base-300 text-lg mb-10 max-w-lg font-light leading-[1.65] tracking-normal"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
                onClick={handleConsultClick}
                className="px-10 py-4 shadow-lg w-full sm:w-auto"
            >
              {hero.primaryCTA}
            </Button>
            <Button 
                variant="outline"
                onClick={handleConsultClick}
                className="!border-white/10 !bg-white/[0.08] px-10 py-4 !text-base-100 hover:!bg-white/[0.12] w-full sm:w-auto"
            >
              {hero.secondaryCTA}
            </Button>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
