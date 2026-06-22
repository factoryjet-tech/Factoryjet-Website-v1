
import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

interface CTAProps {
  onCtaClick?: () => void;
}

const CTA: React.FC<CTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 md:py-24 bg-jet-blue relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-jet-orange/10 rounded-full -ml-40 -mb-40 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 md:mb-6 leading-tight">
            Ready to Grow Your <br /> Ahmedabad Business Online?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 md:mb-12">
            Join 150+ Gujarat SMBs who've transformed their digital presence with FactoryJet.
            Get your free website audit today&mdash;no strings attached.</p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
            <button
              onClick={onCtaClick}
              className="w-full md:w-auto bg-jet-orange text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-2xl hover:bg-orange-600 transition-all shimmer flex items-center justify-center gap-2"
            >
              &#128640; Get Your Free Website Audit
            </button>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Ahmedabad"
                onClick={trackWhatsAppConversion}
                className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
              <a
                href="tel:+919699977699"
                className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> +91 96999 77699
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {['Free audit, no obligation', 'Response within 2 hours', '150+ Gujarat businesses served'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80 font-medium">
                <div className="w-5 h-5 bg-jet-green text-white rounded-full flex items-center justify-center text-[10px]">&#10003;</div>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-jet-orange font-bold flex items-center justify-center gap-2 animate-pulse">
            &#9889; Limited slots available this month. Book now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
