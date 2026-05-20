import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import SectionMedia from '../../ui/SectionMedia';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../../data/siteConfig';

export default function FinalCTA() {
  const { finalCTA } = homeContent;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hola DERMA.M, me gustaría agendar una evaluación de piel.')}`;

  return (
    <section className="py-32 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={finalCTA.bgImage.src}
        alt={finalCTA.bgImage.alt}
        overlay="soft"
        opacity={1}
      />

      <Container className="relative z-10">
        <div className="bg-linen/80 backdrop-blur-md rounded-[40px] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-subtle border border-white/50">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              {finalCTA.headlinePrefix}
              <span className="script-accent italic block lg:inline-block">{finalCTA.headlineAccent}</span>
              {finalCTA.headlineSuffix}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {finalCTA.body}
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button variant="primary" to="/es/reservar" className="py-4 w-full">
              {finalCTA.primaryCTA}
            </Button>
            <Button 
              variant="outline"
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-4 w-full"
            >
              {finalCTA.secondaryCTA}
            </Button>
            <p className="text-[10px] text-center text-text-secondary uppercase tracking-widest mt-2">
              Evaluación gratuita · Sin compromiso
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
