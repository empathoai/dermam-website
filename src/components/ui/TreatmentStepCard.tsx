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
      className="relative flex h-full min-h-[9.5rem] flex-col bg-white p-8 rounded-[2rem] border border-border-card group hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <span className="absolute top-4 right-6 text-6xl font-sans text-text-primary opacity-5 group-hover:opacity-10 transition-opacity">
        {number}
      </span>
      <div className="relative z-10">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
