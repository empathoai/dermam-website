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
      className="flex items-center gap-4 p-4 rounded-[1rem] bg-white border border-border-card hover:-translate-y-1 hover:border-border-card-hover hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
    >
      <div className="w-16 h-16 rounded-[0.625rem] overflow-hidden flex-shrink-0">
        <ResponsiveImage 
          src={treatment.image.src} 
          alt={treatment.image.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
        />
      </div>
      <div className="flex-grow">
          {treatment.category && (
              <span className="text-label-xs font-bold text-text-secondary uppercase tracking-wider block mb-0.5">
                  {treatment.category}
              </span>
          )}
        <h4 className="text-sm font-bold text-text-primary group-hover:text-base-900 transition-colors">
          {treatment.title}
        </h4>
        <span className="text-label-xs text-text-secondary uppercase tracking-[0.15em] font-medium opacity-70 group-hover:opacity-100 transition-opacity">
          {treatment.ctaLabel}
        </span>
      </div>
    </Link>
  );
};

export default CompactTreatmentCard;
