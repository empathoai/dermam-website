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
        <div className="bg-base-900/85 backdrop-blur-md rounded-[2.5rem] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-2xl border border-white/10">
          <div className="lg:max-w-xl text-center lg:text-left">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold tracking-[-0.035em] lg:text-6xl mb-8 leading-tight text-base-100">
              <span className="uppercase">{finalCTA.headlinePrefix}</span>
              <span className="block lg:inline script-accent normal-case text-[1.56em]">{finalCTA.headlineAccent}</span>
              {finalCTA.headlineSuffix}
            </h2>
            <p className="text-lg text-base-300 leading-[1.65] font-light">
              {finalCTA.body}
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[280px]">
            <Button variant="primary" to="/es/reservar" className="py-4 w-full !bg-white !text-base-900 hover:!bg-base-100">
              {finalCTA.primaryCTA}
            </Button>
            <Button 
              variant="outline"
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="py-4 w-full !border-base-300/70 !text-base-300 hover:!bg-base-100/10 hover:!text-base-100"
            >
              {finalCTA.secondaryCTA}
            </Button>
            <p className="text-xs text-center text-base-300 uppercase tracking-[0.15em] mt-2">
              Evaluación gratuita · Sin compromiso
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
