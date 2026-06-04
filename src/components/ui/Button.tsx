import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
  disabled?: boolean;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  isLoading = false,
  to,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-[0.625rem] font-medium leading-none tracking-normal normal-case transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 text-base relative';
  
  const variants = {
    primary: 'bg-base-900 text-base-100 hover:bg-base-800 shadow-subtle',
    secondary: 'border border-border-card-hover bg-transparent text-base-900 hover:border-border-featured hover:bg-base-200',
    outline: 'border border-border-card-hover bg-transparent text-base-900 hover:border-border-featured hover:bg-base-200',
    ghost: 'bg-transparent text-base-900 hover:bg-base-200'
  };

  const fullClassName = `${baseStyles} ${variants[variant]} ${className} ${isLoading ? 'text-transparent cursor-not-allowed select-none' : ''}`;

  if (to) {
    return (
      <Link 
        to={to} 
        className={fullClassName}
        onClick={props.onClick as any}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={target}
        rel={rel}
        className={fullClassName}
        onClick={props.onClick as any}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={fullClassName}
      disabled={isLoading || props.disabled}
      type={props.type || 'button'}
      onClick={props.onClick}
      {...(props as any)}
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
