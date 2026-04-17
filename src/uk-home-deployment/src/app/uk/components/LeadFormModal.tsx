"use client";

// LeadFormModal — 3-step free-audit form.
//
// Trigger: any element on the page with `data-uk-open-lead-form` (button or link).
// A document-level click listener intercepts those clicks and opens the modal.
// This lets us wire every "Get Your Free Digital Audit" CTA without lifting
// state into every section.
//
// WhatsApp links use wa.me URLs with target="_blank" — they must never open
// this modal.

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

// ── Types ────────────────────────────────────────────────────────────────────
type StepId = 1 | 2 | 3;

type FormState = {
  name: string;
  company: string;
  email: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
  source: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  need: "",
  budget: "",
  timeline: "",
  message: "",
  source: "",
};

const NEED_OPTIONS = [
  "New website",
  "Redesign",
  "E-commerce store",
  "AI Agent",
  "AI SEO",
  "Not sure",
];

const BUDGET_OPTIONS = [
  "Under £1,500",
  "£1,500–£3,000",
  "£3,000–£8,000",
  "£8,000+",
  "Flexible",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "1–2 months",
  "3–6 months",
  "Just exploring",
];

const SOURCE_OPTIONS = [
  "Google Search",
  "ChatGPT or AI",
  "Social Media",
  "Referral",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Component ────────────────────────────────────────────────────────────────
export default function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<StepId>(1);
  const [values, setValues] = useState<FormState>(EMPTY);
  const [touched, setTouched] = useState(false); // has user attempted to advance this step
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // ── Global open trigger ───────────────────────────────────────────────
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest("[data-uk-open-lead-form]");
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
      setStep(1);
      setTouched(false);
      setSubmitted(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Scroll lock + focus management + escape close
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prevActive = document.activeElement as HTMLElement | null;
    // Defer focus so the slide-in animation has started
    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 60);

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      window.clearTimeout(focusTimer);
      prevActive?.focus?.();
    };
  }, [open]);

  // ── Validation helpers ────────────────────────────────────────────────
  const step1Invalid = {
    name: !values.name.trim(),
    company: !values.company.trim(),
    email: !values.email.trim() || !EMAIL_RE.test(values.email.trim()),
  };
  const step1Valid = !step1Invalid.name && !step1Invalid.company && !step1Invalid.email;

  const step2Invalid = {
    need: !values.need,
    budget: !values.budget,
    timeline: !values.timeline,
  };
  const step2Valid =
    !step2Invalid.need && !step2Invalid.budget && !step2Invalid.timeline;

  const step3Invalid = {
    message: values.message.trim().length < 10,
  };
  const step3Valid = !step3Invalid.message;

  // ── Change handler ────────────────────────────────────────────────────
  const onChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  // ── Nav ───────────────────────────────────────────────────────────────
  function next() {
    setTouched(true);
    if (step === 1 && !step1Valid) return;
    if (step === 2 && !step2Valid) return;
    setTouched(false);
    setStep((s) => (s === 3 ? 3 : ((s + 1) as StepId)));
  }

  function back() {
    setTouched(false);
    setStep((s) => (s === 1 ? 1 : ((s - 1) as StepId)));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!step3Valid) return;

    // Fire Google Ads conversion. Guarded — gtag is optional; harmless if absent.
    try {
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", {
          send_to: "AW-11127037244/aqsvCJCk8ZQcELy65Lkp",
        });
      }
    } catch {
      /* no-op */
    }

    setSubmitted(true);
  }

  function close() {
    setOpen(false);
    // Reset after a tick so the closing animation doesn't flash to an empty form
    window.setTimeout(() => {
      setStep(1);
      setValues(EMPTY);
      setTouched(false);
      setSubmitted(false);
    }, 220);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="uk-lead-form-title"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        padding: 16,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <style>{`
        @keyframes fj-modal-in {
          from { opacity: 0; transform: translateY(12px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .fj-modal-card { animation: fj-modal-in 260ms cubic-bezier(0.2,0.8,0.2,1); }
        .fj-step-viewport { position: relative; overflow: hidden; }
        .fj-step-track {
          display: flex;
          width: 300%;
          transition: transform 300ms ease;
        }
        .fj-step-pane { width: 33.3333%; flex: none; }
        @media (prefers-reduced-motion: reduce) {
          .fj-modal-card { animation: none; }
          .fj-step-track { transition: none; }
        }
        .fj-input:focus {
          outline: none;
          border-color: #0052CC;
          box-shadow: 0 0 0 2px rgba(0,82,204,0.25);
        }
      `}</style>

      <div
        ref={dialogRef}
        className="fj-modal-card relative w-full"
        style={{
          maxWidth: 480,
          backgroundColor: "#FFFFFF",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 30px 80px -20px rgba(0,0,0,0.35)",
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close form"
          className="absolute"
          style={{
            top: 16,
            right: 16,
            width: 44,
            height: 44,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7280",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <SuccessState onClose={close} />
        ) : (
          <>
            <h2
              id="uk-lead-form-title"
              className="font-clash"
              style={{
                color: "#0A0F1C",
                fontWeight: 700,
                fontSize: 24,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginTop: 4,
              }}
            >
              Get Your Free Digital Audit
            </h2>
            <p
              style={{
                color: "#6b7280",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.6,
                marginTop: 6,
              }}
            >
              Three quick steps. We reply within 24 hours.
            </p>

            {/* Step indicator */}
            <StepIndicator step={step} />

            {/* Step viewport */}
            <form onSubmit={onSubmit} noValidate>
              <div className="fj-step-viewport" style={{ marginTop: 4 }}>
                <div
                  className="fj-step-track"
                  style={{
                    transform: `translateX(-${(step - 1) * 33.3333}%)`,
                  }}
                >
                  {/* Step 1 */}
                  <div className="fj-step-pane" style={{ padding: "0 2px" }}>
                    <Field label="Your name" required error={touched && step1Invalid.name ? "This field is required" : ""}>
                      <input
                        ref={firstInputRef}
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        autoComplete="name"
                        aria-invalid={touched && step1Invalid.name}
                        className="fj-input"
                        style={inputStyle(touched && step1Invalid.name)}
                      />
                    </Field>
                    <Field label="Business name" required error={touched && step1Invalid.company ? "This field is required" : ""}>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        autoComplete="organization"
                        aria-invalid={touched && step1Invalid.company}
                        className="fj-input"
                        style={inputStyle(touched && step1Invalid.company)}
                      />
                    </Field>
                    <Field
                      label="Email address"
                      required
                      error={
                        touched && step1Invalid.email
                          ? values.email
                            ? "Enter a valid email"
                            : "This field is required"
                          : ""
                      }
                    >
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        autoComplete="email"
                        aria-invalid={touched && step1Invalid.email}
                        className="fj-input"
                        style={inputStyle(touched && step1Invalid.email)}
                      />
                    </Field>
                  </div>

                  {/* Step 2 */}
                  <div className="fj-step-pane" style={{ padding: "0 2px" }}>
                    <Field label="What do you need?" required error={touched && step2Invalid.need ? "This field is required" : ""}>
                      <Select
                        name="need"
                        value={values.need}
                        onChange={onChange}
                        options={NEED_OPTIONS}
                        placeholder="Choose a service"
                        invalid={touched && step2Invalid.need}
                      />
                    </Field>
                    <Field label="Monthly budget" required error={touched && step2Invalid.budget ? "This field is required" : ""}>
                      <Select
                        name="budget"
                        value={values.budget}
                        onChange={onChange}
                        options={BUDGET_OPTIONS}
                        placeholder="Choose a budget"
                        invalid={touched && step2Invalid.budget}
                      />
                    </Field>
                    <Field label="Timeline" required error={touched && step2Invalid.timeline ? "This field is required" : ""}>
                      <Select
                        name="timeline"
                        value={values.timeline}
                        onChange={onChange}
                        options={TIMELINE_OPTIONS}
                        placeholder="Choose a timeline"
                        invalid={touched && step2Invalid.timeline}
                      />
                    </Field>
                  </div>

                  {/* Step 3 */}
                  <div className="fj-step-pane" style={{ padding: "0 2px" }}>
                    <Field
                      label="Tell us about your project"
                      required
                      error={
                        touched && step3Invalid.message
                          ? "Please add at least 10 characters"
                          : ""
                      }
                    >
                      <textarea
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={onChange}
                        aria-invalid={touched && step3Invalid.message}
                        className="fj-input"
                        style={{
                          ...inputStyle(touched && step3Invalid.message),
                          resize: "vertical",
                          minHeight: 112,
                        }}
                      />
                    </Field>
                    <Field label="How did you find us?">
                      <Select
                        name="source"
                        value={values.source}
                        onChange={onChange}
                        options={SOURCE_OPTIONS}
                        placeholder="Optional"
                        invalid={false}
                      />
                    </Field>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ marginTop: 20 }}>
                {step === 1 && (
                  <button
                    type="button"
                    onClick={next}
                    style={primaryBtnStyle}
                  >
                    Next
                  </button>
                )}
                {step === 2 && (
                  <>
                    <button
                      type="button"
                      onClick={next}
                      style={primaryBtnStyle}
                    >
                      Next
                    </button>
                    <BackLink onClick={back} />
                  </>
                )}
                {step === 3 && (
                  <>
                    <button type="submit" style={primaryBtnStyle}>
                      Send My Free Audit
                    </button>
                    <BackLink onClick={back} />
                  </>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────────
function StepIndicator({ step }: { step: StepId }) {
  return (
    <div
      className="flex items-center justify-center"
      aria-hidden="true"
      style={{ gap: 10, marginTop: 20, marginBottom: 24 }}
    >
      {[1, 2, 3].map((n) => {
        const isActive = n === step;
        const isDone = n < step;
        const bg = isDone
          ? "#10B981"
          : isActive
            ? "#0052CC"
            : "transparent";
        const border = isDone
          ? "1px solid #10B981"
          : isActive
            ? "1px solid #0052CC"
            : "1px solid #E2E8F0";
        return (
          <span
            key={n}
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: bg,
              border,
              transition:
                "background-color 200ms ease, border-color 200ms ease",
            }}
          />
        );
      })}
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block" style={{ marginBottom: 14 }}>
      <span
        style={{
          display: "block",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: 13,
          color: "#374151",
          marginBottom: 6,
        }}
      >
        {label}
        {required && <span style={{ color: "#DC2626", marginLeft: 4 }}>*</span>}
      </span>
      {children}
      {error && (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "#DC2626",
            marginTop: 4,
          }}
        >
          {error}
        </span>
      )}
    </label>
  );
}

function Select({
  name,
  value,
  onChange,
  options,
  placeholder,
  invalid,
}: {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  invalid: boolean;
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      aria-invalid={invalid}
      className="fj-input"
      style={{
        ...inputStyle(invalid),
        appearance: "none",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 14px center",
        paddingRight: 40,
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "block",
        marginTop: 10,
        width: "100%",
        textAlign: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 500,
        color: "#6b7280",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      ← Back
    </button>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 0 8px" }}>
      <div
        aria-hidden="true"
        style={{
          width: 64,
          height: 64,
          margin: "0 auto",
          borderRadius: 9999,
          backgroundColor: "rgba(16,185,129,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3
        className="font-clash"
        style={{
          color: "#0A0F1C",
          fontWeight: 700,
          fontSize: 22,
          lineHeight: 1.2,
          marginTop: 18,
        }}
      >
        Thanks!
      </h3>
      <p
        style={{
          color: "#374151",
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          lineHeight: 1.6,
          marginTop: 10,
          maxWidth: 360,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        We&apos;ll send your free audit within 24 hours.
      </p>
      <a
        href="https://wa.me/919699977699"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: 18,
          color: "#0052CC",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "underline",
          textDecorationColor: "rgba(0,82,204,0.4)",
          textUnderlineOffset: 4,
        }}
      >
        WhatsApp us for faster response →
      </a>
      <div style={{ marginTop: 26 }}>
        <button type="button" onClick={onClose} style={primaryBtnStyle}>
          Close
        </button>
      </div>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────
function inputStyle(invalid: boolean): React.CSSProperties {
  return {
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: `1px solid ${invalid ? "#DC2626" : "#E2E8F0"}`,
    borderRadius: 8,
    padding: "12px 14px",
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    fontSize: 16,
    color: "#0F172A",
    lineHeight: 1.4,
    minHeight: 48,
    transition: "border-color 150ms ease, box-shadow 150ms ease",
  };
}

const primaryBtnStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  backgroundColor: "#0052CC",
  color: "#FFFFFF",
  border: "none",
  borderRadius: 8,
  padding: "14px 20px",
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  fontWeight: 600,
  letterSpacing: "0.01em",
  cursor: "pointer",
  minHeight: 48,
  boxShadow: "0 4px 12px rgba(0,82,204,0.25)",
};
