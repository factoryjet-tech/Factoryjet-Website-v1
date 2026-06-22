import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const StickyWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/919699977699"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl shadow-green-600/30 flex items-center justify-center group hover:bg-whatsapp-hover transition-all"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-jet-navy px-3 py-1 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-75 -z-10"></span>
    </motion.a>
  );
};

export default StickyWhatsApp;