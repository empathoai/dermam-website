import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import { ShieldCheck, Star, Clock, Languages } from '../../../design-system/icons';

export default function BookingInfoSection() {
  const { info } = bookingContent;

  const trustIcons = [
    <ShieldCheck key="shield" size={24} className="text-base-900" />,
    <Clock key="clock" size={24} className="text-base-900" />,
    <Star key="star" size={24} className="text-base-900" />,
    <Languages key="lang" size={24} className="text-base-900" />
  ];

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {info.cards.map((card, idx) => (
              <div key={idx} className="flex gap-6 bg-white p-8 rounded-[2rem] border border-border-card hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <div className="flex-shrink-0 w-12 h-12 bg-base-900/10 rounded-[2rem] flex items-center justify-center">
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
                 <div className="w-10 h-10 bg-white border border-border-soft rounded-lg flex items-center justify-center font-bold text-lg">S</div>
                 <span className="text-label-xs font-medium uppercase tracking-[0.15em]">Square Appointments</span>
             </div>
             <div className="text-label-xs uppercase tracking-[0.15em] font-medium flex gap-4 text-text-secondary">
                 <span>MedSpa Certificado</span>
                 <span className="text-text-secondary/50">•</span>
                 <span>West Palm Beach</span>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
