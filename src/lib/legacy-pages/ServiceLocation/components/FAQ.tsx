import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  service: string;
  city: string;
}

const FAQ: React.FC<FAQProps> = ({ service, city }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: `How long does it take to complete a project in ${city}?`,
      answer: 'Most projects are completed within 7 days. Complex projects may take 2-3 weeks. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'What is included in your service packages?',
      answer: 'All packages include custom design, development, SEO optimization, mobile responsiveness, hosting setup, and ongoing support for the first month.'
    },
    {
      question: `Do you provide ongoing support after launch?`,
      answer: 'Yes! We offer 24/7 support and maintenance packages. The first month of support is included with all projects.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'We follow a milestone-based payment structure: 40% advance, 30% on design approval, and 30% on completion. Flexible payment options available.'
    },
    {
      question: `Can you help with content and copywriting?`,
      answer: 'Absolutely! We have content specialists who can help with professional copywriting, product descriptions, and SEO-optimized content.'
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, basic on-page SEO is included in all projects. We also offer comprehensive SEO packages for long-term organic growth.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions from businesses in {city}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-bold text-jet-navy pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-jet-blue shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
