import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';

export default function DeepFacialBenefitsSection() {
  const { benefits } = deepFacialContent;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="space-y-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                    <ResponsiveImage
                        src={benefit.image.src}
                        alt={benefit.image.alt}
                        className="w-full aspect-[4/3] object-cover"
                    />
                </div>
              </motion.div>
              
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="lg:w-1/2"
              >
                <span className="text-sage font-semibold text-xs uppercase tracking-[0.2em] mb-4 block">Beneficio 0{idx + 1}</span>
                <h3 className="text-3xl md:text-4xl mb-6 font-serif">{benefit.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{benefit.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
