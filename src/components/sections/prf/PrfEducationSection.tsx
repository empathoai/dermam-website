import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import ResponsiveImage from '../../ui/ResponsiveImage';

export default function PrfEducationSection() {
  const { education } = prfContent;

  return (
    <section className="py-20 bg-white overflow-hidden" id="prf-que-es">
      <Container>
        {/*
          Desktop: asymmetric two-column (image 46 % / content 54 %).
          align-items: center so both columns stay visually anchored.
          Mobile: single column, image first.
        */}
        <div
          className="grid grid-cols-1 gap-10 items-center lg:gap-16"
          style={{ gridTemplateColumns: 'minmax(0,1fr)' }}
        >
          {/* Override grid to two asymmetric columns on lg via inline style — avoids adding a new Tailwind arbitrary value */}
          <div
            className="hidden lg:grid gap-16 items-center"
            style={{ gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)' }}
            aria-hidden="false"
          >
            {/* LEFT — Editorial Image (desktop) */}
            <div className="relative">
              <div
                className="rounded-[1.25rem] overflow-hidden shadow-[0_16px_48px_rgba(20,19,19,0.07)]"
                style={{ aspectRatio: '4/5', maxHeight: '520px' }}
              >
                <ResponsiveImage
                  src={education.image.src}
                  alt={education.image.alt}
                  width={800}
                  height={1000}
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

            {/* RIGHT — Editorial Content (desktop) */}
            <div className="flex flex-col gap-5">
              {/* Eyebrow */}
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-base-500">
                {education.eyebrow}
              </p>

              {/* Headline — one step smaller than heading-section for balance */}
              <h2 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-bold leading-[1.08] tracking-[-0.03em] uppercase text-base-900 -mt-2 max-w-[580px]">
                {education.headline}
              </h2>

              {/* Body copy */}
              <p className="text-base-600 text-base leading-relaxed font-light max-w-[520px]">
                {education.copy}
              </p>

              {/* Divider */}
              <div className="border-t border-base-200" />

              {/* Subheading */}
              <h3 className="text-[clamp(1rem,1.6vw,1.25rem)] font-semibold leading-[1.35] tracking-[-0.01em] text-base-900 -mt-1">
                {education.differentiatorHeading}
              </h3>

              {/* Three editorial cards */}
              <div className="flex flex-col gap-2.5">
                {education.differentiators.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative bg-canvas rounded-[0.875rem] border border-[rgba(20,19,19,0.12)] px-4 py-3.5 flex gap-4 items-start transition-shadow duration-[240ms] hover:shadow-[0_6px_24px_rgba(20,19,19,0.07)]"
                    aria-label={`Diferenciador ${index + 1}: ${item.title}`}
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
                        {item.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-base-600">
                        {item.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* ── MOBILE layout (stacked, visible only below lg) ── */}
          <div className="lg:hidden flex flex-col gap-8">
            {/* Mobile image — landscape ratio so it doesn't tower */}
            <div className="relative">
              <div
                className="rounded-[1rem] overflow-hidden shadow-[0_12px_36px_rgba(20,19,19,0.07)]"
                style={{ aspectRatio: '4/3' }}
              >
                <ResponsiveImage
                  src={education.image.src}
                  alt={education.image.alt}
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
                {education.eyebrow}
              </p>

              <h2 className="text-[clamp(1.45rem,5.5vw,1.9rem)] font-bold leading-[1.1] tracking-[-0.025em] uppercase text-base-900 -mt-2">
                {education.headline}
              </h2>

              <p className="text-base-600 text-sm leading-relaxed font-light">
                {education.copy}
              </p>

              <div className="border-t border-base-200" />

              <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-base-900 -mt-1">
                {education.differentiatorHeading}
              </h3>

              <div className="flex flex-col gap-2.5">
                {education.differentiators.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative bg-canvas rounded-[0.875rem] border border-[rgba(20,19,19,0.12)] px-4 py-3.5 flex gap-4 items-start"
                    aria-label={`Diferenciador ${index + 1}: ${item.title}`}
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
                        {item.title}
                      </h4>
                      <p className="text-xs font-light leading-relaxed text-base-600">
                        {item.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
