import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import Button from './Button';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !hasShown) {
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-jet-navy/80 backdrop-blur-sm">
        <motion.div 
          className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl border-4 border-jet-orange"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-jet-navy transition-colors"
          >
            <X size={24} />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-jet-orange/10 text-jet-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift size={32} />
            </div>
            
            <h3 className="text-2xl font-bold font-heading text-jet-navy mb-2">Wait! Don't Miss This Offer</h3>
            <p className="text-jet-slate mb-6">
              Book your consultation today and get <strong className="text-jet-orange">FREE Business Hosting (Worth ₹5,000)</strong> for the first year.
            </p>

            <div className="space-y-3">
              <Button variant="accent" className="w-full" onClick={() => setIsVisible(false)}>
                Claim Free Hosting Offer
              </Button>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-sm text-slate-400 hover:text-jet-navy underline"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ExitIntentModal;