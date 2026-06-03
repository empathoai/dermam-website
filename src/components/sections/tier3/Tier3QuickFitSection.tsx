import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import StatItem from '../../ui/StatItem';
import { Check } from '../../../design-system/icons';

interface Tier3QuickFitSectionProps {
  quickFacts: Array<{ label: string; value: string }>;
  quickFit: { title: string; items: string[] };
}

export default function Tier3QuickFitSection({ quickFacts, quickFit }: Tier3QuickFitSectionProps) {
  return (
    <section className="bg-canvas py-12 relative z-20">
      <Container>
        {/* Quick Facts Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          {quickFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <StatItem stat={fact} />
            </motion.div>
          ))}
        </div>

        {/* Is this for you? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted mb-8">
            {quickFit.title}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {quickFit.items.map((item, idx) => {
              const commaIndex = item.indexOf(',');
              const label = commaIndex >= 0 ? item.slice(0, commaIndex).trim() : item;
              const copy = commaIndex >= 0 ? item.slice(commaIndex + 1).trim() : '';
              const isLast = idx === quickFit.items.length - 1;

              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`flex items-start gap-3 py-4 ${isLast ? '' : 'border-b border-border'}`}
              >
                <Check size={14} strokeWidth={3} className="text-text-primary mt-1 flex-shrink-0" />
                <p className="text-text-secondary text-sm leading-relaxed">
                  <span className="font-medium text-text-primary">{label}</span>
                  {copy && <span>, {copy}</span>}
                </p>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
