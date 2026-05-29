import React, { useState } from 'react';
import { HubFAQItem } from '../../types/hub';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQAccordionProps {
  items: HubFAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className="bg-white rounded-[2rem] border border-border-card overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggle(idx)}
            className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-canvas/50 transition-colors"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-answer-hub-${idx}`}
          >
            <span className="font-semibold text-text-primary text-sm md:text-base">
              {item.question}
            </span>
            <ChevronDown 
              className={`text-text-secondary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
              size={20} 
            />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                id={`faq-answer-hub-${idx}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-soft pt-4 text-xs md:text-sm">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
