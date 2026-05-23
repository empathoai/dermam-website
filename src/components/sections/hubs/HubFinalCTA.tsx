import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../../data/siteConfig';

interface HubFinalCTAProps {
  content: HubPageContent['finalCTA'];
}

export default function HubFinalCTA({ content }: HubFinalCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(content.whatsappMessage || 'Hola, quiero información.')}`;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="bg-white rounded-[2.5rem] border border-border-soft overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-6xl mx-auto">
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-6 leading-tight">
              {content.headline}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              {content.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button to="/es/reservar" className="flex-1 w-full">
                {content.primaryCTA}
              </Button>
              <Button 
                variant="outline" 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full"
              >
                {content.secondaryCTA}
              </Button>
            </div>

            <div className="pt-8 border-t border-border-soft flex flex-wrap items-center gap-6">
                <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.2em]">
                    Ubicación
                </div>
                <div className="text-xs font-medium text-text-primary">
                    DERMA.M · {siteConfig.address} · WPB, FL
                </div>
                <div className="text-xs font-bold text-base-900">
                    {siteConfig.phone}
                </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-auto">
            <SectionMedia 
              type="image" 
              src={content.image.src} 
              alt={content.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-base-900/5 mix-blend-multiply" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
