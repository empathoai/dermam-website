import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function PostOpUrgencySection() {
  const { urgency } = postOpContent;

  const icons = {
    warning: <AlertCircle className="text-text-secondary" size={24} />,
    success: <CheckCircle2 className="text-sage" size={24} />,
    info: <Clock className="text-text-secondary" size={24} />,
  };

  const bgStyles = {
    warning: 'bg-canvas',
    success: 'bg-sage-soft/30 border-sage-soft',
    info: 'bg-white',
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase text-center mb-16 leading-tight">
            {urgency.headline}
          </h2>
          
          <div className="flex flex-col gap-6">
            {urgency.blocks.map((block: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-[2rem] border border-border-soft flex items-start gap-6 ${bgStyles[block.type as keyof typeof bgStyles]}`}
              >
                <div className="flex-shrink-0 mt-1">
                  {icons[block.type as keyof typeof icons]}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{block.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
