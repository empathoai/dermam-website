import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { siteConfig } from '../../../data/siteConfig';

export default function PostOpProtocolSection() {
  const { protocol } = postOpContent;

  const handleConsultClick = () => {
    const message = siteConfig.whatsappMessagePostOp;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">{protocol.headline}</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {protocol.phases.map((phase) => (
            <div key={phase.id} className="bg-white p-8 rounded-2xl border border-border-soft flex items-center gap-8 group hover:border-sage transition-colors duration-300">
               <span className="text-4xl font-serif text-text-primary opacity-10 group-hover:opacity-20 transition-opacity">
                {phase.id}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                <p className="text-text-secondary text-sm">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button 
                variant="outline"
                onClick={handleConsultClick}
                className="border-sage text-sage hover:bg-sage hover:text-white px-8 py-3"
            >
                {protocol.cta} →
            </Button>
        </div>
      </Container>
    </section>
  );
}
