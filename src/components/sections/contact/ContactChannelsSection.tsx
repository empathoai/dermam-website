import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import ContactChannelCard from '../../ui/ContactChannelCard';
import ContactForm from './ContactForm';

export default function ContactChannelsSection() {
  const { channels } = contactContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2 flex flex-col">
            <div className="mb-12 text-center lg:text-left">
              <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-4">{channels.headline}</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{channels.subheadline}</p>
            </div>
            
            <div className="space-y-4">
              {channels.items.map((channel, idx) => (
                <ContactChannelCard key={idx} channel={channel} />
              ))}
            </div>
          </div>

          <div className="lg:w-1/12 hidden lg:block border-r border-border-soft/50 my-10"></div>

          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
