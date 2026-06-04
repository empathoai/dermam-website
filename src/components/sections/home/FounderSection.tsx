import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';

export default function FounderSection() {
  const { founder } = homeContent;

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="nosotros">
      {founder.backgroundMedia && (
        <SectionMedia
          {...founder.backgroundMedia}
          overlay={founder.backgroundMedia.overlay || 'ivory'}
        />
      )}
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Founder Photo */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-base-200 rounded-[1rem] -z-10 transition-transform duration-500 group-hover:scale-105" />
            <div className="aspect-[4/5] overflow-hidden rounded-[1rem] shadow-xl">
               <ResponsiveImage
                src={founder.image.src}
                alt={founder.image.alt}
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Copy */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-text-secondary mb-4 inline-block">
              {founder.eyebrow}
            </span>
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-2 uppercase">{founder.name}</h2>
            <p className="text-text-secondary font-medium mb-8 italic">{founder.title}</p>
            
            <div className="space-y-6 mb-12">
              <p className="text-text-secondary leading-relaxed md:text-lg">
                {founder.bio}
              </p>
              <div className="border-l-4 border-base-900 pl-6 py-2">
                 <p className="text-xl md:text-2xl font-sans text-text-primary italic">
                  {founder.quote}
                </p>
              </div>
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
