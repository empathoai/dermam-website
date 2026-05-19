import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import BookingFeaturedCard from '../../ui/BookingFeaturedCard';
import BookingTreatmentRow from '../../ui/BookingTreatmentRow';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BookingTreatmentSelectorSection() {
  const { selector } = bookingContent;
  const featured = selector.treatments.find(t => t.featured);
  const others = selector.treatments.filter(t => !t.featured);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{selector.headline}</h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            {selector.subheadline}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {featured && (
            <div className="mb-12">
              <BookingFeaturedCard treatment={featured} />
            </div>
          )}

          <div className="bg-white rounded-[32px] border border-border-soft overflow-hidden shadow-xl shadow-canvas/50">
            {others.map((treatment) => (
              <BookingTreatmentRow key={treatment.id} treatment={treatment} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/es/contacto" 
              className="inline-flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-widest group hover:text-sage transition-colors"
            >
              ¿No encuentras tu tratamiento? 
              <span className="flex items-center gap-2 text-sage transition-transform group-hover:translate-x-1">
                Ver todos <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
