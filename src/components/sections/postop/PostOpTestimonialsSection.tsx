import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import { Star } from 'lucide-react';

export default function PostOpTestimonialsSection() {
  const { testimonials } = postOpContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Confianza en cada recuperación</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center shadow-subtle hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6 text-text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-primary italic mb-8 leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-[10px] text-text-secondary uppercase tracking-widest bg-base-200 px-3 py-1 rounded-full">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
