import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyWhatsApp = () => (
  <>
    {/* Mobile Bottom Bar (Below md) */}
    <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_rgba(0,0,0,0.1)]">
      <a 
        href="https://wa.me/919699977699"
        target="_blank" 
        rel="noreferrer"
        className="flex-1 bg-whatsapp text-white py-4 flex items-center justify-center gap-2 font-bold text-lg active:bg-[#128C7E] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="white" /> WhatsApp
      </a>
      <a 
        href="tel:+919699977699"
        className="flex-1 bg-jet-blue text-white py-4 flex items-center justify-center gap-2 font-bold text-lg active:bg-blue-800 transition-colors"
        aria-label="Call Us"
      >
        <Phone size={24} fill="white" /> Call
      </a>
    </div>

    {/* Desktop Floating Bubble (md and up) */}
    <a 
      href="https://wa.me/919699977699?text=Hi%20FactoryJet%2C%20I%27m%20interested%20in%20website%20design%20services%20in%20Hyderabad."
      target="_blank" 
      rel="noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
      <span className="absolute right-full mr-3 bg-white text-jet-navy px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  </>
);

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-card shadow-2xl max-w-lg w-full relative overflow-hidden"
        >
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col md:flex-row">
             <div className="bg-jet-blue text-white p-8 md:w-2/5 flex flex-col justify-center items-center text-center">
                <div className="text-4xl mb-2">🎁</div>
                <h3 className="font-bold text-xl mb-1 font-heading">Wait!</h3>
                <p className="text-sm text-blue-100">Don't leave empty handed.</p>
             </div>
             <div className="p-8 md:w-3/5">
                <h4 className="text-xl font-bold text-jet-navy mb-2 font-heading">Get 10% Off Your Website</h4>
                <p className="text-sm text-jet-slate mb-6">Book a free consultation today and lock in this special discount for your Hyderabad business.</p>
                <form onSubmit={(e) => { e.preventDefault(); setIsVisible(false); }}>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-jet-light rounded-btn mb-4 text-sm focus:border-jet-blue outline-none" required />
                  <button type="submit" className="w-full bg-jet-orange text-white py-3 rounded-btn font-bold text-sm hover:bg-[#E55A2B] transition-colors">
                    Claim Discount Now
                  </button>
                </form>
                <p className="text-[10px] text-gray-400 text-center mt-3">Valid for next 24 hours only.</p>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};