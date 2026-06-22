import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const StickyMobileCTA: React.FC = () => (
  <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] font-sans">
    <a
      href="https://wa.me/919699977699?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20web%20design%20services"
      className="flex-1 bg-whatsapp text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-whatsapp-hover"
    >
      <MessageCircle className="w-5 h-5" /> WhatsApp
    </a>
    <a
      href="tel:+919699977699"
      className="flex-1 bg-primary text-white py-3.5 flex items-center justify-center gap-2 font-bold text-sm active:bg-blue-800"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
  </div>
);

export default StickyMobileCTA;
