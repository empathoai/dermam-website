import React, { useState } from 'react';
import { HubFAQItem } from '../../types/hub';
import { ChevronDown } from '../../design-system/icons';
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
    <div className="-mx-2 space-y-2 sm:mx-0">
      {items.map((item, idx) => (
        <div className="group" key={idx}>
          <div
            className={[
              'overflow-hidden rounded-[1rem] border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
              openIndex === idx
                ? 'border-border-card bg-white shadow-card-soft'
                : 'border-transparent bg-transparent hover:bg-white/70',
            ].join(' ')}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-8 md:py-6"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-hub-${idx}`}
            >
              <span className="font-medium text-text-primary text-base leading-[1.45] normal-case">
                {item.question}
              </span>
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border-soft bg-white text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                  size={18}
                />
              </span>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  id={`faq-answer-hub-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <div className="px-6 pb-6 pt-0 text-sm font-light leading-[1.75] text-text-secondary md:px-8 md:pb-8 md:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <hr className="mx-6 -mb-px border-border-soft transition-opacity duration-300 group-last:hidden md:mx-8" />
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
