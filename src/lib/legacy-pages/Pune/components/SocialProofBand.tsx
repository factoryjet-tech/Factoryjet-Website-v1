import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Clock } from 'lucide-react';

const SocialProofBand: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Projects Delivered',
      color: 'text-jet-blue',
    },
    {
      icon: TrendingUp,
      number: '₹150 Cr+',
      label: 'Revenue Generated for Clients',
      color: 'text-jet-green',
    },
    {
      icon: Award,
      number: '98%',
      label: 'Client Satisfaction Rate',
      color: 'text-jet-orange',
    },
    {
      icon: Clock,
      number: '7 Days',
      label: 'Average Launch Time',
      color: 'text-jet-blue',
    },
  ];

  const partnerBadges = [
    'Google Partner Certified',
    'Shopify Partner',
    'Razorpay Certified Partner',
    'WooCommerce Expert',
    'Meta Business Partner',
    'ISO 27001 Certified',
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Trusted by Growing Businesses Across Pune
          </h2>
        </motion.div>

        {/* Client Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 overflow-hidden"
        >
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-24 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-xs font-medium grayscale hover:grayscale-0 transition-all cursor-pointer"
              >
                Client {i}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partnerBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-jet-blue hover:text-jet-blue transition-all cursor-default shadow-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From <strong className="text-jet-blue">Hinjewadi IT parks</strong> to <strong className="text-jet-blue">Chakan manufacturing hubs</strong>, <strong className="text-jet-blue">Kharadi startups</strong> to <strong className="text-jet-blue">PCMC industrialists</strong> — FactoryJet has built websites for <strong className="text-jet-green">500+ Pune businesses</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBand;
