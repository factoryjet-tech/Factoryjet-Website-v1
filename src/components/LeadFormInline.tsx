'use client';

/**
 * LeadFormInline — canonical low-friction inline lead form (v3 standard).
 *
 * The single embedded form used across the site (e.g. the /contact page).
 * Mirrors ContactFormModal v3: only Name + Email required; phone, company,
 * message and service are optional; no budget/timeline gate; invisible
 * Cloudflare Turnstile (interaction-only, non-blocking) + honeypot for spam.
 * All GA4/GTM events match the modal so the conversion funnel stays unified.
 *
 * 13 Nov 2026 (founder): "What brings you here?" comes first and a company
 * website (or "No website yet") is required. A vendor ("I offer a product or
 * service") is saved and emailed to the vendor inbox through keepVendorLead and
 * sees an inline confirmation: no form_success, no /thank-you, no conversion.
 */

import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { markLeadSubmitted, submitLead, isWebsiteLike, LEAD_INTENT_OPTIONS, type LeadIntent } from '@/utils/submitLead';
import { keepTrappedLead, keepVendorLead, VENDOR_CONFIRMATION } from '@/utils/trappedLead';
import { useTurnstile } from '@/components/lead/useTurnstile';
import {
  trackFormStart,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
  trackServiceSelection,
} from '@/utils/gtm';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement | string, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICES = ['Website', 'E-commerce', 'AI Agent', 'SEO', 'Other'];

export interface LeadFormInlineProps {
  /** Firestore collection to write to. Default 'contactus'. */
  collectionName?: string;
  /** Source label stored with the lead + used in GTM form name. */
  source?: string;
  /** Region for phone placeholder / lead record. */
  region?: 'us' | 'uk' | 'in';
  heading?: string;
  subheading?: string;
}

const LeadFormInline: React.FC<LeadFormInlineProps> = ({
  collectionName = 'contactus',
  source = 'inline_form',
  region = 'in',
  heading = "Tell us about your project",
  subheading = "A few details to start. We reply within 24 hours.",
}) => {
  const [intent, setIntent] = useState<LeadIntent | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [noWebsite, setNoWebsite] = useState(false);
  const [vendorSent, setVendorSent] = useState(false);
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [invalid, setInvalid] = useState<'intent' | 'name' | 'email' | 'website' | null>(null);

  const startedRef = useRef(false);
  const intentRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const turnstile = useTurnstile();

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
    turnstile.load();
  };

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);
  const qualifiers = { intent: intent || undefined, website: noWebsite ? undefined : website, noWebsite };

  // First missing or bad required field, in screen order, or null.
  const firstProblem = (): { field: 'intent' | 'name' | 'email' | 'website'; message: string; code: string } | null => {
    if (!intent) return { field: 'intent', message: 'Choose what brings you here, then press Send request again.', code: 'validation_empty_intent' };
    if (name.trim() === '') return { field: 'name', message: 'Add your name and email, then press Send request again.', code: 'validation_empty_name' };
    if (email.trim() === '') return { field: 'email', message: 'Add your email, then press Send request again.', code: 'validation_empty_email' };
    if (!EMAIL_RE.test(email)) return { field: 'email', message: 'That email address looks incomplete. Please check it.', code: 'validation_bad_email' };
    if (!noWebsite && website.trim() === '') return { field: 'website', message: 'Add your company website, or tick No website yet.', code: 'validation_empty_website' };
    if (!noWebsite && !isWebsiteLike(website)) return { field: 'website', message: 'That website looks incomplete. Try something like yourcompany.com.', code: 'validation_bad_website' };
    return null;
  };
  const clearInvalid = (field: 'intent' | 'name' | 'email' | 'website') => {
    if (invalid === field) { setInvalid(null); setError(null); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') {
      // Trap field filled: a bot, or a real visitor's autofill. Keep the lead
      // (the server marks it likely spam) and count no conversion.
      if (!canSubmit) { setIsSuccess(true); return; }
      setIsSubmitting(true);
      const turnstileToken = await turnstile.freshToken();
      const kept = await keepTrappedLead({
        name, email, phone, company, service, message,
        region, source, collection: collectionName, turnstileToken, honeypot, ...qualifiers,
      });
      setIsSubmitting(false);
      if (kept) setIsSuccess(true);
      else setError('Something went wrong. Please try again.');
      return;
    }
    const problem = firstProblem();
    if (problem) {
      // The button used to be disabled until both fields were valid, so an early
      // press did nothing and showed nothing. Now it says which field is missing,
      // puts the cursor in it and records the press.
      setInvalid(problem.field);
      setError(problem.message);
      trackFormError(source, problem.code);
      // Focus without the browser's own scroll, then centre the message, which sits
      // just above the field. The default scroll could leave it under the sticky header.
      const refs = { intent: intentRef, name: nameRef, email: emailRef, website: websiteRef };
      refs[problem.field].current?.focus({ preventScroll: true });
      requestAnimationFrame(() => errorRef.current?.scrollIntoView({ block: 'center' }));
      return;
    }
    setIsSubmitting(true);
    setError(null);
    setInvalid(null);
    if (intent === 'vendor') {
      // A vendor: saved and emailed to the vendor inbox, never a conversion.
      const turnstileToken = await turnstile.freshToken();
      const kept = await keepVendorLead({
        name, email, phone, company, service, message,
        region, source, collection: collectionName, turnstileToken, ...qualifiers, intent: 'vendor',
      });
      setIsSubmitting(false);
      if (kept) setVendorSent(true);
      else setError('Something went wrong. Please try again.');
      return;
    }
    trackFormSubmit(source, { service, lead_intent: 'hire' });
    try {
      // Durable, server-first capture (writes via the edge function + emails),
      // with a best-effort client Firestore write. Never hangs on the SDK.
      const turnstileToken = await turnstile.freshToken();
      const { docId } = await submitLead({
        name, email, phone, company, service, message,
        region, source, collection: collectionName, turnstileToken, ...qualifiers,
      });
      trackFormSuccess(source);

      // Hard navigation (not router.push) so /thank-you always loads fresh — the
      // conversion lives there and the client transition intermittently crashed.
      // region routes the Ads conversion in GTM (uk -> London, us -> US, else GA4-only).
      markLeadSubmitted(docId);
      window.location.assign(
        `/thank-you?source=${encodeURIComponent(source)}&service=${encodeURIComponent(service || 'unknown')}&region=${encodeURIComponent(region || 'us')}&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Error submitting lead form:', err);
      const msg = 'Something went wrong. Please try again.';
      trackFormError(source, msg);
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm bg-white';

  if (vendorSent) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl border border-slate-100" role="status">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Thanks for reaching out</h3>
        <p className="text-slate-600 max-w-md mx-auto">{VENDOR_CONFIRMATION}</p>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl border border-emerald-100">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-9 h-9 text-[#10B981]" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Request sent!</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          We&apos;ve received your details and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-6 lg:p-10">
      <div className="text-center mb-8">
        <h2 className="font-fj-display text-2xl sm:text-3xl font-bold text-slate-900">{heading}</h2>
        <p className="text-slate-500 mt-2">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} onFocus={onFirstInteraction} noValidate className="space-y-5">
        <fieldset className="min-w-0">
          <legend className="block text-sm font-medium text-slate-700 mb-2">What brings you here? *</legend>
          <div className="grid grid-cols-2 gap-3">
            {LEAD_INTENT_OPTIONS.map((o, i) => {
              const selected = intent === o.value;
              return (
                <label
                  key={o.value}
                  className={`flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm leading-tight transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#B23E13] ${
                    selected ? 'border-[#B23E13] bg-orange-50 font-semibold text-slate-900'
                      : invalid === 'intent' ? 'border-red-600 text-slate-700' : 'border-slate-200 text-slate-700 hover:border-[#F05A28]/50'
                  }`}
                >
                  <input
                    ref={i === 0 ? intentRef : undefined}
                    type="radio" name={`${source}-intent`} value={o.value} className="sr-only" checked={selected}
                    aria-invalid={invalid === 'intent' || undefined}
                    onChange={() => { setIntent(o.value); clearInvalid('intent'); }}
                  />
                  {o.label}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">What do you need?</label>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => {
              const selected = service === s;
              return (
                <button
                  key={s} type="button"
                  onClick={() => { setService(s); trackServiceSelection(s.toLowerCase(), s); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    selected
                      ? 'bg-[#B23E13] text-white border-[#F05A28]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-[#F05A28]/50'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        {/* Above the name and email fields, so it is on screen beside the field that
            takes focus. Above the Send button it sat 554 px below that field on a phone. */}
        {error && (
          <div ref={errorRef} role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
            <input ref={nameRef} type="text" name="name" value={name}
              onChange={(e) => { setName(e.target.value); clearInvalid('name'); }}
              placeholder="John Doe" required autoComplete="name" aria-invalid={invalid === 'name' || undefined}
              className={`${inputCls} ${invalid === 'name' ? '!border-red-600' : ''}`} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address *</label>
            <input ref={emailRef} type="email" name="email" value={email}
              onChange={(e) => { setEmail(e.target.value); clearInvalid('email'); }}
              placeholder="john@company.com" required autoComplete="email" aria-invalid={invalid === 'email' || undefined}
              className={`${inputCls} ${invalid === 'email' ? '!border-red-600' : ''}`} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor={`${source}-website`} className="block text-sm font-medium text-slate-700 mb-1.5">Company website *</label>
            <div className="flex items-center gap-3">
              <input ref={websiteRef} id={`${source}-website`} type="text" inputMode="url" name="website" disabled={noWebsite}
                value={noWebsite ? '' : website}
                onChange={(e) => { setWebsite(e.target.value); clearInvalid('website'); }}
                placeholder={noWebsite ? 'No website yet' : 'yourcompany.com'} autoComplete="url" aria-invalid={invalid === 'website' || undefined}
                className={`${inputCls} min-w-0 flex-1 disabled:bg-slate-50 ${invalid === 'website' ? '!border-red-600' : ''}`} />
              <label className="flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" checked={noWebsite} className="h-4 w-4 accent-[#B23E13]"
                  onChange={(e) => { setNoWebsite(e.target.checked); clearInvalid('website'); }} />
                No website yet
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone <span className="text-slate-500 font-normal">(optional)</span>
            </label>
            <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder={region === 'us' ? '(555) 000-0000' : region === 'uk' ? '+44 7700 000000' : 'Your phone number'}
              autoComplete="tel" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Company <span className="text-slate-500 font-normal">(optional)</span>
            </label>
            <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Inc." autoComplete="organization" className={inputCls} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Anything we should know? <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4}
            placeholder="A sentence about your project, timeline, or goals…"
            className={`${inputCls} resize-none`} />
        </div>

        {/* Honeypot, off-screen, hidden from real users */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, overflow: 'hidden' }}>
          <label>Leave this empty
            <input type="text" name="fj_hp_x" tabIndex={-1} autoComplete="off" data-1p-ignore data-lpignore="true"
              value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </label>
        </div>

        {/* Invisible Turnstile (interaction-only) */}
        <div ref={turnstile.containerRef} className="empty:hidden" />

        <button type="submit" disabled={isSubmitting}
          className="w-full bg-[#B23E13] hover:bg-[#d44d1f] text-white font-bold text-base py-3.5 rounded-xl shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending…</>) : (<>Send request <Send className="w-5 h-5" /></>)}
        </button>
        <p className="text-center text-xs text-slate-500">We reply within 24 hours. No spam, no obligation.</p>
      </form>
    </div>
  );
};

export default LeadFormInline;
