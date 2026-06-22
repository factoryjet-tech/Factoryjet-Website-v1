
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Business websites: 3-4 weeks (faster than most Mumbai agencies)\nE-commerce stores: 4-5 weeks\nWe share progress via WhatsApp daily—you\'re never in the dark.',
    },
    {
      question: 'What payment options do you integrate?',
      answer: 'All of them! UPI (GPay, PhonePe, Paytm), Razorpay, Credit/Debit Cards, Net Banking, EMI options, and COD for e-commerce. We\'re a Razorpay Partner.',
    },
    {
      question: 'Can I meet your team in person?',
      answer: 'Absolutely! We serve Pune businesses directly. Visit our office or we\'ll come to you. Most clients prefer a mix of in-person kickoff + WhatsApp updates.',
    },
    {
      question: 'Do you work with businesses outside Pune?',
      answer: 'Yes! We serve clients across Maharashtra and India. But our core strength is Pune & Maharashtra (Mumbai, Nagpur, Nashik). Local businesses get priority support.',
    },
    {
      question: "What if I already have a website but it's not working?",
      answer: 'We offer free website audits. We\'ll tell you exactly what\'s wrong and how to fix it—whether you hire us or not. No strings attached.',
    },
    {
      question: 'Do you provide SEO to rank on Google?',
      answer: 'Yes, every site includes basic SEO + Google My Business setup. For serious ranking (like "best interior designer Pune"), we have dedicated SEO packages.',
    },
    {
      question: "What's included in AMC (maintenance)?",
      answer: 'Security updates, backups, uptime monitoring, and content updates. Starts at ₹2,999/month. Most Pune businesses choose Standard at ₹4,999 for WhatsApp support.',
    },
    {
      question: 'Can I pay in EMI?',
      answer: 'Yes! We offer 0% EMI on select credit cards for projects above ₹50,000. UPI and bank transfer also accepted.',
    },
    {
      question: "What if I'm not satisfied with the design?",
      answer: 'Unlimited revisions until you love it. We don\'t launch until you\'re 100% happy. Plus, we show you mockups before building anything.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simple! Book a free 15-min call or WhatsApp us. We\'ll understand your needs and send a proposal within 24 hours.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading">
            Questions Pune Business Owners Ask
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-jet-blue/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-bold text-jet-navy pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-jet-blue text-white' : 'bg-slate-100 text-jet-gray'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-jet-slate whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
