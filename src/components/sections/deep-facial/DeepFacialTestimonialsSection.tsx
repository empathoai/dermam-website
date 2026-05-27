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
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans">Voces DERMA.M</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center shadow-subtle hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-primary italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-[10px] text-text-secondary uppercase tracking-[0.15em] bg-base-200 px-3 py-1 rounded-full">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
