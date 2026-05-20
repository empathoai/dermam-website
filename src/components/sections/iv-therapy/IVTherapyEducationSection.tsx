import React from 'react';
import { IVEducationSectionContent } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
import StatItem from '../../ui/StatItem';

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
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3]">
              <ResponsiveImage
                src={content.image.src}
                alt={content.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft decorative element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Education Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-8 leading-tight">
              {content.title}
            </h2>

            <div className="space-y-6 mb-12">
              <div className="p-6 bg-canvas rounded-2xl border border-border-soft">
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {content.copyOral}
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl border-2 border-sage/20 shadow-sm shadow-sage/5">
                <p className="text-text-primary font-medium text-sm md:text-base leading-relaxed">
                  {content.copyIV}
                </p>
              </div>
            </div>

            <p className="text-text-secondary text-xs italic opacity-70">
              *La absorción directa al torrente sanguíneo permite una mayor disponibilidad de los nutrientes sin pasar primero por el sistema digestivo.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border-soft">
          {content.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center md:text-left"
            >
              <StatItem stat={stat} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
