import React, { useState } from 'react';
import { FAQS } from '../data.constants';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQItem } from '../data.types';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Split FAQs into two columns for better layout
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftColumn = FAQS.slice(0, midPoint);
  const rightColumn = FAQS.slice(midPoint);

  const renderFAQItem = (faq: FAQItem, index: number) => {
    const isOpen = openIndex === index;

    return (
      <div key={index} className="border border-slate-200 rounded-lg md:rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-start justify-between p-4 md:p-5 text-left bg-white hover:bg-slate-50 transition-colors gap-3 md:gap-4"
        >
          <span className={`font-semibold text-base md:text-lg leading-snug ${isOpen ? 'text-jetBlue' : 'text-slate-900'}`}>
            {faq.question}
          </span>
          <div className={`mt-1 bg-slate-100 rounded-full p-1 transition-colors duration-300 shrink-0 ${isOpen ? 'bg-jetBlue text-white' : 'text-slate-400'}`}>
             <ChevronDown className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-4 md:p-5 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 bg-slate-50/30">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-jetBlue font-semibold uppercase tracking-wider text-xs md:text-sm mb-2 md:mb-3">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">Everything You Need To Know</h3>
          <p className="text-slate-600 text-sm md:text-base px-4 md:px-0">
            Got questions about pricing, timelines, or how we work? We've got answers. If you don't see your question here, just reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-3 md:space-y-4">
            {leftColumn.map((faq, i) => renderFAQItem(faq, i))}
          </div>

          {/* Right Column */}
          <div className="space-y-3 md:space-y-4">
            {rightColumn.map((faq, i) => renderFAQItem(faq, i + midPoint))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
