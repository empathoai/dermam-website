import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PrfResultsSection() {
  const { results } = prfContent;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{results.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
               <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-[2rem] border border-border-soft">
                  <div className="relative aspect-square">
                    <ResponsiveImage src={item.imageBefore} alt={`${item.title} antes`} className="w-full h-full" />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-sm">Antes</span>
                  </div>
                  <div className="relative aspect-square">
                    <ResponsiveImage src={item.imageAfter} alt={`${item.title} después`} className="w-full h-full" />
                    <span className="absolute bottom-2 left-2 bg-prf/80 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-sm">Después</span>
                  </div>
               </div>
               <div className="text-center">
                  <h3 className="text-sm font-semibold mb-1 uppercase tracking-wider">{item.title}</h3>
                  <span className="text-xs text-text-secondary">{item.sessions}</span>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-4 border border-border-soft rounded-[1rem] text-center max-w-sm mx-auto">
          <p className="text-[10px] italic text-text-secondary">
            {results.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
