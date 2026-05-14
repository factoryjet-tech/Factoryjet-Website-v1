import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Smartphone, CreditCard, Search, ArrowRight } from 'lucide-react';

interface ProblemSectionProps {
  onOpenModal: () => void;
}

const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenModal }) => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Your Website Looks Outdated (And Delhi NCR Customers Notice)',
      stat: '76% of Delhi NCR customers judge your business credibility in 3 seconds',
      description: 'First impressions matter in competitive markets like Connaught Place, Gurgaon, and Noida. An outdated website screams "unprofessional" and sends customers to your competitors.',
      cost: 'Lost Revenue: ₹5-10 lakhs annually (conservative estimate for SMBs)',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      icon: TrendingDown,
      title: 'Your Website is Painfully Slow (Killing Your Sales)',
      stat: 'Average Delhi NCR website loads in 5.1 seconds. Yours should load in under 2 seconds.',
      description: 'Every second of delay = 7% drop in conversions. In high-traffic areas like Aerocity and Cyber City, slow websites are invisible websites.',
      cost: 'Lost Conversions: If you get 1,000 visitors/month with ₹50,000 average order value, a 3-second delay costs you ₹10.5 lakhs/year',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: Smartphone,
      title: 'Your Website Isn\'t Mobile-Friendly (82% of Delhi NCR Traffic is Mobile)',
      stat: '82% of Delhi NCR users browse on mobile. Google now penalizes non-mobile sites.',
      description: 'From Chandni Chowk to Gurgaon malls, everyone is on their phones. If your site isn\'t mobile-optimized, you\'re invisible on Google and lose customers at checkout.',
      cost: 'Lost Mobile Sales: ₹8-15 lakhs annually for typical Delhi NCR SMBs',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: CreditCard,
      title: 'No UPI/WhatsApp Integration (You\'re Losing 90% of Delhi NCR Customers)',
      stat: '89% of Delhi NCR prefer UPI. 93% expect WhatsApp support.',
      description: 'Delhi NCR customers want instant checkout with Paytm, PhonePe, GPay — and instant support on WhatsApp. Without these, you\'re losing sales to competitors who offer convenience.',
      cost: 'Lost Checkout Revenue: ₹12-20 lakhs annually (67% cart abandonment without UPI/WhatsApp)',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Search,
      title: 'You\'re Invisible on Google (Your Competitors Own Page 1)',
      stat: '2.5 million+ daily searches in Delhi NCR for "website design", "web development", "digital marketing"',
      description: 'If you\'re not on Google\'s first page for your industry + location (e.g., "manufacturers in Noida", "corporate services Gurgaon"), you don\'t exist. Poor SEO = zero organic traffic.',
      cost: 'Lost Leads: ₹15-25 lakhs annually in unpaid Google Ads costs you would have saved with proper SEO',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jet-navy mb-4">
            5 Website Problems Costing Delhi NCR Businesses{' '}
            <span className="text-jet-orange">₹50 Lakhs+ Per Year</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            These are the exact problems we solve for businesses in Connaught Place, Gurgaon, Noida, Faridabad, and across the National Capital Region
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${problem.bgColor} border-l-4 ${problem.borderColor} rounded-xl p-8 hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start gap-6">
                <div className={`${problem.bgColor} p-4 rounded-xl border ${problem.borderColor}`}>
                  <problem.icon className={`w-10 h-10 ${problem.color}`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-jet-navy mb-3">
                    Problem #{index + 1}: {problem.title}
                  </h3>

                  <div className={`${problem.color} font-bold text-lg mb-4 flex items-start gap-2`}>
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{problem.stat}</span>
                  </div>

                  <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-jet-orange">
                    <div className="font-bold text-jet-navy mb-1">💰 The Real Cost to Your Delhi NCR Business:</div>
                    <div className="text-gray-800">{problem.cost}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gradient-to-br from-jet-navy to-jet-blue text-white rounded-2xl p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Total Estimated Annual Loss: ₹50-80 Lakhs
          </h3>
          <p className="text-xl mb-6 text-blue-100">
            That's what an outdated, slow, non-optimized website costs typical Delhi NCR SMBs every year in lost revenue, conversions, and organic traffic.
          </p>
          <p className="text-2xl font-bold mb-8">
            Our Solution? A Professional Website for ₹29,999 — Delivered in 7 Days
          </p>
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jet-orange hover:bg-[#e55a2b] text-white px-10 py-5 rounded-lg font-bold text-xl shadow-xl transition-all inline-flex items-center gap-2"
          >
            Stop Losing Money — Get Your Free Audit
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
