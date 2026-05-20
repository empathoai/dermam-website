import { BookingTreatment } from '../../types/booking';
import { ExternalLink } from 'lucide-react';

interface BookingFeaturedCardProps {
  treatment: BookingTreatment;
}

export default function BookingFeaturedCard({ treatment }: BookingFeaturedCardProps) {
  return (
    <div className="bg-white border-[2px] border-base-900 rounded-[32px] p-8 md:p-10 shadow-xl shadow-canvas/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-base-100 bg-base-900 px-3 py-1 rounded-full">
            Recomendado
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold text-base-900 uppercase tracking-[0.2em] mb-3 block">
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
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-base-900 text-base-100 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-base-800 shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900"
          >
            {treatment.ctaLabel}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
