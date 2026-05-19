import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  isLoading = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text-primary text-sm relative';
  
  const variants = {
    primary: 'bg-sage text-white hover:bg-opacity-90 shadow-subtle',
    secondary: 'bg-linen text-text-primary hover:bg-opacity-90',
    outline: 'border border-text-primary text-text-primary hover:bg-text-primary hover:text-white',
    ghost: 'bg-transparent text-text-primary hover:bg-surface-soft'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} ${isLoading ? 'text-transparent cursor-not-allowed select-none' : ''}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      {children}
    </button>
  );
}
