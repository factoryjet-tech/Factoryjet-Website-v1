import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Download, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919699977699', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919699977699';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-jet-blue via-jet-navy to-purple-900 text-white relative overflow-hidden">
      {/* Ambient Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jet-orange/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Get a Website That Generates Results — Not Just Looks Good
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Join 500+ Pune businesses that trust FactoryJet for their web design needs. From Hinjewadi IT parks to Chakan manufacturing hubs, Kharadi startups to PCMC industrialists — we've helped businesses like yours succeed online.
          </p>

          {/* Urgency */}
          <div className="inline-flex items-center gap-2 bg-jet-orange px-6 py-3 rounded-full font-semibold mb-8">
            <Zap className="w-5 h-5" />
            Limited Availability: We take only 8-10 new projects per month
          </div>
        </motion.div>

        {/* 3 CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
          >
            <h3 className="text-xl font-bold mb-3">Option 1: Free Website Audit</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Get a comprehensive audit of your current website (or competitor's) with specific recommendations for improvement.
            </p>
            <div className="text-2xl font-bold text-jet-green mb-4">₹0</div>
            <button
              onClick={onOpenModal}
              className="w-full bg-jet-orange hover:bg-[#e55a2b] text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Get Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
          >
            <h3 className="text-xl font-bold mb-3">Option 2: Schedule Consultation</h3>
            <p className="text-blue-100 mb-4 text-sm">
              30-minute call with our web design expert to discuss your requirements and get a custom quote.
            </p>
            <div className="text-2xl font-bold text-jet-green mb-4">₹0</div>
            <button
              onClick={onOpenModal}
              className="w-full bg-white hover:bg-gray-100 text-jet-navy py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Schedule Call
              <Phone className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
          >
            <h3 className="text-xl font-bold mb-3">Option 3: WhatsApp Us Directly</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Quick questions? Send us a message and we'll respond within 1 hour during business hours.
            </p>
            <div className="text-2xl font-bold text-jet-green mb-4">Instant</div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              WhatsApp Now
              <MessageCircle className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Lead Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-jet-orange to-orange-600 rounded-xl p-8 text-center shadow-2xl"
        >
          <Download className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            Free Download: 27-Point Website Checklist for Pune Businesses
          </h3>
          <p className="mb-6 text-orange-100">
            Is your website optimized for Pune customers? Download our comprehensive checklist covering design, speed, mobile, SEO, UPI integration, and more.
          </p>
          <button
            onClick={onOpenModal}
            className="bg-white hover:bg-gray-100 text-jet-orange px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center gap-2"
          >
            Download Free Checklist
            <Download className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">FactoryJet Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+919699977699" className="hover:text-white transition-colors">
                +91 96999 77699
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: +91 96999 77699</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-blue-200">
            <div>Monday - Friday: 9:00 AM - 7:00 PM IST</div>
            <div>Saturday: 10:00 AM - 4:00 PM IST</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
