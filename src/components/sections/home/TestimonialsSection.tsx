import { testimonials } from '../../../data/testimonials';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader
          headline="LO QUE DICEN NUESTRAS PACIENTES"
          align="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center shadow-subtle hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6 text-text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="text-text-primary italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-xs text-text-secondary uppercase tracking-[0.15em]">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="text-sm font-medium text-text-secondary hover:text-text-primary underline underline-offset-4"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </Container>
    </section>
  );
}
