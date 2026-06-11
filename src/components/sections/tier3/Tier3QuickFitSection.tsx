import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import { Check } from '../../../design-system/icons';

interface Tier3QuickFitSectionProps {
  quickFacts: Array<{ label: string; value: string }>;
  quickFit: { title: string; items: string[] };
}

export default function Tier3QuickFitSection({ quickFacts, quickFit }: Tier3QuickFitSectionProps) {
  const columnsCount = quickFit.items.length;
  const gridColsClass = columnsCount === 3 
    ? 'lg:grid-cols-3' 
    : columnsCount === 2 
      ? 'lg:grid-cols-2' 
      : 'lg:grid-cols-4';

  return (
    <section className="bg-canvas py-12 lg:py-16 relative z-20">
      <Container>
        {/* Quick Facts Strip */}
        <div className="grid grid-cols-3 divide-x divide-border-subtle text-center mb-12 max-w-4xl mx-auto">
          {quickFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center px-2"
            >
              <span className="text-label-xs font-medium uppercase tracking-[0.16em] text-text-secondary mb-2">
                {fact.label}
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight tracking-[-0.02em] font-sans text-text-primary">
                {fact.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-border-subtle mb-12 max-w-4xl mx-auto" />

        {/* Indicado para: Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-border-card rounded-[1.25rem] p-6 sm:p-8 lg:p-10 shadow-subtle max-w-4xl mx-auto"
        >
          <h3 className="text-center text-lg sm:text-xl font-semibold leading-tight tracking-[-0.015em] font-sans text-text-primary mb-8">
            {quickFit.title}
          </h3>

          <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-4`}>
            {quickFit.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-canvas px-4 py-4 rounded-[0.75rem] flex items-center justify-start gap-3 w-full h-full"
              >
                <div className="w-5 h-5 rounded-full border border-border-strong flex items-center justify-center flex-shrink-0">
                  <Check size={11} strokeWidth={3} className="text-text-primary" />
                </div>
                <span className="text-text-primary text-sm sm:text-base font-sans font-medium leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
