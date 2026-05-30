'use client';

/**
 * ExitIntentLeadForm — shared exit-intent popup used across all city/landing
 * pages. Keeps the exit-intent behaviour (fires once when the cursor leaves
 * the top of the viewport) and a light "free audit" hook, but renders the
 * single canonical <LeadFormInline> so there is one standard form everywhere.
 *
 * Replaces the per-page bespoke ExitIntentModal / ExitIntentPopup components.
 */

import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import LeadFormInline from '@/components/LeadFormInline';

export interface ExitIntentLeadFormProps {
  region?: 'us' | 'uk' | 'in';
  source?: string;
  heading?: string;
  subheading?: string;
  /** Small promo line shown in the side banner. */
  promo?: string;
}

const ExitIntentLeadForm: React.FC<ExitIntentLeadFormProps> = ({
  region = 'in',
  source = 'exit_intent',
  heading = 'Claim your free website audit',
  subheading = 'Expert analysis of your SEO, speed & UX — just name and email.',
  promo = 'Free ₹5,000 website audit',
}) => {
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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,15,28,0.8)' }}
      onClick={() => setIsVisible(false)}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors text-slate-700 shadow"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Promo banner */}
          <div className="text-white p-8 md:w-2/5 flex flex-col justify-center items-center text-center" style={{ background: '#0a0f1c' }}>
            <div className="bg-white/15 p-4 rounded-full mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Wait!</h3>
            <p className="text-sm text-blue-100">Don&apos;t leave empty handed.</p>
            <p className="mt-4 pt-4 border-t border-white/20 text-base font-semibold" style={{ color: '#F05A28' }}>
              {promo}
            </p>
          </div>

          {/* Standard lead form */}
          <div className="p-6 md:w-3/5 bg-white">
            <LeadFormInline region={region} source={source} heading={heading} subheading={subheading} />
            <button
              onClick={() => setIsVisible(false)}
              className="w-full text-center mt-3 text-xs text-slate-400 hover:text-slate-600 underline"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentLeadForm;
