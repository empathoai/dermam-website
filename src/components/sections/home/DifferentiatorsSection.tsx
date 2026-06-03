import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import StatItem from '../../ui/StatItem';
import Card from '../../ui/Card';
import SectionMedia from '../../ui/SectionMedia';
import { ShieldCheck } from '../../../design-system/icons';

export default function DifferentiatorsSection() {
  const { differentiators } = homeContent;

  return (
    <section className="py-24 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={differentiators.bgImage.src}
        alt={differentiators.bgImage.alt}
        overlay="soft"
        position="right"
        opacity={1}
      />

      <Container className="relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {differentiators.stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>

        <div className="border-t border-border-soft pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-8 text-base-200">Por qué DERMA.M</h2>
              <p className="text-base-300 text-base leading-relaxed mb-12">
                Nos enfocamos en un enfoque estético integral, donde la salud de tu piel es lo primero. Nuestro compromiso es ofrecer resultados naturales a través de diagnósticos precisos y protocolos personalizados.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {differentiators.benefits.map((benefit, idx) => (
                <Card key={idx} className="p-8 flex gap-6 bg-white/70 backdrop-blur-md hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border border-border-card">
                  <div className="w-12 h-12 rounded-full bg-base-900/10 flex items-center justify-center text-base-900 flex-shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
