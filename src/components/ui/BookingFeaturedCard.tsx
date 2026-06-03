import { BookingTreatment } from '../../types/booking';
import { ExternalLink } from '../../design-system/icons';

interface BookingFeaturedCardProps {
  treatment: BookingTreatment;
}

export default function BookingFeaturedCard({ treatment }: BookingFeaturedCardProps) {
  return (
    <div className="bg-white border-[2px] border-base-900 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-canvas/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4">
        <span className="text-xs uppercase font-medium tracking-[0.15em] text-base-100 bg-base-900 px-3 py-1 rounded-full">
            Recomendado
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <span className="text-label-xs font-bold text-base-900 uppercase tracking-[0.2em] mb-3 block">
            {treatment.description.split(' · ')[2] || 'Primera visita'}
          </span>
          <h3 className="text-2xl md:text-3xl font-sans text-text-primary mb-4">
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
            className="flex items-center justify-center gap-3 px-10 py-5 rounded-[2rem] bg-base-900 text-base-100 text-base font-medium normal-case tracking-normal transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-base-900"
          >
            {treatment.ctaLabel}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
