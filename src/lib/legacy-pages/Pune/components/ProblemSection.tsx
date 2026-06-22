import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Smartphone, Zap, Search, DollarSign } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Your Website Looks Outdated',
      description: '78% of Pune customers judge your business credibility by your website design in the first 3 seconds. In a market as competitive as Pune — with 800+ IT companies in Hinjewadi alone and thousands of manufacturing firms across PCMC, Chakan, and Talegaon — an outdated website with poor design, broken elements, or 2015-era aesthetics tells potential customers: "This business doesn\'t care about quality."',
      example: 'Your Hinjewadi competitor just launched a modern website. Your Chakan rival just got a B2B portal. Meanwhile, your website still looks like it was built before the Pune Metro was planned.',
      cost: 'You\'re losing 60-70% of visitors before they even read your content.',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      icon: Zap,
      title: 'Your Website is Painfully Slow',
      description: 'The average website load time for Pune businesses is 5.3 seconds. Every second of delay reduces conversions by 7%. If your site takes 6+ seconds to load (common with cheap hosting and unoptimized images), you\'re losing ₹12-18 Lakhs annually in missed opportunities.',
      example: 'Pune has some of India\'s most tech-savvy customers — IT professionals from Infosys, TCS, and Wipro who expect websites to load as fast as their enterprise applications.',
      cost: '₹15,000+ lost revenue for every 1-second delay, every month.',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: Smartphone,
      title: 'Your Website Doesn\'t Work on Mobile',
      description: '85% of Pune\'s internet users browse on mobile devices — higher than the national average due to the young, tech-savvy population. Yet 60% of local business websites have mobile usability issues — tiny buttons, unreadable text, horizontal scrolling. Google now uses mobile-first indexing, meaning your desktop site doesn\'t even matter for rankings.',
      example: 'From Hinjewadi techies commuting on Metro Line 3 to Kharadi entrepreneurs to PCMC factory managers — everyone\'s on mobile. Is your website ready for them?',
      cost: 'You\'re invisible to 85% of your potential customers AND Google.',
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: DollarSign,
      title: 'Your Website Doesn\'t Accept UPI or Integrate WhatsApp',
      description: '91% of Pune consumers prefer UPI payments. 94% expect WhatsApp business integration. If your website still asks customers to call during "business hours" or fill lengthy forms — you\'re losing deals to competitors who make it easy.',
      example: 'Pune customers move fast. They research on mobile, message on WhatsApp, pay via UPI — all within minutes. Your website needs to match their pace.',
      cost: 'Every missed WhatsApp inquiry = ₹5,000-50,000 in lost revenue.',
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: Search,
      title: 'You\'re Invisible on Google',
      description: 'Search "best [your service] in Pune" or "top [your product] in Hinjewadi" on Google. Are you on page 1? If not, you\'re invisible to the 1.8 million+ searches that happen daily in Pune. Your competitors with SEO-optimized websites are capturing all those customers — customers who would have come to you if only they could find you.',
      example: '',
      cost: 'Competitors are taking your customers every single day.',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
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
            Why Pune Businesses Are Losing Customers to Competitors with Better Websites
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            If you're reading this, chances are you already know something is wrong with your current website — or you don't have one at all. Here's what we see every day working with Pune businesses:
          </p>
        </motion.div>

        {/* Sub-header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-red-700">
            The 5 Silent Website Problems Costing Pune Businesses Lakhs Every Month
          </h3>
        </motion.div>

        {/* Problem Cards */}
        <div className="space-y-6 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${problem.bgColor} border-l-4 ${problem.borderColor} rounded-r-xl p-6 shadow-md hover:shadow-xl transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`${problem.iconColor} bg-white rounded-lg p-3 shadow-md`}>
                  <problem.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-jet-navy mb-3">
                    Problem {index + 1}: {problem.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  {problem.example && (
                    <p className="text-gray-600 italic mb-4 pl-4 border-l-2 border-gray-300">
                      {problem.example}
                    </p>
                  )}
                  <div className="bg-white/80 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-red-700 mb-1">The Cost:</div>
                        <div className="text-red-900 font-bold">{problem.cost}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-jet-blue to-jet-navy text-white rounded-xl p-8 md:p-12 text-center shadow-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The Bottom Line</h3>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            If your website has any of these problems, you're leaving money on the table every single day. The good news? These are exactly the problems FactoryJet solves for Pune businesses.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-jet-orange hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all"
          >
            Get Free Website Audit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
