import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import SectionMedia from '../../ui/SectionMedia';

export default function DeepFacialFounderSection() {
  const { founder } = deepFacialContent;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {founder.backgroundMedia && (
        <SectionMedia
          {...founder.backgroundMedia}
          overlay={founder.backgroundMedia.overlay || 'ivory'}
        />
      )}
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-border-soft shadow-xl bg-canvas flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-2/5 aspect-[4/5] lg:aspect-auto">
             <ResponsiveImage
                src={founder.image.src}
                alt={founder.image.alt}
                className="w-full h-full object-cover"
             />
          </div>
          <div className="lg:w-3/5 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl mb-2">{founder.name}</h2>
            <p className="text-sage font-medium mb-8 text-sm uppercase tracking-[0.15em]">{founder.title}</p>
            
            <div className="border-l-4 border-sage pl-6 py-2 mb-10">
                <p className="text-xl font-sans text-text-primary italic leading-relaxed">
                {founder.quote}
            </p>
            </div>
            
            <a 
                href="#final-cta" 
                className="text-sage font-semibold border-b-2 border-sage-soft hover:border-sage transition-colors pb-1 inline-block w-fit"
            >
                {founder.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
