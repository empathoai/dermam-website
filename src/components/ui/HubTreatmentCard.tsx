import React from 'react';
import { HubTreatment } from '../../types/hub';
import ResponsiveImage from './ResponsiveImage';
import Card from './Card';
import { ArrowRight } from '../../design-system/icons';
import { Link } from 'react-router-dom';
import TreatmentBadge from './TreatmentBadge';

interface HubTreatmentCardProps {
  treatment: HubTreatment;
}

const HubTreatmentCard: React.FC<HubTreatmentCardProps> = ({ treatment }) => {
  const ctaLabel = treatment.ctaLabel.replace(/\s*→\s*$/, '');

  return (
    <Card className="flex flex-col h-full group hover:-translate-y-1 hover:border-base-900 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border border-border-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ResponsiveImage 
          src={treatment.image.src} 
          alt={treatment.image.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-103"
        />
        {(treatment.badge || treatment.category) && (
          <div className="absolute bottom-4 left-4">
            <TreatmentBadge>{treatment.badge || treatment.category}</TreatmentBadge>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-text-primary mb-3">
          {treatment.title}
        </h3>
        <p className="text-text-secondary text-base leading-[1.6] font-normal tracking-normal mb-6 flex-grow">
          {treatment.description}
        </p>
        <Link
          to={treatment.href}
          className="inline-flex items-center text-base font-medium leading-[1.2] tracking-normal normal-case text-text-primary group-hover:text-base-600 transition-colors duration-300"
        >
          {ctaLabel}
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </Card>
  );
};

export default HubTreatmentCard;
