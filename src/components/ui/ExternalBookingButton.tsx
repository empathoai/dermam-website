import { ExternalLink, MessageCircle } from '../../design-system/icons';
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
 const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[0.625rem] text-base font-medium normal-case tracking-normal transition-all duration-300 active:scale-[0.98]";
 const typeStyles = type === 'square' 
 ? "bg-primary text-white hover:bg-primary-deep shadow-lg shadow-sage/10" 
 : "bg-white border-2 border-border-strong text-text-primary hover:bg-primary hover:text-text-inverse";
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
