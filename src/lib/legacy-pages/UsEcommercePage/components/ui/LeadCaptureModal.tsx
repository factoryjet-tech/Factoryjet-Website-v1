import React, { useState, useEffect } from 'react';
import { X, ChevronRight, CheckCircle2, ArrowLeft, Loader2, Lock } from 'lucide-react';
import { useLeadCapture } from '../../context/LeadCaptureContext';
import { Button } from './Section';

export const LeadCaptureModal: React.FC = () => {
  const { isFormOpen, closeForm, initialInterest } = useLeadCapture();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirements: '',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isFormOpen) {
      setStep(1);
      setFormData(prev => ({ 
        ...prev, 
        requirements: initialInterest || 'General Inquiry',
        message: ''
      }));
      setErrors({});
      setTouched({});
    }
  }, [isFormOpen, initialInterest]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit US mobile number";
    }

    if (!formData.company.trim()) newErrors.company = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.requirements) newErrors.requirements = "Please select a requirement";
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setTouched({ fullName: true, email: true, phone: true, company: true });
    if (validateStep1()) {
      setStep(2);
      setTouched({}); // Reset touched for step 2
    }
  };

  const handleSubmit = async () => {
    setTouched({ requirements: true, message: true });
    if (validateStep2()) {
      setIsSubmitting(true);

      try {
        // Dynamically import Firebase to reduce bundle size
        const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
        const { db } = await import('@/firebase');

        // Generate readable document ID
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
        const namePart = formData.fullName.replace(/\s+/g, '').slice(0, 15);
        const docId = `us_ecom_${dateStr}_${timeStr}_${namePart}`;

        await setDoc(doc(db, 'us_leads', docId), {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          requirements: formData.requirements,
          message: formData.message,
          createdAt: serverTimestamp(),
          status: 'new',
          source: 'us_ecommerce_lead_form',
          region: 'US',
        });

        setStep(3); // Success state
      } catch (err) {
        console.error('Error submitting form:', err);
        // Still show success to user, log error for debugging
        setStep(3);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    // Auto-format phone number
    if (field === 'phone') {
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 10) {
        let phone = numbers;
        if (numbers.length > 3) phone = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
        if (numbers.length > 6) phone = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
        formattedValue = phone;
      } else {
        return; // Prevent typing more than 10 digits
      }
    }

    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    if (touched[field]) {
      // Clear error as user types if it becomes valid
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[field];
        return newErrs;
      });
    }
  };

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-jet-dark/80 backdrop-blur-sm transition-opacity" 
        onClick={closeForm}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <h2 className="text-lg font-bold text-jet-dark">
              {step === 3 ? 'Request Received' : 'Get Your Free Audit'}
            </h2>
            {step < 3 && <p className="text-xs text-jet-gray">Step {step} of 2</p>}
          </div>
          <button 
            onClick={closeForm}
            className="p-2 text-slate-400 hover:text-jet-dark transition-colors rounded-full hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark placeholder:text-slate-400 ${errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all`}
                  autoFocus
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">Work Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@company.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark placeholder:text-slate-400 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">Phone Number (US Mobile) <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark placeholder:text-slate-400 ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">Company Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Acme Inc."
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark placeholder:text-slate-400 ${errors.company ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all`}
                />
                {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">How can we help? <span className="text-red-500">*</span></label>
                <select 
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark ${errors.requirements ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all`}
                >
                  <option value="" disabled>Select a project type...</option>
                  <option value="New Store Build">New Store Build</option>
                  <option value="Migration">Platform Migration</option>
                  <option value="B2B Portal">B2B Portal Development</option>
                  <option value="Mobile App">Mobile App Development</option>
                  <option value="Headless">Headless Architecture</option>
                  <option value="Social Commerce">Social Commerce Setup</option>
                  <option value="Audit/Optimization">Audit & Optimization</option>
                  <option value="Support/Retainer">Ongoing Support</option>
                  <option value="Other">Other Inquiry</option>
                </select>
                {errors.requirements && <p className="text-xs text-red-500 mt-1">{errors.requirements}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-jet-dark mb-1.5">Project Details <span className="text-red-500">*</span></label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your goals, timeline, and current challenges..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border bg-white text-jet-dark placeholder:text-slate-400 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-jet-blue/20 focus:border-jet-blue'} outline-none transition-all resize-none`}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  ) : <span></span>}
                  <p className="text-xs text-slate-400">{formData.message.length}/10 min</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                 <Lock className="w-4 h-4 text-jet-blue mt-0.5 flex-shrink-0" />
                 <p className="text-xs text-jet-blue leading-relaxed">
                   Your information is secure. We'll analyze your request and prepare a preliminary strategy before our call.
                 </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="py-8 text-center animate-fade-in">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold text-jet-dark mb-2">Thank You, {formData.fullName.split(' ')[0]}!</h3>
               <p className="text-jet-gray mb-8 max-w-sm mx-auto">
                 We've received your inquiry. Our engineering team will review your requirements and contact you at <span className="font-semibold text-jet-dark">{formData.phone}</span> shortly.
               </p>
               <Button onClick={closeForm} className="w-full sm:w-auto min-w-[200px]">
                 Back to Website
               </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step < 3 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
            {step === 1 ? (
              <div className="text-xs text-slate-400">
                <span className="font-semibold text-jet-dark">Privacy:</span> We hate spam too.
              </div>
            ) : (
              <button 
                onClick={() => setStep(1)}
                className="text-sm font-medium text-jet-gray hover:text-jet-dark flex items-center gap-1 transition-colors px-2 py-1 rounded"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            )}

            <Button 
              onClick={step === 1 ? handleNext : handleSubmit}
              className={`${step === 1 ? 'w-auto' : 'w-full sm:w-auto'} min-w-[140px]`}
              variant="primary"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {step === 1 ? 'Next Step' : 'Submit Request'} 
                  {step === 1 && <ChevronRight className="w-4 h-4" />}
                </span>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};