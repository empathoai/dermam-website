import { Treatment } from '../../types/treatment';
import ResponsiveImage from './ResponsiveImage';
import Card from './Card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <Card className="flex flex-col h-full group hover:shadow-subtle transition-shadow duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <ResponsiveImage
          src={treatment.image.src}
          alt={treatment.image.alt}
          width={treatment.image.width}
          height={treatment.image.height}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] font-medium uppercase tracking-wider text-text-secondary">
            {treatment.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl mb-3">{treatment.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
          {treatment.description}
        </p>
        <Link
          to={treatment.href}
          className="inline-flex items-center text-sm font-medium text-text-primary hover:text-sage transition-colors duration-300"
        >
          Ver tratamiento <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </Card>
  );
}
