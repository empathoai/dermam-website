import React from 'react';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
import { ImageAsset } from '../../../types/common';

interface Tier3ExplanationSectionProps {
  eyebrow?: string;
  title: string;
  body: string;
  media?: ImageAsset;
}

export default function Tier3ExplanationSection({ eyebrow, title, body, media }: Tier3ExplanationSectionProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Media */}
          {media && (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[1rem] overflow-hidden aspect-[4/3] shadow-card-soft">
                <ResponsiveImage
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={media ? "lg:w-1/2" : "w-full text-center max-w-3xl mx-auto"}
          >
            {eyebrow && (
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-text-muted mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.015em] uppercase font-sans text-text-primary">
              {title}
            </h2>
            <hr className="border-t border-border-strong my-6 w-12" />
            <div className="space-y-6">
              <p className="text-text-secondary text-base leading-relaxed">
                {body}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
