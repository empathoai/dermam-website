import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import { Star } from 'lucide-react';

export default function DeepFacialTestimonialsSection() {
  const { testimonials } = deepFacialContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif">Voces DERMA.M</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center bg-white shadow-subtle border-none hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6 text-sage">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-primary italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-[10px] text-text-secondary uppercase tracking-widest bg-sage-soft/30 px-3 py-1 rounded-full">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
