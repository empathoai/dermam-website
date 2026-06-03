import React from 'react';

interface TreatmentBadgeProps {
 children: React.ReactNode;
 variant?: 'primary' | 'secondary' | 'outline';
}

const TreatmentBadge: React.FC<TreatmentBadgeProps> = ({ children, variant = 'primary' }) => {
 const variants = {
 primary: 'bg-primary text-white',
 secondary: 'bg-surface-soft text-text-primary',
 outline: 'border border-border-strong text-text-primary'
 };

 return (
 <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-[0.15em] ${variants[variant]}`}>
 {children}
 </span>
 );
};

export default TreatmentBadge;
