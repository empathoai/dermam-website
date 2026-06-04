import { bookingContent } from '../../../data/bookingContent';
import Container from '../../ui/Container';
import ChannelCard from '../../ui/ChannelCard';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function BookingWhatsAppAlternativeSection() {
  const { whatsappAlternative } = bookingContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-4">{whatsappAlternative.headline}</h2>
          </div>
          
          <ResponsiveCardGroup desktopColumns={2} desktopClassName="gap-6" mobileCardWidth="84vw">
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
          </ResponsiveCardGroup>
        </div>
      </Container>
    </section>
  );
}
