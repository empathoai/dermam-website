import React from 'react';
import { IVKit } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import ResponsiveImage from '../../ui/ResponsiveImage';
import { motion } from 'motion/react';
import { 
  Shield, 
  Activity, 
  Heart, 
  Zap, 
  Scale, 
  Sparkles, 
  Layers, 
  Smile, 
  Droplet, 
  Leaf, 
  Check, 
  HelpCircle 
} from 'lucide-react';

interface IVKitsCatalogSectionProps {
  kits: IVKit[];
  id?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Inmunidad': Shield,
  'Función celular': Activity,
  'Recuperación': Heart,
  'Energía': Zap,
  'Metabolismo': Scale,
  'Vitalidad': Activity,
  'Antioxidantes': Sparkles,
  'Claridad mental': Sparkles,
  'Enfoque': Layers,
  'Rendimiento': Activity,
  'PMS': Smile,
  'Alivio': Heart,
  'Hidratación': Droplet,
  'Revitalización': Sparkles,
  'Rehidratación': Droplet,
  'Frescura': Leaf,
  'Inflamación': Shield,
  'Luminosidad': Sparkles,
  'Tono uniforme': Layers,
  'Anti-edad': Sparkles
};

export default function IVKitsCatalogSection({ kits, id }: IVKitsCatalogSectionProps) {
  if (!kits || kits.length === 0) return null;

  return (
    <div id={id} className="bg-canvas flex flex-col gap-8 lg:gap-12 py-12">
      {kits.map((kit, index) => {
        const imageSrc = kit.image || '/assets/treatments/iv-therapy/hero.jpg';
        const isAlternate = index % 2 === 1;

        return (
          <section 
            key={kit.id} 
            id={kit.id}
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
                        alt={kit.alt}
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
                          <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.15em] mb-1.5 block">
                            IV Therapy Kit
                          </span>
                          
                          <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-bold tracking-[-0.03em] font-sans text-text-primary leading-[1.2] mb-2">
                            {kit.name}
                          </h3>

                          <div className="w-12 h-0.5 bg-border-strong mb-3" />
                          
                          <p className="text-text-secondary text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                            {kit.description}
                          </p>
                        </div>

                        {/* 3 circular icons row */}
                        {kit.iconPoints && kit.iconPoints.length > 0 && (
                          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border-subtle lg:border-t-0 lg:pt-0">
                            {kit.iconPoints.map((point, idx) => {
                              const IconComponent = iconMap[point] || HelpCircle;
                              return (
                                <div key={idx} className="flex flex-col items-center text-center">
                                  <div className="w-10 h-10 rounded-full bg-canvas border border-border-subtle flex items-center justify-center mb-1.5">
                                    <IconComponent className="w-4.5 h-4.5 text-text-secondary" />
                                  </div>
                                  <span className="text-[9px] font-medium text-text-secondary leading-tight max-w-[85px] line-clamp-2">
                                    {point}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Right: Benefits checklist and Buttons */}
                      <div className="lg:border-l lg:border-border-subtle lg:pl-8 xl:pl-10 h-full flex flex-col justify-between space-y-4 pt-6 border-t border-border-subtle lg:pt-0 lg:border-t-0">
                        {kit.benefits && kit.benefits.length > 0 && (
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-primary mb-3">
                              Beneficios
                            </h4>
                            <ul className="space-y-2.5">
                              {kit.benefits.slice(0, 4).map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-light leading-snug">
                                  <div className="w-5 h-5 rounded-full border border-border-card flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-text-primary" />
                                  </div>
                                  <span className="line-clamp-2">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* CTA Row */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-border-subtle">
                          <Button 
                            variant="outline"
                            to="/es/reservar"
                            className="py-2.5 px-4 w-full sm:w-auto text-center font-bold uppercase tracking-wider text-[9px]"
                          >
                            Más información
                          </Button>
                          <Button 
                            to="/es/reservar"
                            className="py-2.5 px-4 w-full sm:w-auto text-center font-bold uppercase tracking-wider text-[9px]"
                          >
                            Reservar sesión
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
