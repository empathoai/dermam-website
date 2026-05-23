import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import { motion } from 'motion/react';

interface HubIntroSectionProps {
  content: HubPageContent['intro'];
}

export default function HubIntroSection({ content }: HubIntroSectionProps) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-canvas/30 rounded-[2.5rem] border border-border-soft"
              >
                <div className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-sage uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-border-soft/50 w-full max-w-4xl mx-auto" aria-hidden="true" />

          {/* Benefit Cards */}
          <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
            {content.benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-6 rounded-[2rem] bg-white border border-border-soft/50 hover:border-sage-soft transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-sage/10 text-sage flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:text-white transition-colors duration-500">
                  <span className="text-sm font-bold opacity-80 group-hover:opacity-100">◆</span>
                </div>
                <div>
                  <h3 className="text-lg font-sans text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
