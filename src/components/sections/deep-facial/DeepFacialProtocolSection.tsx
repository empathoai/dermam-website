import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {protocol.steps.map((step, idx) => (
            <div key={idx} className={`relative flex flex-col h-full bg-white rounded-[2rem] border transition-all duration-300 ${step.isKeyMoment ? 'border-sage ring-4 ring-sage-soft/30' : 'border-border-soft hover:border-sage'}`}>
              {step.isKeyMoment && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-sage text-white text-[10px] font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-full shadow-lg">
                    Momento clave
                  </span>
                </div>
              )}
              
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
        </div>
      </Container>
    </section>
  );
}
