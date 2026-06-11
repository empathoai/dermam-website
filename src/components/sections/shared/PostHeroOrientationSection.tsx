import { motion } from 'motion/react';
import Container from '../../ui/Container';
import { eyebrowClass, headingSectionClass, bodyLgClass } from '../../../lib/typography';

export type OrientationCard = {
  title: string;
  body: string;
  labels?: string[];
  href?: string;
  ctaLabel?: string;
};

export type PostHeroOrientationSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: OrientationCard[];
  sectionCta?: { label: string; href: string };
};

export default function PostHeroOrientationSection({
  eyebrow,
  title,
  description,
  cards,
  sectionCta,
}: PostHeroOrientationSectionProps) {
  const isTwoCards = cards.length === 2;

  return (
    <section className="py-20 lg:py-24 bg-canvas border-b border-[rgba(20,19,19,0.08)]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className={`${eyebrowClass} text-base-900 mb-4 block`}>
            {eyebrow}
          </span>
          <h2 className={`${headingSectionClass} text-base-900 max-w-4xl mx-auto`}>
            {title}
          </h2>
          <p className={`mt-6 ${bodyLgClass} text-base-600 max-w-2xl mx-auto`}>
            {description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-16 grid grid-cols-1 gap-6 ${
            isTwoCards
              ? 'lg:grid-cols-2 max-w-4xl mx-auto'
              : 'lg:grid-cols-3'
          }`}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-[rgba(20,19,19,0.12)] rounded-[1rem] p-6 lg:p-7 min-h-[280px] flex flex-col justify-between hover:border-[rgba(20,19,19,0.24)] transition-colors duration-200"
            >
              <div>
                <span
                  aria-hidden="true"
                  className="text-[0.75rem] font-semibold tracking-[0.12em] text-base-900 tabular-nums block"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="w-10 h-px bg-[rgba(20,19,19,0.18)] mt-5" />
                <h3 className="mt-7 text-[1.05rem] lg:text-[1.15rem] font-bold uppercase tracking-[-0.02em] leading-[1.2] text-base-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-base font-light leading-[1.65] text-base-600">
                  {card.body}
                </p>
              </div>

              {(card.labels || card.href) && (
                <div className="mt-8">
                  {card.labels && card.labels.length > 0 && (
                    <p className="text-sm font-medium text-base-900">
                      {card.labels.join(' · ')}
                    </p>
                  )}
                  {card.href && (
                    <a
                      href={card.href}
                      className="mt-4 inline-flex items-center min-h-[44px] text-base font-medium text-base-900 underline underline-offset-4 hover:text-base-600 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-900"
                    >
                      {card.ctaLabel ?? 'Ver protocolos →'}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Optional section-level CTA */}
        {sectionCta && (
          <div className="mt-12 text-center">
            <a
              href={sectionCta.href}
              className="inline-flex items-center justify-center min-h-[44px] px-6 text-base font-medium text-base-900 underline underline-offset-4 hover:text-base-600 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-900"
            >
              {sectionCta.label}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
