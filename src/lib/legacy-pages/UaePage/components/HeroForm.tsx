'use client';

import React, { useState } from 'react';
import { Check, ChevronRight, Lock, Star, Zap } from 'lucide-react';
import { trackFormSubmission } from '@/utils/gtm';

const services = [
  "Website Design & Dev",
  "E-Commerce Store",
  "Digital Marketing",
  "CRM Implementation",
  "ERP Implementation",
  "AI Creative Studio",
  "Enterprise AI",
  "Not Sure / Multiple"
];

const HeroForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    timeline: '',
    budget: '',
    description: '',
    referral: ''
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Dynamically import Firebase to reduce bundle size
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const { db } = await import('@/firebase');

      // Generate readable document ID
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `uae_${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'uae_leads', docId), {
        service: formData.service,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        website: formData.website || '',
        timeline: formData.timeline,
        budget: formData.budget,
        description: formData.description,
        referral: formData.referral || '',
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'uae_hero_form',
        region: 'UAE',
      });

      setIsSuccess(true);
      trackFormSubmission();
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceSelect = (service: string) => {
    updateField('service', service);
    // Auto-advance to next step after a short delay for visual feedback
    setTimeout(() => {
      handleNext();
    }, 300);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-6 md:p-10 w-full max-w-[520px] h-full min-h-[500px] flex flex-col items-center justify-center text-center animate-fade-up">
        <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
          <Check size={40} className="text-[#10B981]" strokeWidth={4} />
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Thank You! Request Received</h3>
        <p className="text-[#334155] mb-2 text-lg">
          We've received your request and our team is reviewing it now.
        </p>
        <p className="text-[#64748B] text-sm mb-8">
          Confirmation sent to: <strong>{formData.email}</strong>
        </p>

        <div className="bg-[#F0F7FF] rounded-xl p-5 w-full text-left mb-8 border border-blue-100">
          <p className="font-bold text-[#0052CC] mb-3 text-sm uppercase tracking-wide">What happens next?</p>
          <ul className="space-y-3">
            {[
              "Our specialist reviews your requirements",
              "We prepare a custom quote & recommendations",
              "You'll receive an email within 2 hours",
              "Schedule a free consultation call"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100 shadow-sm text-xs font-bold text-[#0052CC]">
                  {i + 1}
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a href="#services" className="w-full bg-[#0052CC] hover:bg-[#003D99] text-white font-bold py-3.5 rounded-lg shadow-lg transition-all block text-center">
          Browse Our Services
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-6 md:p-8 w-full max-w-[520px] relative flex flex-col h-full max-h-[650px]">

      {/* Header & Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0F172A]">Get Your Custom Quote</h3>
            <p className="text-sm text-[#64748B]">
              {step === 1 && "Tell us what you need"}
              {step === 2 && "Tell us about your business"}
              {step === 3 && "Final Details"}
            </p>
          </div>
          <span className="text-xs font-bold text-[#0052CC] bg-blue-50 px-2 py-1 rounded">Step {step} of 3</span>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 h-1.5 rounded-full bg-gray-100 relative overflow-hidden">
               <div className={`absolute inset-0 bg-[#0052CC] transition-all duration-300 ${s <= step ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-1 -mr-1">
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* STEP 1: Services */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-up" role="radiogroup" aria-label="Select a service">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceSelect(service)}
                  role="radio"
                  aria-checked={formData.service === service}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 text-left ${
                    formData.service === service
                      ? 'border-[#0052CC] bg-[#F0F7FF]'
                      : 'border-[#E2E8F0] hover:border-[#0052CC]/50 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                     formData.service === service ? 'border-[#0052CC]' : 'border-gray-300'
                  }`} aria-hidden="true">
                    {formData.service === service && <div className="w-2 h-2 rounded-full bg-[#0052CC]"></div>}
                  </div>
                  <span className={`text-sm font-semibold ${
                    formData.service === service ? 'text-[#0052CC]' : 'text-[#334155]'
                  }`}>{service}</span>
                </button>
              ))}
            </div>
          )}

          {/* STEP 2: Info */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-up">
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={e => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={e => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 XX XXX XXXX"
                  value={formData.phone}
                  onChange={e => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-semibold text-[#334155] mb-1.5">Company</label>
                   <input
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={e => updateField('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                  />
                </div>
                <div>
                   <label className="block text-sm font-semibold text-[#334155] mb-1.5">Website</label>
                   <input
                    type="text"
                    placeholder="Optional"
                    value={formData.website}
                    onChange={e => updateField('website', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Details */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-up">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1.5">Timeline *</label>
                  <select
                    required
                    value={formData.timeline}
                    onChange={e => updateField('timeline', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A]"
                  >
                    <option value="">Select...</option>
                    <option value="ASAP">ASAP (1-2 weeks)</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="3+ months">3+ months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#334155] mb-1.5">Budget *</label>
                  <select
                    required
                    value={formData.budget}
                    onChange={e => updateField('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A]"
                  >
                    <option value="">Select...</option>
                    <option value="<15k">{'<'} AED 15k</option>
                    <option value="15k-30k">AED 15k - 30k</option>
                    <option value="30k-50k">AED 30k - 50k</option>
                    <option value="50k+">AED 50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#334155] mb-1.5">Project Details *</label>
                <textarea
                  required
                  placeholder="Tell us briefly about your project goals..."
                  rows={3}
                  value={formData.description}
                  onChange={e => updateField('description', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A] placeholder:text-gray-400 resize-none"
                ></textarea>
                 <div className="text-right text-xs text-gray-400 mt-1">{formData.description.length}/500</div>
              </div>

               <div>
                <label className="block text-sm font-semibold text-[#334155] mb-1.5">How did you hear about us?</label>
                <select
                  value={formData.referral}
                  onChange={e => updateField('referral', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 outline-none transition-all text-[#0F172A]"
                >
                   <option value="">Select...</option>
                   <option value="Google">Google Search</option>
                   <option value="Social">Social Media</option>
                   <option value="Referral">Referral</option>
                   <option value="Other">Other</option>
                </select>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
            </div>
          )}

        </form>
      </div>

      {/* Footer / Buttons */}
      <div className="pt-4 mt-auto">
        <div className="flex gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-lg text-[#0052CC] font-semibold hover:bg-blue-50 transition-colors"
            >
              Back
            </button>
          )}

          <button
            type="button"
            onClick={step < 3 ? handleNext : (e) => handleSubmit(e as any)}
            disabled={(step === 1 && !formData.service) || isSubmitting}
            className={`flex-1 py-3.5 rounded-lg font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 ${
              step === 3
                ? 'bg-[#FF6B35] hover:bg-[#e55a28] shadow-[0_4px_12px_rgba(255,107,53,0.25)]'
                : 'bg-[#0052CC] hover:bg-[#003D99] disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                {step === 3 ? "Get My Custom Quote" : "Next Step"}
                {step < 3 && <ChevronRight size={18} />}
              </>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-100 mt-5 pt-4">
           <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              <div className="flex items-center gap-2">
                 <Check size={14} className="text-[#10B981]" strokeWidth={3} />
                 <span className="text-[11px] font-medium text-[#334155]">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                 <Star size={14} className="text-[#10B981] fill-[#10B981]" />
                 <span className="text-[11px] font-medium text-[#334155]">98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                 <Lock size={14} className="text-[#10B981]" />
                 <span className="text-[11px] font-medium text-[#334155]">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                 <Zap size={14} className="text-[#10B981] fill-[#10B981]" />
                 <span className="text-[11px] font-medium text-[#334155]">Response in 2 Hours</span>
              </div>
           </div>
        </div>
      </div>

    </div>
  );
};

export default HeroForm;
