import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function DeepFacialProtocolSection() {
  const { protocol } = deepFacialContent;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{protocol.headline}</h2>
          <div className="inline-block bg-white px-6 py-2 rounded-full border border-border-soft text-sm text-text-secondary">
             {protocol.info}
          </div>
        </div>
        
        <ResponsiveCardGroup desktopColumns={5} desktopClassName="gap-4" mobileCardWidth="84vw">
          {protocol.steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col h-full bg-white rounded-[1rem] border border-border-card transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-subtle hover:border-border-card-hover">
              <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                 <ResponsiveImage 
                    src={step.image?.src || ''} 
                    alt={step.image?.alt || ''} 
                    className="w-full h-full object-cover"
                 />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-sans text-text-primary opacity-20">0{idx + 1}</span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider">{step.title}</h3>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed flex-grow">{step.description}</p>
              </div>
            </div>
          ))}
        </ResponsiveCardGroup>
      </Container>
    </section>
  );
}
