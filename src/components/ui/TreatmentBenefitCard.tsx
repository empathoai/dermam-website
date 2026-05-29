import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, Droplets, Sparkles, Target, Layers, Maximize, Palette } from 'lucide-react';

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
      className="p-8 bg-white rounded-[2.5rem] border border-border-card shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="w-12 h-12 bg-sage/10 rounded-[2rem] flex items-center justify-center text-sage mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-sans text-text-primary mb-3">
        {title}
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
