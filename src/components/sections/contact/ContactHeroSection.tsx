import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import { motion } from 'motion/react';

export default function ContactHeroSection() {
  const { hero } = contactContent;

  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden bg-canvas isolation-isolate">
      <SectionMedia
        type="image"
        src={hero.image.src}
        alt={hero.image.alt}
        overlay="soft"
      />

      <Container className="relative z-10 w-full text-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight text-white drop-shadow-md font-serif">
            {hero.headline}
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl max-w-xl mx-auto leading-relaxed drop-shadow-md">
            {hero.subheadline}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
