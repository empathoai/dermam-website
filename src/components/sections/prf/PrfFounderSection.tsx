import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';

export default function PrfFounderSection() {
  const { founder } = prfContent;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {founder.backgroundMedia && (
        <SectionMedia
          {...founder.backgroundMedia}
          overlay={founder.backgroundMedia.overlay || 'ivory'}
        />
      )}
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-border-soft shadow-xl bg-canvas flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-2/5 aspect-[4/5] lg:aspect-auto">
             <ResponsiveImage
                src={founder.image.src}
                alt={founder.image.alt}
                className="w-full h-full object-cover"
             />
          </div>
          <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-xs font-bold text-prf uppercase tracking-widest mb-4 inline-block">
                {founder.eyebrow}
            </span>
            <h2 className="text-4xl mb-2">{founder.name}</h2>
            <p className="text-prf font-medium mb-8 text-sm uppercase tracking-tighter">{founder.title}</p>
            
            <div className="border-l-4 border-prf pl-6 py-2 mb-10">
                <p className="text-xl font-serif text-text-primary italic">
                {founder.quote}
            </p>
            </div>

            <Button className="bg-prf hover:bg-prf-deep text-white w-full sm:w-auto">
              {founder.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
