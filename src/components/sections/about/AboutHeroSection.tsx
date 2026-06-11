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

  const renderHeadline = () => {
    const accentWord = 'piel';
    if (!hero.headline.toLowerCase().includes(accentWord)) {
      return hero.headline;
    }

    const idx = hero.headline.toLowerCase().lastIndexOf(accentWord);
    const before = hero.headline.slice(0, idx);
    const after = hero.headline.slice(idx + accentWord.length);

    return (
      <>
        {before}
        <span className="font-script normal-case font-light tracking-normal align-baseline inline-block translate-y-[0.08em] text-[1.42em] leading-[0.72] mx-[0.08em]">
          piel
        </span>
        {after}
      </>
    );
  };

  return (
    <section className="relative hero-viewport overflow-hidden bg-base-900 isolation-isolate">
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

      <Container className="relative z-10 flex hero-content-viewport w-full items-center">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="max-w-[48rem]"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-white drop-shadow-sm mb-6"
          >
            {renderHeadline()}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base-300 text-lg mb-10 max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-sm"
          >
            {hero.subheadline}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
