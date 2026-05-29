import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

interface Tier3SafetySectionProps {
  title: string;
  items: string[];
  disclaimer?: string;
}

export default function Tier3SafetySection({ title, items, disclaimer }: Tier3SafetySectionProps) {
  return (
    <section className="py-24 bg-white border-t border-border-soft">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-canvas border border-border-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
          >
            {/* Background Icon */}
            <div className="absolute -top-12 -right-12 text-sage/5 opacity-50 pointer-events-none">
                <ShieldCheck size={240} />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center text-sage">
                        <ShieldCheck size={24} />
                    </div>
                    <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {disclaimer && (
                    <div className="flex gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-[2rem] border border-border-card">
                        <Info size={18} className="text-sage flex-shrink-0 mt-0.5" />
                        <p className="text-text-secondary text-xs italic opacity-80 leading-relaxed">
                            {disclaimer}
                        </p>
                    </div>
                )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
