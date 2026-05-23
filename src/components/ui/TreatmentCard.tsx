import React from 'react';
import { Treatment } from '../../types/treatment';
import ResponsiveImage from './ResponsiveImage';
import Card from './Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreatmentCardProps {
  treatment: Treatment;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  const imagePositionClass = treatment.id === 'post-op' ? 'object-[50%_72%]' : 'object-center';

  return (
    <Card className="flex flex-col h-full group hover:-translate-y-1 hover:border-base-300 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border border-border-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ResponsiveImage
          src={treatment.image.src}
          alt={treatment.image.alt}
          width={treatment.image.width}
          height={treatment.image.height}
          className={`h-full w-full ${imagePositionClass} group-hover:scale-103 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
        />
        <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
          <span className="text-xs font-light normal-case tracking-normal text-text-secondary">
            {treatment.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-[clamp(1.125rem,2vw,1.375rem)] font-semibold leading-[1.35] tracking-[-0.01em] normal-case mb-3">{treatment.title}</h3>
        <p className="text-text-secondary text-base leading-[1.6] font-normal tracking-normal mb-6 flex-grow">
          {treatment.description}
        </p>
        <Link
          to={treatment.href}
          className="inline-flex items-center text-base font-medium leading-[1.2] tracking-normal normal-case text-text-primary group-hover:text-base-600 transition-colors duration-300"
        >
          Ver tratamiento <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </Card>
  );
};

export default TreatmentCard;
