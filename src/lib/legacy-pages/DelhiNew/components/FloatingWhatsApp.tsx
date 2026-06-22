import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppConversion } from '@/utils/gtm';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919699977699?text=Hi%20FactoryJet,%20I'm%20interested%20in%20website%20design%20services."
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppConversion}
      className="fixed bottom-6 right-6 z-50 whatsapp-float bg-whatsapp hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-16 h-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
