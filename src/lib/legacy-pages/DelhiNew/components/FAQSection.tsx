import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data.constants';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-slate">
            Everything You Need to Know About Website Development in Delhi NCR
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-4">
            {FAQS.slice(0, Math.ceil(FAQS.length / 2)).map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                  openIndex === idx
                    ? 'border-jet-blue ring-1 ring-jet-blue shadow-md'
                    : 'border-gray-100 hover:border-jet-blue/30'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-jet-orange font-bold text-lg hidden sm:block">Q.</span>
                    <span className="font-bold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
                  </div>
                  {openIndex === idx ? (
                    <Minus className="h-5 w-5 text-jet-blue flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-slate text-sm leading-relaxed pl-0 sm:pl-7 border-l-2 border-gray-100 ml-1 sm:ml-0">
                    {faq.answer}
                  </p>
                  <div className="mt-3 pl-0 sm:pl-7 ml-1 sm:ml-0">
                    <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {FAQS.slice(Math.ceil(FAQS.length / 2)).map((faq, idx) => {
              const adjustedIdx = idx + Math.ceil(FAQS.length / 2);
              return (
                <div
                  key={adjustedIdx}
                  className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${
                    openIndex === adjustedIdx
                      ? 'border-jet-blue ring-1 ring-jet-blue shadow-md'
                      : 'border-gray-100 hover:border-jet-blue/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(adjustedIdx)}
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-jet-orange font-bold text-lg hidden sm:block">Q.</span>
                      <span className="font-bold text-navy text-sm sm:text-base pr-4">{faq.question}</span>
                    </div>
                    {openIndex === adjustedIdx ? (
                      <Minus className="h-5 w-5 text-jet-blue flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === adjustedIdx ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate text-sm leading-relaxed pl-0 sm:pl-7 border-l-2 border-gray-100 ml-1 sm:ml-0">
                      {faq.answer}
                    </p>
                    <div className="mt-3 pl-0 sm:pl-7 ml-1 sm:ml-0">
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
