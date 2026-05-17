import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { trackModalOpen, trackModalClose, trackFormSubmit, trackFormSuccess, trackFormError, trackFormSubmission } from '../utils/gtm';

interface PlanSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  planPrice: string;
  city: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
}

const PlanSelectionModal: React.FC<PlanSelectionModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  planPrice,
  city,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      trackModalOpen('plan_selection', `${city}_${selectedPlan}`);
    }
  }, [isOpen, city, selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    trackFormSubmit('plan_selection_form', {
      plan: selectedPlan,
      price: planPrice,
      city: city,
    });

    try {
      const { doc, setDoc, serverTimestamp } = await import('firebase/firestore');
      const { initFirebase } = await import('../firebase');
      const { db } = await initFirebase();

      if (!db) {
        throw new Error('Firebase not initialized');
      }

      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const namePart = formData.name.replace(/\s+/g, '').slice(0, 15);
      const docId = `${city}_${dateStr}_${timeStr}_${namePart}`;

      await setDoc(doc(db, 'location_leads', docId), {
        ...formData,
        selectedPlan,
        planPrice,
        city,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'plan_selection_modal',
      });

      trackFormSuccess('plan_selection_form');
      trackFormSubmission();
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      const errorMessage = 'Something went wrong. Please try again.';
      trackFormError('plan_selection_form', errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    trackModalClose('plan_selection');
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setError(null);
      setFormData({ name: '', phone: '', email: '', company: '' });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#F05A28] to-[#d44d1f] px-6 py-5 text-white">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold">Get Started with {selectedPlan}</h3>
              <p className="text-white/75 text-sm mt-1">
                Starting at {planPrice} | {city}
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Request Submitted!
                  </h4>
                  <p className="text-slate-600 mb-6">
                    Our team will contact you within 2 hours with a custom proposal for the {selectedPlan} plan.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-[#F05A28] text-white rounded-lg font-medium hover:bg-[#d44d1f] transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-[#0F0F12]">
                      <strong>Selected Plan:</strong> {selectedPlan} - {planPrice}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F05A28]/30 focus:border-[#F05A28] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F05A28]/30 focus:border-[#F05A28] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F05A28]/30 focus:border-[#F05A28] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#F05A28]/30 focus:border-[#F05A28] outline-none transition-all"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-jet-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get Custom Proposal
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    100% Secure. No spam. Response within 2 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanSelectionModal;
