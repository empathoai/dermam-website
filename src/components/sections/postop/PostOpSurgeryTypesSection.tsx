import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function PostOpSurgeryTypesSection() {
  const { surgeryTypes } = postOpContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase">{surgeryTypes.headline}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {surgeryTypes.checks.map((check, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-[1rem] bg-canvas/30 border border-border-soft hover:border-sage-soft transition-colors duration-300"
              >
                <CheckCircle2 className="text-sage flex-shrink-0 mt-0.5" size={20} />
                <span className="text-base text-text-primary font-medium">{check}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
