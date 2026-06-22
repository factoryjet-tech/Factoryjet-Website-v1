import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export const MobileStickyCTA = () => {
  return (
    <>
      {/* Floating WhatsApp - Desktop only */}
      <a href="https://wa.me/919699977699" className="hidden md:flex fixed bottom-6 right-6 z-50 animate-pulse hover:animate-none">
        <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <Phone className="w-8 h-8 text-white fill-current" />
        </div>
      </a>

      {/* Mobile Sticky Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-gray-200 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] mobile-safe-bottom">
        <a href="https://wa.me/919699977699" className="flex-1 flex items-center justify-center gap-2 bg-whatsapp text-white py-3.5 font-bold text-sm">
          <MessageSquare className="w-5 h-5 fill-current" />
          WhatsApp
        </a>
        <a href="tel:+919699977699" className="flex-1 flex items-center justify-center gap-2 bg-jet-blue text-white py-3.5 font-bold text-sm">
          <Phone className="w-5 h-5 fill-current" />
          Call Now
        </a>
      </div>
    </>
  );
};
