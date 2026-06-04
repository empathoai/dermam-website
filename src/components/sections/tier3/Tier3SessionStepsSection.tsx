import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

interface Tier3SessionStepsSectionProps {
  steps: Array<{ title: string; description: string }>;
}

export default function Tier3SessionStepsSection({ steps }: Tier3SessionStepsSectionProps) {
  return (
    <section className="py-24 bg-base-900 text-base-100">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6 text-base-100">
            Tu experiencia paso a paso
          </h2>
          <p className="text-base-300 text-base md:text-lg max-w-2xl leading-[1.65] font-light tracking-normal mx-auto">
            ¿Qué sucede durante tu sesión en DERMA.M? Transparencia y confianza en cada etapa.
          </p>
        </div>

        <ResponsiveCardGroup
          desktopColumns={steps.length >= 4 ? 4 : 3}
          mobileCardWidth="84vw"
          indicatorTone="light"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex h-full min-h-[9.5rem] flex-col bg-white/[0.06] p-8 rounded-[1rem] border border-white/10 group hover:-translate-y-1 hover:border-white/15 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <span className="text-4xl font-bold text-base-100 opacity-20 leading-none mb-4 block group-hover:opacity-30 transition-opacity">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-semibold mb-2 text-base-100">{step.title}</h3>
                <p className="text-base-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </div>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
