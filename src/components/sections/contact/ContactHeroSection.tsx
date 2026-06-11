import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import { motion } from 'motion/react';

export default function ContactHeroSection() {
  const { hero } = contactContent;

  return (
    <section className="relative hero-viewport overflow-hidden bg-base-900 isolation-isolate">
      <SectionMedia
        type="image"
        src={hero.image.src}
        alt={hero.image.alt}
        overlay="heroSoft"
      />

      <Container className="relative z-10 flex hero-content-viewport w-full items-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-[48rem]"
        >
          <h1 className="text-[clamp(2.65rem,5.8vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.04em] uppercase text-white drop-shadow-md mb-6">
            {hero.headline}
          </h1>
          
          <p className="text-base-300 text-lg max-w-lg font-light leading-[1.65] tracking-normal drop-shadow-md">
            {hero.subheadline}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
