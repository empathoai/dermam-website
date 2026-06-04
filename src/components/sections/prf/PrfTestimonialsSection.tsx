import { testimonials } from '../../../data/testimonials';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';
import { Star } from '../../../design-system/icons';

export default function PrfTestimonialsSection() {
  const prfTestimonials = testimonials.filter(t => t.treatment === 'PRF').slice(0, 3);

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <SectionHeader
          headline="Testimonios reales de PRF"
          align="center"
          className="mb-16"
        />
        
        <ResponsiveCardGroup desktopColumns={3} mobileCardWidth="84vw">
          {prfTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-10 flex flex-col items-center text-center bg-white border border-border-card hover:-translate-y-1 hover:border-border-card-hover hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-subtle rounded-[1rem]">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                ))}
              </div>
              <p className="text-text-secondary font-light italic mb-8 leading-[1.7]">
                {testimonial.quote}
              </p>
              <div>
                <span className="block font-semibold text-sm mb-1">{testimonial.name}</span>
                <span className="block text-xs text-text-secondary uppercase tracking-[0.15em]">{testimonial.treatment}</span>
              </div>
            </Card>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
