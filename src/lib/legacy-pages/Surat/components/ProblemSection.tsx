
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, AlertTriangle, Banknote } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Smartphone,
      title: 'Your Competitors Are Stealing Your Customers',
      description: 'Every day without a proper website, Surat businesses like yours lose customers to competitors with modern, mobile-friendly stores. 60%+ of your customers search on mobile first.',
      span: 'lg:col-span-2',
      color: 'text-red-500',
    },
    {
      icon: AlertTriangle,
      title: "DIY Websites Don't Work in India",
      description: "That Wix site you built? It's slow on Indian networks, doesn't support UPI/Razorpay, has zero local SEO, and isn't optimized for Gujarat customers.",
      span: '',
      color: 'text-yellow-500',
    },
    {
      icon: Banknote,
      title: 'Big Agencies Overcharge Surat SMBs',
      description: "Mumbai agencies charge ₹5+ lakhs for basic websites. Then take 3-6 months to deliver. You need results now, not next year.",
      span: '',
      color: 'text-orange-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-jet-navy font-heading max-w-4xl mx-auto">
            Is Your Website Costing You Sales? Surat Businesses Lose ₹50,000+ Monthly to Poor Websites.
          </h2>
        </motion.div>

        {/* Problem Cards - Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all ${problem.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 ${problem.color}`}
              >
                <problem.icon size={24} />
              </motion.div>
              <h3 className="text-xl font-bold text-jet-navy mb-3 font-heading">{problem.title}</h3>
              <p className="text-jet-slate leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Agitation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-jet-slate italic max-w-3xl mx-auto">
            Every day you wait, your competitors capture more customers. Your outdated website frustrates mobile users. Your marketing spend goes to waste.
          </p>
        </motion.div>

        {/* Solution Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-jet-navy max-w-3xl mx-auto">
            There's a better way. <span className="font-bold">FactoryJet</span> delivers world-class websites for Surat businesses—in <span className="font-bold text-jet-blue">4 weeks</span>, at prices that make sense.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
