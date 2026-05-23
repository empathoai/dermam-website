import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PrfEducationSection() {
  const { education } = prfContent;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-prf-soft/30 rounded-[2rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
                <ResponsiveImage
                    src={education.image.src}
                    alt={education.image.alt}
                    width={800}
                    height={600}
                    className="rounded-[2rem] shadow-xl w-full"
                />
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-8 leading-tight">
              {education.headline}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-12">
              {education.copy}
            </p>
            
            <div className="bg-white rounded-[2rem] border border-border-soft overflow-hidden shadow-subtle">
                <div className="bg-prf text-white px-6 py-4">
                    <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-center">Evolución de la regeneración estética</h3>
                </div>
                <div className="divide-y divide-border-soft">
                    {education.comparison.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-3 text-center">
                            <div className="p-4 bg-canvas/50 border-r border-border-soft text-xs font-medium uppercase tracking-[0.15em] text-text-secondary flex items-center justify-center">
                                {item.label}
                            </div>
                            <div className="p-4 text-xs text-text-secondary line-through opacity-50 flex items-center justify-center">
                                {item.prp}
                            </div>
                            <div className="p-4 text-xs font-semibold text-text-primary bg-prf-soft/10 flex items-center justify-center">
                                {item.prf}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
