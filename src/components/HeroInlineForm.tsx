'use client';

/**
 * HeroInlineForm — compact, low-friction inline lead form for the /us hero.
 *
 * Mirrors the lead pipeline of ContactFormModal / LeadFormInline so leads land
 * identically: writes name+email to the `contactus` Firestore collection, fires
 * the same GA4/GTM events (form_start, form_submit, form_success/error), sends
 * the notify-lead email, counts the lead, opens the step-2 details modal
 * (useLeadEnrichment), then goes to /thank-you.
 * Only name + email are required. Honeypot for spam; no blocking CAPTCHA.
 */

import React, { useState, useRef } from 'react';
import { submitLead } from '@/utils/submitLead';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
} from '@/utils/gtm';
import { useLeadEnrichment } from '@/components/lead/useLeadEnrichment';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface HeroInlineFormProps {
  source?: string;
  /** Region the lead is recorded under (also drives downstream routing). Default 'us'. */
  region?: 'us' | 'uk' | 'in' | 'au' | 'ae';
  /** Submit button label. Default 'Get my free quote'. */
  submitLabel?: string;
  /** Optional DOM id used by sticky conversion controls to return to this form. */
  formId?: string;
  /** Optional low-commitment path shown below the submit row. */
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Optional trust note shown below the submit row. */
  trustText?: string;
  /** Service this form is about (e.g. 'AI Agent Development'), sent with the lead
   *  so it is labelled, not guessed from the URL. */
  service?: string;
}

const HeroInlineForm: React.FC<HeroInlineFormProps> = ({
  source = 'us_hero_inline',
  region = 'us',
  submitLabel = 'Get my free quote',
  formId,
  secondaryHref,
  secondaryLabel,
  trustText,
  service,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedRef = useRef(false);
  const enrichment = useLeadEnrichment();

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
    enrichment.prefetch();
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
    trackFormSubmit(source, { service: service || '' });
    try {
      // Durable, server-first capture — never hangs on the browser Firestore SDK.
      const { ok, docId, enrichToken } = await submitLead({ name, email, region, source, service });
      trackFormSuccess(source);
      // Counts the lead now, then opens the step-2 details modal; it goes to
      // /thank-you?...&counted=1 when the visitor sends or skips.
      enrichment.start({ ok, docId, enrichToken, name, email, source, region: region || 'us' });
    } catch (err) {
      console.error('Hero inline form error:', err);
      trackFormError(source, 'submit_failed');
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = { height: 46, border: '1px solid rgba(15,33,56,0.16)' };

  return (
    <>
    <form id={formId} onSubmit={handleSubmit} onFocus={onFirstInteraction} className="mt-6 max-w-[540px]" data-hero-inline-form>
      <div
        className="rounded-2xl bg-white p-3.5 sm:p-4"
        style={{ border: '1px solid rgba(15,33,56,0.10)', boxShadow: '0 10px 30px rgba(15,33,56,0.07)' }}
      >
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <input
            aria-label="Your name" type="text" autoComplete="name" placeholder="Your name"
            value={name} onChange={(e) => setName(e.target.value)}
            className="min-w-0 w-full sm:w-auto sm:flex-1 rounded-xl px-3.5 font-fj-body text-[15px] placeholder:text-[#6E635A] outline-none"
            style={inputStyle}
          />
          <input
            aria-label="Work email" type="email" autoComplete="email" placeholder="Work email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 w-full sm:w-auto sm:flex-1 rounded-xl px-3.5 font-fj-body text-[15px] placeholder:text-[#6E635A] outline-none"
            style={inputStyle}
          />
          <button
            type="submit" disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 font-fj-display text-[15px] font-semibold text-white"
            style={{ height: 46, background: '#B23E13', boxShadow: '0 1px 2px rgba(15,15,18,0.14)', whiteSpace: 'nowrap', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? 'Sending…' : submitLabel}
            {!isSubmitting && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Honeypot, hidden from real users */}
        <input
          type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />

        <div className={`mt-2.5 flex gap-2 font-fj-body ${secondaryHref && secondaryLabel ? 'flex-col sm:flex-row sm:items-center sm:justify-between' : 'items-center'}`} style={{ fontSize: '12.5px', color: '#4a5a6b' }}>
          <span>
            {trustText ?? <><b style={{ color: '#0F2138', fontWeight: 600 }}>Founder replies within 24 hours.</b> No spam, no obligation.</>}
          </span>
          {secondaryHref && secondaryLabel && (
            <a
              href={secondaryHref}
              className="shrink-0 font-fj-mono font-semibold underline underline-offset-4 transition-colors hover:text-[#B23E13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B23E13]"
              style={{ color: '#6E3C2A' }}
            >
              {secondaryLabel}
            </a>
          )}
        </div>

        {error && <p className="mt-2 font-fj-body text-[13px]" style={{ color: '#b3261e' }}>{error}</p>}
      </div>
    </form>
    {enrichment.modal}
    </>
  );
};

export default HeroInlineForm;
