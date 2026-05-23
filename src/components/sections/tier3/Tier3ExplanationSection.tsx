import React from 'react';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
import { ImageAsset } from '../../../types/common';

interface Tier3ExplanationSectionProps {
  title: string;
  body: string;
  media?: ImageAsset;
}

export default function Tier3ExplanationSection({ title, body, media }: Tier3ExplanationSectionProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Media */}
          {media && (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-border-soft">
                <ResponsiveImage
                  src={media.src}
                  alt={media.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 bg-sage/5 rounded-full blur-3xl opacity-60" />
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
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed first-letter:text-5xl first-letter:font-sans first-letter:text-sage first-letter:mr-3 first-letter:float-left">
                {body}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
