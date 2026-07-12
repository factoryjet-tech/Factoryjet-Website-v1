'use client';

/**
 * ContactFormModal — v3.0 low-friction 2-step contact form.
 *
 * Changes from v2 (2026-05-30, conversion-recovery rebuild — form was at 91%
 * abandonment in GA4: 22 form_start → 2 form_submit):
 *   - 2 steps instead of 3. Step 1: service selection. Step 2: contact + submit.
 *   - Only Name + Email are required. Phone, Company, Message are OPTIONAL.
 *   - Budget question removed entirely (qualify on the call).
 *   - No visible CAPTCHA / no blocked submit: Cloudflare Turnstile runs in
 *     `appearance: 'interaction-only'` mode (invisible unless a challenge is
 *     actually needed) and the token is sent if present but never gates submit.
 *   - Honeypot field (`company_website`) added for spam protection.
 *   - All GA4/GTM events preserved (form_start, form_step, form_submit/success/error).
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  CheckCircle,
  Loader2,
  Monitor,
  ShoppingBag,
  Wrench,
  Bot,
  Rocket,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import { submitLead } from '../utils/submitLead';
import {
  trackModalOpen,
  trackModalClose,
  trackFormStart,
  trackFormStep,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
  trackServiceSelection,
  trackButtonClick,
} from '../utils/gtm';

type ServiceType = 'website' | 'ecommerce' | 'maintenance' | 'seo' | 'ai-seo' | 'other';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ServiceType | '';
  message: string;
  turnstileToken: string;
}

const defaultServices: {
  id: ServiceType;
  label: string;
  icon: React.ElementType;
  description: string;
}[] = [
  /* SEO + AI SEO added 2026-06-06 (Bhavesh): the quote menu must offer the SEO
     services we now sell. 6 cards = clean 2x3 in the grid-cols-2 picker. */
  { id: 'website',     label: 'Website Design',    icon: Monitor,    description: 'Custom high-performance websites' },
  { id: 'ecommerce',   label: 'E-Commerce',         icon: ShoppingBag, description: 'Shopify & WooCommerce stores' },
  { id: 'seo',         label: 'SEO / Local SEO',    icon: TrendingUp, description: 'Map Pack & organic growth' },
  { id: 'ai-seo',      label: 'AI SEO / GEO',       icon: Sparkles,   description: 'Get cited by ChatGPT & AI search' },
  { id: 'maintenance', label: 'AMC / Maintenance',  icon: Wrench,     description: 'Ongoing support & maintenance' },
  { id: 'other',       label: 'Other / Custom',     icon: Rocket,     description: 'Custom development needs' },
];

const aiServices: typeof defaultServices = [
  { id: 'maintenance', label: 'AI Agent Development', icon: Bot,        description: 'Custom AI agents for business' },
  { id: 'ai-seo',      label: 'AI SEO / GEO',          icon: Sparkles,   description: 'Get cited by ChatGPT & AI search' },
  { id: 'website',     label: 'Website Design',       icon: Monitor,    description: 'Custom high-performance websites' },
  { id: 'ecommerce',   label: 'E-Commerce',            icon: ShoppingBag, description: 'Shopify & WooCommerce stores' },
  { id: 'seo',         label: 'SEO / Local SEO',       icon: TrendingUp, description: 'Map Pack & organic growth' },
  { id: 'other',       label: 'Other / Custom',        icon: Rocket,     description: 'Custom development needs' },
];

/* SEO-page variant: shown if the user navigates back to step 1 from a
   pre-selected SEO flow. SEO leads the list; CTA promise and form now match. */
const seoServices: typeof defaultServices = [
  { id: 'seo',         label: 'SEO / Local SEO',   icon: TrendingUp,  description: 'Map Pack & organic growth' },
  { id: 'ai-seo',      label: 'AI SEO / GEO',      icon: Sparkles,    description: 'Get cited by ChatGPT & AI search' },
  { id: 'website',     label: 'Website Design',    icon: Monitor,     description: 'Custom high-performance websites' },
  { id: 'ecommerce',   label: 'E-Commerce',         icon: ShoppingBag, description: 'Shopify & WooCommerce stores' },
];

// Extend window type for Cloudflare Turnstile
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

const ContactFormModal: React.FC = () => {
  const { isOpen, region, variant, closeModal } = useContactModal();
  const services =
    variant === 'ai' ? aiServices : variant === 'seo' ? seoServices : defaultServices;

  /* 'seo' variant: the CTA already states the service ("Get your free {City}
     SEO audit"), so asking again is friction. Pre-select SEO, open on step 2:
     a one-step form (name + email). Back still reaches the full service list. */
  const isSeoFlow = variant === 'seo';
  const [step, setStep] = useState<1 | 2>(isSeoFlow ? 2 : 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Honeypot — real users never fill this; bots often do.
  const [honeypot, setHoneypot] = useState('');
  // Cloudflare Turnstile
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    service: isSeoFlow ? 'seo' : '', message: '', turnstileToken: '',
  });

  // ── Body scroll lock ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflowY = 'scroll';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior });
    };
  }, [isOpen]);

  // ── Firebase pre-load + GTM on open ──────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return;
    trackModalOpen('contact_form', 'cta_button');
    // form_start MUST fire here. This modal is the highest-volume lead form on the
    // site, but pre-2026-07-06 it emitted only trackFormStep on open — so the GA4
    // form_start denominator excluded every modal open, producing the impossible
    // "25 form_start -> 36 conversions" funnel that read as "96% abandonment". It was
    // a measurement gap, not a UX failure. Firing form_start here restores a
    // consistent denominator across all five lead forms. (funnel-instrumentation fix.)
    trackFormStart('contact_form');
    if (isSeoFlow) {
      trackServiceSelection('seo', 'SEO / Local SEO');
      trackFormStep('contact_form', 2, 'contact_details');
    } else {
      trackFormStep('contact_form', 1, 'service_selection');
    }
    import('../firebase').then(({ initFirebase }) => {
      initFirebase().catch(() => {});
    });
  }, [isOpen, isSeoFlow]);

  // ── Cloudflare Turnstile — mount on Step 2, invisible (interaction-only) ──
  // Runs in the background; only shows a challenge if Cloudflare deems it
  // necessary. The token is captured if produced but never gates the submit.
  useEffect(() => {
    if (step !== 2) {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
      return;
    }

    const renderWidget = () => {
      const container = turnstileContainerRef.current;
      if (!container || !window.turnstile) return;
      if (turnstileWidgetId.current) return; // already rendered
      turnstileWidgetId.current = window.turnstile.render(container, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA',
        callback: (token: unknown) => {
          setFormData((prev) => ({ ...prev, turnstileToken: token as string }));
        },
        'expired-callback': () => setFormData((prev) => ({ ...prev, turnstileToken: '' })),
        'error-callback': () => setFormData((prev) => ({ ...prev, turnstileToken: '' })),
        theme: 'light',
        appearance: 'interaction-only',
        size: 'normal',
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const scriptId = 'cf-turnstile-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      let attempts = 0;
      const poll = setInterval(() => {
        attempts++;
        if (window.turnstile) { clearInterval(poll); renderWidget(); }
        if (attempts > 50) clearInterval(poll);
      }, 100);
    }
  }, [step]);

  // ── Field handlers ────────────────────────────────────────────────────────
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' && region === 'us') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        let formatted = cleaned;
        if (cleaned.length > 6) {
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        } else if (cleaned.length > 3) {
          formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        }
        setFormData((prev) => ({ ...prev, phone: formatted }));
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Step 1 service selection → auto-advance after 350 ms so user sees selection
  const handleServiceSelect = (serviceId: ServiceType) => {
    const serviceName = services.find((s) => s.id === serviceId)?.label ?? serviceId;
    trackServiceSelection(serviceId, serviceName);
    setFormData((prev) => ({ ...prev, service: serviceId }));
    setTimeout(() => {
      trackFormStep('contact_form', 2, 'contact_details');
      trackButtonClick('continue', 'form_step_1');
      setStep(2);
    }, 350);
  };

  // Only Name + Email are required. Everything else is optional.
  const canSubmit = (): boolean =>
    formData.name.trim() !== '' && EMAIL_RE.test(formData.email);

  const handleBack = () => {
    trackButtonClick('back', `form_step_${step}`);
    setStep(1);
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Silent bot drop — honeypot filled.
    if (honeypot.trim() !== '') { setIsSuccess(true); return; }
    if (!canSubmit()) {
      setError('Please enter your name and a valid email.');
      return;
    }
    setIsSubmitting(true);
    setError(null);

    trackFormSubmit('contact_form', { service: formData.service });

    try {
      // Durable, server-first capture (edge function write + email) with a
      // best-effort client Firestore write. Never hangs on the browser SDK.
      const { docId } = await submitLead({
        name:    formData.name,
        email:   formData.email,
        phone:   formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        region,
        source: 'contact_form',
        turnstileToken: formData.turnstileToken,
      });

      trackFormSuccess('contact_form');

      // Hard navigation (not router.push): the client-side transition intermittently
      // threw a chunk-load error ("This page couldn't load"), and the conversion
      // lives on /thank-you. A full browser load always renders it. region routes
      // the Ads conversion in GTM (uk -> London acct, us -> US acct, else GA4-only).
      closeModal();
      window.location.assign(
        `/thank-you?source=modal&service=${encodeURIComponent(formData.service || 'unknown')}&region=${encodeURIComponent(region || 'us')}&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Error submitting form:', err);
      const msg = 'Something went wrong. Please try again.';
      trackFormError('contact_form', msg);
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    trackModalClose('contact_form');
    trackButtonClick('close_modal', isSuccess ? 'success_screen' : `form_step_${step}`);
    closeModal();
    setTimeout(() => {
      setStep(isSeoFlow ? 2 : 1);
      setIsSuccess(false);
      setError(null);
      setHoneypot('');
      turnstileWidgetId.current = null;
      setFormData({ name: '', email: '', phone: '', company: '', service: isSeoFlow ? 'seo' : '', message: '', turnstileToken: '' });
    }, 300);
  };

  // ── Step indicator (2 steps) ──────────────────────────────────────────────
  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              s === step ? 'bg-[#B23E13] text-white scale-110'
              : s < step ? 'bg-[#10B981] text-white'
              : 'bg-slate-200 text-slate-500'
            }`}
          >
            {s < step ? <CheckCircle size={16} /> : s}
          </div>
          {s < 2 && (
            <div
              className={`w-12 h-1 mx-1 rounded transition-colors duration-300 ${
                s < step ? 'bg-[#10B981]' : 'bg-slate-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  // ── Step 1: Service selection ─────────────────────────────────────────────
  const renderStep1 = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">What can we help you with?</h3>
        <p className="text-slate-500 text-sm">Pick a service and we&apos;ll move to the next step automatically</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = formData.service === service.id;
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => handleServiceSelect(service.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? 'border-[#F05A28] bg-orange-50 shadow-md'
                  : 'border-slate-200 hover:border-[#F05A28]/50 hover:bg-slate-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-[#B23E13] text-white' : 'bg-slate-100 text-[#F05A28]'}`}>
                <Icon size={20} />
              </div>
              <h4 className="font-bold text-[#0A0F1C] text-sm mb-1">{service.label}</h4>
              <p className="text-xs text-slate-500">{service.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── Step 2: Contact details + submit ──────────────────────────────────────
  const renderStep2 = () => (
    <div className="space-y-5 animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">How can we reach you?</h3>
        <p className="text-slate-500 text-sm">Just your name and email. The rest is optional.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text" name="name" value={formData.name} onChange={handleInputChange}
            placeholder="John Doe" required autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleInputChange}
            placeholder="john@company.com" required autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone <span className="text-slate-500 font-normal">(optional, for a faster callback)</span>
          </label>
          <input
            type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
            placeholder={region === 'us' ? '(555) 000-0000' : region === 'au' ? '+61 400 000 000' : '+44 7700 000000'} autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Company <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            type="text" name="company" value={formData.company} onChange={handleInputChange}
            placeholder="Acme Inc." autoComplete="organization"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Anything we should know? <span className="text-slate-500 font-normal">(optional)</span>
          </label>
          <textarea
            name="message" value={formData.message} onChange={handleInputChange}
            placeholder="A sentence about your project, timeline, or goals…"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#F05A28] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm resize-none"
          />
        </div>
      </div>

      {/* Honeypot — visually hidden, off-screen; real users never see/fill it. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', height: 0, width: 0, overflow: 'hidden' }}>
        <label>Company website
          <input
            type="text" name="company_website" tabIndex={-1} autoComplete="off"
            value={honeypot} onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      {/* Invisible Turnstile (interaction-only): no visible widget unless challenged. */}
      <div ref={turnstileContainerRef} className="empty:hidden" />

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">{error}</div>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button" onClick={handleBack} disabled={isSubmitting}
          className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition-all hover:bg-slate-200 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit" disabled={isSubmitting || !canSubmit()}
          className="flex-1 bg-[#B23E13] text-white py-3 rounded-xl font-bold transition-all hover:bg-[#d44d1f] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <><Loader2 size={18} className="animate-spin" />Sending…</>
          ) : (
            <><Send size={18} />Send Request</>
          )}
        </button>
      </div>
      <p className="text-center text-xs text-slate-500">We reply within 24 hours. No spam, no obligation.</p>
    </div>
  );

  // ── Success screen ────────────────────────────────────────────────────────
  const renderSuccess = () => (
    <div className="text-center py-6 animate-fadeIn">
      {/* Checkmark */}
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <CheckCircle size={32} className="text-[#10B981]" />
      </div>

      <h3 className="text-2xl font-bold text-[#0A0F1C] mb-2">You&rsquo;re in!</h3>
      <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
        Bhavesh reviews your request himself and replies within 24 hours, often the same day.
      </p>

      {/* Divider */}
      <div className="border-t border-slate-100 pt-5 mb-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
          Don&rsquo;t want to wait?
        </p>
        {/* Calendly CTA — primary action on success */}
        <a
          href="https://calendly.com/bhavesh-factoryjet/30min"
          target="_blank"
          rel="noopener noreferrer"
          /* GTM auto-fires book_call_click (GA4) + the Book-Call Ads conversion on any calendly.com click. */
          className="inline-flex items-center justify-center gap-2 w-full bg-[#B23E13] text-white py-3 rounded-xl font-bold text-sm transition-all hover:bg-[#d44d1f] mb-3"
        >
          Book a 30-min call now
        </a>
        <button
          type="button"
          onClick={handleClose}
          className="w-full text-slate-500 text-sm py-2 hover:text-slate-600 transition-colors"
        >
          I&rsquo;ll wait for the email reply
        </button>
      </div>

      {/* Trust line */}
      <p className="text-xs text-slate-500">
        500+ businesses served · No spam · No obligation
      </p>
    </div>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{ animation: 'slideUp 0.25s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button" onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
          aria-label="Close contact form"
        >
          <X size={18} className="text-slate-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#F05A28] to-[#d44d1f] px-6 py-8 text-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white mb-1">Let's Build Something Great</h2>
          <p className="text-white/75 text-sm">No commitment. Free consultation.</p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {isSuccess ? renderSuccess() : (
            <>
              {renderStepIndicator()}
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
            </>
          )}
        </form>
      </div>

      {/* Keyframe animations (scoped to modal) */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(16px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out }
      `}</style>
    </div>
  );
};

export default ContactFormModal;
