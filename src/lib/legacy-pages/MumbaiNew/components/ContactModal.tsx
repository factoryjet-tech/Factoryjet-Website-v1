import React, { useState, useEffect, FormEvent } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, ArrowRight, Star } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Website Design',
    details: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Using direct db import
      const firestore = db;

      await addDoc(collection(db, 'mumbai_leads'), {
        ...formData,
        source: 'Contact Modal',
        timestamp: serverTimestamp(),
        page: 'Mumbai'
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: 'Website Design',
        details: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 bg-light/50 hover:bg-light rounded-full transition-colors text-slate hover:text-navy"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visuals & Trust (Hidden on Mobile) */}
        <div className="hidden md:flex md:w-2/5 bg-navy text-white p-10 flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy opacity-90"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-heading mb-2">Partner with Mumbai's Best</h3>
            <p className="text-blue-100 text-sm mb-6">Get a custom proposal tailored for manufacturers within 24 hours.</p>

            <div className="space-y-4">
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="bg-accent/20 p-2 rounded-full"><CheckCircle className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="font-bold text-sm">Export-Ready Design</div>
                    <div className="text-xs text-blue-200">Optimized for global buyers</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="bg-accent/20 p-2 rounded-full"><Star className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="font-bold text-sm">500+ Success Stories</div>
                    <div className="text-xs text-blue-200">Thane, MIDC, Navi Mumbai</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="bg-accent/20 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-accent" /></div>
                  <div>
                    <div className="font-bold text-sm">100% Secure</div>
                    <div className="text-xs text-blue-200">NDAs & Data Protection</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative z-10 text-xs text-blue-300 opacity-80">
            Trusted by manufacturing leaders in Engineering, Pharma, Textile, and FMCG sectors.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-3/5 p-6 md:p-10 bg-white relative">
          {!isSubmitted ? (
            <>
              <div className="mb-6 mt-2 sm:mt-0">
                <h2 className="text-2xl font-bold text-navy mb-1">Get Your Free Quote</h2>
                <p className="text-slate text-sm">Fill out the form below. We usually reply in under 2 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                      placeholder="ABC Industries"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                    >
                      <option>Website Design</option>
                      <option>B2B E-Commerce</option>
                      <option>Website Redesign</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Project Details (Optional)</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-light bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all h-20 resize-none text-base"
                    placeholder="Briefly describe your requirements..."
                  ></textarea>
                </div>

                {submitError && (
                  <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Quote'} {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-light flex items-center justify-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1"><Lock className="w-3 h-3" /> SSL Encrypted</div>
                <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Data Privacy</div>
                <div className="flex items-center gap-1">No Spam Guarantee</div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
                 <CheckCircle className="w-10 h-10 text-green-600" />
               </div>
               <h2 className="text-2xl font-bold text-navy mb-2">Application Received!</h2>
               <p className="text-slate mb-8 max-w-sm">Thank you for contacting FactoryJet. Our industrial web experts will review your requirements and call you within 2 hours.</p>
               <button
                 onClick={() => { setIsSubmitted(false); onClose(); }}
                 className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-navy transition-colors"
               >
                 Return to Website
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
