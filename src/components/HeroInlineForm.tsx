'use client';

/**
 * HeroInlineForm — compact, low-friction inline lead form for the /us hero.
 *
 * Mirrors the lead pipeline of ContactFormModal / LeadFormInline so leads land
 * identically: writes name+email to the `contactus` Firestore collection, fires
 * the same GA4/GTM events (form_start, form_submit, form_success/error), sends
 * the notify-lead email, and redirects to /thank-you (single conversion source).
 * Only name + email are required. Honeypot for spam; no blocking CAPTCHA.
 */

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { submitLead } from '@/utils/submitLead';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
} from '@/utils/gtm';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface HeroInlineFormProps {
  source?: string;
  /** Region the lead is recorded under (also drives downstream routing). Default 'us'. */
  region?: 'us' | 'uk' | 'in';
}

const HeroInlineForm: React.FC<HeroInlineFormProps> = ({ source = 'us_hero_inline', region = 'us' }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
  };

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Silent bot drop — honeypot filled. Do NOT navigate to /thank-you (that
    // would fire a phantom conversion). Just stop.
    if (honeypot.trim() !== '') { return; }
    if (!canSubmit) { setError('Please enter your name and a valid email.'); return; }
    setIsSubmitting(true);
    setError(null);
    trackFormSubmit(source, { service: '' });
    try {
      // Durable, server-first capture — never hangs on the browser Firestore SDK.
      const { docId } = await submitLead({ name, email, region, source });
      trackFormSuccess(source);
      router.push(
        `/thank-you?source=${encodeURIComponent(source)}&service=unknown&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Hero inline form error:', err);
      trackFormError(source, 'submit_failed');
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = { height: 46, border: '1px solid rgba(15,33,56,0.16)' };

  return (
    <form onSubmit={handleSubmit} onFocus={onFirstInteraction} className="mt-6 max-w-[540px]">
      <div
        className="rounded-2xl bg-white p-3.5 sm:p-4"
        style={{ border: '1px solid rgba(15,33,56,0.10)', boxShadow: '0 10px 30px rgba(15,33,56,0.07)' }}
      >
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <input
            aria-label="Your name" type="text" autoComplete="name" placeholder="Your name"
            value={name} onChange={(e) => setName(e.target.value)}
            className="min-w-0 flex-1 rounded-xl px-3.5 font-fj-body text-[15px] outline-none"
            style={inputStyle}
          />
          <input
            aria-label="Work email" type="email" autoComplete="email" placeholder="Work email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-xl px-3.5 font-fj-body text-[15px] outline-none"
            style={inputStyle}
          />
          <button
            type="submit" disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 font-fj-display text-[15px] font-semibold text-white"
            style={{ height: 46, background: '#F05A28', boxShadow: '0 4px 16px rgba(240,90,40,0.32)', whiteSpace: 'nowrap', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Sending…' : 'Get my free quote'}
            {!isSubmitting && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Honeypot — hidden from real users */}
        <input
          type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />

        <div className="mt-2.5 flex items-center gap-1.5 font-fj-body" style={{ fontSize: '12.5px', color: '#4a5a6b' }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4.5 7l2 2L9.5 4.5" stroke="#103A5E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span><b style={{ color: '#0F2138', fontWeight: 600 }}>Founder replies within 24 hours.</b> No spam, no obligation.</span>
        </div>

        {error && <p className="mt-2 font-fj-body text-[13px]" style={{ color: '#b3261e' }}>{error}</p>}
      </div>
    </form>
  );
};

export default HeroInlineForm;
