import React, { useState, useEffect, useRef } from 'react';
import { X, Check, ArrowRight, ArrowLeft, ShieldCheck, Briefcase, User, Mail, Phone, Building } from 'lucide-react';
import { trackFormSubmission } from '@/utils/gtm';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isMounted = useRef(true);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirement: initialService || '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  // Reset form on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setErrors({});
    } else {
      setTimeout(() => {
        if (isMounted.current) {
          setIsSuccess(false);
          setStep(1);
        }
      }, 300);
    }
  }, [isOpen]);

  // Phone Formatter (US Only)
  const formatPhoneNumber = (value: string) => {
    const phone = value.replace(/\D/g, '');
    if (phone.length < 4) return phone;
    if (phone.length < 7) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.length <= 14) { // (555) 555-5555 is 14 chars
      setFormData(prev => ({ ...prev, phone: formatted }));
      if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      
      const rawPhone = formData.phone.replace(/\D/g, '');
      if (!rawPhone) {
        newErrors.phone = 'Phone number is required';
      } else if (rawPhone.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit US mobile number';
      }
      
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
    }

    if (currentStep === 2) {
      if (!formData.requirement) newErrors.requirement = 'Please select a requirement';
      if (!formData.message.trim()) {
        newErrors.message = 'Please provide details about your project';
      } else if (formData.message.trim().length < 20) {
        newErrors.message = 'Please provide at least 20 characters';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    } else {
      setErrors({});
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (isMounted.current) {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackFormSubmission();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-end md:items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className={`relative w-full max-w-lg bg-white md:rounded-[24px] rounded-t-[24px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        
        {/* Header / Close */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-navy">
              {isSuccess ? 'Success' : `Step ${step} of 2`}
            </h3>
            {!isSuccess && <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{step === 1 ? 'Contact Information' : 'Project Details'}</p>}
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors z-10"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-jet-green to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-badge-bounce">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Request Received!</h3>
              <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                Our senior engineering team will review your requirements and contact you within 24 hours.
              </p>
              
              <button 
                onClick={onClose}
                className="w-full py-4 bg-navy text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              
              {/* STEP 1: Contact Info */}
              <div className={step === 1 ? 'block space-y-5' : 'hidden'}>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all ${errors.fullName ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                      placeholder="jane@company.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">US Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.phone}</p>}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Company Name *</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full h-14 pl-12 pr-4 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all ${errors.company ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                      placeholder="Acme Inc."
                    />
                  </div>
                  {errors.company && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.company}</p>}
                </div>
              </div>

              {/* STEP 2: Intent & Details */}
              <div className={step === 2 ? 'block space-y-6' : 'hidden'}>
                {/* Requirement Select */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Primary Requirement *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <select 
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className={`w-full h-14 pl-12 pr-8 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all appearance-none cursor-pointer ${errors.requirement ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                    >
                      <option value="">Select a service...</option>
                      <option value="New Website">New Website Build</option>
                      <option value="Redesign">Website Redesign</option>
                      <option value="Ecommerce">E-Commerce Store</option>
                      <option value="WebApp">Web Application</option>
                      <option value="Migration">Platform Migration</option>
                      <option value="Audit">Technical Audit</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-400"></div>
                  </div>
                  {errors.requirement && <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">{errors.requirement}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 ml-1">Project Details *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-4 rounded-xl border-2 bg-slate-50 text-navy font-medium outline-none transition-all min-h-[140px] resize-none ${errors.message ? 'border-red-500 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-jet-blue focus:bg-white'}`}
                    placeholder="Tell us about your goals, timeline, and current challenges..."
                  ></textarea>
                  <div className="flex justify-between mt-1.5 ml-1">
                     {errors.message ? (
                       <p className="text-red-500 text-xs font-medium">{errors.message}</p>
                     ) : (
                       <span className="text-xs text-slate-400">Minimum 20 characters</span>
                     )}
                     <span className={`text-xs font-bold ${formData.message.length >= 20 ? 'text-jet-green' : 'text-slate-300'}`}>
                       {formData.message.length} chars
                     </span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 flex gap-3 items-start border border-blue-100">
                   <ShieldCheck className="w-5 h-5 text-jet-blue shrink-0 mt-0.5" />
                   <p className="text-xs text-slate-600 leading-relaxed">
                     Your information is encrypted and secure. We never sell your data to third parties.
                   </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={handleBack}
                    className="h-14 px-6 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-jet-blue hover:text-jet-blue transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                
                {step < 2 ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="flex-1 h-14 bg-gradient-to-r from-jet-blue to-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-blue-500/20"
                  >
                    Next Step <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1 h-14 bg-gradient-to-r from-jet-orange to-orange-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-orange-500/20"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Get Free Technical Audit</>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};