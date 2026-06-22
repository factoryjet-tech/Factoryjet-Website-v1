import React, { useState, useEffect, FormEvent } from 'react';
import { X, Gift, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Show modal if mouse leaves the top of the viewport (typical exit behavior)
      // and if it hasn't been shown in this session yet.
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await addDoc(collection(db, 'mumbai_leads'), {
        ...formData,
        source: 'Exit Intent Modal',
        timestamp: serverTimestamp(),
        page: 'Mumbai'
      });

      setIsSubmitted(true);
      setFormData({ name: '', company: '', phone: '', email: '' });
    } catch (error) {
      console.error('Error submitting exit intent form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-0 overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button - Moved to LEFT as requested */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 left-4 z-10 p-2 bg-white/20 hover:bg-white/50 rounded-full transition-colors text-white hover:text-navy"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="flex flex-col md:flex-row">
            {/* Header/Banner Section */}
            <div className="bg-primary text-white p-8 md:w-2/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
               <div className="bg-white/20 p-4 rounded-full mb-4 animate-bounce">
                  <Gift className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-2xl font-bold font-heading mb-2">Wait!</h3>
               <p className="text-sm text-blue-100">Don't leave empty handed.</p>
               <div className="mt-4 border-t border-white/30 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1">Free Gift</p>
                  <p className="text-3xl font-bold text-secondary">₹5,000</p>
                  <p className="text-xs">Website Audit</p>
               </div>
            </div>

            {/* Form Section */}
            <div className="p-8 md:w-3/5 bg-white">
               <h4 className="text-lg font-bold text-navy mb-1">Claim Your Free Website Audit</h4>
               <p className="text-xs text-slate-500 mb-6">Expert analysis of your SEO, Speed & UX.</p>

               <form onSubmit={handleSubmit} className="space-y-3">
                 <div>
                   <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     placeholder="Full Name"
                     className="w-full p-3 border border-light rounded text-sm bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                   />
                 </div>
                 <div>
                   <input
                     type="text"
                     name="company"
                     value={formData.company}
                     onChange={handleChange}
                     required
                     placeholder="Company Name"
                     className="w-full p-3 border border-light rounded text-sm bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                   />
                 </div>
                 <div>
                   <input
                     type="tel"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     required
                     placeholder="Phone Number"
                     className="w-full p-3 border border-light rounded text-sm bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                   />
                 </div>
                 <div>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     placeholder="Email Address"
                     className="w-full p-3 border border-light rounded text-sm bg-white text-navy placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                   />
                 </div>

                 {submitError && (
                   <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
                 )}

                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full bg-secondary hover:bg-orange-600 text-white font-bold py-3 rounded text-sm shadow-lg transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {isSubmitting ? 'Submitting...' : 'Get My Free Audit Now'}
                 </button>
               </form>

               <button onClick={() => setIsVisible(false)} className="w-full text-center mt-3 text-xs text-slate-400 hover:text-slate-600 underline">
                 No thanks, I don't want to grow my business
               </button>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center bg-white">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
             </div>
             <h3 className="text-2xl font-bold text-navy mb-2">Audit Requested!</h3>
             <p className="text-slate text-sm mb-6">Our experts will analyze your current digital presence and email you the comprehensive report within 24 hours.</p>
             <button
               onClick={() => setIsVisible(false)}
               className="bg-primary text-white font-bold py-2 px-6 rounded hover:bg-navy transition-colors"
             >
               Return to Website
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntentModal;
