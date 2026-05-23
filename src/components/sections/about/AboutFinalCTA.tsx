import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';
import { MapPin, Phone } from 'lucide-react';

export default function AboutFinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-canvas overflow-hidden">
      <Container>
        <div className="bg-base-900 px-8 py-20 md:p-20 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 text-center lg:text-left">
          <div className="relative z-10 lg:max-w-xl">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] lg:text-6xl mb-8 leading-tight text-base-100 uppercase">
              ¿Listo para conocer tu piel?
            </h2>
            <p className="text-lg text-base-300 leading-[1.65] font-light mb-8">
              Agenda una evaluación y recibe orientación profesional según las necesidades reales de tu piel.
            </p>
            <div className="flex flex-col gap-4 items-center lg:items-start text-xs text-base-300">
               <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-base-300" />
                    <span>{siteConfig.address}, {siteConfig.city}, {siteConfig.state}</span>
               </div>
               <div className="flex items-center gap-2">
                    <Phone size={14} className="text-base-300" />
                    <span>{siteConfig.phone}</span>
               </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button 
              variant="primary"
              to="/es/reservar"
              className="py-4 w-full"
            >
              Reserva tu evaluación
            </Button>
            
            <Button 
              variant="outline"
              href="/es#treatments"
              className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
            >
              Ver tratamientos
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
