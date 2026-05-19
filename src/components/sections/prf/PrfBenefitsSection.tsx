import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PrfBenefitsSection() {
  const { benefits } = prfContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="space-y-24">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                 <ResponsiveImage
                    src={benefit.image.src}
                    alt={benefit.image.alt}
                    width={800}
                    height={500}
                    className="rounded-2xl shadow-lg w-full aspect-[16/9]"
                 />
              </div>
              <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-bold text-prf uppercase tracking-widest mb-4 block">Beneficio {idx + 1}</span>
                <h3 className="text-3xl md:text-4xl mb-6">{benefit.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
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
