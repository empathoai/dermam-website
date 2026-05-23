import React from 'react';
import { motion } from 'motion/react';

interface TreatmentStepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function TreatmentStepCard({ number, title, description }: TreatmentStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 bg-canvas rounded-[2.5rem] border border-border-soft relative group hover:border-sage/20 transition-colors"
    >
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border border-border-soft rounded-full flex items-center justify-center text-sage font-bold shadow-sm">
        {number}
      </div>
      <h3 className="text-xl font-sans text-text-primary mb-4 group-hover:text-sage transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
