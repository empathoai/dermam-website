import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function PostOpUrgencySection() {
  const { urgency } = postOpContent;

  const icons = {
    warning: <AlertCircle className="text-base-900" size={24} />,
    success: <CheckCircle2 className="text-base-900" size={24} />,
    info: <Clock className="text-base-900" size={24} />,
  };

  const borderStyles = {
    warning: 'border-border-soft bg-white',
    success: 'border-base-900/40 bg-white shadow-subtle ring-1 ring-base-900/5',
    info: 'border-border-soft bg-white',
  };

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase text-center mb-16 leading-tight">
            {urgency.headline}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {urgency.blocks.map((block: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-[2rem] border flex h-full flex-col gap-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-subtle hover:border-base-300 ${borderStyles[block.type as keyof typeof borderStyles]}`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-canvas">
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
