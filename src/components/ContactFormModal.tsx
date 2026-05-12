'use client';

/**
 * ContactFormModal — v2.0 multi-step auto-progress contact form.
 *
 * Changes from v1:
 *   - Auto-progress: Step 1 advances immediately on service selection.
 *     Step 2 advances automatically once all 4 required fields are valid
 *     (500 ms debounce so the user sees completion before transition).
 *   - All fields mandatory: name, email, phone, company all required on Step 2.
 *   - Cloudflare Turnstile bot protection on Step 3.
 *     Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local and Cloudflare Pages
 *     → Settings → Environment variables. The token is stored alongside the
 *     Firestore submission; add a Cloudflare Pages Function at
 *     functions/api/verify-turnstile.ts for full server-side verification.
 *   - Framer Motion removed from step transitions (CSS transitions only,
 *     reduces bundle size and avoids spring physics).
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
} from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import {
  trackModalOpen,
  trackModalClose,
  trackFormStep,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
  trackFormSubmission,
  trackServiceSelection,
  trackBudgetSelection,
  trackButtonClick,
} from '../utils/gtm';

type ServiceType = 'website' | 'ecommerce' | 'maintenance' | 'other';
type BudgetRange = 'starter' | 'business' | 'enterprise' | 'not-sure';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ServiceType | '';
  budget: BudgetRange | '';
  message: string;
  turnstileToken: string;
}

const defaultServices: {
  id: ServiceType;
  label: string;
  icon: React.ElementType;
  description: string;
}[] = [
  { id: 'website',     label: 'Website Design',    icon: Monitor,    description: 'Custom high-performance websites' },
  { id: 'ecommerce',   label: 'E-Commerce',         icon: ShoppingBag, description: 'Shopify & WooCommerce stores' },
  { id: 'maintenance', label: 'AMC / Maintenance',  icon: Wrench,     description: 'Ongoing support & maintenance' },
  { id: 'other',       label: 'Other / Custom',     icon: Rocket,     description: 'Custom development needs' },
];

const aiServices: typeof defaultServices = [
  { id: 'website',     label: 'Website Design',       icon: Monitor,    description: 'Custom high-performance websites' },
  { id: 'ecommerce',   label: 'E-Commerce',            icon: ShoppingBag, description: 'Shopify & WooCommerce stores' },
  { id: 'maintenance', label: 'AI Agent Development', icon: Bot,        description: 'Custom AI agents for business' },
  { id: 'other',       label: 'Other / Custom',        icon: Rocket,     description: 'Custom development needs' },
];

const budgetsIN = [
  { id: 'starter'  as BudgetRange, label: 'Starter',   range: '₹25K - ₹50K'    },
  { id: 'business' as BudgetRange, label: 'Business',  range: '₹50K - ₹1.2L'   },
  { id: 'enterprise' as BudgetRange, label: 'Enterprise', range: '₹1.2L+'       },
  { id: 'not-sure' as BudgetRange, label: 'Not Sure',  range: 'Need guidance'   },
];

const budgetsUS = [
  { id: 'starter'  as BudgetRange, label: 'Launch',     range: '$1,999 - $3,499' },
  { id: 'business' as BudgetRange, label: 'Growth',     range: '$3,999 - $6,999' },
  { id: 'enterprise' as BudgetRange, label: 'Scale',    range: '$7,999 - $14,999' },
  { id: 'not-sure' as BudgetRange, label: 'Not Sure',   range: 'Need guidance'   },
];

const budgetsUK = [
  { id: 'starter'  as BudgetRange, label: 'Starter',   range: '£799 - £1,499'   },
  { id: 'business' as BudgetRange, label: 'Business',  range: '£1,499 - £2,499' },
  { id: 'enterprise' as BudgetRange, label: 'Enterprise', range: '£4,999+'      },
  { id: 'not-sure' as BudgetRange, label: 'Not Sure',  range: 'Need guidance'   },
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

const ContactFormModal: React.FC = () => {
  const { isOpen, region, variant, closeModal } = useContactModal();
  const budgets = region === 'us' ? budgetsUS : region === 'uk' ? budgetsUK : budgetsIN;
  const services = variant === 'ai' ? aiServices : defaultServices;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Prevent double-fire of auto-advance on Step 2
  const autoAdvancedRef = useRef(false);
  // Cloudflare Turnstile
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: '', turnstileToken: '',
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
    trackFormStep('contact_form', 1, 'service_selection');
    import('../firebase').then(({ initFirebase }) => {
      initFirebase().catch(() => {});
    });
  }, [isOpen]);

  // ── Cloudflare Turnstile — mount when step 3 becomes visible ─────────────
  useEffect(() => {
    if (step !== 3) {
      // Clean up widget if navigating away from step 3
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
        size: 'normal',
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    // Load script only once
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
      // Script already injected but Turnstile not ready yet — poll briefly
      let attempts = 0;
      const poll = setInterval(() => {
        attempts++;
        if (window.turnstile) { clearInterval(poll); renderWidget(); }
        if (attempts > 50) clearInterval(poll); // give up after 5 s
      }, 100);
    }
  }, [step]);

  // ── Auto-progress Step 2 → 3 ─────────────────────────────────────────────
  // Fires automatically once all four required fields are filled and valid.
  // 500 ms debounce so the last-typed character has a moment to register.
  useEffect(() => {
    if (step !== 2) { autoAdvancedRef.current = false; return; }
    if (autoAdvancedRef.current) return;

    const allValid =
      formData.name.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.phone.trim().length >= 7 &&
      formData.company.trim().length > 0;

    if (!allValid) return;

    const timer = setTimeout(() => {
      autoAdvancedRef.current = true;
      trackFormStep('contact_form', 3, 'budget_and_message');
      setStep(3);
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.name, formData.email, formData.phone, formData.company, step]);

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

  const handleBudgetSelect = (budgetId: BudgetRange) => {
    const budgetInfo = budgets.find((b) => b.id === budgetId);
    trackBudgetSelection(budgetId, budgetInfo?.range ?? budgetId);
    setFormData((prev) => ({ ...prev, budget: budgetId }));
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) return formData.service !== '';
    if (currentStep === 2) {
      return (
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        formData.phone.trim().length >= 7 &&
        formData.company.trim() !== ''
      );
    }
    return true;
  };

  const handleBack = () => {
    trackButtonClick('back', `form_step_${step}`);
    setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.turnstileToken) {
      setError('Please complete the human verification above.');
      return;
    }
    setIsSubmitting(true);
    setError(null);

    trackFormSubmit('contact_form', { service: formData.service, budget: formData.budget });

    try {
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'contactus', docId), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        region,
        turnstileToken: formData.turnstileToken,
        createdAt: serverTimestamp(),
        status: 'new',
      });

      trackFormSuccess('contact_form');
      trackFormSubmission();
      setIsSuccess(true);
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
      setStep(1);
      setIsSuccess(false);
      setError(null);
      autoAdvancedRef.current = false;
      turnstileWidgetId.current = null;
      setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', turnstileToken: '' });
    }, 300);
  };

  // ── Step indicator ────────────────────────────────────────────────────────
  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              s === step ? 'bg-[#0052CC] text-white scale-110'
              : s < step ? 'bg-[#10B981] text-white'
              : 'bg-slate-200 text-slate-500'
            }`}
          >
            {s < step ? <CheckCircle size={16} /> : s}
          </div>
          {s < 3 && (
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
        <p className="text-slate-500 text-sm">Select a service — we'll move to the next step automatically</p>
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
                  ? 'border-[#0052CC] bg-blue-50 shadow-md'
                  : 'border-slate-200 hover:border-[#0052CC]/50 hover:bg-slate-50'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-[#0052CC] text-white' : 'bg-slate-100 text-[#0052CC]'}`}>
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

  // ── Step 2: Contact details ───────────────────────────────────────────────
  const renderStep2 = () => (
    <div className="space-y-5 animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">Tell us about yourself</h3>
        <p className="text-slate-500 text-sm">Fill all fields — we'll continue automatically</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text" name="name" value={formData.name} onChange={handleInputChange}
            placeholder="John Doe" required autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0052CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleInputChange}
            placeholder="john@company.com" required autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0052CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
          <input
            type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
            placeholder={region === 'us' ? '(555) 000-0000' : '+44 7700 000000'} required autoComplete="tel"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0052CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
          <input
            type="text" name="company" value={formData.company} onChange={handleInputChange}
            placeholder="Acme Inc." required autoComplete="organization"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0052CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* Progress hint shown once all fields valid */}
      {validateStep(2) && (
        <p className="text-center text-xs text-[#10B981] font-medium animate-fadeIn">
          ✓ All set — taking you to the next step…
        </p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button" onClick={handleBack}
          className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition-all hover:bg-slate-200"
        >
          Back
        </button>
        <button
          type="button" onClick={() => { if (validateStep(2)) { trackFormStep('contact_form', 3, 'budget_and_message'); setStep(3); } }}
          disabled={!validateStep(2)}
          className="flex-1 bg-[#0052CC] text-white py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#003D99]"
        >
          Continue
        </button>
      </div>
    </div>
  );

  // ── Step 3: Budget + Turnstile + Submit ───────────────────────────────────
  const renderStep3 = () => (
    <div className="space-y-5 animate-fadeIn">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#0A0F1C] mb-2">Almost there!</h3>
        <p className="text-slate-500 text-sm">Share your budget and verify you're human</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">Budget Range</label>
        <div className="grid grid-cols-2 gap-3">
          {budgets.map((budget) => {
            const isSelected = formData.budget === budget.id;
            return (
              <button
                key={budget.id} type="button" onClick={() => handleBudgetSelect(budget.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  isSelected ? 'border-[#0052CC] bg-blue-50' : 'border-slate-200 hover:border-[#0052CC]/50'
                }`}
              >
                <span className="font-bold text-[#0A0F1C] text-sm block">{budget.label}</span>
                <span className="text-xs text-slate-500">{budget.range}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Project Details <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="message" value={formData.message} onChange={handleInputChange}
          placeholder="Tell us about your project goals, timeline, or any specific requirements..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0052CC] focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
        />
      </div>

      {/* ── Cloudflare Turnstile ── */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Human Verification *
        </label>
        <div ref={turnstileContainerRef} className="min-h-[65px]" />
        {!formData.turnstileToken && (
          <p className="mt-1 text-xs text-slate-400">Complete the verification above to submit</p>
        )}
        {formData.turnstileToken && (
          <p className="mt-1 text-xs text-[#10B981] font-medium">✓ Verified</p>
        )}
      </div>

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
          type="submit" disabled={isSubmitting || !formData.turnstileToken}
          className="flex-1 bg-[#FF6B35] text-white py-3 rounded-xl font-bold transition-all hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <><Loader2 size={18} className="animate-spin" />Submitting…</>
          ) : (
            <><Send size={18} />Send Request</>
          )}
        </button>
      </div>
    </div>
  );

  // ── Success screen ────────────────────────────────────────────────────────
  const renderSuccess = () => (
    <div className="text-center py-8 animate-fadeIn">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-[#10B981]" />
      </div>
      <h3 className="text-2xl font-bold text-[#0A0F1C] mb-3">Request Sent!</h3>
      <p className="text-slate-600 mb-6 max-w-sm mx-auto">
        We've received your request. Our team will get back to you within 24 hours.
      </p>
      <button
        type="button" onClick={handleClose}
        className="bg-[#0052CC] text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-[#003D99]"
      >
        Close
      </button>
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
        <div className="bg-gradient-to-r from-[#0052CC] to-[#2563EB] px-6 py-8 text-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-white mb-1">Let's Build Something Great</h2>
          <p className="text-blue-100 text-sm">No commitment — free consultation</p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {isSuccess ? renderSuccess() : (
            <>
              {renderStepIndicator()}
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
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
