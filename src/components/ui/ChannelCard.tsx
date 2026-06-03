import { MessageCircle, Phone } from '../../design-system/icons';
import React from 'react';

interface ChannelCardProps {
 title: string;
 copy: string;
 cta: string;
 href: string;
 type: "whatsapp" | "phone";
 emphasized?: boolean;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ title, copy, cta, href, type, emphasized }) => {
 const Icon = type === 'whatsapp' ? MessageCircle : Phone;
 const colors = emphasized 
 ? "bg-white border-base-900 shadow-card-soft shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" 
 : "bg-white border-border-card hover:border-base-900 hover:shadow-subtle hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

 return (
 <a 
 href={href}
 target={type === 'whatsapp' ? "_blank" : undefined}
 rel={type === 'whatsapp' ? "noopener noreferrer" : undefined}
 className={`flex items-center gap-5 p-6 rounded-[2rem] border group ${colors}`}
 >
 <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-colors ${emphasized ? 'bg-base-900 text-base-100' : 'bg-canvas text-base-900 group-hover:bg-base-900/10'}`}>
 <Icon size={24} />
 </div>
 
 <div className="flex-grow">
 <h3 className="text-sm font-medium text-text-primary uppercase tracking-[0.15em] mb-1">
 {title}
 </h3>
 <p className="text-sm text-text-secondary mb-1">
 {copy}
 </p>
 </div>

 <div className={`text-base font-medium normal-case tracking-normal transition-transform duration-300 group-hover:translate-x-1 ${emphasized ? 'text-base-900' : 'text-text-secondary group-hover:text-text-primary'}`}>
 {cta}
 </div>
 </a>
 );
};

export default ChannelCard;
