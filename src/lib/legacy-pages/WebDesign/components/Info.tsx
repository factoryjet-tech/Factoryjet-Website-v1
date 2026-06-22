
import React, { useState } from 'react';
import { FAQS, TRENDS } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { trackCTAClick, trackContactClick } from '@/utils/gtm';
import Link from 'next/link';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

interface AccordionItemProps {
  q: string;
  a: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`mb-3 md:mb-4 rounded-xl md:rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-jet-blue/20 shadow-lg' : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 md:px-6 py-4 md:py-5 flex justify-between items-start text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-sm md:text-base font-semibold leading-relaxed transition-colors pr-3 md:pr-4 ${isOpen ? 'text-jet-blue' : 'text-slate-800'}`}>{q}</span>
        <div className={`mt-0.5 md:mt-1 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-jet-blue text-white' : 'bg-slate-200 text-slate-500'}`}>
           {isOpen ? <Minus className="w-2.5 h-2.5 md:w-3 md:h-3" /> : <Plus className="w-2.5 h-2.5 md:w-3 md:h-3" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
               <div className="border-t border-slate-100 pt-3 md:pt-4">
                 <p className="text-slate-600 leading-relaxed text-xs md:text-sm">{a}</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Info = () => {
  const { openModal } = useContactModal();

  // Render FAQ answer with links where needed
  const renderAnswer = (faq: { q: string; a: string }): React.ReactNode => {
    if (faq.q.includes('Q17')) {
      const parts = faq.a.split('Pricing page');
      return <>{parts[0]}<Link href="/pricing" className="text-jet-blue hover:underline">Pricing page</Link>{parts[1]}</>;
    }
    return faq.a;
  };

  // Split FAQs into two columns
  const midPoint = Math.ceil(FAQS.length / 2);
  const leftFaqs = FAQS.slice(0, midPoint);
  const rightFaqs = FAQS.slice(midPoint);

  return (
    <>
      {/* FAQ Section - Split Accordion */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <span className="text-jet-blue font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Knowledge Base</span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">
            <div className="space-y-0">
              {leftFaqs.map((faq, idx) => (
                <AccordionItem key={`l-${idx}`} q={faq.q} a={renderAnswer(faq)} />
              ))}
            </div>
            <div className="space-y-0">
              {rightFaqs.map((faq, idx) => (
                <AccordionItem key={`r-${idx}`} q={faq.q} a={renderAnswer(faq)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section - Crystal UI Cards */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">2026 Web Design Trends</h2>
              <p className="text-sm md:text-base text-slate-600">Building sites that remain competitive for the next 3 years.</p>
            </div>
            <div className="mt-4 md:mt-0 px-3 md:px-4 py-1.5 md:py-2 bg-white rounded-full border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 shadow-sm">
              Future Proofing
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TRENDS.map((trend, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-md p-5 md:p-6 rounded-xl md:rounded-2xl border border-white/60 shadow-glass hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-3 md:mb-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-jet-blue">
                   <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-slate-900">{trend.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{trend.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer - Cinematic Parallax */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-jet-blue">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-jet-blue to-blue-800 animate-gradient-x"></div>
          {/* Noise */}
          <div className="absolute inset-0 bg-noise opacity-20"></div>
          {/* Shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/30 blur-[100px] mix-blend-overlay"></div>
             <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-500/30 blur-[100px] mix-blend-overlay"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 md:mb-8 tracking-tight drop-shadow-lg leading-tight">
              Ready to Build a Website That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/80">Pays for Itself?</span>
            </h2>
            <p className="text-blue-100 text-base md:text-xl lg:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a free 30-minute strategy session with a professional web design company in India that has delivered measurable results across ecommerce, B2B, healthcare, and SaaS. We will audit your current digital presence and outline a clear growth path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <button
                onClick={() => {
                  trackCTAClick('get_free_consultation', 'webdesign_cta', 'primary');
                  openModal();
                }}
                className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-jet-blue rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  Get Free Consultation <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a href="https://wa.me/919699977699?text=Hi%20FactoryJet" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" onClick={() => {
                trackContactClick('whatsapp', '+919699977699', 'webdesign_cta');
                trackWhatsAppConversion();
              }} className="group w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl border border-white/30 hover:bg-white/10 text-white font-bold text-base md:text-lg backdrop-blur-sm transition-all">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
