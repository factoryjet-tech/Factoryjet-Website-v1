import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Add event listener after 5 seconds
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTA = () => {
    window.open('https://wa.me/919699977699?text=Hi! I saw the special offer on your Pune website. I need help with website design.', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors z-10 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Content */}
            <div className="p-8 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.2, duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-jet-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <Gift className="w-10 h-10 text-white" />
              </motion.div>

              {/* Headline */}
              <h3 className="text-3xl font-bold text-jet-navy mb-4">
                Wait! Don't Leave Empty-Handed
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Get a <span className="font-bold text-jet-orange">FREE Website Audit</span> worth ₹5,000 + <span className="font-bold text-jet-green">10% OFF</span> on your first project!
              </p>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 mb-6 text-left shadow-lg">
                <div className="space-y-3">
                  {[
                    'Comprehensive SEO Analysis',
                    'Mobile Responsiveness Check',
                    'Speed & Performance Report',
                    'Competitor Comparison',
                    'Actionable Recommendations',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-jet-green rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleCTA}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-jet-orange to-orange-600 hover:from-[#e55a2b] hover:to-orange-700 text-white py-4 rounded-lg font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 mb-3"
              >
                Claim My Free Audit Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-xs text-gray-500">
                Limited time offer • No credit card required • 100% Free
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-jet-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-jet-orange/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
