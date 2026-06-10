import React from 'react';
import { HubCatalogSection } from '../../../types/hub';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { siteConfig } from '../../../data/siteConfig';
import { motion } from 'motion/react';
import { 
  Droplet, 
  Sparkles, 
  Layers, 
  Zap, 
  Activity, 
  Shield, 
  Smile, 
  Heart, 
  Scale, 
  Leaf,
  Check
} from 'lucide-react';

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
  'depilacion-laser-diodo': '/assets/images/laser-hair.jpg',
  'ipl-luz-pulsada-intensa': '/assets/images/laser-device.jpg',
  'laser-co2-fraccionado': '/assets/images/consultation-room.jpg',

  // Dental Hub
  'blanqueamiento-dental-estetico': '/assets/images/dental-office.jpg',
  'limpieza-dental-profesional': '/assets/images/dental-mouth.jpg',
};

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const catalogBenefits: Record<string, BenefitItem[]> = {
  // Facial Hub
  'limpieza-hidratacion-preparacion-piel': [
    { icon: Droplet, label: 'Limpia impurezas' },
    { icon: Sparkles, label: 'Oxigena la piel' },
    { icon: Droplet, label: 'Prepara el rostro' }
  ],
  'textura-poros-renovacion': [
    { icon: Sparkles, label: 'Renueva células' },
    { icon: Layers, label: 'Suaviza poros' },
    { icon: Droplet, label: 'Aporta luz' }
  ],
  'regeneracion-colageno-calidad-piel': [
    { icon: Zap, label: 'Estimula colágeno' },
    { icon: Activity, label: 'Firmeza dérmica' },
    { icon: Sparkles, label: 'Calidad de piel' }
  ],
  'acne-manchas-piel-sensible': [
    { icon: Shield, label: 'Equilibra la piel' },
    { icon: Droplet, label: 'Calma brotes' },
    { icon: Sparkles, label: 'Mejora secuelas' }
  ],
  'firmeza-lifting-contorno-facial': [
    { icon: Activity, label: 'Efecto lifting' },
    { icon: Layers, label: 'Define contornos' },
    { icon: Zap, label: 'Reafirma tejidos' }
  ],
  'bienestar-facial-relajacion': [
    { icon: Smile, label: 'Relaja tensiones' },
    { icon: Activity, label: 'Mejora circulación' },
    { icon: Sparkles, label: 'Bienestar y relax' }
  ],

  // Corporate Hub
  'recuperacion-postoperatoria': [
    { icon: Heart, label: 'Baja inflamación' },
    { icon: Shield, label: 'Drenaje linfático' },
    { icon: Activity, label: 'Soporte post-op' }
  ],
  'remodelacion-reduccion-corporal': [
    { icon: Scale, label: 'Grasa localizada' },
    { icon: Layers, label: 'Moldeo corporal' },
    { icon: Activity, label: 'Reduce medidas' }
  ],
  'firmeza-tonificacion-musculacion': [
    { icon: Zap, label: 'Musculación' },
    { icon: Activity, label: 'Tonifica y afirma' },
    { icon: Layers, label: 'Combate flacidez' }
  ],
  'gluteos-contorno-corporal': [
    { icon: Activity, label: 'Mayor firmeza' },
    { icon: Layers, label: 'Proyección' },
    { icon: Zap, label: 'Moldeo silueta' }
  ],
  'textura-piel-celulitis-estrias': [
    { icon: Layers, label: 'Reduce celulitis' },
    { icon: Sparkles, label: 'Mejora textura' },
    { icon: Droplet, label: 'Calidad de tejido' }
  ],
  'bienestar-corporal-tratamientos-complementarios': [
    { icon: Leaf, label: 'Desintoxicación' },
    { icon: Smile, label: 'Mantenimiento' },
    { icon: Sparkles, label: 'Cuidado capilar' }
  ],

  // Laser & Light Hub
  'depilacion-laser-diodo': [
    { icon: Zap, label: 'Tecnología diodo' },
    { icon: Sparkles, label: 'Piel suave' },
    { icon: Shield, label: 'Sin rasuradoras' }
  ],
  'ipl-luz-pulsada-intensa': [
    { icon: Shield, label: 'Manchas solares' },
    { icon: Layers, label: 'Tono uniforme' },
    { icon: Sparkles, label: 'Luminosidad' }
  ],
  'laser-co2-fraccionado': [
    { icon: Sparkles, label: 'Renovación profunda' },
    { icon: Layers, label: 'Textura y poros' },
    { icon: Zap, label: 'Colágeno' }
  ],

  // Dental Hub
  'blanqueamiento-dental-estetico': [
    { icon: Sparkles, label: 'Sonrisa brillante' },
    { icon: Zap, label: 'Una sesión' },
    { icon: Smile, label: 'Estética dental' }
  ],
  'limpieza-dental-profesional': [
    { icon: Droplet, label: 'Limpieza profunda' },
    { icon: Sparkles, label: 'Frescura' },
    { icon: Shield, label: 'Cuidado preventivo' }
  ]
};

const defaultBenefits = [
  { icon: Sparkles, label: 'Cuidado experto' },
  { icon: Shield, label: 'Seguridad' },
  { icon: Activity, label: 'Resultados' }
];

export default function HubCatalogSections({ sections }: HubCatalogSectionsProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="bg-canvas flex flex-col gap-8 lg:gap-12 py-12">
      {sections.map((section, index) => {
        const imageSrc = sectionImages[section.id] || '/assets/treatments/tratamientos-faciales/hero.jpg';
        const isAlternate = index % 2 === 1;

        // Custom WhatsApp message for the specific section
        const whatsappText = `Hola, quiero información sobre tratamientos de: ${section.title} en DERMA.M.`;
        const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
        const benefits = catalogBenefits[section.id] || defaultBenefits;

        return (
          <section 
            key={section.id} 
            id={section.id}
            className="py-4 last:pb-12 scroll-mt-24"
          >
            <Container>
              <div className="bg-white border border-border-card rounded-[1.5rem] p-6 lg:p-8 xl:p-10 shadow-card-soft lg:h-[420px] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch h-full">
                  
                  {/* Image Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`lg:col-span-4 w-full flex h-full ${isAlternate ? 'lg:order-last' : ''}`}
                  >
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[1.25rem] overflow-hidden border border-border-card shadow-subtle group">
                      <ResponsiveImage
                        src={imageSrc}
                        alt={section.title}
                        className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-102"
                      />
                    </div>
                  </motion.div>

                  {/* Content Column */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`lg:col-span-8 h-full ${isAlternate ? 'lg:order-first' : ''}`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 h-full">
                      
                      {/* Left: Eyebrow, Title, Description, 3 circular icons */}
                      <div className="flex flex-col justify-start h-full space-y-4">
                        <div>
                          {section.eyebrow && (
                            <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.15em] mb-1.5 block">
                              {section.eyebrow}
                            </span>
                          )}
                          
                          <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-bold tracking-[-0.03em] font-sans text-text-primary leading-[1.2] mb-2">
                            {section.title}
                          </h3>

                          <div className="w-12 h-0.5 bg-border-strong mb-3" />
                          
                          <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                            {section.description}
                          </p>
                        </div>

                        {/* 3 circular icons row */}
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border-subtle lg:border-t-0 lg:pt-0">
                          {benefits.map((benefit, idx) => {
                            const IconComponent = benefit.icon;
                            return (
                              <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-10 h-10 rounded-full bg-canvas border border-border-subtle flex items-center justify-center mb-1.5">
                                  <IconComponent className="w-4.5 h-4.5 text-text-secondary" />
                                </div>
                                <span className="text-[9px] font-medium text-text-secondary leading-tight max-w-[85px] line-clamp-2">
                                  {benefit.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right: Benefits checklist and Buttons */}
                      <div className="lg:border-l lg:border-border-subtle lg:pl-8 xl:pl-10 h-full flex flex-col justify-between space-y-4 pt-6 border-t border-border-subtle lg:pt-0 lg:border-t-0">
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-primary mb-3">
                            Beneficios
                          </h4>
                          <ul className="space-y-2.5">
                            {section.idealFor.slice(0, 3).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-light leading-snug">
                                <div className="w-5 h-5 rounded-full border border-border-card flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-text-primary" />
                                </div>
                                <span className="line-clamp-2">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Row */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-subtle">
                          <Button 
                            variant="outline"
                            to={section.primaryCta.href}
                            className="py-2.5 px-4 w-full sm:w-auto text-center font-bold uppercase tracking-wider text-[9px]"
                          >
                            Más información
                          </Button>
                          <Button 
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 px-4 w-full sm:w-auto text-center font-bold uppercase tracking-wider text-[9px]"
                          >
                            Agenda tu evaluación
                          </Button>
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
