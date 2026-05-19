import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface rounded-lg border border-border-soft overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;
