import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-jetOrange text-white rounded-full shadow-[0_8px_24px_rgba(255,107,53,0.4)] flex items-center justify-center cursor-pointer hover:bg-jetOrange-600 focus:outline-none focus:ring-4 focus:ring-jetOrange/30 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
          {/* Pulse Effect */}
          <span className="absolute inset-0 rounded-full animate-ping bg-jetOrange opacity-20 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}