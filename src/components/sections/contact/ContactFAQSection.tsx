import { useState } from 'react';
import { contactContent } from '../../../data/contactContent';
import Container from '../../ui/Container';
import { ChevronDown } from '../../../design-system/icons';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactFAQSection() {
  const { faqs } = contactContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-canvas">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.05] tracking-[-0.035em] uppercase font-sans mb-4">Preguntas frecuentes</h2>
            <p className="text-text-secondary">Dudas logísticas comunes al contactarnos.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-border-card overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-contact-${idx}`}
                >
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                  <ChevronDown 
                    className={`text-text-secondary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-answer-contact-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-soft pt-4 text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
