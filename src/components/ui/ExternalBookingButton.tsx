import { ExternalLink, MessageCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface ExternalBookingButtonProps {
  href: string;
  type: 'square' | 'whatsapp';
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function ExternalBookingButton({ 
  href, 
  type, 
  children, 
  className = "", 
  fullWidth = false 
}: ExternalBookingButtonProps) {
  const Icon = type === 'square' ? ExternalLink : MessageCircle;
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-[0.98]";
  const typeStyles = type === 'square' 
    ? "bg-sage text-white hover:bg-sage-deep shadow-lg shadow-sage/10" 
    : "bg-white border-2 border-sage text-sage hover:bg-sage hover:text-white";
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${typeStyles} ${widthStyles} ${className}`}
    >
      {children}
      <Icon size={16} className="opacity-80" />
    </a>
  );
}
