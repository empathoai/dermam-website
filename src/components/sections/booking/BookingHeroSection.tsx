import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import HeroTrustPill from '../../ui/HeroTrustPill';
import { motion } from 'motion/react';

export default function BookingHeroSection() {
  const { hero } = bookingContent;

  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-base-900 isolation-isolate">
      <SectionMedia
        type="image"
        src={hero.image.src}
        alt={hero.image.alt}
        overlay="heroSoft"
      />

      <Container className="relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-[48rem] pt-20 lg:pt-0"
        >
          <h1 className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-white drop-shadow-md mb-6">
            {hero.headline}
          </h1>
          
          <p className="text-base-300 text-lg max-w-lg mb-8 font-light leading-[1.65] tracking-normal drop-shadow-md">
            {hero.subheadline}
          </p>

          <HeroTrustPill>{hero.trustLine}</HeroTrustPill>
        </motion.div>
      </Container>
    </section>
  );
}
