
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShoppingCart, RefreshCw, TrendingUp, HelpCircle, ChevronRight, CheckCircle, Shield, Sparkles } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { trackFormSubmission } from '@/utils/gtm';

interface MultiStepFormProps {
  variant?: 'hero' | 'modal';
  onSuccess?: () => void;
}

const LOCATIONS = [
  'Koregaon Park',
  'Hinjewadi',
  'Baner',
  'Kothrud',
  'Wakad',
  'Pimpri-Chinchwad',
  'Viman Nagar',
  'Aundh',
  'Magarpatta',
  'Kalyani Nagar',
  'Shivaji Nagar',
  'Other Pune',
  'Outside Pune',
];

const NEEDS = [
  { id: 'website', label: 'New Website', icon: Globe },
  { id: 'ecommerce', label: 'E-Commerce Store', icon: ShoppingCart },
  { id: 'redesign', label: 'Website Redesign', icon: RefreshCw },
  { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp },
  { id: 'unsure', label: 'Not Sure Yet', icon: HelpCircle },
];

const BUDGETS = [
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000+',
  "Let's Discuss",
];

const MultiStepForm: React.FC<MultiStepFormProps> = ({ variant = 'hero', onSuccess }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    need: '',
    budget: '',
    name: '',
    whatsapp: '',
    email: '',
    business: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNeedSelect = (need: string) => {
    setFormData(prev => ({ ...prev, need }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: value.replace(/\D/g, '').slice(0, 10) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const canProceedStep1 = formData.need && formData.budget;
  const canSubmit = formData.name && formData.whatsapp.length === 10;

  const handleContinue = () => {
    if (canProceedStep1) {
      setStep(2);
    }
  };

  const handleSubmit = async () => {
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'pune_leads', docId), {
        need: formData.need,
        budget: formData.budget,
        name: formData.name,
        whatsapp: `+91${formData.whatsapp}`,
        email: formData.email || '',
        business: formData.business || '',
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'pune_hero_form',
      });

      setIsSuccess(true);
      trackFormSubmission();
      onSuccess?.();
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/50 rounded-2xl p-8 ${variant === 'hero' ? 'max-w-md' : 'w-full'}`}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-20 h-20 bg-jet-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="text-jet-green" size={40} />
          </motion.div>
          <h3 className="text-2xl font-bold text-jet-navy mb-2 font-heading">Thank You!</h3>
          <p className="text-jet-slate">We'll call you within 2 hours with your free consultation.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl shadow-gray-200/50 rounded-2xl p-6 md:p-8 ${variant === 'hero' ? 'max-w-md' : 'w-full'}`}
    >
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-jet-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
            1
          </div>
          <div className={`w-12 h-1 rounded-full ${step >= 2 ? 'bg-jet-blue' : 'bg-slate-100'}`} />
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-jet-blue text-white' : 'bg-slate-100 text-slate-400'}`}>
            2
          </div>
        </div>
        <span className="text-xs font-medium text-jet-gray">Step {step} of 2</span>
      </div>

      <h3 className="text-xl font-bold text-jet-navy mb-6 font-heading flex items-center gap-2">
        <Sparkles className="text-jet-orange" size={20} />
        {step === 1 ? 'Tell us about your project' : 'How can we reach you?'}
      </h3>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-5"
          >
            {/* Need Selection */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                What do you need?*
              </label>
              <div className="space-y-2">
                {NEEDS.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleNeedSelect(id)}
                    className={`w-full p-3 rounded-xl border-2 flex items-center gap-3 transition-all ${
                      formData.need === id
                        ? 'border-jet-blue bg-jet-blue/5'
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <Icon size={20} className={formData.need === id ? 'text-jet-blue' : 'text-jet-gray'} />
                    <span className={`font-medium ${formData.need === id ? 'text-jet-navy' : 'text-jet-slate'}`}>
                      {label}
                    </span>
                    {formData.need === id && (
                      <CheckCircle className="ml-auto text-jet-blue" size={18} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Selection */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                Monthly Budget*
              </label>
              <div className="grid grid-cols-2 gap-2">
                {BUDGETS.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleBudgetSelect(budget)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                      formData.budget === budget
                        ? 'border-jet-blue bg-jet-blue/5 text-jet-navy'
                        : 'border-slate-100 hover:border-slate-200 bg-white text-jet-slate'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <button
              type="button"
              onClick={handleContinue}
              disabled={!canProceedStep1}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                canProceedStep1
                  ? 'bg-jet-blue text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continue <ChevronRight size={18} />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            {/* Name Input */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="w-full p-3 rounded-xl border-2 border-slate-100 bg-white focus:border-jet-blue focus:ring-2 focus:ring-jet-blue/20 outline-none text-jet-navy font-medium placeholder:text-slate-300"
              />
            </div>

            {/* WhatsApp Input */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                Phone Number*
              </label>
              <div className="flex">
                <span className="bg-slate-50 border-2 border-r-0 border-slate-100 px-4 flex items-center rounded-l-xl text-jet-navy font-bold">
                  +91
                </span>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="XXXXX XXXXX"
                  className="w-full p-3 rounded-r-xl border-2 border-slate-100 bg-white focus:border-jet-blue focus:ring-2 focus:ring-jet-blue/20 outline-none text-jet-navy font-medium placeholder:text-slate-300"
                />
              </div>
              <p className="text-xs text-jet-gray mt-1">We'll call you within 2 hours</p>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                Email <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full p-3 rounded-xl border-2 border-slate-100 bg-white focus:border-jet-blue focus:ring-2 focus:ring-jet-blue/20 outline-none text-jet-navy font-medium placeholder:text-slate-300"
              />
            </div>

            {/* Business Name (Optional) */}
            <div>
              <label className="block text-xs font-bold text-jet-navy mb-2 uppercase tracking-wider">
                Business Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleInputChange}
                placeholder="Your company name"
                className="w-full p-3 rounded-xl border-2 border-slate-100 bg-white focus:border-jet-blue focus:ring-2 focus:ring-jet-blue/20 outline-none text-jet-navy font-medium placeholder:text-slate-300"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit || isSubmitting}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shimmer ${
                canSubmit && !isSubmitting
                  ? 'bg-jet-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Submitting...' : '🚀 Get Free Consultation'}
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full py-2 text-jet-gray hover:text-jet-navy text-sm font-medium transition-colors"
            >
              ← Back to Step 1
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Reinforcers */}
      <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs text-jet-gray">
          <Shield size={14} className="text-jet-green" />
          <span>Your information is secure and never shared</span>
        </div>
        <div className="flex items-center justify-center gap-4 text-xs text-jet-gray">
          <span className="flex items-center gap-1">
            <CheckCircle size={12} className="text-jet-green" />
            Response within 2 hours
          </span>
        </div>
      </div>

      <style>{`
        .shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default MultiStepForm;
