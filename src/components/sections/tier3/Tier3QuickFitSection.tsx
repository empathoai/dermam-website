import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import StatItem from '../../ui/StatItem';
import { Check } from 'lucide-react';

interface Tier3QuickFitSectionProps {
  quickFacts: Array<{ label: string; value: string }>;
  quickFit: { title: string; items: string[] };
}

export default function Tier3QuickFitSection({ quickFacts, quickFit }: Tier3QuickFitSectionProps) {
  return (
    <section className="bg-white py-12 relative z-20">
      <Container>
        {/* Quick Facts Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-border-soft mb-20">
          {quickFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <StatItem stat={fact} />
            </motion.div>
          ))}
        </div>

        {/* Is this for you? */}
        <div className="max-w-4xl mx-auto bg-canvas rounded-[40px] p-10 md:p-16 border border-border-soft shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">
              {quickFit.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {quickFit.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-sage flex-shrink-0 mt-0.5 transition-colors group-hover:bg-sage group-hover:text-white">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
