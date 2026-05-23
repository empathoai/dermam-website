import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrfAudienceSection() {
  const { audience } = prfContent;

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
                className="flex items-start gap-4 p-4 rounded-[1rem] border border-border-soft hover:border-prf-soft transition-colors duration-300"
              >
                <CheckCircle2 className="text-prf flex-shrink-0 mt-0.5" size={20} />
                <span className="text-base text-text-primary font-medium">{check}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
