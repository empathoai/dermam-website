import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';
import { Star } from '../../../design-system/icons';

export default function PostOpTestimonialsSection() {
  const { testimonials } = postOpContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase">Confianza en cada recuperación</h2>
        </div>
        
        <ResponsiveCardGroup desktopColumns={3} mobileCardWidth="84vw">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center shadow-subtle hover:shadow-subtle transition-shadow">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-secondary font-light italic mb-8 leading-[1.7]">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-label-xs text-text-secondary uppercase tracking-[0.15em] bg-base-200 px-3 py-1 rounded-full">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
