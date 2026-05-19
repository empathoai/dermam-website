import { BookingTreatment } from '../../types/booking';
import { ExternalLink } from 'lucide-react';

interface BookingFeaturedCardProps {
  treatment: BookingTreatment;
}

export default function BookingFeaturedCard({ treatment }: BookingFeaturedCardProps) {
  return (
    <div className="bg-white border-2 border-sage rounded-[32px] p-8 md:p-10 shadow-xl shadow-sage/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white bg-sage px-3 py-1 rounded-full">
            Recomendado
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold text-sage uppercase tracking-[0.2em] mb-3 block">
            {treatment.description.split(' · ')[2] || 'Primera visita'}
          </span>
          <h3 className="text-2xl md:text-3xl font-serif text-text-primary mb-4">
            {treatment.title}
          </h3>
          <p className="text-text-secondary leading-relaxed max-w-sm">
            {treatment.description}
          </p>
        </div>

        <div className="w-full md:w-auto">
          <a
            href={treatment.squareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-sage text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-sage-deep shadow-lg shadow-sage/20 active:scale-[0.98]"
          >
            {treatment.ctaLabel}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
