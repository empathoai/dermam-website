import { postOpContent } from '../../../data/postOpLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PostOpUrgencySection() {
  const { urgency } = postOpContent;

  return (
    <section className="py-20 bg-canvas overflow-hidden" id="postop-que-es">
      <Container>
        {/*
          Desktop: asymmetric two-column (image ~46% / content ~54%).
          items-center so both columns stay visually anchored.
          Mobile: single column, image first.
        */}

        {/* ── DESKTOP layout (hidden below lg) ── */}
        <div
          className="hidden lg:grid gap-16 items-center"
          style={{ gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)' }}
        >
          {/* LEFT — Editorial Image */}
          <div className="relative">
            <div
              className="rounded-[1.25rem] overflow-hidden shadow-[0_16px_48px_rgba(20,19,19,0.07)]"
              style={{ aspectRatio: '5/4', maxHeight: '520px' }}
            >
              <ResponsiveImage
                src={urgency.image.src}
                alt={urgency.image.alt}
                width={800}
                height={640}
                className="w-full h-full object-cover rounded-[1.25rem]"
                loading="lazy"
              />
            </div>
            {/* Decorative offset border */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full rounded-[1.25rem] border border-base-200 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* RIGHT — Editorial Content */}
          <div className="flex flex-col gap-5">
            {/* Eyebrow */}
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-base-500">
              Protocolo postoperatorio DERMA.M
            </p>

            {/* Headline */}
            <h2 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.03em] uppercase text-base-900 -mt-2 max-w-[580px]">
              {urgency.headline}
            </h2>

            {/* Intro paragraph */}
            <p className="text-base-600 text-base leading-relaxed font-light max-w-[520px]">
              {urgency.intro}
            </p>

            {/* Divider */}
            <div className="border-t border-base-200" />

            {/* Subheading */}
            <h3 className="text-[clamp(1rem,1.6vw,1.25rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-base-900 -mt-1">
              Cómo acompañamos tu recuperación
            </h3>

            {/* Three editorial cards */}
            <div className="flex flex-col gap-2.5">
              {urgency.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="group relative bg-white rounded-[0.875rem] border border-[rgba(20,19,19,0.12)] px-4 py-3.5 flex gap-4 items-start transition-shadow duration-[240ms] hover:shadow-[0_6px_24px_rgba(20,19,19,0.07)]"
                  aria-label={`Beneficio ${index + 1}: ${card.title}`}
                >
                  {/* Editorial index number */}
                  <span
                    className="flex-shrink-0 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-base-400 mt-0.5 w-4 text-right select-none"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>

                  {/* Thin vertical rule */}
                  <div className="flex-shrink-0 w-px self-stretch bg-base-200" aria-hidden="true" />

                  {/* Content */}
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold leading-snug text-base-900">
                      {card.title}
                    </h4>
                    <p className="text-xs font-light leading-relaxed text-base-600">
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE layout (visible only below lg) ── */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile image — landscape ratio */}
          <div className="relative">
            <div
              className="rounded-[1rem] overflow-hidden shadow-[0_12px_36px_rgba(20,19,19,0.07)]"
              style={{ aspectRatio: '4/3' }}
            >
              <ResponsiveImage
                src={urgency.image.src}
                alt={urgency.image.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-[1rem]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile content */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-base-500">
              Protocolo postoperatorio DERMA.M
            </p>

            <h2 className="text-[clamp(1.45rem,5.5vw,1.9rem)] font-bold leading-[1.1] tracking-[-0.025em] uppercase text-base-900 -mt-2">
              {urgency.headline}
            </h2>

            <p className="text-base-600 text-sm leading-relaxed font-light">
              {urgency.intro}
            </p>

            <div className="border-t border-base-200" />

            <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-base-900 -mt-1">
              Cómo acompañamos tu recuperación
            </h3>

            <div className="flex flex-col gap-2.5">
              {urgency.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="group relative bg-white rounded-[0.875rem] border border-[rgba(20,19,19,0.12)] px-4 py-3.5 flex gap-4 items-start"
                  aria-label={`Beneficio ${index + 1}: ${card.title}`}
                >
                  <span
                    className="flex-shrink-0 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-base-400 mt-0.5 w-4 text-right select-none"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                  <div className="flex-shrink-0 w-px self-stretch bg-base-200" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold leading-snug text-base-900">
                      {card.title}
                    </h4>
                    <p className="text-xs font-light leading-relaxed text-base-600">
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
