import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PrfBenefitsSection() {
  const { benefits } = prfContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase">
            Lo que buscamos con el PRF
          </h2>
        </div>

        <div className="space-y-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <ResponsiveImage
                    src={benefit.image.src}
                    alt={benefit.image.alt}
                    width={800}
                    height={500}
                    className="rounded-[1rem] shadow-lg w-full aspect-[16/9]"
                 />
              </div>
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-medium text-text-secondary uppercase tracking-[0.15em] mb-4 block">Beneficio {idx + 1}</span>
                <h3 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase mb-6">{benefit.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
