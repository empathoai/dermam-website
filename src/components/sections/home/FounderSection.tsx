import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';

export default function FounderSection() {
  const { founder, differentiators } = homeContent;

  return (
    <section className="py-24 bg-white" id="nosotros">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Founder Photo */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linen rounded-2xl -z-10 transition-transform duration-500 group-hover:scale-105" />
            <ResponsiveImage
              src={founder.image.src}
              alt={founder.image.alt}
              width={600}
              height={750}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Founder Copy */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sage mb-4 inline-block">
              {founder.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl mb-2">{founder.name}</h2>
            <p className="text-text-secondary font-medium mb-8 italic">{founder.title}</p>
            
            <div className="space-y-6 mb-12">
              <p className="text-text-secondary leading-relaxed md:text-lg">
                {founder.bio}
              </p>
              <div className="border-l-4 border-sage pl-6 py-2">
                 <p className="text-xl md:text-2xl font-serif text-text-primary italic">
                  {founder.quote}
                </p>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {differentiators.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col p-4 bg-canvas rounded-xl">
                  <span className="text-xl font-serif text-text-primary mb-1">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-text-secondary">{stat.label.split(' ')[0]}</span>
                </div>
              ))}
            </div>

            <Button variant="primary">
              {founder.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
