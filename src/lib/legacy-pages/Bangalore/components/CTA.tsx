
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageCircle, Phone, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { trackFormSubmission } from '@/utils/gtm';

interface CTAProps {
  onOpenModal: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
  const [whatsapp, setWhatsapp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleQuickSubmit = async () => {
    if (whatsapp.length !== 10 || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
      const docId = `${dateStr}_${timeStr}_quick_${whatsapp.slice(-4)}`;

      await setDoc(doc(db, 'bangalore_leads', docId), {
        whatsapp: `+91${whatsapp}`,
        createdAt: serverTimestamp(),
        status: 'new',
        source: 'bangalore_cta_quick',
      });
      setIsSuccess(true);
      trackFormSubmission();
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustPoints = [
    'Free audit, no obligation',
    'Response within 2 hours',
    '200+ Bangalore businesses served',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-jet-blue to-[#003d99] relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-jet-orange rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white font-heading mb-6"
          >
            Ready to Grow Your Bangalore Business Online?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join 200+ Bangalore SMBs who've transformed their digital presence with FactoryJet. Get your free website audit today—no strings attached.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-jet-orange text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 hover:bg-orange-600 active:scale-95 transition-all animate-pulse-slow shimmer"
            >
              <Rocket size={22} />
              Get Your Free Website Audit
              <ArrowRight size={20} />
            </button>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Bangalore"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-jet-navy transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp Us Now
            </a>
            <a
              href="tel:+919699977699"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-jet-navy transition-all"
            >
              <Phone size={20} />
              Call: +91 96999 77699
            </a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8"
          >
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2 text-white text-sm">
                <CheckCircle size={16} className="text-jet-green" />
                {point}
              </span>
            ))}
          </motion.div>

          {/* Urgency */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-yellow-300 text-sm font-medium flex items-center justify-center gap-2 mb-8"
          >
            <Zap size={16} />
            Limited slots available this month. Book your free consultation now.
          </motion.p>

          {/* Quick Form */}
          {!isSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-2">
                <div className="flex-1 flex">
                  <span className="bg-white/20 border border-white/30 px-3 flex items-center rounded-l-xl text-white font-bold text-sm">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full p-3 rounded-r-xl bg-white text-jet-navy font-medium placeholder:text-slate-400 focus:ring-2 focus:ring-jet-orange outline-none"
                  />
                </div>
                <button
                  onClick={handleQuickSubmit}
                  disabled={whatsapp.length !== 10 || isSubmitting}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    whatsapp.length === 10 && !isSubmitting
                      ? 'bg-jet-orange text-white hover:bg-orange-600'
                      : 'bg-white/20 text-white/50 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? '...' : 'Get Audit'}
                </button>
              </div>
              <p className="text-white/70 text-xs mt-2">We'll WhatsApp you within 2 hours</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-jet-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-jet-green" size={32} />
              </div>
              <p className="text-white font-bold">Thank you! We'll WhatsApp you soon.</p>
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        .shimmer {
          background: linear-gradient(90deg, #FF6B35 0%, #FF8A5B 50%, #FF6B35 100%);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default CTA;
