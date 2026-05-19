import { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
  type?: string;
  value?: string | number;
  onChange?: (e: any) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}

export default function FormField({ label, error, id, ...props }: FormFieldProps) {
  const { className = "", ...rest } = props;
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label 
        htmlFor={id} 
        className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary ml-1"
      >
        {label} {props.required && <span className="text-sage">*</span>}
      </label>
      <input
        id={id}
        className={`w-full px-5 py-4 rounded-xl bg-canvas border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage/20 text-sm ${error ? 'border-red-300' : 'border-border-soft focus:border-sage'}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="text-[10px] text-red-500 font-medium ml-1">
          {error}
        </span>
      )}
    </div>
  );
}
