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
    ? "bg-white border-base-900 ring-1 ring-base-900/10 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" 
    : "bg-white border-border-soft hover:border-base-300 hover:shadow-subtle hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <a 
      href={channel.href}
      target={channel.type === 'phone' || channel.href.startsWith('#') ? undefined : "_blank"}
      rel={channel.type === 'phone' || channel.href.startsWith('#') ? undefined : "noopener noreferrer"}
      className={`flex items-center gap-5 p-6 rounded-[2rem] border group ${colors}`}
    >
      <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 transition-colors ${channel.emphasized ? 'bg-base-900 text-base-100' : 'bg-canvas text-base-900 group-hover:bg-base-900/10'}`}>
        <Icon size={24} />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-text-primary uppercase tracking-[0.15em] mb-1">
            {channel.title}
        </h3>
        <p className="text-base text-text-primary font-medium mb-1">
            {channel.value}
        </p>
        <span className="text-[11px] text-text-secondary uppercase tracking-[0.15em] font-medium opacity-70">
            {channel.helper}
        </span>
      </div>

      <div className={`text-base font-medium normal-case tracking-normal transition-transform duration-300 group-hover:translate-x-1 ${channel.emphasized ? 'text-base-900' : 'text-text-secondary group-hover:text-text-primary'}`}>
        {channel.cta}
      </div>
    </a>
  );
};

export default ContactChannelCard;
