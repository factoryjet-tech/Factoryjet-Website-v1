'use client';

import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import LeadFormInline from '@/components/LeadFormInline';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show modal if mouse leaves the top of the viewport (typical exit behavior)
      // and if it hasn't been shown in this session yet.
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-0 overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors text-navy shadow"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Header/Banner Section */}
          <div className="bg-primary text-white p-8 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
            <div className="bg-white/20 p-4 rounded-full mb-4 animate-bounce">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-2">Wait!</h3>
            <p className="text-sm text-blue-100">Don&apos;t leave empty handed.</p>
            <div className="mt-4 border-t border-white/30 pt-4">
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Free Gift</p>
              <p className="text-3xl font-bold text-secondary">₹5,000</p>
              <p className="text-xs">Website Audit</p>
            </div>
          </div>

          {/* Standard lead form */}
          <div className="p-6 md:w-3/5 bg-white">
            <LeadFormInline
              region="in"
              source="mumbai_exit_intent"
              heading="Claim your free website audit"
              subheading="Expert analysis of your SEO, speed & UX — just name and email."
            />
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-center mt-3 text-xs text-slate-400 hover:text-slate-600 underline"
            >
              No thanks, I don&apos;t want to grow my business
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
