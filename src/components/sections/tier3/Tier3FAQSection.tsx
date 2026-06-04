import React from 'react';
import Container from '../../ui/Container';
import FAQAccordion from '../../ui/FAQAccordion';
import SectionHeader from '../../ui/SectionHeader';
import { motion } from 'motion/react';

interface Tier3FAQSectionProps {
  faqs: Array<{ question: string; answer: string }>;
  category: string;
}

export default function Tier3FAQSection({ faqs, category }: Tier3FAQSectionProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            headline="Preguntas Frecuentes"
            subheadline="Todo lo que necesitas saber antes de tu cita."
            align="center"
            className="mb-16"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={faqs.map(faq => ({ ...faq, category }))} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
