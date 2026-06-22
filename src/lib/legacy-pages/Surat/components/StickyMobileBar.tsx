
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

// Track WhatsApp click conversion for Google Ads
const trackWhatsAppConversion = () => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-11127037244/N5PhCPWusNQbELy65Lkp'
    });
  }
};

const StickyMobileBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-[60] bg-white/80 backdrop-blur-xl border border-white/40 p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
      <div className="flex gap-3">
        <a
          href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Surat"
          onClick={trackWhatsAppConversion}
          className="flex-1 bg-jet-green text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a
          href="tel:+919699977699"
          className="flex-1 bg-jet-navy text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-lg shadow-slate-900/20 active:scale-95 transition-transform"
        >
          <Phone size={18} /> Call Us
        </a>
      </div>
    </div>
  );
};

export default StickyMobileBar;
