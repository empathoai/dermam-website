import React from 'react';
import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import { motion } from 'motion/react';

interface HubIntroSectionProps {
  content: HubPageContent['intro'];
}

export default function HubIntroSection({ content }: HubIntroSectionProps) {
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
          {content.eyebrow && (
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.15em] mb-2 block">
              {content.eyebrow}
            </span>
          )}
          
          {content.headline && (
            <h2 className="text-[clamp(1.25rem,2.2vw,1.65rem)] font-extrabold tracking-[-0.02em] uppercase font-sans text-text-primary leading-[1.2] mb-2.5">
              {content.headline}
            </h2>
          )}
          
          {content.body && (
            <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto mb-6">
              {content.body}
            </p>
          )}

          {/* Clickable Objective Pills */}
          {content.chips && content.chips.length > 0 && (
            <div className="flex flex-wrap gap-2.5 justify-center">
              {content.chips.map((chip, idx) => (
                <a 
                  key={idx}
                  href={chip.targetId}
                  className="inline-flex items-center justify-center px-4 py-2 bg-white border border-border-card rounded-full text-[11px] font-medium text-text-primary hover:border-border-card-hover hover:bg-canvas transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer"
                >
                  {chip.label}
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
