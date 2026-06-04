import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, variant = 'light', className = '' }) => {
  const baseStyles = 'rounded-[1rem] overflow-hidden transition-all duration-300';
  
  const variants = {
    light: 'bg-surface border border-border-card text-text-primary',
    dark: 'bg-base-800 border border-white/10 text-base-100'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
