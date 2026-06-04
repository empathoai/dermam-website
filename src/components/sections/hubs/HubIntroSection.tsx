import { HubPageContent } from '../../../types/hub';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

interface HubIntroSectionProps {
  content: HubPageContent['intro'];
}

export default function HubIntroSection({ content }: HubIntroSectionProps) {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Stats Row */}
          <ResponsiveCardGroup desktopColumns={3} mobileCardWidth="82vw">
            {content.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-[2rem] border border-border-card shadow-subtle hover:-translate-y-1 hover:border-base-900 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <div className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-label-xs font-bold text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </ResponsiveCardGroup>

          <div className="max-w-3xl mx-auto mt-16">
            <p className="text-label-xs font-medium uppercase tracking-[0.12em] text-text-muted mb-6 text-center">
              {content.editorialLabel}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed text-center mb-12">
              {content.editorialBody}
            </p>
            <ResponsiveCardGroup desktopColumns={3} mobileCardWidth="82vw">
              {content.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-3 text-center"
                >
                  <div className="w-8 h-px bg-border-strong mx-auto" />
                  <h3 className="text-base font-semibold text-text-primary uppercase tracking-[0.05em]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </ResponsiveCardGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
