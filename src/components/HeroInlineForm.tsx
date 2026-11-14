'use client';

/**
 * HeroInlineForm — compact, low-friction inline lead form for the /us hero.
 *
 * Mirrors the lead pipeline of ContactFormModal / LeadFormInline so leads land
 * identically: writes name+email to the `contactus` Firestore collection, fires
 * the same GA4/GTM events (form_start, form_submit, form_success/error), sends
 * the notify-lead email, counts the lead, opens the step-2 details modal
 * (useLeadEnrichment), then goes to /thank-you.
 * Required (13 Nov 2026): "What brings you here?", name, email and company
 * website (or "No website yet"). A visitor who answers "I offer a product or
 * service" is saved and emailed to the vendor inbox through keepVendorLead, sees
 * a short inline confirmation, and counts no conversion (no form_success, no
 * step-2 modal, no /thank-you). Honeypot plus invisible Turnstile for spam;
 * neither blocks the submit.
 */

import React, { useState, useRef } from 'react';
import { submitLead, isWebsiteLike, LEAD_INTENT_OPTIONS, type LeadIntent } from '@/utils/submitLead';
import { keepTrappedLead, keepVendorLead, VENDOR_CONFIRMATION } from '@/utils/trappedLead';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
} from '@/utils/gtm';
import { useLeadEnrichment } from '@/components/lead/useLeadEnrichment';
import { useTurnstile } from '@/components/lead/useTurnstile';

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
  const [intent, setIntent] = useState<LeadIntent | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [noWebsite, setNoWebsite] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [vendorSent, setVendorSent] = useState(false);
  const [invalid, setInvalid] = useState<'intent' | 'name' | 'email' | 'website' | null>(null);
  const startedRef = useRef(false);
  const intentRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const enrichment = useLeadEnrichment();
  const turnstile = useTurnstile();

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
    enrichment.prefetch();
    turnstile.load();
  };

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);
  const websiteOk = noWebsite || isWebsiteLike(website);
  const qualifiers = { intent: intent || undefined, website: noWebsite ? undefined : website, noWebsite };

  // First missing or bad field, in screen order, with the message and the
  // form_error code. null when everything required is filled.
  const firstProblem = (): { field: 'intent' | 'name' | 'email' | 'website'; message: string; code: string } | null => {
    if (!intent) return { field: 'intent', message: 'Choose what brings you here, then press the button again.', code: 'validation_empty_intent' };
    if (name.trim() === '') return { field: 'name', message: 'Add your name and work email, then press the button again.', code: 'validation_empty_name' };
    if (email.trim() === '') return { field: 'email', message: 'Add your work email, then press the button again.', code: 'validation_empty_email' };
    if (!EMAIL_RE.test(email)) return { field: 'email', message: 'That email address looks incomplete. Please check it.', code: 'validation_bad_email' };
    if (!noWebsite && website.trim() === '') return { field: 'website', message: 'Add your company website, or tick No website yet.', code: 'validation_empty_website' };
    if (!websiteOk) return { field: 'website', message: 'That website looks incomplete. Try something like yourcompany.com.', code: 'validation_bad_website' };
    return null;
  };
  const clearInvalid = (field: 'intent' | 'name' | 'email' | 'website') => {
    if (invalid === field) { setInvalid(null); setError(null); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') {
      // Trap field filled: a bot, or a real visitor's autofill. Keep the lead
      // (the server marks it likely spam). Do NOT open the details modal or go
      // to /thank-you: that would fire a phantom conversion.
      if (!canSubmit) return;
      setIsSubmitting(true);
      setError(null);
      const turnstileToken = await turnstile.freshToken();
      const kept = await keepTrappedLead({ name, email, region, source, service, turnstileToken, honeypot, ...qualifiers });
      setIsSubmitting(false);
      setSent(kept);
      if (!kept) setError('Something went wrong. Please try again.');
      return;
    }
    const problem = firstProblem();
    if (problem) {
      // Button pressed with a field empty or mistyped. Say which field, put the
      // cursor in it (on a phone this opens the keyboard and scrolls the field
      // into view) and record it, so these presses are no longer invisible.
      setInvalid(problem.field);
      setError(problem.message);
      trackFormError(source, problem.code);
      // Focus without the browser's own scroll, then bring the message (just above the
      // fields) into view, so it cannot end up under the sticky header.
      const refs = { intent: intentRef, name: nameRef, email: emailRef, website: websiteRef };
      refs[problem.field].current?.focus({ preventScroll: true });
      requestAnimationFrame(() => errorRef.current?.scrollIntoView({ block: 'center' }));
      return;
    }
    setInvalid(null);
    setIsSubmitting(true);
    setError(null);
    if (intent === 'vendor') {
      // A vendor: saved and emailed to the vendor inbox, never a conversion.
      const turnstileToken = await turnstile.freshToken();
      const kept = await keepVendorLead({ name, email, region, source, service, turnstileToken, ...qualifiers, intent: 'vendor' });
      setIsSubmitting(false);
      if (kept) setVendorSent(true);
      else setError('Something went wrong. Please try again.');
      return;
    }
    trackFormSubmit(source, { service: service || '', lead_intent: 'hire' });
    try {
      // Durable, server-first capture — never hangs on the browser Firestore SDK.
      const turnstileToken = await turnstile.freshToken();
      const { ok, docId, enrichToken } = await submitLead({ name, email, region, source, service, turnstileToken, ...qualifiers });
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
  const invalidStyle: React.CSSProperties = { height: 46, border: '1.5px solid #b3261e' };

  return (
    <>
    <form id={formId} onSubmit={handleSubmit} onFocus={onFirstInteraction} noValidate className="mt-6 max-w-[540px]" data-hero-inline-form>
      <div
        className="rounded-2xl bg-white p-3.5 sm:p-4"
        style={{ border: '1px solid rgba(15,33,56,0.10)', boxShadow: '0 10px 30px rgba(15,33,56,0.07)' }}
      >
        {/* Above the fields, so it is on screen beside the field that takes focus. Under
            the button it fell below the fold on a 390x664 phone. */}
        {error && <p ref={errorRef} className="mb-2.5 font-fj-body text-[13.5px] font-semibold" role="alert" style={{ color: '#b3261e' }}>{error}</p>}
        {vendorSent ? (
          <p className="font-fj-body text-[14px]" role="status" style={{ color: '#0F2138' }}>{VENDOR_CONFIRMATION}</p>
        ) : (
        <>
        {/* "What brings you here?" (required). Two equal choices, nothing preselected,
            so a buyer never lands in the vendor inbox by default. */}
        <fieldset className="mb-2.5 min-w-0">
          <legend className="mb-1.5 font-fj-body text-[13px] font-semibold" style={{ color: '#0F2138' }}>What brings you here?</legend>
          <div className="grid grid-cols-2 gap-2">
            {LEAD_INTENT_OPTIONS.map((o, i) => {
              const selected = intent === o.value;
              return (
                <label
                  key={o.value}
                  className="relative flex cursor-pointer items-center justify-center rounded-xl px-2.5 py-1.5 text-center font-fj-body text-[13.5px] leading-tight has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#B23E13]"
                  style={{
                    minHeight: 44,
                    border: selected ? '1.5px solid #B23E13' : invalid === 'intent' ? '1.5px solid #b3261e' : '1px solid rgba(15,33,56,0.16)',
                    background: selected ? '#FFF4EE' : '#fff',
                    color: '#0F2138',
                    fontWeight: selected ? 600 : 500,
                  }}
                >
                  <input
                    ref={i === 0 ? intentRef : undefined}
                    type="radio" name={`${formId || source}-intent`} value={o.value} className="sr-only"
                    checked={selected} aria-invalid={invalid === 'intent' || undefined}
                    onChange={() => { setIntent(o.value); clearInvalid('intent'); }}
                  />
                  {o.label}
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <input
            aria-label="Your name" type="text" autoComplete="name" placeholder="Your name"
            ref={nameRef} aria-invalid={invalid === 'name' || undefined}
            value={name} onChange={(e) => { setName(e.target.value); clearInvalid('name'); }}
            className="min-w-0 w-full rounded-xl px-3.5 font-fj-body text-[15px] placeholder:text-[#6E635A] outline-none"
            style={invalid === 'name' ? invalidStyle : inputStyle}
          />
          <input
            aria-label="Work email" type="email" autoComplete="email" placeholder="Work email"
            ref={emailRef} aria-invalid={invalid === 'email' || undefined}
            value={email} onChange={(e) => { setEmail(e.target.value); clearInvalid('email'); }}
            className="min-w-0 w-full rounded-xl px-3.5 font-fj-body text-[15px] placeholder:text-[#6E635A] outline-none"
            style={invalid === 'email' ? invalidStyle : inputStyle}
          />
          {/* Website and its "No website yet" box share one row, so the phone layout
              gains one row here, not two. */}
          <div className="flex min-w-0 flex-wrap items-center gap-x-2.5">
            <input
              aria-label="Company website" type="text" inputMode="url" autoComplete="url"
              placeholder={noWebsite ? 'No website yet' : 'Company website'}
              ref={websiteRef} aria-invalid={invalid === 'website' || undefined} disabled={noWebsite}
              value={noWebsite ? '' : website} onChange={(e) => { setWebsite(e.target.value); clearInvalid('website'); }}
              className="min-w-0 basis-44 grow rounded-xl px-3.5 font-fj-body text-[15px] placeholder:text-[#6E635A] outline-none disabled:bg-[#F6F4F1]"
              style={invalid === 'website' ? invalidStyle : inputStyle}
            />
            <label className="flex min-h-[44px] shrink-0 cursor-pointer items-center gap-1.5 font-fj-body text-[12.5px]" style={{ color: '#4a5a6b' }}>
              <input
                type="checkbox" checked={noWebsite} className="h-4 w-4 accent-[#B23E13]"
                onChange={(e) => { setNoWebsite(e.target.checked); clearInvalid('website'); }}
              />
              No website yet
            </label>
          </div>
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
        </>
        )}

        {/* Honeypot, hidden from real users */}
        <input
          type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
          value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />

        {!vendorSent && <div className={`mt-2.5 flex gap-2 font-fj-body ${secondaryHref && secondaryLabel ? 'flex-col sm:flex-row sm:items-center sm:justify-between' : 'items-center'}`} style={{ fontSize: '12.5px', color: '#4a5a6b' }}>
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
        </div>}

        {/* Invisible Turnstile (interaction-only): no visible widget unless challenged. */}
        <div ref={turnstile.containerRef} className="empty:hidden" />

        {sent && <p className="mt-2 font-fj-body text-[13px]" role="status" style={{ color: '#0F2138' }}>Request sent. We reply within 24 hours.</p>}
      </div>
    </form>
    {enrichment.modal}
    </>
  );
};

export default HeroInlineForm;
