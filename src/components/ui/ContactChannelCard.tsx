import { ContactChannel } from '../../types/contact';
import { MessageCircle, Phone, Instagram, MapPin } from 'lucide-react';
import React from 'react';

interface ContactChannelCardProps {
  channel: ContactChannel;
}

const ContactChannelCard: React.FC<ContactChannelCardProps> = ({ channel }) => {
  const Icon = {
    whatsapp: MessageCircle,
    phone: Phone,
    instagram: Instagram,
    visit: MapPin
  }[channel.type];

  const colors = channel.emphasized 
    ? "bg-white border-sage ring-1 ring-sage-soft/30 shadow-lg shadow-sage/5" 
    : "bg-white border-border-soft hover:border-sage-soft";

  return (
    <a 
      href={channel.href}
      target={channel.type === 'phone' || channel.href.startsWith('#') ? undefined : "_blank"}
      rel={channel.type === 'phone' || channel.href.startsWith('#') ? undefined : "noopener noreferrer"}
      className={`flex items-center gap-5 p-6 rounded-2xl border transition-all duration-300 group ${colors}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${channel.emphasized ? 'bg-sage text-white' : 'bg-canvas text-sage group-hover:bg-sage/10'}`}>
        <Icon size={24} />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-1">
            {channel.title}
        </h3>
        <p className="text-base text-text-primary font-medium mb-1">
            {channel.value}
        </p>
        <span className="text-[11px] text-text-secondary uppercase tracking-widest font-semibold opacity-70">
            {channel.helper}
        </span>
      </div>

      <div className={`text-xs font-bold uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-1 ${channel.emphasized ? 'text-sage' : 'text-text-secondary group-hover:text-sage'}`}>
        {channel.cta}
      </div>
    </a>
  );
};

export default ContactChannelCard;
