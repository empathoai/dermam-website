import { deepFacialContent } from '../../../data/deepFacialLanding';
import { siteConfig } from '../../../data/siteConfig';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';

export default function DeepFacialFinalCTA() {
 const { finalCTA } = deepFacialContent;
 const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessageDeepFacial)}`;

 return (
 <section id="final-cta" className="py-32 relative overflow-hidden isolation-isolate">
 <SectionMedia
 type="image"
 src={finalCTA.image.src}
 alt={finalCTA.image.alt}
 overlay="soft"
 opacity={1}
 />

 <Container className="relative z-10">
 <div className="bg-base-900/85 backdrop-blur-md rounded-[1.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-subtle border border-white/10">
 <div className="lg:max-w-xl text-center lg:text-left">
 <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] lg:text-6xl mb-8 leading-tight text-base-100">
 <span className="uppercase">Tu piel empieza con una</span>{' '}
 <span className="block lg:inline script-accent normal-case text-[1.56em]">limpieza</span>
 </h2>
 <p className="text-lg text-base-300 leading-[1.65] font-light mb-8">
 {finalCTA.body}
 </p>
 </div>

 <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
 <Button 
 variant="primary"
 to="/es/reservar"
 className="py-4 w-full !bg-white !text-base-900 hover:!bg-base-100"
 >
 {finalCTA.primaryCTA}
 </Button>
 
 <Button 
 variant="outline" 
 href={whatsappUrl} 
 target="_blank" 
 rel="noopener noreferrer" 
 className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
 >
 {finalCTA.secondaryCTA}
 </Button>
 
 <p className="text-xs text-center text-base-300 uppercase tracking-[0.15em] mt-2">
 Evaluación gratuita · Sin compromiso
 </p>
 </div>
 </div>
 </Container>
 </section>
 );
}
