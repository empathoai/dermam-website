import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface rounded-lg border border-border-soft overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
