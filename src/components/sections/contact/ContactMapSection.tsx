import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import Button from '../../ui/Button';
import { Clock, MapPin, ParkingCircle } from '../../../design-system/icons';

import { siteConfig } from '../../../data/siteConfig';

export default function ContactMapSection() {
 const { map } = contactContent;

 const handleMapClick = () => {
 window.open(siteConfig.mapsUrl, '_blank');
 };

 return (
 <section id="mapa" className="py-24 bg-canvas/30">
 <Container>
 <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
 <div className="lg:w-3/5 rounded-[1rem] overflow-hidden shadow-subtle bg-white border border-border-card aspect-[16/10] lg:aspect-auto">
 {map.embedUrl ? (
 <iframe
 title="Google Maps"
 src={map.embedUrl}
 width="100%"
 height="100%"
 style={{ border: 0 }}
 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 className="grayscale hover:grayscale-0 transition-all duration-700"
 ></iframe>
 ) : (
 <ResponsiveImage 
 src={map.image.src} 
 alt={map.image.alt} 
 className="w-full h-full object-cover" 
 />
 )}
 </div>

 <div className="lg:w-2/5 flex flex-col justify-center">
 <div className="mb-10">
 <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-soft text-text-primary rounded-full text-[10px] font-medium uppercase tracking-[0.15em] mb-4">
 <MapPin size={12} />
 Ubicación
 </div>
 <h2 className="text-3xl font-sans mb-6 leading-tight">{map.address}</h2>
 <div className="flex items-center gap-2 text-text-secondary text-sm">
 <ParkingCircle size={16} className="text-text-secondary" />
 <span>{map.logistics}</span>
 </div>
 </div>

 <div className="bg-white p-8 rounded-[1.5rem] border border-border-card shadow-subtle mb-10">
 <div className="flex items-center gap-3 mb-6">
 <Clock size={20} className="text-text-secondary" />
 <h3 className="text-sm font-medium uppercase tracking-[0.15em]">Horarios de atención</h3>
 </div>
 
 <div className="space-y-4">
 {map.hours.map((item, idx) => (
 <div key={idx} className="flex justify-between items-center text-sm border-b border-border-card/50 pb-3 last:border-0 last:pb-0">
 <span className="text-text-primary font-medium">{item.day}</span>
 <span className="text-text-secondary">{item.time}</span>
 </div>
 ))}
 </div>
 </div>

 <Button 
 onClick={handleMapClick}
 variant="outline"
 className="w-full border-border-strong text-text-primary hover:bg-primary hover:text-text-inverse py-4"
 >
 {map.cta}
 </Button>
 </div>
 </div>
 </Container>
 </section>
 );
}
