import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import Button from '../../ui/Button';

export default function FinalCTA() {
  const { finalCTA } = homeContent;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src={finalCTA.bgImage.src} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-10">
        <div className="bg-linen rounded-[40px] px-8 py-20 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 shadow-subtle border border-white/50">
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
            <Button variant="primary" className="py-4">
              {finalCTA.primaryCTA}
            </Button>
            <Button variant="outline" className="py-4 border-text-secondary text-text-secondary">
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
