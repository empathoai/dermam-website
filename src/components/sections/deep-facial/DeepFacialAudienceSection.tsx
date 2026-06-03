import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import { Check } from '../../../design-system/icons';
import { motion } from 'motion/react';

export default function DeepFacialAudienceSection() {
  const { audience } = deepFacialContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase">{audience.headline}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {audience.checks.map((check, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex h-[5.625rem] items-center gap-4 p-5 rounded-[2rem] bg-base-600 border border-border-dark hover:border-base-300 hover:-translate-y-1 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <Check className="text-base-100 flex-shrink-0" size={20} />
                <span className="text-base text-base-100 font-medium">{check}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
