
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, IndianRupee, CreditCard, Shield, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  const differentiators = [
    {
      icon: MapPin,
      title: 'Bangalore-Based Team',
      description: 'Meet us in Bangalore. WhatsApp anytime. Real humans, not bots.',
      badge: 'Visit our office',
      badgeColor: 'bg-jet-blue/10 text-jet-blue',
      iconColor: 'text-jet-blue',
      large: true,
    },
    {
      icon: Clock,
      title: '4-Week Delivery Guarantee',
      description: 'Most Delhi agencies take 3-6 months. We deliver in 4 weeks flat.',
      badge: 'Or your money back',
      badgeColor: 'bg-jet-orange/10 text-jet-orange',
      iconColor: 'text-jet-orange',
    },
    {
      icon: IndianRupee,
      title: 'Transparent ₹ Pricing',
      description: 'No surprise invoices. Know exactly what you pay upfront.',
      badge: 'Starting ₹29,999',
      badgeColor: 'bg-jet-green/10 text-jet-green',
      iconColor: 'text-jet-green',
    },
    {
      icon: CreditCard,
      title: 'All India Payments Built-in',
      description: 'UPI, GPay, PhonePe, Razorpay, Cards—all integrated free.',
      badge: 'Razorpay Partner',
      badgeColor: 'bg-jet-blue/10 text-jet-blue',
      iconColor: 'text-jet-blue',
    },
    {
      icon: Shield,
      title: 'Ongoing Support & AMC',
      description: "We don't disappear after launch. Support from ₹2,999/month.",
      badge: 'WhatsApp support',
      badgeColor: 'bg-jet-orange/10 text-jet-orange',
      iconColor: 'text-jet-orange',
    },
    {
      icon: Award,
      title: 'Google Partner Certified',
      description: 'Our team is Google certified. Your SEO is in expert hands.',
      badge: 'Google Partner',
      badgeColor: 'bg-jet-green/10 text-jet-green',
      iconColor: 'text-jet-green',
    },
  ];

  const partners = ['Google Partner', 'Shopify Expert', 'Razorpay Partner', 'Zoho Partner'];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            Why 200+ Bangalore Businesses Choose FactoryJet
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            We're not another faceless agency. We're your local growth partners.
          </p>
        </motion.div>

        {/* Differentiators Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-jet-blue/20 transition-all ${item.large ? 'lg:col-span-1' : ''}`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${item.iconColor}`}
              >
                <item.icon size={24} />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-bold text-jet-navy font-heading mb-2">{item.title}</h3>
              <p className="text-jet-slate text-sm mb-4">{item.description}</p>

              {/* Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                {item.badge}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-5 py-3 rounded-xl text-sm font-bold text-jet-gray border border-slate-200 hover:border-jet-blue/30 transition-all shadow-sm hover:shadow-md grayscale hover:grayscale-0 cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
