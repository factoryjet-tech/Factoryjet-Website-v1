import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle,
  Loader2,
  Monitor,
  ShoppingBag,
  Wrench,
  Rocket,
} from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import {
  trackModalOpen,
  trackModalClose,
  trackFormStep,
  trackFormSubmit,
  trackFormSuccess,
  trackFormError,
  trackServiceSelection,
  trackBudgetSelection,
  trackButtonClick,
} from "../utils/gtm";

type ServiceType = "website" | "ecommerce" | "maintenance" | "other";
type BudgetRange = "starter" | "business" | "enterprise" | "not-sure";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: ServiceType | "";
  budget: BudgetRange | "";
  message: string;
}

const services: {
  id: ServiceType;
  label: string;
  icon: React.ElementType;
  description: string;
}[] = [
  {
    id: "website",
    label: "Website Design",
    icon: Monitor,
    description: "Custom high-performance websites",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingBag,
    description: "Shopify & WooCommerce stores",
  },
  {
    id: "maintenance",
    label: "AMC / Maintenance",
    icon: Wrench,
    description: "Ongoing support & updates",
  },
  {
    id: "other",
    label: "Other / Custom",
    icon: Rocket,
    description: "Custom development needs",
  },
];

const budgets: { id: BudgetRange; label: string; range: string }[] = [
  { id: "starter", label: "Starter", range: "₹25K - ₹50K" },
  { id: "business", label: "Business", range: "₹50K - ₹1.2L" },
  { id: "enterprise", label: "Enterprise", range: "₹1.2L+" },
  { id: "not-sure", label: "Not Sure", range: "Need guidance" },
];

const ContactFormModal: React.FC = () => {
  const { isOpen, closeModal } = useContactModal();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pre-load Firebase when modal opens (non-blocking) and track modal open
  useEffect(() => {
    if (isOpen) {
      // Track modal open in GTM
      trackModalOpen("contact_form", "cta_button");
      trackFormStep("contact_form", 1, "service_selection");

      // Pre-initialize Firebase in the background when modal opens
      import("../firebase").then(({ initFirebase }) => {
        initFirebase().catch(() => {
          // Silently fail - will retry on submit if needed
        });
      });
    }
  }, [isOpen]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: ServiceType) => {
    const serviceName = services.find((s) => s.id === serviceId)?.label || serviceId;
    trackServiceSelection(serviceId, serviceName);
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleBudgetSelect = (budgetId: BudgetRange) => {
    const budgetInfo = budgets.find((b) => b.id === budgetId);
    trackBudgetSelection(budgetId, budgetInfo?.range || budgetId);
    setFormData((prev) => ({ ...prev, budget: budgetId }));
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      return formData.service !== "";
    }
    if (currentStep === 2) {
      return (
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      );
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      const nextStep = Math.min(step + 1, 3) as 1 | 2 | 3;
      const stepNames = ["", "service_selection", "contact_details", "budget_and_message"];
      trackFormStep("contact_form", nextStep, stepNames[nextStep]);
      trackButtonClick("continue", `form_step_${step}`);
      setStep(nextStep);
    }
  };

  const handleBack = () => {
    trackButtonClick("back", `form_step_${step}`);
    setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Track form submission attempt
    trackFormSubmit("contact_form", {
      service: formData.service,
      budget: formData.budget,
    });

    try {
      // Dynamically import Firebase functions only when submitting
      const { doc, setDoc, serverTimestamp } = await import(
        "firebase/firestore"
      );

      // Ensure Firebase is initialized and get db instance
      const { initFirebase } = await import("../firebase");
      const { db } = await initFirebase();

      if (!db) {
        throw new Error("Firebase not initialized");
      }

      // Generate readable document ID: 2026-12-18_13-30-45_BhaveshB
      const now = new Date();
      const dateStr = now.toISOString().split("T")[0]; // 2026-12-18
      const timeStr = now.toTimeString().split(" ")[0].replace(/:/g, "-"); // 13-30-45
      const namePart = formData.name.replace(/\s+/g, "").slice(0, 15); // BhaveshB (no spaces, max 15 chars)
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, "contactus", docId), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "new",
      });

      // Track successful form submission
      trackFormSuccess("contact_form");
      setIsSuccess(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      const errorMessage = "Something went wrong. Please try again.";
      trackFormError("contact_form", errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    trackModalClose("contact_form");
    trackButtonClick("close_modal", isSuccess ? "success_screen" : `form_step_${step}`);
    closeModal();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setError(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 300);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              s === step
                ? "bg-jet-blue text-white scale-110"
                : s < step
                ? "bg-jet-green text-white"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            {s < step ? <CheckCircle size={16} /> : s}
          </div>
          {s < 3 && (
            <div
              className={`w-12 h-1 mx-1 rounded transition-colors duration-300 ${
                s < step ? "bg-jet-green" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-jet-navy mb-2">
          What can we help you with?
        </h3>
        <p className="text-slate-500 text-sm">
          Select the service that best fits your needs
        </p>
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
                  ? "border-jet-blue bg-blue-50 shadow-md"
                  : "border-slate-200 hover:border-jet-blue/50 hover:bg-slate-50"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected
                    ? "bg-jet-blue text-white"
                    : "bg-slate-100 text-jet-blue"
                }`}
              >
                <Icon size={20} />
              </div>
              <h4 className="font-bold text-jet-navy text-sm mb-1">
                {service.label}
              </h4>
              <p className="text-xs text-slate-500">{service.description}</p>
            </button>
          );
        })}
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={!validateStep(1)}
          className="w-full bg-jet-blue text-white py-3 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-5"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-jet-navy mb-2">
          Tell us about yourself
        </h3>
        <p className="text-slate-500 text-sm">
          We'll use this to get in touch with you
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jet-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jet-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
            required
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jet-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Acme Inc."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jet-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={handleBack}
          className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition-all duration-200 hover:bg-slate-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!validateStep(2)}
          className="flex-1 bg-jet-blue text-white py-3 rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-5"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-jet-navy mb-2">Almost there!</h3>
        <p className="text-slate-500 text-sm">
          Share your budget and any additional details
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Budget Range
        </label>
        <div className="grid grid-cols-2 gap-3">
          {budgets.map((budget) => {
            const isSelected = formData.budget === budget.id;
            return (
              <button
                key={budget.id}
                type="button"
                onClick={() => handleBudgetSelect(budget.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-jet-blue bg-blue-50"
                    : "border-slate-200 hover:border-jet-blue/50"
                }`}
              >
                <span className="font-bold text-jet-navy text-sm block">
                  {budget.label}
                </span>
                <span className="text-xs text-slate-500">{budget.range}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Project Details (Optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your project goals, timeline, or any specific requirements..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-jet-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={handleBack}
          disabled={isSubmitting}
          className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition-all duration-200 hover:bg-slate-200 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-jet-orange text-white py-3 rounded-xl font-bold transition-all duration-200 hover:bg-orange-600 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Request
            </>
          )}
        </button>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={40} className="text-jet-green" />
      </div>
      <h3 className="text-2xl font-bold text-jet-navy mb-3">Thank You!</h3>
      <p className="text-slate-600 mb-6 max-w-sm mx-auto">
        We've received your request. Our team will get back to you within 24
        hours.
      </p>
      <button
        type="button"
        onClick={handleClose}
        className="bg-jet-blue text-white px-8 py-3 rounded-xl font-bold transition-all duration-200 hover:bg-blue-700"
      >
        Close
      </button>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
            >
              <X size={18} className="text-slate-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-jet-blue to-blue-600 px-6 py-8 text-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-white mb-1">
                Let's Build Something Great
              </h2>
              <p className="text-blue-100 text-sm">
                Fill out the form below and we'll be in touch
              </p>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit} className="p-6">
              {isSuccess ? (
                renderSuccess()
              ) : (
                <>
                  {renderStepIndicator()}
                  <AnimatePresence mode="wait">
                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                  </AnimatePresence>
                </>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
