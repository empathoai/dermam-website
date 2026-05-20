import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, variant = 'light', className = '' }) => {
  const baseStyles = 'rounded-md overflow-hidden transition-all duration-300';
  
  const variants = {
    light: 'bg-surface border-[0.5px] border-base-300 text-text-primary',
    dark: 'bg-base-800 border-[0.5px] border-base-700 text-base-100'
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
