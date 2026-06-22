import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, MapPin, Phone, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';
import AuthorByline from '@/components/AuthorByline';

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919699977699', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919699977699';
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 pb-16">
      {/* Ambient Glow Effects */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-jet-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-jet-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <a href="/" className="hover:text-jet-blue transition-colors">Home</a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <a href="/services" className="hover:text-jet-blue transition-colors">Services</a>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-jet-blue font-medium">Website Design Company in Pune</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-jet-navy leading-tight mb-6">
              Website Design Company in Pune —{' '}
              <span className="text-jet-blue">Professional Web Development</span>{' '}
              Starting{' '}
              <span className="text-jet-green">₹29,999</span>
            </h1>
            <AuthorByline />

            {/* Authority Paragraph */}
            <div className="text-lg text-gray-700 mb-8 space-y-4 leading-relaxed">
              <p>
                FactoryJet is a leading <strong className="text-jet-navy">website design company in Pune</strong> with 25+ years of combined expertise in <strong>web design</strong>, <strong>e-commerce development</strong>, and <strong>digital transformation</strong> for small and medium businesses. We serve Pune, Hinjewadi, Kharadi, Magarpatta, Baner, Viman Nagar, Aundh, PCMC (Pimpri-Chinchwad), Chakan, Talegaon, and Ranjangaon with <strong>custom website development</strong>, <strong>Shopify development</strong>, <strong>WooCommerce development</strong>, and <strong>WordPress development</strong> — all delivered in 4-7 days, not months.
              </p>
              <p>
                As the <strong className="text-jet-blue">best web design company in Pune</strong>, we've helped 500+ businesses across Maharashtra's IT capital and manufacturing powerhouse launch professional, mobile-optimized, SEO-ready websites that convert visitors into customers. Whether you're an IT company in Hinjewadi, a manufacturer in Chakan, a startup in Kharadi, or an exporter in PCMC — we deliver results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {/* Primary CTA */}
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-jet-orange text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#e55a2b] transition-all flex items-center justify-center gap-2 group"
              >
                Get Your Free Website Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA - WhatsApp */}
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#20BA5A] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </motion.button>

              {/* Tertiary CTA - Call */}
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-jet-blue text-jet-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-jet-blue hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">4.9/5 Rating</div>
                  <div className="text-sm text-gray-600">150+ Google Reviews</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">500+ Projects</div>
                  <div className="text-sm text-gray-600">Delivered Across India</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">25+ Years</div>
                  <div className="text-sm text-gray-600">Combined Expertise</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">7-Day Launch</div>
                  <div className="text-sm text-gray-600">Guarantee</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-jet-blue flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">Pune-Based</div>
                  <div className="text-sm text-gray-600">Support Team</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-jet-navy">All Pune Districts</div>
                  <div className="text-sm text-gray-600">& PCMC Coverage</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Placeholder for hero image - replace with actual mockup */}
              <div className="bg-gradient-to-br from-jet-blue to-jet-navy rounded-2xl shadow-2xl p-8 aspect-[4/3]">
                <div className="bg-white rounded-lg h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-gray-400 font-semibold text-lg">
                        Professional Website<br />Mockup Preview
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto" />
                      <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-jet-orange text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg"
              >
                Starting ₹29,999
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-white px-6 py-3 rounded-full shadow-xl font-semibold text-jet-navy flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-jet-green" />
                4-Week Delivery
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
