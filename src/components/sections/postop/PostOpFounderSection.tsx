import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';
import SectionMedia from '../../ui/SectionMedia';

export default function PostOpFounderSection() {
 const { founder } = postOpContent;

 const handleConsultClick = () => {
 const message = siteConfig.whatsappMessagePostOp;
 const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
 window.open(url, '_blank');
 };

 return (
 <section className="relative py-24 bg-white overflow-hidden">
 {founder.backgroundMedia && (
 <SectionMedia
 {...founder.backgroundMedia}
 overlay={founder.backgroundMedia.overlay || 'ivory'}
 />
 )}
 
 <Container className="relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 <div className="relative group">
 <div className="absolute -inset-4 bg-base-200 rounded-[2rem] -z-10 transition-transform duration-500 group-hover:scale-105" />
 <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
 <ResponsiveImage
 src={founder.image.src}
 alt={founder.image.alt}
 width={600}
 height={750}
 className="w-full h-full object-cover"
 />
 </div>
 </div>
 <div>
 <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-2">{founder.name}</h2>
 <p className="text-text-secondary font-medium mb-8 italic">{founder.title}</p>
 
 <div className="border-l-4 border-base-900 pl-6 py-2 mb-10">
 <p className="text-xl font-sans text-text-primary italic leading-relaxed">
 {founder.quote}
 </p>
 </div>

 <Button 
 variant="primary"
 onClick={handleConsultClick}
 className="w-full sm:w-auto px-10"
 >
 {founder.cta}
 </Button>
 </div>
 </div>
 </Container>
 </section>
 );
}
