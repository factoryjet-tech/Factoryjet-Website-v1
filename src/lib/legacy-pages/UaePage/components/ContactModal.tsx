'use client';

import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { trackFormSubmission } from '@/utils/gtm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  if (!isOpen) return null;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
      const docId = `uae_modal_${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'uae_leads', docId), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'uae_contact_modal',
        region: 'UAE',
      });

      setIsSuccess(true);
      trackFormSubmission();

      // Auto-close after 5 seconds
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-success-title">
        <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
        <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl p-8 flex flex-col items-center text-center animate-modal-in">
          <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} className="text-[#10B981]" strokeWidth={3} />
          </div>
          <h3 id="modal-success-title" className="text-2xl font-bold text-[#0F172A] mb-2">Request Received!</h3>
          <p className="text-[#64748B] mb-8">
            Thank you! We'll contact you within 2 business hours. <br /> Check your email for confirmation.
          </p>
          <button
            onClick={onClose}
            className="bg-[#0F172A] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1e293b] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-[540px] shadow-2xl overflow-hidden animate-modal-in max-h-[95vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-[#0F172A] transition-colors"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="p-8 sm:p-10 overflow-y-auto custom-scrollbar">
          <div className="text-center mb-8">
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">Let's Start Your Project</h3>
            <p className="text-[#64748B]">Fill in the details below to get your custom quote.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-[#334155] mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={e => updateField('name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition-all text-[#0F172A] placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#334155] mb-1.5">Email Address *</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={formData.email}
                onChange={e => updateField('email', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition-all text-[#0F172A] placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#334155] mb-1.5">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+971 XX XXX XXXX"
                value={formData.phone}
                onChange={e => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition-all text-[#0F172A] placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#334155] mb-1.5">Service Interested In *</label>
              <select
                required
                value={formData.service}
                onChange={e => updateField('service', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition-all text-[#0F172A]"
              >
                <option value="" disabled>Select Service...</option>
                <option value="Website Design">Website Design & Dev</option>
                <option value="Ecommerce">E-Commerce Store</option>
                <option value="Marketing">Digital Marketing</option>
                <option value="Enterprise">Enterprise AI Solutions</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-[#334155] mb-1.5">Message *</label>
              <textarea
                required
                rows={3}
                placeholder="Tell us briefly about your needs..."
                value={formData.message}
                onChange={e => updateField('message', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-[#E2E8F0] focus:bg-white focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-[#0052CC]/10 transition-all resize-none text-[#0F172A] placeholder:text-gray-400"
              ></textarea>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3.5 rounded-lg font-bold text-[#64748B] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#FF6B35] hover:bg-[#e55a28] text-white py-3.5 rounded-lg font-bold text-lg shadow-[0_4px_14px_rgba(255,107,53,0.4)] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Submit Request <ArrowRight size={20} /></>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-[#64748B] mt-4 flex items-center justify-center gap-3">
              <span>✓ Response within 2 hours</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>✓ 100% Confidential</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>✓ No Obligation</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
