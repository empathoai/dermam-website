import React from 'react';
import { IVTherapyFAQItem } from '../../../types/ivTherapy';
import Container from '../../ui/Container';
import FAQAccordion from '../../ui/FAQAccordion';
import SectionHeader from '../../ui/SectionHeader';
import { motion } from 'motion/react';

interface IVTherapyFAQSectionProps {
  items: IVTherapyFAQItem[];
}

export default function IVTherapyFAQSection({ items }: IVTherapyFAQSectionProps) {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            headline="Preguntas frecuentes sobre IV Therapy"
            align="center"
            className="mb-16"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FAQAccordion items={items.map(item => ({ ...item, category: 'IV Therapy' }))} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
