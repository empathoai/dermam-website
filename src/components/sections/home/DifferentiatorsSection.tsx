import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import SectionMedia from '../../ui/SectionMedia';
import { Award, BadgeCheck, BarChart, Microscope, ShieldCheck, Users } from '../../../design-system/icons';

export default function DifferentiatorsSection() {
  const { differentiators } = homeContent;
  const statIcons = [Award, Users, ShieldCheck];
  const benefitIcons = [Microscope, BadgeCheck, BarChart];

  return (
    <section className="py-24 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={differentiators.bgImage.src}
        alt={differentiators.bgImage.alt}
        overlay="none"
        position="right"
        opacity={1}
      />

      <Container className="relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-20">
          {differentiators.stats.map((stat, idx) => {
            const Icon = statIcons[idx] || ShieldCheck;

            return (
              <div key={idx} className="flex items-center gap-5 rounded-[2rem] border border-border bg-white px-8 py-6 shadow-card-soft">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-primary">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="h-12 w-px flex-shrink-0 bg-border" aria-hidden="true" />
                <div>
                  <div className="text-[clamp(2.2rem,3vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-text-primary">
                    {stat.value}
                  </div>
                  <div className="text-label-xs font-medium uppercase tracking-[0.15em] text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border-soft pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="rounded-[2rem] bg-base-900/55 p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-8 text-base-100">Por qué DERMA.M</h2>
              <p className="text-base-200 text-base leading-relaxed">
                Nos enfocamos en un enfoque estético integral, donde la salud de tu piel es lo primero. Nuestro compromiso es ofrecer resultados naturales a través de diagnósticos precisos y protocolos personalizados.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              {differentiators.benefits.map((benefit, idx) => {
                const Icon = benefitIcons[idx] || ShieldCheck;

                return (
                <Card key={idx} className="p-8 flex items-center gap-7 bg-white shadow-card-soft hover:-translate-y-1 hover:border-base-900 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] border border-border-card">
                  <div className="w-16 h-16 rounded-full bg-base-100 border border-border flex items-center justify-center text-base-900 flex-shrink-0">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <div className="h-16 w-px flex-shrink-0 bg-border" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
