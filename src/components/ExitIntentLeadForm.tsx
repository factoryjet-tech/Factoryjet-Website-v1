'use client';

/**
 * ExitIntentLeadForm — compact exit-intent popup used across landing pages.
 *
 * Fires once per browser session when the cursor leaves the top of the
 * viewport. Deliberately small (single card, ~420px, fits the viewport with no
 * scroll) with one headline, one offer and a low-friction 2–3 field form —
 * name + email required, phone optional — per exit-popup CRO best practice.
 *
 * It is self-contained (no nested LeadFormInline card) but posts through the
 * same durable submitLead path and fires the identical GA4/GTM + Ads events, so
 * the conversion funnel stays unified with every other form on the site.
 */

import React, { useState, useEffect, useRef } from 'react';
import { X, Gift, ArrowRight, ShieldCheck, Loader2, CheckCircle } from 'lucide-react';
import { submitLead } from '@/utils/submitLead';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
} from '@/utils/gtm';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SESSION_KEY = 'fj_exit_intent_shown';

export interface ExitIntentLeadFormProps {
  region?: 'us' | 'uk' | 'in';
  source?: string;
  heading?: string;
  subheading?: string;
  /** Short eyebrow/offer line shown as a pill above the heading. */
  promo?: string;
  /** Firestore collection to write to. Default 'contactus'. */
  collectionName?: string;
}

const ExitIntentLeadForm: React.FC<ExitIntentLeadFormProps> = ({
  region = 'in',
  source = 'exit_intent',
  heading = 'Before you go, grab your free audit',
  subheading = 'Expert analysis of your SEO, speed and UX. Just your name and email.',
  promo = 'Free audit',
  collectionName = 'contactus',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  // ── Exit-intent trigger — once per session ────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const open = () => {
      setIsVisible(true);
      try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* private mode */ }
    };
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        open();
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // ── Body scroll lock + ESC to close while open ────────────────────────────
  useEffect(() => {
    if (!isVisible) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsVisible(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [isVisible]);

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
  };

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') { setIsSuccess(true); return; } // silent bot drop
    if (!canSubmit) { setError('Please enter your name and a valid email.'); return; }
    setIsSubmitting(true);
    setError(null);
    trackFormSubmit(source);
    try {
      const { docId } = await submitLead({
        name, email, phone,
        region, source, collection: collectionName,
      });
      trackFormSuccess(source);
      // Hard navigation so /thank-you always loads fresh (conversion lives there).
      window.location.assign(
        `/thank-you?source=${encodeURIComponent(source)}&service=unknown&region=${encodeURIComponent(region || 'us')}&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Error submitting exit-intent form:', err);
      const msg = 'Something went wrong. Please try again.';
      trackFormError(source, msg);
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm';
  const inputStyle: React.CSSProperties = { backgroundColor: '#ffffff', color: '#0f172a' };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,15,28,0.6)' }}
      onClick={() => setIsVisible(false)}
      role="dialog"
      aria-modal="true"
      aria-label={heading}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[420px] overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ height: 4, background: '#F05A28' }} />

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Request sent</h3>
            <p className="text-sm text-slate-500">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="p-7 pt-6">
            <div className="inline-flex items-center gap-1.5 bg-[#FAECE7] text-[#993C1D] text-xs font-medium px-2.5 py-1 rounded-full mb-4">
              <Gift className="w-3.5 h-3.5" />
              {promo}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-2">{heading}</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">{subheading}</p>

            <form onSubmit={handleSubmit} onFocus={onFirstInteraction} className="space-y-2.5">
              <input
                type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Full name" required autoComplete="name" className={inputCls} style={inputStyle}
              />
              <input
                type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email" required autoComplete="email" className={inputCls} style={inputStyle}
              />
              <input
                type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone (optional)"
                autoComplete="tel" className={inputCls} style={inputStyle}
              />

              {/* Honeypot — off-screen, hidden from real users */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, overflow: 'hidden' }}>
                <label>Company website
                  <input type="text" name="company_website" tabIndex={-1} autoComplete="off"
                    value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </label>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-700">{error}</div>
              )}

              <button
                type="submit" disabled={isSubmitting || !canSubmit}
                className="w-full bg-[#F05A28] hover:bg-[#d44d1f] text-white font-bold text-[15px] py-3 rounded-xl shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting
                  ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending…</>)
                  : (<>Get my free audit <ArrowRight className="w-4 h-4" /></>)}
              </button>
            </form>

            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400 mt-3.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              No cost, no obligation. Founder replies within 24 hours.
            </p>

            <div className="text-center mt-2.5">
              <button
                onClick={() => setIsVisible(false)}
                className="text-xs text-slate-400 hover:text-slate-600 underline"
              >
                No thanks, I&apos;ll pass
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentLeadForm;
