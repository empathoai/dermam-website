import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import StatItem from '../../ui/StatItem';
import { Check } from '../../../design-system/icons';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

interface Tier3QuickFitSectionProps {
  quickFacts: Array<{ label: string; value: string }>;
  quickFit: { title: string; items: string[] };
}

export default function Tier3QuickFitSection({ quickFacts, quickFit }: Tier3QuickFitSectionProps) {
  return (
    <section className="bg-canvas py-12 relative z-20">
      <Container>
        {/* Quick Facts Strip */}
        <ResponsiveCardGroup desktopColumns={3} desktopClassName="gap-4 md:gap-6" className="mb-16" mobileCardWidth="78vw">
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
        </ResponsiveCardGroup>

        {/* Is this for you? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.015em] uppercase font-sans text-text-primary mb-10">
            {quickFit.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {quickFit.items.map((item, idx) => {
              const commaIndex = item.indexOf(',');
              const label = commaIndex >= 0 ? item.slice(0, commaIndex).trim() : item;
              const copy = commaIndex >= 0 ? item.slice(commaIndex + 1).trim() : '';
              const totalItems = quickFit.items.length;
              const isLastRow = idx >= totalItems - (totalItems % 2 === 0 ? 2 : 1);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex items-start gap-4 py-5 pr-8 ${isLastRow ? '' : 'border-b border-border-strong'}`}
                >
                  <div className="w-5 h-5 rounded-full border border-border-strong flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} strokeWidth={3} className="text-text-primary" />
                  </div>
                  <p className="text-text-secondary text-base leading-relaxed">
                    <span className="font-semibold text-text-primary">{label}</span>
                    {copy && <span className="font-normal"> — {copy}</span>}
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
