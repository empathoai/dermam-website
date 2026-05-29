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
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{protocol.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {protocol.phases.map((phase) => (
            <div key={phase.id} className="bg-white p-8 rounded-[2rem] border border-border-card relative group hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
               <span className="absolute top-4 right-6 text-6xl font-sans text-text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                {phase.id}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                <p className="text-text-secondary text-sm">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button 
                variant="outline"
                onClick={handleConsultClick}
                className="px-8 py-3"
            >
                {protocol.cta} →
            </Button>
        </div>
      </Container>
    </section>
  );
}
