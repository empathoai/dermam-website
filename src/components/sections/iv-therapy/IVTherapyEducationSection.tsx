import React from 'react';
import { IVEducationSectionContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';

interface IVTherapyEducationSectionProps {
  content: IVEducationSectionContent;
}

export default function IVTherapyEducationSection({ content }: IVTherapyEducationSectionProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16">
          {/* Process Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[1rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <ResponsiveImage
                src={content.image.src}
                alt={content.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-base-900/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Education Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-8 leading-tight">
              {content.title}
            </h2>

            <div className="space-y-6 mb-12">
              <div className="p-6 bg-canvas rounded-[1rem] border border-border-card hover:-translate-y-1 hover:border-border-card-hover hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {content.copyOral}
                </p>
              </div>
              
              <div className="p-6 bg-base-900 rounded-[1rem] border border-base-900 shadow-md shadow-canvas/10 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <p className="text-base-100 font-medium text-sm md:text-base leading-relaxed">
                  {content.copyIV}
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-xs italic opacity-70">
              *La absorción directa al torrente sanguíneo permite una mayor disponibilidad de los nutrientes sin pasar primero por el sistema digestivo.
            </p>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}
