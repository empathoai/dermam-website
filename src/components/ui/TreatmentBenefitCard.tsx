import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Droplets, Sparkles, Target, Layers, Maximize, Palette } from '../../design-system/icons';

const icons: Record<string, LucideIcon> = {
  droplets: Droplets,
  sparkles: Sparkles,
  focus: Target,
  target: Target,
  layers: Layers,
  maximize: Maximize,
  palette: Palette
};

interface TreatmentBenefitCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function TreatmentBenefitCard({ title, description, icon }: TreatmentBenefitCardProps) {
  const Icon = (icon && icons[icon]) || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex h-full min-h-[14rem] flex-col bg-white p-8 rounded-[2rem] border border-border-card shadow-sm hover:-translate-y-1 hover:border-base-900 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="w-12 h-12 bg-base-100 rounded-[2rem] flex items-center justify-center text-text-secondary mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary text-base leading-[1.6]">
        {description}
      </p>
    </motion.div>
  );
}
