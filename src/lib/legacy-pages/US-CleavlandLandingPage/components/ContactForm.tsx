'use client';

import React, { useState } from 'react';
import { ChevronRight, Lock, Clock, ArrowLeft, Send, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services = [
    "Website Design", "E-Commerce", "SEO & Marketing",
    "Custom Development", "AI Agent Development", "Other"
  ];

  const budgets = [
    "Under $2,000", "$2,000 - $5,000", "$5,000 - $10,000",
    "$10,000 - $25,000", "$25,000+"
  ];

  const handleNext = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const { initFirebase } = await import('../../../../firebase');
      const { db } = await initFirebase();

      if (!db) throw new Error('Firebase not initialized');

      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${dateStr}_${timeStr}_${namePart}_cleveland`;

      await setDoc(doc(db, 'contactus', docId), {
        ...formData,
        source: 'cleveland-landing',
        createdAt: serverTimestamp(),
        status: 'new',
      });

      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-500 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm transition-all";

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col ${className}`}>
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">Thank You!</h3>
          <p className="text-slate-600 text-sm">We&apos;ve received your request. Our team will get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col ${className}`}>
      {/* Header / Progress */}
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
           {step > 1 && (
             <button
               onClick={() => setStep(step - 1)}
               className="text-slate-400 hover:text-primary transition-colors p-1 hover:bg-slate-200 rounded-full"
               type="button"
             >
               <ArrowLeft size={16} />
             </button>
           )}
           <span className="text-xs font-bold text-navy uppercase tracking-wide">
             {step === 1 ? 'Step 1: Service' : step === 2 ? 'Step 2: Budget' : 'Step 3: Details'}
           </span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'w-8 bg-primary' : 'w-4 bg-slate-200'}`} />
          ))}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {step === 1 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-lg font-bold text-navy mb-2">What can we help you with?</h3>
            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleNext('service', service)}
                  className="p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-primary hover:bg-blue-50 hover:text-primary transition-all text-left flex items-center justify-between group"
                  type="button"
                >
                  {service}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-lg font-bold text-navy mb-2">What is your estimated budget?</h3>
            <div className="grid grid-cols-1 gap-3">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  onClick={() => handleNext('budget', budget)}
                  className="p-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-primary hover:bg-blue-50 hover:text-primary transition-all text-left flex items-center justify-between group"
                  type="button"
                >
                  {budget}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-3 animate-fade-in-up">
            <h3 className="text-lg font-bold text-navy mb-2">Final details to get your quote</h3>

            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="Full Name *"
                className={inputClasses}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input
                required
                placeholder="Company Name *"
                className={inputClasses}
                value={formData.company}
                onChange={e => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                required
                type="email"
                placeholder="Email Address *"
                className={inputClasses}
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
              <input
                required
                type="tel"
                placeholder="Enter your contact number *"
                className={inputClasses}
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <textarea
              required
              placeholder="Tell us about your project... *"
              className={`${inputClasses} min-h-[80px] resize-none`}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 mt-2 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 size={18} className="animate-spin" /> Submitting...</>
              ) : (
                <>Get My Free Quote <Send size={18} /></>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Footer Trust Indicators */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center text-[10px] sm:text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-1.5">
          <Lock size={12} className="text-accent" /> 100% Secure & Confidential
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={12} className="text-accent" /> 24h Response Time
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <CheckCircle2 size={12} className="text-accent" /> 500+ Happy Clients
        </div>
      </div>
    </div>
  );
};
