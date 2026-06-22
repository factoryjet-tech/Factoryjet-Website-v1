import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/919699977699?text=Hi! I found you through your Delhi website. I need help with website design.', '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-2xl flex items-center justify-center transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-75" />

      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-jet-navy text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
        <div className="font-semibold">Chat with us on WhatsApp</div>
        <div className="text-xs text-gray-300">We typically reply within minutes</div>
        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-jet-navy" />
      </div>
    </motion.button>
  );
};

export default WhatsAppButton;
