import React from 'react';

interface TreatmentBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const TreatmentBadge: React.FC<TreatmentBadgeProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-sage text-white',
    secondary: 'bg-sage-soft/30 text-sage',
    outline: 'border border-sage text-sage'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.15em] ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default TreatmentBadge;
