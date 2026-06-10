import React from 'react';
import Container from '../../ui/Container';
import { motion } from 'motion/react';

export default function PostOpSurgeryTypesSection() {
  const eyebrow = 'Recuperación postoperatoria';
  const headline = '¿Vienes de una cirugía estética?';
  const support = 'Este protocolo acompaña procesos de recuperación donde se necesita drenaje, manejo de inflamación y seguimiento profesional.';
  const chips = [
    'Liposucción',
    'Abdominoplastia',
    'BBL',
    'Mastoplastia',
    'Rinoplastia',
    'Otro procedimiento estético'
  ];

  return (
    <section className="py-8 lg:py-10 bg-canvas border-b border-border-subtle">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.15em] mb-2 block">
            {eyebrow}
          </span>
          
          <h2 className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-extrabold tracking-[-0.02em] uppercase font-sans text-text-primary leading-[1.2] mb-2.5">
            {headline}
          </h2>
          
          <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-6">
            {support}
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center">
            {chips.map((chip, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center justify-center px-4 py-2 bg-white border border-border-card rounded-full text-[11px] font-medium text-text-primary shadow-sm hover:border-border-card-hover hover:bg-canvas transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
