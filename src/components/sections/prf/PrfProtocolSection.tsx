import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';

export default function PrfProtocolSection() {
  const { protocol } = prfContent;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">{protocol.headline}</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {protocol.steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-border-soft relative group hover:-translate-y-2 transition-transform duration-300">
               <span className="absolute top-4 right-6 text-6xl font-serif text-text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                {idx + 1}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto p-4 bg-white/50 backdrop-blur-sm rounded-full border border-border-soft text-center">
          <p className="text-xs md:text-sm font-medium text-text-secondary uppercase tracking-widest">
            {protocol.info}
          </p>
        </div>
      </Container>
    </section>
  );
}
