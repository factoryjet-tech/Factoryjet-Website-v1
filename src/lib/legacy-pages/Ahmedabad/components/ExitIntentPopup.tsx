
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { trackFormSubmission } from '@/utils/gtm';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasDismissed && e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, [hasDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasDismissed(true);
    setIsSubmitting(false);
    setError(null);
  };

  const handleClaim = async () => {
    if (whatsapp.length !== 10 || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Generate readable document ID
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const docId = `${dateStr}_${timeStr}_exit_${whatsapp.slice(-4)}`;

      await setDoc(doc(db, 'ahmedabad_exit_intent', docId), {
        whatsapp: `+91${whatsapp}`,
        email,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'ahmedabad_exit_intent',
      });
      setIsSuccess(true);
      trackFormSubmission();
      setTimeout(handleClose, 3000);
    } catch (err) {
      console.error('Error submitting exit intent form:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-jet-navy/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/20"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-jet-gray hover:text-jet-navy transition-colors z-20 bg-slate-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-5 h-full">
              {/* Left Side: Visual Dazzle */}
              <div className="md:col-span-2 bg-gradient-to-br from-jet-blue via-blue-700 to-indigo-900 p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -mr-32 -mt-32" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-jet-orange rounded-full blur-3xl -ml-32 -mb-32" />
                </div>

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/30"
                  >
                    <Gift size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight font-heading">Claim Your <br/><span className="text-jet-orange underline decoration-wavy">Gift!</span></h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-jet-orange rounded-full p-1"><Sparkles size={12}/></div>
                      <p className="text-xs font-medium text-blue-100 uppercase tracking-widest">Free Audit (&#8377;5,000)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-jet-orange rounded-full p-1"><Sparkles size={12}/></div>
                      <p className="text-xs font-medium text-blue-100 uppercase tracking-widest">2026 Strategy PDF</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="md:col-span-3 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h4 className="text-2xl font-bold text-jet-navy mb-2 font-heading">Wait! Don't leave yet.</h4>
                      <p className="text-jet-slate text-sm mb-8">Get your personalized digital growth audit and a 2026 roadmap for free.</p>

                      <div className="space-y-4">
                        <div className="relative">
                          <label className="block text-[10px] font-bold text-jet-navy mb-1.5 uppercase tracking-widest">WhatsApp Number*</label>
                          <div className="flex">
                            <span className="bg-slate-100 border border-r-0 border-slate-100 px-4 flex items-center rounded-l-2xl text-jet-navy font-bold text-sm">+91</span>
                            <input
                              type="tel"
                              placeholder="10 digit number"
                              className="w-full p-4 rounded-r-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none text-jet-navy text-sm font-bold placeholder:text-jet-navy/40 transition-all"
                              value={whatsapp}
                              onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <label className="block text-[10px] font-bold text-jet-navy mb-1.5 uppercase tracking-widest">Business Email (Optional)</label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-jet-blue outline-none text-jet-navy text-sm font-bold placeholder:text-jet-navy/40 transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <button
                          onClick={handleClaim}
                          disabled={whatsapp.length < 10 || isSubmitting}
                          className={`w-full py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shimmer ${
                            whatsapp.length === 10 && !isSubmitting ? 'bg-jet-orange text-white hover:bg-orange-600 shadow-orange-500/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Claim Free Audit'} <ArrowRight size={20} />
                        </button>

                        {error && (
                          <p className="text-center text-xs text-red-600 font-semibold">
                            {error}
                          </p>
                        )}

                        <p className="text-center text-[10px] text-jet-gray font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                          <ShieldCheck size={12} className="text-jet-green"/> Secure & No Spam Promise
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 bg-jet-green/10 text-jet-green rounded-full flex items-center justify-center mx-auto mb-6">
                        <Gift size={40} />
                      </div>
                      <h4 className="text-2xl font-bold text-jet-navy mb-2">Awesome!</h4>
                      <p className="text-jet-slate">Check your WhatsApp shortly for your gift.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
