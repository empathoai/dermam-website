import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function PrfProtocolSection() {
  const { protocol } = prfContent;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{protocol.headline}</h2>
        </div>
        
        <ResponsiveCardGroup desktopColumns={4} className="mb-16" mobileCardWidth="82vw">
          {protocol.steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border-card relative group hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
               <span className="absolute top-4 right-6 text-6xl font-sans text-text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                {idx + 1}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </ResponsiveCardGroup>

        <div className="max-w-2xl mx-auto p-4 bg-white/50 backdrop-blur-sm rounded-full border border-border-card text-center">
          <p className="text-xs md:text-sm font-medium text-text-secondary uppercase tracking-[0.15em]">
            {protocol.info}
          </p>
        </div>
      </Container>
    </section>
  );
}
