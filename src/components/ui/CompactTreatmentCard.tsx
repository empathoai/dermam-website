import React from 'react';
import { HubTreatment } from '../../types/hub';
import ResponsiveImage from './ResponsiveImage';
import { Link } from 'react-router-dom';

interface CompactTreatmentCardProps {
  treatment: HubTreatment;
}

const CompactTreatmentCard: React.FC<CompactTreatmentCardProps> = ({ treatment }) => {
  return (
    <Link 
      to={treatment.href}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border-soft transition-all duration-300 hover:border-sage-soft hover:shadow-lg hover:shadow-sage/5 group"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
        <ResponsiveImage 
          src={treatment.image.src} 
          alt={treatment.image.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-grow">
          {treatment.category && (
              <span className="text-[10px] font-bold text-sage uppercase tracking-wider block mb-0.5">
                  {treatment.category}
              </span>
          )}
        <h4 className="text-sm font-bold text-text-primary group-hover:text-sage transition-colors">
          {treatment.title}
        </h4>
        <span className="text-[10px] text-text-secondary uppercase tracking-widest font-medium opacity-70 group-hover:opacity-100 transition-opacity">
          {treatment.ctaLabel}
        </span>
      </div>
    </Link>
  );
};

export default CompactTreatmentCard;
