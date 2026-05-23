import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import { ShieldCheck, Star, Clock, Languages } from 'lucide-react';

export default function BookingInfoSection() {
  const { info } = bookingContent;

  const trustIcons = [
    <ShieldCheck key="shield" size={24} className="text-sage" />,
    <Clock key="clock" size={24} className="text-sage" />,
    <Star key="star" size={24} className="text-sage" />,
    <Languages key="lang" size={24} className="text-sage" />
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {info.cards.map((card, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-sage/10 rounded-[2rem] flex items-center justify-center">
                  {trustIcons[idx]}
                </div>
                <div>
                  <h3 className="text-lg font-sans text-text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-border-soft flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-60">
             <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-canvas rounded-lg flex items-center justify-center font-bold text-lg">S</div>
                 <span className="text-[10px] font-medium uppercase tracking-[0.15em]">Square Appointments</span>
             </div>
             <div className="text-[10px] uppercase tracking-[0.15em] font-medium flex gap-4">
                 <span>MedSpa Certificado</span>
                 <span className="text-sage">•</span>
                 <span>West Palm Beach</span>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
