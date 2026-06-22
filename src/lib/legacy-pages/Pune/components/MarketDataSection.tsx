import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Building2, Wifi, TrendingUp, MapPin } from 'lucide-react';

const MarketDataSection: React.FC = () => {
  const marketStats = [
    { icon: Users, number: '7.4+ million', label: 'Metro population — Maharashtra\'s second-largest city', color: 'text-jet-blue' },
    { icon: DollarSign, number: '$69 billion', label: 'GDP contribution — Major economic powerhouse', color: 'text-jet-green' },
    { icon: Building2, number: '800+', label: 'IT companies in Hinjewadi alone — Rajiv Gandhi Infotech Park', color: 'text-jet-orange' },
    { icon: Wifi, number: '85%', label: 'Internet penetration — Higher than national average', color: 'text-purple-600' },
    { icon: Users, number: '62%', label: 'Population under 30 — Young, digital-native consumers', color: 'text-indigo-600' },
    { icon: TrendingUp, number: '6th Highest', label: 'Per capita income in India — Strong purchasing power', color: 'text-teal-600' },
  ];

  const regions = [
    { name: 'Hinjewadi/Kharadi/Baner', description: 'IT hub, 95%+ businesses online, tech-savvy expectations, global quality standards', icon: '💻' },
    { name: 'PCMC/Chakan/Talegaon', description: 'Manufacturing belt, B2B focus, growing digital adoption, dealer portals needed', icon: '🏭' },
    { name: 'Pune City (FC Road, MG Road, KP)', description: 'Retail focus, D2C brands, lifestyle businesses, consumer-first design', icon: '🛍️' },
    { name: 'Hadapsar/Magarpatta', description: 'Mixed IT + residential, modern digital expectations, tech-forward audience', icon: '🏢' },
  ];

  const consumerBehavior = [
    { stat: '91%', label: 'prefer UPI payments', insight: 'Integration essential' },
    { stat: '94%', label: 'use WhatsApp for business', insight: 'Must-have feature' },
    { stat: '82%', label: 'research online before buying', insight: 'SEO critical' },
    { stat: '40%', label: 'expect same-day response', insight: 'Speed matters' },
    { stat: '72%', label: 'check Google reviews', insight: 'Reputation management needed' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            The Pune Digital Landscape
          </h2>
          <p className="text-xl text-gray-600">Understanding the Pune Market</p>
        </motion.div>

        {/* Market Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-sm text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Digital Adoption by Region */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-jet-navy text-center mb-8">
            Digital Adoption by Region
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200">
                <div className="text-4xl mb-3">{region.icon}</div>
                <h4 className="font-bold text-jet-navy mb-2">{region.name}</h4>
                <p className="text-sm text-gray-700">{region.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Consumer Behavior Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-jet-navy text-center mb-8">
            Consumer Behavior Stats
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {consumerBehavior.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center border-t-4 border-jet-blue">
                <div className="text-3xl font-bold text-jet-blue mb-2">{item.stat}</div>
                <div className="text-sm text-gray-700 mb-2">{item.label}</div>
                <div className="text-xs text-jet-orange font-semibold">{item.insight}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Pune Businesses Need Professional Websites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-jet-blue to-jet-navy text-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why Pune Businesses Need Professional Websites
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'IT-Manufacturing Duality', desc: 'Pune uniquely combines IT services (Hinjewadi) with manufacturing excellence (Chakan, PCMC) — both require digital presence' },
              { title: 'Tech-Savvy Customers', desc: 'IT professionals from Infosys, TCS, Wipro expect modern, fast experiences' },
              { title: 'Young Demographics', desc: '62% population under 30 means mobile-first, instant expectations' },
              { title: '"Oxford of the East"', desc: '100+ engineering colleges mean educated, discerning customers' },
              { title: 'Export Hub', desc: 'Excellent connectivity to Mumbai (150 km), JNPT port (110 km) makes export-ready websites essential' },
            ].map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-jet-orange rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div>
                  <div className="font-bold mb-1">{point.title}</div>
                  <div className="text-sm text-blue-100">{point.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketDataSection;
