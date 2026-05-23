import { MessageCircle, Phone } from 'lucide-react';
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
    ? "bg-white border-sage ring-1 ring-sage-soft/30 shadow-lg shadow-sage/5" 
    : "bg-white border-border-soft hover:border-sage-soft";

  return (
    <a 
      href={href}
      target={type === 'whatsapp' ? "_blank" : undefined}
      rel={type === 'whatsapp' ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-5 p-6 rounded-[2rem] border transition-all duration-300 group ${colors}`}
    >
      <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-colors ${emphasized ? 'bg-sage text-white' : 'bg-canvas text-sage group-hover:bg-sage/10'}`}>
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

      <div className={`text-base font-medium normal-case tracking-normal transition-transform duration-300 group-hover:translate-x-1 ${emphasized ? 'text-sage' : 'text-text-secondary group-hover:text-sage'}`}>
        {cta}
      </div>
    </a>
  );
};

export default ChannelCard;
