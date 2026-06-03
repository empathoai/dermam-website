import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Info } from '../../../design-system/icons';

interface Tier3SafetySectionProps {
  title: string;
  items: string[];
  disclaimer?: string;
}

export default function Tier3SafetySection({ title, items, disclaimer }: Tier3SafetySectionProps) {
  return (
    <section className="py-24 bg-canvas">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <ShieldCheck size={20} className="text-text-secondary" />
                    <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {items.map((item, idx) => {
                      const isLast = idx === items.length - 1;

                      return (
                        <div key={idx} className={`flex gap-4 ${isLast ? '' : 'border-b border-border pb-5 mb-5'}`}>
                            <Check size={13} className="text-text-primary mt-1 flex-shrink-0" />
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                {item}
                            </p>
                        </div>
                      );
                    })}
                </div>

                {disclaimer && (
                    <div className="flex gap-4 bg-surface border border-border rounded-[1.5rem] p-6">
                        <Info size={18} className="text-text-muted flex-shrink-0 mt-0.5" />
                        <p className="text-text-secondary text-xs italic opacity-80 leading-relaxed">
                            {disclaimer}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
      </Container>
    </section>
  );
}
