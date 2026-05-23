import { deepFacialContent } from '../../../data/deepFacialLanding';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Check } from 'lucide-react';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function DeepFacialUpsellSection() {
  const { upsell } = deepFacialContent;

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-white border border-border-soft shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6 leading-tight">{upsell.headline}</h2>
                <p className="text-text-secondary mb-10 leading-relaxed">{upsell.copy}</p>
                
                <ul className="space-y-4 mb-12">
                    {upsell.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                            <div className="w-5 h-5 rounded-full bg-base-900/10 flex items-center justify-center text-base-900">
                                <Check size={12} />
                            </div>
                            {point}
                        </li>
                    ))}
                </ul>

                <Button 
                    variant="primary"
                    to="/es/reservar"
                    className="w-full sm:w-auto px-10"
                >
                    {upsell.cta}
                </Button>
            </div>
            <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto">
                <ResponsiveImage 
                    src="/assets/treatments/deepfacial-upsell.jpg" 
                    alt="Consulta personalizada de piel"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </Container>
    </section>
  );
}
