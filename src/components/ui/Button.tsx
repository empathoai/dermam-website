import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-primary text-sm';
  
  const variants = {
    primary: 'bg-sage text-white hover:bg-opacity-90 shadow-subtle',
    secondary: 'bg-linen text-text-primary hover:bg-opacity-90',
    outline: 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-white',
    ghost: 'bg-transparent text-text-primary hover:bg-surface-soft'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
