import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';
import { siteConfig } from '../../../data/siteConfig';

interface HubFinalCTAProps {
 content: HubPageContent['finalCTA'];
}

function renderEditorialHeadline(headline: string) {
 const words = headline.trim().split(/\s+/);
 const accent = words.pop();
 const prefix = words.join(' ');

 return (
 <>
 <span className="uppercase">{prefix}</span>{' '}
 {accent && (
 <span className="block lg:inline script-accent normal-case text-[1.56em]">
 {accent}
 </span>
 )}
 </>
 );
}

export default function HubFinalCTA({ content }: HubFinalCTAProps) {
 const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessage || 'Hola, quiero información.')}`;

 return (
 <section className="relative isolate overflow-hidden py-32">
 <SectionMedia
 type="image"
 src={content.image.src}
 alt={content.image.alt}
 overlay="soft"
 opacity={1}
 />

 <Container className="relative z-10">
 <div className="bg-base-900/85 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">
 <div className="lg:max-w-xl text-center lg:text-left">
 <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] lg:text-6xl mb-8 leading-tight text-base-100">
 {renderEditorialHeadline(content.headline)}
 </h2>
 <p className="text-lg text-base-300 leading-[1.65] font-light">
 {content.description}
 </p>
 </div>

 <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
 <Button to="/es/reservar" className="py-4 w-full !bg-white !text-base-900 hover:!bg-base-100">
 {content.primaryCTA}
 </Button>
 <Button
 variant="outline"
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
 >
 {content.secondaryCTA}
 </Button>
 <p className="text-xs text-center text-base-300 uppercase tracking-[0.15em] mt-2">
 DERMA.M · WPB, FL
 </p>
 </div>
 </div>
 </Container>
 </section>
 );
}
