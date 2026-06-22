
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ShoppingBag, Smartphone, ArrowRight, ArrowLeft, Rocket, ShieldCheck, CheckCircle2, User, Phone, Mail, Building, Link2, MessageSquare, MapPin } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { trackFormSubmission } from '@/utils/gtm';

interface MultiStepFormProps {
  onSuccess?: () => void;
  variant?: 'hero' | 'modal';
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onSuccess, variant = 'hero' }) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    company: '',
    website: '',
    message: '',
    name: '',
    mobile: '',
    email: ''
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate readable document ID
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'ahmedabad_leads', docId), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'ahmedabad_hero_form',
      });

      setIsSubmitted(true);
      trackFormSubmission();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStep1Valid = formData.service && formData.location.length > 3;
  const isStep2Valid = formData.company;
  const isStep3Valid = formData.name && formData.mobile.length === 10 && formData.email.includes('@');

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border-2 border-jet-green p-6 sm:p-8 rounded-3xl shadow-2xl w-full text-center"
      >
        <div className="w-16 h-16 bg-jet-green/10 text-jet-green rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-jet-navy mb-3">Audit Requested!</h3>
        <p className="text-jet-slate mb-5 md:mb-6 text-sm">
          Thank you, <span className="font-bold text-jet-blue">{formData.name}</span>.
          Our team is reviewing <span className="font-bold">{formData.company}</span>.
          Check WhatsApp at <span className="font-bold">+91 {formData.mobile}</span> shortly.
        </p>
        <div className="p-4 bg-jet-green/5 rounded-2xl border border-jet-green/10">
          <p className="text-[10px] font-bold text-jet-green uppercase tracking-widest mb-1">Status: Priority Queue</p>
          <p className="text-xs text-jet-navy">Estimated response: Under 120 minutes.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`bg-white/95 backdrop-blur-3xl border border-jet-light p-4 sm:p-5 md:p-7 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] w-full relative overflow-hidden`}>
      {/* Progress Header */}
      <div className="mb-5 md:mb-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-jet-navy font-heading">Free Website Audit</h3>
            <p className="text-[10px] text-jet-gray font-bold uppercase tracking-widest">Ahmedabad SMB Growth Program</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold bg-jet-blue text-white px-2.5 py-1 rounded-full uppercase">
              Step {step} / 3
            </span>
          </div>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "33.33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            className="h-full bg-gradient-to-r from-jet-blue to-blue-400 transition-all duration-500 ease-out"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Service Required*</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'web', icon: <Globe size={14} />, label: 'Corporate Website' },
                  { id: 'store', icon: <ShoppingBag size={14} />, label: 'E-Commerce Store' },
                  { id: 'both', icon: <Smartphone size={14} />, label: 'Website + App Bundle' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: opt.label })}
                    className={`flex items-center gap-3 p-3 rounded-2xl border text-sm font-bold transition-all duration-200 ${
                      formData.service === opt.label
                      ? 'border-jet-blue bg-jet-blue/5 text-jet-blue shadow-sm'
                      : 'border-slate-100 bg-slate-50/50 hover:border-jet-blue/30 text-jet-slate'
                    }`}
                  >
                    <span className={formData.service === opt.label ? 'text-jet-blue' : 'text-jet-gray'}>
                      {opt.icon}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Your Location / Address*</label>
              <div className="relative">
                <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-jet-gray" />
                <input
                  type="text"
                  placeholder="e.g. Navrangpura, Ahmedabad"
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

              <button
                onClick={nextStep}
                disabled={!isStep1Valid}
                className={`w-full py-3.5 sm:py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg ${
                  isStep1Valid
                  ? 'bg-jet-blue text-white hover:bg-blue-700 shadow-blue-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
              Next: Business Info <ArrowRight size={18} />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-4"
          >
            <div className="relative">
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Company Name*</label>
              <div className="relative">
                <Building size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-jet-gray" />
                <input
                  type="text"
                  placeholder="Enter business name"
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Current Website (If any)</label>
              <div className="relative">
                <Link2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-jet-gray" />
                <input
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Short Message</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-4 top-4 text-jet-gray" />
                <textarea
                  placeholder="Tell us about your project goals..."
                  rows={2}
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={prevStep} className="flex-1 py-3.5 sm:py-4 border-2 border-slate-100 text-jet-gray rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <ArrowLeft size={16} /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!isStep2Valid}
                className={`flex-[2] py-3.5 sm:py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg ${
                  isStep2Valid
                  ? 'bg-jet-blue text-white hover:bg-blue-700 shadow-blue-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Next: Contact Details <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Full Name*</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-jet-gray" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">WhatsApp Number*</label>
              <div className="flex">
                <span className="bg-slate-100 border border-r-0 border-slate-100 px-4 flex items-center rounded-l-2xl text-jet-navy font-bold text-sm">+91</span>
                <div className="relative flex-1">
                  <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-jet-gray" />
                  <input
                    type="tel"
                    placeholder="10 digit mobile"
                    className="w-full p-3.5 pl-10 rounded-r-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-jet-navy mb-2 uppercase tracking-widest">Work Email*</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-jet-gray" />
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full p-3.5 pl-12 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none shadow-sm text-sm font-bold text-jet-navy placeholder:text-jet-navy/40"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={prevStep} className="flex-1 py-3.5 sm:py-4 border-2 border-slate-100 text-jet-gray rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isStep3Valid || isSubmitting}
                className={`flex-[3] py-3.5 sm:py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-xl shimmer ${
                  isStep3Valid && !isSubmitting
                  ? 'bg-jet-orange text-white hover:bg-orange-600 shadow-orange-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Submitting...' : '🚀 Get Free Audit Now'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 pt-4 border-t border-slate-100 flex gap-4 justify-between items-center">
        <div className="flex items-center gap-2 text-[9px] font-bold text-jet-gray uppercase tracking-widest">
          <ShieldCheck size={12} className="text-jet-green" /> 100% Secure
        </div>
        <div className="flex items-center gap-2 text-[9px] font-bold text-jet-gray uppercase tracking-widest">
          <Rocket size={12} className="text-jet-orange" /> Ahmedabad Team
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
