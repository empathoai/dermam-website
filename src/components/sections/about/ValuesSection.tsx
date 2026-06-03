import { aboutContent } from '../../../data/aboutContent';
import Container from '../../ui/Container';
import { motion } from 'motion/react';
import { Target, Users, BarChart, Languages } from '../../../design-system/icons';

export default function ValuesSection() {
  const { values } = aboutContent;

  const icons = [
    <Target className="text-base-900" size={32} />,
    <Users className="text-base-900" size={32} />,
    <BarChart className="text-base-900" size={32} />,
    <Languages className="text-base-900" size={32} />,
  ];

  return (
    <section className="py-24 bg-canvas overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans">{values.headline}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.items.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2rem] bg-white border border-border-card hover:border-base-900 hover:-translate-y-1 hover:shadow-subtle transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
            >
              <div className="mb-6 p-4 bg-canvas rounded-[2rem] w-fit shadow-sm group-hover:shadow-md transition-shadow">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-sans mb-4 text-text-primary">{value.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
