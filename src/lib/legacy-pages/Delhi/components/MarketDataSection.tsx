import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building2, ShoppingBag, Globe, Smartphone } from 'lucide-react';

const MarketDataSection: React.FC = () => {
  const marketStats = [
    {
      icon: Users,
      stat: '33 Million+',
      label: 'NCR Population',
      description: 'India\'s largest metropolitan region with massive digital potential',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Building2,
      stat: '₹12 Lakh Cr',
      label: 'NCR GDP',
      description: 'Contributing 7.5% of India\'s total GDP — a thriving business ecosystem',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: ShoppingBag,
      stat: '3.5 Million+',
      label: 'SMBs in Delhi NCR',
      description: 'From Connaught Place to Gurgaon — the heart of Indian entrepreneurship',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Globe,
      stat: '82%',
      label: 'Mobile Internet Users',
      description: 'Delhi NCR leads India in smartphone penetration and digital adoption',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Smartphone,
      stat: '2.5 Million+',
      label: 'Daily Google Searches',
      description: 'For "website design", "web development", "digital marketing" in Delhi NCR',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      icon: TrendingUp,
      stat: '45% YoY',
      label: 'E-Commerce Growth',
      description: 'Delhi NCR e-commerce market growing faster than national average',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ];

  const industryInsights = [
    {
      title: 'Manufacturing & Industrial Hubs',
      locations: ['Noida', 'Greater Noida', 'Faridabad', 'Ghaziabad'],
      insight: '500,000+ manufacturing units in Delhi NCR. Only 15% have professional websites — massive opportunity for B2B growth.',
      icon: '🏭',
    },
    {
      title: 'Corporate & IT Services',
      locations: ['Gurgaon', 'Cyber City', 'Noida Sector 62', 'Aerocity'],
      insight: 'Home to 40% of Fortune 500 India offices. Hyper-competitive market where premium website design = credibility.',
      icon: '💼',
    },
    {
      title: 'Retail & E-Commerce',
      locations: ['Karol Bagh', 'Lajpat Nagar', 'Sarojini Nagar', 'Connaught Place'],
      insight: 'Delhi NCR retail market worth ₹2.5 Lakh Cr. D2C brands bypassing marketplaces and launching own Shopify stores.',
      icon: '🛍️',
    },
    {
      title: 'Real Estate & Construction',
      locations: ['Gurgaon', 'Noida', 'Greater Noida', 'Dwarka'],
      insight: '₹50,000 Cr+ annual real estate transactions. Lead generation cost: ₹1,500/lead (we get it to ₹250/lead).',
      icon: '🏗️',
    },
  ];

  const challenges = [
    {
      challenge: 'High Customer Acquisition Costs',
      stat: '₹800-2,500/lead',
      solution: 'SEO + website optimization can reduce CAC by 70%',
    },
    {
      challenge: 'Mobile-First Expectation',
      stat: '82% mobile traffic',
      solution: 'Responsive websites are non-negotiable in Delhi NCR',
    },
    {
      challenge: 'Local Competition Intensity',
      stat: '100+ competitors/niche',
      solution: 'Professional website = instant differentiation',
    },
    {
      challenge: 'UPI Payment Preference',
      stat: '89% prefer UPI',
      solution: 'Razorpay/Paytm integration is essential for conversions',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jet-navy mb-4">
            Delhi NCR Digital Market Data (2024-25)
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Why Delhi NCR businesses need professional websites more than ever
          </p>
        </motion.div>

        {/* Market Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-xl p-8 border-2 border-gray-200 hover:shadow-xl transition-all text-center group`}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 ${stat.bgColor} border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.stat}
              </div>
              <div className="text-xl font-semibold text-jet-navy mb-3">
                {stat.label}
              </div>
              <div className="text-gray-700 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-jet-navy mb-8 text-center">
            Delhi NCR Industry Insights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {industryInsights.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-jet-blue hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-jet-navy mb-2">
                      {industry.title}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {industry.locations.map((location, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-jet-blue/10 text-jet-blue px-3 py-1 rounded-full font-semibold"
                        >
                          📍 {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {industry.insight}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-jet-navy to-jet-blue text-white rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Top Delhi NCR Business Challenges — And How We Solve Them
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-bold text-lg">{item.challenge}</div>
                  <div className="bg-jet-orange text-white px-3 py-1 rounded-lg font-bold text-sm">
                    {item.stat}
                  </div>
                </div>
                <div className="text-blue-100">
                  ✅ <strong>Solution:</strong> {item.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-jet-orange/10 to-jet-green/10 rounded-2xl p-8 border-2 border-jet-orange/20"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold text-jet-navy mb-4">
              🎯 The Bottom Line for Delhi NCR Businesses
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              With 3.5 million SMBs competing for 33 million customers in the world's fastest-growing metro region,
              a professional website isn't optional — it's survival. FactoryJet has delivered 500+ websites across
              Delhi, Gurgaon, Noida, Faridabad, and beyond. We understand Delhi NCR markets, customer behavior,
              and what it takes to win online. <strong className="text-jet-blue">Let's make your business stand out.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketDataSection;
