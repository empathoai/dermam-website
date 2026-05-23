import { prfContent } from '../../../data/prfLanding';
import { siteConfig } from '../../../data/siteConfig';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';
import { MapPin, Phone } from 'lucide-react';

export default function PrfFinalCTA() {
  const { finalCTA } = prfContent;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessagePrf)}`;

  return (
    <section className="py-32 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={finalCTA.image.src}
        alt={finalCTA.image.alt}
        overlay="soft"
      />

      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-border-soft">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase lg:text-6xl mb-8 leading-tight">
              {finalCTA.headline}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {finalCTA.body}
            </p>
            <div className="flex flex-col gap-4 items-center lg:items-start text-xs text-text-secondary">
               <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-text-primary" />
                    <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state}</span>
               </div>
               <div className="flex items-center gap-2">
                    <Phone size={14} className="text-text-primary" />
                    <span>{siteConfig.phone}</span>
               </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button 
              variant="primary"
              to="/es/reservar"
              className="py-4 shadow-xl"
            >
              {finalCTA.primaryCTA}
            </Button>
            <Button 
              variant="outline"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4"
            >
              {finalCTA.secondaryCTA}
            </Button>
            <p className="text-[10px] text-center text-text-secondary uppercase tracking-[0.15em] mt-2">
              Agenda tu consulta hoy
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
