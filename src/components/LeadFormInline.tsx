'use client';

/**
 * LeadFormInline — canonical low-friction inline lead form (v3 standard).
 *
 * The single embedded form used across the site (e.g. the /contact page).
 * Mirrors ContactFormModal v3: only Name + Email required; phone, company,
 * message and service are optional; no budget/timeline gate; invisible
 * Cloudflare Turnstile (interaction-only, non-blocking) + honeypot for spam.
 * All GA4/GTM events match the modal so the conversion funnel stays unified.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitLead } from '@/utils/submitLead';
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
  subheading = "Just your name and email to start. We reply within 24 hours.",
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [token, setToken] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startedRef = useRef(false);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const onFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart(source);
  };

  // ── Invisible Turnstile (interaction-only) — never blocks submit ──────────
  useEffect(() => {
    const renderWidget = () => {
      const container = turnstileContainerRef.current;
      if (!container || !window.turnstile || turnstileWidgetId.current) return;
      turnstileWidgetId.current = window.turnstile.render(container, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA',
        callback: (t: unknown) => setToken(t as string),
        'expired-callback': () => setToken(''),
        'error-callback': () => setToken(''),
        theme: 'light',
        appearance: 'interaction-only',
        size: 'normal',
      });
    };
    if (window.turnstile) { renderWidget(); return; }
    const scriptId = 'cf-turnstile-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true; script.defer = true; script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      let attempts = 0;
      const poll = setInterval(() => {
        attempts++;
        if (window.turnstile) { clearInterval(poll); renderWidget(); }
        if (attempts > 50) clearInterval(poll);
      }, 100);
    }
  }, []);

  const canSubmit = name.trim() !== '' && EMAIL_RE.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') { setIsSuccess(true); return; } // silent bot drop
    if (!canSubmit) { setError('Please enter your name and a valid email.'); return; }
    setIsSubmitting(true);
    setError(null);
    trackFormSubmit(source, { service });
    try {
      // Durable, server-first capture (writes via the edge function + emails),
      // with a best-effort client Firestore write. Never hangs on the SDK.
      const { docId } = await submitLead({
        name, email, phone, company, service, message,
        region, source, collection: collectionName, turnstileToken: token,
      });
      trackFormSuccess(source);

      // Hard navigation (not router.push) so /thank-you always loads fresh — the
      // conversion lives there and the client transition intermittently crashed.
      // region routes the Ads conversion in GTM (uk -> London, us -> US, else GA4-only).
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
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 md:p-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{heading}</h2>
        <p className="text-slate-500 mt-2">{subheading}</p>
      </div>

      <form onSubmit={handleSubmit} onFocus={onFirstInteraction} className="space-y-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="John Doe" required autoComplete="name" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address *</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com" required autoComplete="email" className={inputCls} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Phone <span className="text-slate-500 font-normal">(optional)</span>
            </label>
            <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder={region === 'us' ? '(555) 000-0000' : region === 'uk' ? '+44 7700 000000' : '+91 96999 77699'}
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
          <label>Company website
            <input type="text" name="company_website" tabIndex={-1} autoComplete="off"
              value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
          </label>
        </div>

        {/* Invisible Turnstile (interaction-only) */}
        <div ref={turnstileContainerRef} className="empty:hidden" />

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
        )}

        <button type="submit" disabled={isSubmitting || !canSubmit}
          className="w-full bg-[#B23E13] hover:bg-[#d44d1f] text-white font-bold text-base py-3.5 rounded-xl shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
          {isSubmitting ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending…</>) : (<>Send request <Send className="w-5 h-5" /></>)}
        </button>
        <p className="text-center text-xs text-slate-500">We reply within 24 hours. No spam, no obligation.</p>
      </form>
    </div>
  );
};

export default LeadFormInline;
