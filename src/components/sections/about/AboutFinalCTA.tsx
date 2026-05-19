import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';
import { MapPin, Phone } from 'lucide-react';

export default function AboutFinalCTA() {
  const handleBookingClick = () => {
    window.open('https://squareup.com/appointments/book/dermam', '_blank');
  };

  const handleTreatmentsClick = () => {
    window.location.href = '/es#tratamientos';
  };

  return (
    <section className="py-24 lg:py-32 bg-canvas/30 overflow-hidden">
      <Container>
        <div className="bg-white rounded-[40px] shadow-2xl border border-sage-soft p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="relative z-10 lg:max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight font-serif">¿Lista para conocer tu piel?</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Agenda una evaluación y recibe orientación profesional según las necesidades reales de tu piel.
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

          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button 
                onClick={handleBookingClick}
                className="bg-sage hover:bg-sage-deep text-white py-4 shadow-xl shadow-sage/20"
            >
              Reserva tu evaluación
            </Button>
            <Button 
                variant="outline"
                onClick={handleTreatmentsClick}
                className="py-4 border-sage text-sage hover:bg-sage hover:text-white"
            >
              Ver tratamientos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
