import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Phone, MessageCircle, Mail, MapPin, Clock, Award } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919699977699?text=Hi! I need help with website design for my Delhi NCR business.', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919699977699';
  };

  const reasons = [
    '7-day average delivery (50% faster than Delhi NCR industry average)',
    '500+ successful projects across Gurgaon, Noida, Delhi, Faridabad',
    'Transparent pricing — no hidden costs, ever',
    'Delhi NCR-based support team (9 AM - 7 PM, Mon-Sat)',
    'Google Partner, Shopify Partner, Meta Business Partner',
    '30-day free post-launch support included',
  ];

  const leadMagnet = {
    title: '🎁 Free Website Audit Worth ₹5,000',
    features: [
      'Comprehensive SEO analysis',
      'Mobile responsiveness check',
      'Speed & performance report',
      'Competitor comparison',
      'Actionable recommendations',
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-br from-jet-navy via-jet-blue to-jet-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-jet-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-jet-green/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Launch Your Delhi NCR Business Online?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Join 500+ successful businesses in Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad who chose FactoryJet for their digital transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Left: Lead Magnet */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-jet-orange rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{leadMagnet.title}</h3>
            </div>

            <div className="space-y-3 mb-8">
              {leadMagnet.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-jet-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-jet-orange hover:bg-[#e55a2b] text-white py-5 rounded-lg font-bold text-xl shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              Claim Your Free Audit Now
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            <p className="text-sm text-center mt-4 text-blue-200">
              100% Free • No Credit Card Required • Delivered in 48 Hours
            </p>
          </motion.div>

          {/* Right: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-jet-blue rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Why Delhi NCR Businesses Choose Us</h3>
            </div>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-jet-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-semibold mb-6">
            Prefer to talk? Our Delhi NCR team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-5 rounded-lg font-bold text-xl shadow-2xl transition-all inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp: +91 96999 77699
            </motion.button>

            <motion.button
              onClick={handleCallClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-jet-navy px-10 py-5 rounded-lg font-bold text-xl shadow-2xl transition-all inline-flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              <Phone className="w-6 h-6" />
              Call: +91 96999 77699
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Mail className="w-8 h-8 text-jet-orange mx-auto mb-3" />
            <div className="font-semibold mb-1">Email Us</div>
            <a href="mailto:connect@factoryjet.com" className="text-blue-200 hover:text-white transition-colors">
              connect@factoryjet.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <MapPin className="w-8 h-8 text-jet-green mx-auto mb-3" />
            <div className="font-semibold mb-1">Service Areas</div>
            <div className="text-blue-200 text-sm">
              Delhi, Gurgaon, Noida, Greater Noida, Faridabad, Ghaziabad & All NCR
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-jet-blue mx-auto mb-3" />
            <div className="font-semibold mb-1">Support Hours</div>
            <div className="text-blue-200 text-sm">
              Mon-Sat: 9 AM - 7 PM IST<br />
              WhatsApp: 24/7
            </div>
          </div>
        </motion.div>

        {/* Final Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-jet-orange/20 border-2 border-jet-orange rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl font-bold mb-4">
              ⚡ Limited Slots Available for January 2026
            </p>
            <p className="text-lg text-blue-100">
              We only take 10 new projects per month to ensure quality. 7 slots already filled for January.
              <strong className="text-white"> Book your slot now to secure our 7-day delivery guarantee.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
