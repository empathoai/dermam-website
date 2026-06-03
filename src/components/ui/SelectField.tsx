import { SelectHTMLAttributes } from 'react';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  error?: string;
  id: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: any) => void;
  required?: boolean;
  className?: string;
}

export default function SelectField({ label, options, error, id, placeholder, ...props }: SelectFieldProps) {
  const { className = "", ...rest } = props;
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label 
        htmlFor={id} 
        className="text-label-xs font-medium uppercase tracking-[0.15em] text-text-primary ml-1"
      >
        {label} {props.required && <span className="text-base-900">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`w-full px-5 py-4 rounded-[1rem] bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-base-900/10 text-sm appearance-none ${error ? 'border-red-300' : 'border-border-soft focus:border-base-900'}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary opacity-50">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {error && (
        <span id={`${id}-error`} className="text-label-xs text-red-500 font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
}
