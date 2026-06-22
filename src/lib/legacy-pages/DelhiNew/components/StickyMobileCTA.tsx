import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { trackWhatsAppConversion } from '@/utils/gtm';

const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      setIsVisible(scrollPercent > 15);
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        setIsFocused(true);
      }
    };

    const handleBlur = (e: FocusEvent) => {
      setTimeout(() => {
        const active = document.activeElement as HTMLElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'SELECT' || active.tagName === 'TEXTAREA')) {
          return;
        }
        setIsFocused(false);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);

  if (!isVisible || isFocused) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] flex md:hidden h-16 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300">
      <a
        href="https://wa.me/919699977699?text=Hi%20FactoryJet,%20I'm%20interested%20in%20website%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppConversion}
        className="flex-1 bg-whatsapp hover:bg-whatsapp-hover text-white flex items-center justify-center font-bold text-lg active:scale-95 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="mr-2 fill-current" size={24} /> WhatsApp
      </a>
      <a
        href="tel:+919699977699"
        onClick={trackWhatsAppConversion}
        className="flex-1 bg-[#0052CC] hover:bg-blue-700 text-white flex items-center justify-center font-bold text-lg active:scale-95 transition-transform"
        aria-label="Call Now"
      >
        <Phone className="mr-2 fill-current" size={24} /> Call Now
      </a>
    </div>
  );
};

export default StickyMobileCTA;
