import React from 'react';
import { HubCatalogSection } from '../../../types/hub';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { siteConfig } from '../../../data/siteConfig';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface HubCatalogSectionsProps {
  sections: HubCatalogSection[];
}

const sectionImages: Record<string, string> = {
  // Facial Hub
  'limpieza-hidratacion-preparacion-piel': '/assets/treatments/limpieza-facial/hero.jpg',
  'textura-poros-renovacion': '/assets/treatments/microneedling/hero.jpg',
  'regeneracion-colageno-calidad-piel': '/assets/treatments/prf/hero.jpg',
  'acne-manchas-piel-sensible': '/assets/treatments/plasma-frio/hero.jpg',
  'firmeza-lifting-contorno-facial': '/assets/treatments/radiofrecuencia-facial/hero.jpg',
  'bienestar-facial-relajacion': '/assets/treatments/masajes-relajantes-faciales/hero.jpg',

  // Corporate Hub
  'recuperacion-postoperatoria': '/assets/treatments/postoperatorio/hero.jpg',
  'remodelacion-reduccion-corporal': '/assets/pages/home/postop-card.jpg',
  'firmeza-tonificacion-musculacion': '/assets/treatments/tratamientos-corporales/hero.jpg',
  'gluteos-contorno-corporal': '/assets/images/body-massage.jpg',
  'textura-piel-celulitis-estrias': '/assets/treatments/tratamientos-corporales/hero.jpg',
  'bienestar-corporal-tratamientos-complementarios': '/assets/pages/home/postop-card.jpg',

  // Laser & Light Hub
  'depilacion-laser-diodo': '/assets/treatments/laser-luz/hero.jpg',
  'ipl-luz-pulsada-intensa': '/assets/treatments/laser-luz/cta.jpg',
  'laser-co2-fraccionado': '/assets/treatments/laser-luz/hero.jpg',

  // Dental Hub
  'blanqueamiento-dental-estetico': '/assets/treatments/dental/hero.jpg',
  'limpieza-dental-profesional': '/assets/treatments/dental/cta.jpg',
};

const fallbackImage = '/assets/treatments/tratamientos-faciales/hero.jpg';

function getEditorialNumber(index: number) {
  return String(index + 1).padStart(2, '0');
}

function getEyebrowLabel(section: HubCatalogSection, index: number) {
  if (!section.eyebrow) return `Módulo ${getEditorialNumber(index)}`;

  const parts = section.eyebrow.split('·');
  return (parts[1] || section.eyebrow).trim();
}

export default function HubCatalogSections({ sections }: HubCatalogSectionsProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-canvas py-14 lg:py-20">
      <div className="flex flex-col gap-8 lg:gap-10">
        {sections.map((section, index) => {
          const imageSrc = sectionImages[section.id] || fallbackImage;
          const isAlternate = index % 2 === 1;
          const editorialNumber = getEditorialNumber(index);
          const eyebrowLabel = getEyebrowLabel(section, index);
          const whatsappText = `Hola, quiero información sobre tratamientos de: ${section.title} en DERMA.M.`;
          const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
          const secondaryHref = section.secondaryCta?.type === 'internal'
            ? section.secondaryCta.href
            : whatsappUrl;

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-[1.5rem] border border-border-card bg-white shadow-card-soft"
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute top-4 z-0 select-none font-sans text-[clamp(5.5rem,12vw,11rem)] font-extrabold leading-none tracking-[-0.08em] text-base-900/[0.035] ${isAlternate ? 'left-5 lg:left-8' : 'right-5 lg:right-8'}`}
                  >
                    {editorialNumber}
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 lg:min-h-[430px]">
                    <div className={`lg:col-span-5 ${isAlternate ? 'lg:order-last' : ''}`}>
                      <div className="group relative h-full min-h-[260px] overflow-hidden bg-base-200 lg:min-h-full">
                        <ResponsiveImage
                          src={imageSrc}
                          alt={section.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-900/35 via-base-900/5 to-transparent lg:bg-gradient-to-r lg:from-base-900/20 lg:via-transparent lg:to-transparent" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-base-900/45 px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-base-100 backdrop-blur-md">
                          {editorialNumber} · {eyebrowLabel}
                        </div>
                      </div>
                    </div>

                    <div className={`lg:col-span-7 ${isAlternate ? 'lg:order-first' : ''}`}>
                      <div className="flex h-full flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 xl:p-12">
                        <div className="max-w-2xl">
                          <div className="mb-5 flex items-center gap-3">
                            <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-text-muted">
                              {eyebrowLabel}
                            </span>
                            <span className="h-px flex-1 bg-border-subtle" />
                          </div>

                          <h3 className="max-w-[620px] font-sans text-[clamp(1.55rem,2.7vw,2.35rem)] font-bold uppercase leading-[1.02] tracking-[-0.04em] text-text-primary">
                            {section.title}
                          </h3>

                          <p className="mt-5 max-w-[620px] text-sm font-light leading-relaxed text-text-secondary md:text-base">
                            {section.description}
                          </p>

                          {section.treatments?.length > 0 && (
                            <div className="mt-7 flex flex-wrap gap-2.5">
                              {section.treatments.map((treatment) => (
                                <span
                                  key={treatment}
                                  className="rounded-full border border-border-subtle bg-canvas px-4 py-2 text-xs font-light leading-none text-text-secondary"
                                >
                                  {treatment}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col gap-6 border-t border-border-subtle pt-6">
                          <div>
                            <h4 className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-text-primary">
                              Ideal para
                            </h4>
                            <ul className="grid gap-3 md:grid-cols-2">
                              {section.idealFor.slice(0, 4).map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-sm font-light leading-snug text-text-secondary">
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border-card bg-white text-text-primary">
                                    <Check className="h-3 w-3" />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                            <Button
                              to={section.primaryCta.href}
                              className="w-full px-5 py-3 text-sm sm:w-auto"
                            >
                              {section.primaryCta.label}
                            </Button>
                            {section.secondaryCta && secondaryHref && (
                              <Button
                                variant="outline"
                                {...(section.secondaryCta.type === 'internal'
                                  ? { to: secondaryHref }
                                  : { href: secondaryHref, target: '_blank', rel: 'noopener noreferrer' })}
                                className="w-full px-5 py-3 text-sm sm:w-auto"
                              >
                                {section.secondaryCta.label}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Container>
            </section>
          );
        })}
      </div>
    </div>
  );
}
