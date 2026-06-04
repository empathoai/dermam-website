import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import BookingFeaturedCard from '../../ui/BookingFeaturedCard';
import BookingTreatmentRow from '../../ui/BookingTreatmentRow';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../../design-system/icons';

export default function BookingTreatmentSelectorSection() {
  const { selector } = bookingContent;
  const featured = selector.treatments.find(t => t.featured);
  const others = selector.treatments.filter(t => !t.featured);

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="text-center mb-16 px-4">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-4">{selector.headline}</h2>
          <p className="text-text-secondary text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {selector.subheadline}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {featured && (
            <div className="mb-12">
              <BookingFeaturedCard treatment={featured} />
            </div>
          )}

          <div className="bg-white rounded-[1rem] border border-border-card overflow-hidden shadow-subtle">
            {others.map((treatment) => (
              <BookingTreatmentRow key={treatment.id} treatment={treatment} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/es/contacto" 
              className="inline-flex items-center gap-2 text-sm font-medium text-text-primary uppercase tracking-[0.15em] group hover:text-base-900 transition-colors"
            >
              ¿No encuentras tu tratamiento? 
              <span className="flex items-center gap-2 text-text-secondary transition-transform group-hover:translate-x-1">
                Ver todos <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
