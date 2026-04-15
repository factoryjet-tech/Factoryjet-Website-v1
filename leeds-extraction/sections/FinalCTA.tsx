"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { CheckCircle2, MessageCircle, Mail, Globe, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TRUST_POINTS = [
  "Free, no-obligation digital audit",
  "Response within 4 hours",
  "2–4 week delivery for websites",
  "Lighthouse 90+ performance guarantee",
  "90 days post-launch support included",
];

const SERVICE_OPTIONS = [
  "Web Design & Development",
  "E-Commerce (Shopify/WooCommerce)",
  "AI Agent Development",
  "AI SEO (GEO/AEO)",
  "Website Redesign",
  "Other",
];

const BUDGET_OPTIONS = [
  "Under £2,000",
  "£2,000–£5,000",
  "£5,000–£10,000",
  "£10,000–£25,000",
  "£25,000+",
  "Not sure yet",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Flexible",
];

const REFERRAL_OPTIONS = [
  "Google search",
  "AI search (ChatGPT / Perplexity)",
  "Referral from a colleague",
  "Social media",
  "Other",
];

// Shared Tailwind class string for all form inputs, textarea, and select
const inputCls =
  "bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC] focus:outline-none w-full";

const inputErrorCls =
  "bg-white/10 border border-red-400 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:border-red-400 focus:ring-1 focus:ring-red-400 focus:outline-none w-full";

// Shared class string for all form labels
const labelCls = "block text-sm font-medium text-gray-300 mb-1.5";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
  referral: string;
}

interface StepErrors {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  description?: string;
}

// ── Step Indicator ────────────────────────────────────────────────────────────
function StepIndicator({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: "About You" },
    { num: 2, label: "Your Project" },
    { num: 3, label: "Confirm" },
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map(({ num, label }, i) => {
        const isCompleted = num < currentStep;
        const isCurrent = num === currentStep;

        return (
          <div key={num} className="flex items-center">
            {/* Circle + label */}
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: isCompleted
                    ? "#10B981"
                    : isCurrent
                    ? "#0052CC"
                    : "rgba(255,255,255,0.2)",
                  color: isCompleted || isCurrent ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                {isCompleted ? (
                  <Check size={14} strokeWidth={3} />
                ) : (
                  num
                )}
              </div>
              <span
                className="text-xs mt-1.5 whitespace-nowrap"
                style={{
                  color: isCurrent
                    ? "white"
                    : isCompleted
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(255,255,255,0.35)",
                }}
              >
                {label}
              </span>
            </div>

            {/* Connector line (between circles, not after last) */}
            {i < steps.length - 1 && (
              <div
                className="h-0.5 mx-2"
                style={{
                  width: "48px",
                  background: num < currentStep
                    ? "#10B981"
                    : "rgba(255,255,255,0.2)",
                  marginBottom: "20px",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
    referral: "",
  });
  const [errors, setErrors] = useState<StepErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const prefersReduced =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      const trigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      gsap.from(leftRef.current, {
        x: -30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: trigger,
      });

      gsap.from(rightRef.current, {
        x: 30,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: trigger,
      });
    },
    { scope: sectionRef }
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof StepErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  // ── Step 1 validation & advance ───────────────────────────────────────────
  function handleStep1Next() {
    const newErrors: StepErrors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) newErrors.email = "This field is required";
    if (!formData.phone.trim()) newErrors.phone = "This field is required";
    if (!formData.business.trim()) newErrors.business = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setCurrentStep(2);
  }

  // ── Step 2 validation & advance ───────────────────────────────────────────
  function handleStep2Next() {
    const newErrors: StepErrors = {};
    if (!formData.service) newErrors.service = "This field is required";
    if (!formData.budget) newErrors.budget = "This field is required";
    if (!formData.timeline) newErrors.timeline = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setCurrentStep(3);
  }

  // ── Final submit ──────────────────────────────────────────────────────────
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: StepErrors = {};
    if (!formData.description.trim() || formData.description.trim().length < 10)
      newErrors.description = "Please enter at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("Form submitted:", formData);

    // Google Ads conversion tracking
    if (typeof window !== "undefined") {
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: "AW-11127037244/aqsvCJCk8ZQcELy65Lkp",
        });
      }
    }

    setSubmitted(true);
  }

  // ── Enter on last field of a step advances it ─────────────────────────────
  function handleKeyDown(e: React.KeyboardEvent, step: number) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step === 1) handleStep1Next();
    }
  }

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      style={{ background: "#0a0f1c", padding: "128px 0", overflow: "hidden" }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1400px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: copy ────────────────────────────────────────────────── */}
          <div ref={leftRef}>
            <p
              className="font-semibold uppercase"
              style={{
                color: "#FF6B35",
                fontSize: "13px",
                letterSpacing: "0.15em",
                marginBottom: "16px",
              }}
            >
              GET STARTED
            </p>

            <h2
              className="font-clash text-white"
              style={{
                fontSize: "clamp(2rem, 1.7rem + 1.3vw, 3rem)",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Let&apos;s Build Something That Grows Your Leeds Business
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "50ch",
              }}
            >
              Whether you need a website, an online store, an AI agent, or a complete digital strategy — we will give you an honest assessment of what will work, what it costs, and how fast we can deliver. No obligation. No jargon. Just a clear plan.
            </p>

            {/* Trust checkpoints */}
            <ul className="flex flex-col" style={{ gap: "12px", marginBottom: "40px" }}>
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#10B981", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <a
                href="mailto:connect@factoryjet.com"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Mail size={17} style={{ color: "#0052CC", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  connect@factoryjet.com
                </span>
              </a>
              <a
                href="https://wa.me/919699977699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <MessageCircle size={17} style={{ color: "#10B981", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  WhatsApp: +91 96999 77699
                </span>
              </a>
              <a
                href="https://factoryjet.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <Globe size={17} style={{ color: "#FF6B35", flexShrink: 0 }} aria-hidden="true" />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>
                  factoryjet.com
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: glassmorphism form card ──────────────────────────── */}
          {/* ONE glassmorphism instance allowed per design system rules.    */}
          <div
            ref={rightRef}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 size={48} style={{ color: "#10B981", marginBottom: "16px" }} />
                <h3 className="font-clash text-white text-2xl font-bold mb-3">
                  Audit Request Sent
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                  We&apos;ll review your project and get back to you within 4 hours with your free Leeds digital audit.
                </p>
              </div>
            ) : (
              <div>
                {/* Step indicator */}
                <StepIndicator currentStep={currentStep} />

                {/* ── STEP 1 — About You ──────────────────────────────── */}
                {currentStep === 1 && (
                  <div style={{ opacity: 1, transition: "opacity 0.2s ease" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4">
                      Step 1 of 3 — About You
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="cta-name" className={labelCls}>
                          Full Name *
                        </label>
                        <input
                          id="cta-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? inputErrorCls : inputCls}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="cta-email" className={labelCls}>
                          Business Email *
                        </label>
                        <input
                          id="cta-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? inputErrorCls : inputCls}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label htmlFor="cta-phone" className={labelCls}>
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="cta-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="+44 7700 900000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? inputErrorCls : inputCls}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label htmlFor="cta-business" className={labelCls}>
                          Business Name *
                        </label>
                        <input
                          id="cta-business"
                          name="business"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Acme Ltd"
                          value={formData.business}
                          onChange={handleChange}
                          onKeyDown={(e) => handleKeyDown(e, 1)}
                          className={errors.business ? inputErrorCls : inputCls}
                        />
                        {errors.business && (
                          <p className="text-red-400 text-xs mt-1">{errors.business}</p>
                        )}
                      </div>

                      {/* Next button */}
                      <button
                        type="button"
                        onClick={handleStep1Next}
                        className="font-semibold rounded-lg transition-all duration-200 hover:brightness-110 mt-1"
                        style={{
                          background: "#0052CC",
                          color: "white",
                          padding: "14px 16px",
                          fontSize: "15px",
                          width: "100%",
                          cursor: "pointer",
                          border: "none",
                        }}
                      >
                        Next: Your Project →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 2 — Your Project ────────────────────────────── */}
                {currentStep === 2 && (
                  <div style={{ opacity: 1, transition: "opacity 0.2s ease" }}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4">
                      Step 2 of 3 — Your Project
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Service dropdown */}
                      <div>
                        <label htmlFor="cta-service" className={labelCls}>
                          What do you need? *
                        </label>
                        <select
                          id="cta-service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className={
                            errors.service
                              ? "bg-white/10 border border-red-400 text-white rounded-lg px-4 py-3 focus:border-red-400 focus:outline-none w-full cursor-pointer"
                              : "bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-[#0052CC] focus:outline-none w-full cursor-pointer"
                          }
                        >
                          <option value="" style={{ background: "#0a0f1c" }}>Select a service…</option>
                          {SERVICE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ background: "#0a0f1c" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                        )}
                      </div>

                      {/* Budget dropdown */}
                      <div>
                        <label htmlFor="cta-budget" className={labelCls}>
                          Estimated budget *
                        </label>
                        <select
                          id="cta-budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleChange}
                          className={
                            errors.budget
                              ? "bg-white/10 border border-red-400 text-white rounded-lg px-4 py-3 focus:border-red-400 focus:outline-none w-full cursor-pointer"
                              : "bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-[#0052CC] focus:outline-none w-full cursor-pointer"
                          }
                        >
                          <option value="" style={{ background: "#0a0f1c" }}>Select a budget range…</option>
                          {BUDGET_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ background: "#0a0f1c" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p className="text-red-400 text-xs mt-1">{errors.budget}</p>
                        )}
                      </div>

                      {/* Timeline dropdown */}
                      <div>
                        <label htmlFor="cta-timeline" className={labelCls}>
                          Timeline *
                        </label>
                        <select
                          id="cta-timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleChange}
                          className={
                            errors.timeline
                              ? "bg-white/10 border border-red-400 text-white rounded-lg px-4 py-3 focus:border-red-400 focus:outline-none w-full cursor-pointer"
                              : "bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-[#0052CC] focus:outline-none w-full cursor-pointer"
                          }
                        >
                          <option value="" style={{ background: "#0a0f1c" }}>Select a timeline…</option>
                          {TIMELINE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt} style={{ background: "#0a0f1c" }}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <p className="text-red-400 text-xs mt-1">{errors.timeline}</p>
                        )}
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center gap-4 mt-1">
                        <button
                          type="button"
                          onClick={() => { setErrors({}); setCurrentStep(1); }}
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={handleStep2Next}
                          className="flex-1 font-semibold rounded-lg transition-all duration-200 hover:brightness-110"
                          style={{
                            background: "#0052CC",
                            color: "white",
                            padding: "14px 16px",
                            fontSize: "15px",
                            cursor: "pointer",
                            border: "none",
                          }}
                        >
                          Next: Review &amp; Confirm →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 — Confirm & Send ──────────────────────────── */}
                {currentStep === 3 && (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    style={{ opacity: 1, transition: "opacity 0.2s ease" }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 mb-4">
                      Step 3 of 3 — Confirm &amp; Send
                    </p>

                    {/* Summary */}
                    <div
                      className="rounded-xl flex flex-col mb-6"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "20px",
                        gap: "12px",
                      }}
                    >
                      {[
                        { label: "Name", value: formData.name },
                        { label: "Email", value: formData.email },
                        { label: "Phone", value: formData.phone },
                        { label: "Business", value: formData.business },
                        { label: "Service", value: formData.service },
                        { label: "Budget", value: formData.budget },
                        { label: "Timeline", value: formData.timeline },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex gap-3">
                          <span
                            className="flex-shrink-0"
                            style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", minWidth: "80px" }}
                          >
                            {label}
                          </span>
                          <span
                            className="font-medium"
                            style={{
                              fontSize: "13px",
                              color: "white",
                              wordBreak: "break-word",
                            }}
                          >
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Brief description */}
                    <div className="mb-4">
                      <label htmlFor="cta-description" className={labelCls}>
                        Brief description *
                      </label>
                      <textarea
                        id="cta-description"
                        name="description"
                        rows={4}
                        required
                        placeholder="Tell us a little about your project, goals, and anything specific we should know…"
                        value={formData.description}
                        onChange={handleChange}
                        className={errors.description ? inputErrorCls : inputCls}
                        style={{ resize: "vertical" }}
                      />
                      {errors.description && (
                        <p className="text-red-400 text-xs mt-1">{errors.description}</p>
                      )}
                    </div>

                    {/* How did you find us? */}
                    <div className="mb-6">
                      <label htmlFor="cta-referral" className={labelCls}>
                        How did you find us?
                      </label>
                      <select
                        id="cta-referral"
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-3 focus:border-[#0052CC] focus:outline-none w-full cursor-pointer"
                      >
                        <option value="" style={{ background: "#0a0f1c" }}>Select an option…</option>
                        {REFERRAL_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} style={{ background: "#0a0f1c" }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => { setErrors({}); setCurrentStep(2); }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        ← Back
                      </button>
                      {/* Submit — Jet Orange */}
                      <button
                        type="submit"
                        className="flex-1 font-semibold rounded-lg transition-all duration-200 hover:brightness-110"
                        style={{
                          background: "#FF6B35",
                          color: "white",
                          padding: "16px",
                          fontSize: "15px",
                          cursor: "pointer",
                          border: "none",
                        }}
                      >
                        Get My Free Audit →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
