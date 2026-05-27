import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import BeforeAfterSlider from '../../ui/BeforeAfterSlider';

export default function DeepFacialResultsSection() {
  const { results } = deepFacialContent;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{results.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {results.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6 rounded-[2rem] border border-border-soft bg-canvas p-4 shadow-subtle">
               <BeforeAfterSlider
                beforeSrc={item.imageBefore}
                afterSrc={item.imageAfter}
                beforeAlt={`${item.title} antes`}
                afterAlt={`${item.title} después`}
               />
               <div className="text-center pb-2">
                  <h3 className="text-sm font-semibold mb-1 uppercase tracking-[0.15em]">{item.title}</h3>
                  <span className="text-[10px] text-text-secondary uppercase tracking-[0.15em]">{item.sessions}</span>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-4 border border-border-soft rounded-[1rem] text-center max-w-sm mx-auto">
          <p className="text-[10px] italic text-text-secondary leading-relaxed">
            {results.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
