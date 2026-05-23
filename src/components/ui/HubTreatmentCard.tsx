import React from 'react';
import { HubTreatment } from '../../types/hub';
import ResponsiveImage from './ResponsiveImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TreatmentBadge from './TreatmentBadge';

interface HubTreatmentCardProps {
  treatment: HubTreatment;
}

const HubTreatmentCard: React.FC<HubTreatmentCardProps> = ({ treatment }) => {
  return (
    <Link 
      to={treatment.href}
      className="group bg-white border border-border-soft rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-md hover:border-base-300 hover:-translate-y-1"
    >
      <div className="md:w-2/5 relative overflow-hidden aspect-[4/3] md:aspect-auto">
        <ResponsiveImage 
          src={treatment.image.src} 
          alt={treatment.image.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
        />
        {treatment.badge && (
          <div className="absolute top-4 left-4">
            <TreatmentBadge>{treatment.badge}</TreatmentBadge>
          </div>
        )}
      </div>
      
      <div className="md:w-3/5 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-sans text-text-primary mb-4">
          {treatment.title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-8 text-sm md:text-base">
          {treatment.description}
        </p>
        <div className="flex items-center gap-2 text-base font-medium normal-case tracking-normal text-text-primary group-hover:text-base-600 transition-colors">
          {treatment.ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default HubTreatmentCard;
