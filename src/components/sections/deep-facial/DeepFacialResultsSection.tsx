import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function DeepFacialResultsSection() {
  const { results } = deepFacialContent;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">{results.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
               <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-border-soft">
                  <div className="relative aspect-square">
                    <ResponsiveImage src={item.imageBefore} alt={`${item.title} antes`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-sm">Antes</span>
                  </div>
                  <div className="relative aspect-square">
                    <ResponsiveImage src={item.imageAfter} alt={`${item.title} después`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-sage/80 text-[10px] text-white px-2 py-0.5 rounded backdrop-blur-sm">Después</span>
                  </div>
               </div>
               <div className="text-center">
                  <h3 className="text-sm font-semibold mb-1 uppercase tracking-wider">{item.title}</h3>
                  <span className="text-[10px] text-text-secondary uppercase tracking-widest">{item.sessions}</span>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-4 border border-border-soft rounded-xl text-center max-w-sm mx-auto">
          <p className="text-[10px] italic text-text-secondary leading-relaxed">
            {results.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
