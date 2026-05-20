import { BookingTreatment } from '../../types/booking';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import React from 'react';

interface BookingTreatmentRowProps {
  treatment: BookingTreatment;
}

const BookingTreatmentRow: React.FC<BookingTreatmentRowProps> = ({ treatment }) => {
  const isSquare = treatment.bookingType === 'square';
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(treatment.whatsappMessage || '')}`;
  const href = isSquare ? treatment.squareUrl : whatsappUrl;

  return (
    <div className="flex items-center justify-between p-5 md:p-6 border-b border-border-soft last:border-0 hover:bg-canvas/20 transition-colors group">
      <div className="pr-4">
        <h3 className="text-sm md:text-base font-serif text-text-primary mb-1">{treatment.title}</h3>
        <p className="text-xs text-text-secondary leading-relaxed">{treatment.description}</p>
      </div>
      
      <div className="flex-shrink-0">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900 ${
            isSquare 
              ? 'border-[2px] border-base-900 text-base-900 hover:bg-base-900 hover:text-base-100 shadow-sm' 
              : 'bg-canvas text-text-secondary border border-border-soft hover:border-base-900/30 hover:text-base-900'
          }`}
        >
          {isSquare ? (
            <>
              {treatment.ctaLabel}
              <ExternalLink size={12} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </>
          ) : (
            <>
              <MessageCircle size={14} className="opacity-70" />
              {treatment.ctaLabel}
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default BookingTreatmentRow;
