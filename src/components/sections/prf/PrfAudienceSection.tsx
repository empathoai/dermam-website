import { prfContent } from '../../../data/prfLanding';
import Container from '../../ui/Container';
import { Check } from '../../../design-system/icons';
import { motion } from 'motion/react';
import ResponsiveCardGroup from '../../ui/ResponsiveCardGroup';

export default function PrfAudienceSection() {
  const { audience } = prfContent;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase">{audience.headline}</h2>
          </div>
          
          <ResponsiveCardGroup desktopColumns={2} desktopClassName="gap-x-12 gap-y-6" mobileCardWidth="84vw">
            {audience.checks.map((check, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex h-[5.625rem] items-center gap-4 p-5 rounded-[1rem] bg-base-900 border border-white/10 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                <Check className="text-base-100 flex-shrink-0" size={20} />
                <span className="text-base text-base-100 font-medium">{check}</span>
              </motion.div>
            ))}
          </ResponsiveCardGroup>
        </div>
      </Container>
    </section>
  );
}
