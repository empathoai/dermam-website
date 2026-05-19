import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import ChannelCard from '../../ui/ChannelCard';

export default function BookingWhatsAppAlternativeSection() {
  const { whatsappAlternative } = bookingContent;

  return (
    <section className="py-24 bg-canvas/30">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">{whatsappAlternative.headline}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatsappAlternative.cards.map((card, idx) => (
              <ChannelCard 
                key={idx}
                title={card.title}
                copy={card.copy}
                cta={card.cta}
                href={card.href}
                type={card.type}
                emphasized={card.emphasized}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
