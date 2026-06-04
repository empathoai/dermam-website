import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { Check } from '../../../design-system/icons';

export default function PrfEducationSection() {
  const { education } = prfContent;

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-prf-soft/30 rounded-[1rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
                <ResponsiveImage
                    src={education.image.src}
                    alt={education.image.alt}
                    width={800}
                    height={600}
                    className="rounded-[1rem] shadow-xl w-full"
                />
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-8 leading-tight">
              {education.headline}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed font-light mb-12">
              {education.copy}
            </p>
            
            <div className="rounded-[1rem] overflow-hidden bg-base-900 text-base-100 border border-white/10 shadow-xl">
              <div className="px-6 py-5 border-b border-white/10">
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-center">
                  PRP convencional vs PRF DERMA.M
                </h3>
              </div>

              <div className="hidden md:grid grid-cols-[1fr_1.15fr_1.15fr]">
                <div className="px-5 py-4 text-label-xs uppercase tracking-[0.16em] text-base-300 border-b border-white/10">
                  Criterio
                </div>
                <div className="px-5 py-4 text-label-xs uppercase tracking-[0.16em] text-base-300 border-b border-l border-white/10">
                  PRP convencional
                </div>
                <div className="px-5 py-4 text-label-xs uppercase tracking-[0.16em] text-base-100 border-b border-l border-white/10 flex items-center gap-2">
                  <Check size={16} className="text-base-100" />
                  PRF — DERMA.M
                </div>

                {education.comparison.map((item) => (
                  <div key={item.label} className="contents">
                    <div className="px-5 py-4 text-sm font-medium text-base-200 border-b border-white/10 last:border-b-0">
                      {item.label}
                    </div>
                    <div className="px-5 py-4 text-sm text-base-300 border-b border-l border-white/10">
                      {item.prp}
                    </div>
                    <div className="px-5 py-4 text-sm font-semibold text-base-100 border-b border-l border-white/10 bg-white/[0.06]">
                      {item.prf}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 p-5 md:hidden">
                <div className="rounded-[0.875rem] border border-white/10 bg-white/[0.04] p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-base-100 mb-4">
                    PRP convencional
                  </h4>
                  <ul className="space-y-3 text-sm text-base-300">
                    {education.comparison.map((item) => (
                      <li key={`${item.label}-mobile-prp`} className="flex flex-col gap-1">
                        <span className="text-label-sm uppercase tracking-[0.15em] text-base-300/70">{item.label}</span>
                        <span>{item.prp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[0.875rem] border border-white/15 bg-white/[0.08] p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-base-100 mb-4 flex items-center gap-2">
                    <Check size={16} />
                    PRF — DERMA.M
                  </h4>
                  <ul className="space-y-3 text-sm text-base-100">
                    {education.comparison.map((item) => (
                      <li key={`${item.label}-mobile-prf`} className="flex flex-col gap-1">
                        <span className="text-label-sm uppercase tracking-[0.15em] text-base-300/70">{item.label}</span>
                        <span className="font-semibold">{item.prf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
