import { deepFacialContent } from '../../../data/deepFacialLanding';
import { siteConfig } from '../../../data/siteConfig';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';
import { MapPin, Phone } from 'lucide-react';

export default function DeepFacialFinalCTA() {
  const { finalCTA } = deepFacialContent;

  const handleBookingClick = () => {
    window.open('https://squareup.com/appointments/book/dermam', '_blank');
  };

  const handleWhatsappClick = () => {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessageDeepFacial)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="final-cta" className="py-32 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={finalCTA.image.src}
        alt={finalCTA.image.alt}
        overlay="soft"
      />

      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[40px] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-sage-soft">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              {finalCTA.headline}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {finalCTA.body}
            </p>
            <div className="flex flex-col gap-4 items-center lg:items-start text-xs text-text-secondary">
               <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-sage" />
                    <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state}</span>
               </div>
               <div className="flex items-center gap-2">
                    <Phone size={14} className="text-sage" />
                    <span>{siteConfig.phone}</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button 
                onClick={handleBookingClick}
                className="bg-sage hover:bg-sage-deep text-white py-4 shadow-xl shadow-sage/20"
            >
              {finalCTA.primaryCTA}
            </Button>
            <Button 
                variant="outline"
                onClick={handleWhatsappClick}
                className="py-4 border-sage text-sage hover:bg-sage hover:text-white"
            >
              {finalCTA.secondaryCTA}
            </Button>
            <p className="text-[10px] text-center text-text-secondary uppercase tracking-widest mt-2">
              Evaluación de piel incluida en tu cita
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
