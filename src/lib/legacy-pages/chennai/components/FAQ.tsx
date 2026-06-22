import React, { useState } from 'react';
import { FAQS } from '../constant';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItemComponent: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-100 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onClick}
        className="w-full py-4 px-5 flex justify-between items-start text-left bg-white transition-colors"
      >
        <span className={`font-semibold text-sm md:text-base pr-4 leading-snug ${isOpen ? 'text-jet-blue' : 'text-jet-navy'}`}>{question}</span>
        {isOpen ? <ChevronUp className="text-jet-orange flex-shrink-0 mt-1" size={18} /> : <ChevronDown className="text-slate-400 flex-shrink-0 mt-1" size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-slate-50"
          >
            <div className="py-4 px-5 text-jet-slate text-sm leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [displayCount, setDisplayCount] = useState(10);

  return (
    <section className="py-20 bg-jet-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-jet-navy">Frequently Asked Questions</h2>
          <p className="text-jet-slate">Everything you need to know about website design in Chennai</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {FAQS.slice(0, displayCount).map((faq, index) => (
            <FAQItemComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        {displayCount < FAQS.length && (
            <div className="text-center mt-12">
                <button 
                    onClick={() => setDisplayCount(prev => Math.min(prev + 10, FAQS.length))}
                    className="inline-block px-6 py-3 border border-jet-blue text-jet-blue rounded-full font-semibold hover:bg-jet-blue hover:text-white transition-all"
                >
                    Load More Questions ({FAQS.length - displayCount} remaining)
                </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;