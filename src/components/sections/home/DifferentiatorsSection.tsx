import { homeContent } from '../../../data/homeContent';
import Container from '../../ui/Container';
import SectionMedia from '../../ui/SectionMedia';
import {
  headingSectionClass,
  eyebrowClass,
  bodyLgClass,
  bodyMdClass,
  cardTitleClass,
} from '../../../lib/typography';

const miniList = [
  'Evaluación previa',
  'Protocolo según tu piel',
  'Seguimiento real',
];

const proofBlocks = [
  {
    title: 'Diagnóstico antes de tratamiento',
    body: 'Analizamos tu piel antes de recomendar cualquier protocolo.',
  },
  {
    title: 'Protocolos diseñados según tu piel',
    body: 'Adaptamos cada tratamiento a tus necesidades, sensibilidad y objetivo.',
  },
  {
    title: 'Resultados documentados',
    body: 'Damos seguimiento a tu evolución con expectativas claras y criterio profesional.',
  },
];

export default function DifferentiatorsSection() {
  const { differentiators } = homeContent;

  return (
    <section className="py-28 lg:py-32 relative overflow-hidden isolation-isolate">
      <SectionMedia
        type="image"
        src={differentiators.bgImage.src}
        alt={differentiators.bgImage.alt}
        overlay="none"
        position="center"
        opacity={1}
      />
      <div className="absolute inset-0 z-[1] bg-base-900/35 pointer-events-none" />

      <Container className="relative z-10">
        {/* Two-column editorial block */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">

          {/* Left editorial panel */}
          <div className="rounded-[1.5rem] bg-base-900/82 backdrop-blur-sm border border-white/10 p-8 lg:p-12 max-w-[560px] w-full">
            <span className={`${eyebrowClass} text-base-300 mb-5 block`}>
              NUESTRO ENFOQUE
            </span>
            <h2 className={`${headingSectionClass} text-base-100 mb-6`}>
              DIAGNÓSTICO, PROTOCOLO Y SEGUIMIENTO
            </h2>
            <div className="w-10 h-px bg-white/20 mb-7" />
            <p className={`${bodyLgClass} text-base-300 mb-8`}>
              Evaluamos tu piel antes de recomendar cualquier tratamiento. Diseñamos protocolos personalizados, seguros y orientados a resultados naturales.
            </p>

            {/* Text-only principle list */}
            <ul className="mb-10" role="list">
              {miniList.map((item, idx) => (
                <li key={idx}>
                  {idx > 0 && <div className="border-t border-white/10 my-3" />}
                  <span className="text-sm font-medium text-base-200 tracking-[0.01em]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/es/reservar"
              className="inline-flex items-center gap-2 text-base-100 text-sm font-medium border-b border-base-100/40 pb-0.5 hover:opacity-70 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Agendar diagnóstico →
            </a>
          </div>

          {/* Right proof blocks */}
          <div className="flex flex-col gap-4">
            {proofBlocks.map((block, idx) => (
              <div
                key={idx}
                className="rounded-[1rem] bg-base-100/92 backdrop-blur-sm border border-[rgba(20,19,19,0.12)] p-7 lg:p-8"
              >
                <h3 className={`${cardTitleClass} text-base-900 mb-2`}>
                  {block.title}
                </h3>
                <p className={`${bodyMdClass} text-base-600`}>
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
