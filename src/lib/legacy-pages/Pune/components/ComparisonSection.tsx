import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, XCircle, Award } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    { feature: 'Delivery Time', factoryjet: '4 weeks', agencies: '12-24 weeks', freelancers: '8-16 weeks', diy: '2-4 weeks' },
    { feature: 'Price Range', factoryjet: '₹29,999-₹1,49,999', agencies: '₹75,000-₹5,00,000', freelancers: '₹20,000-₹80,000', diy: '₹5,000-₹15,000/year' },
    { feature: 'Custom Design', factoryjet: 'full', agencies: 'full', freelancers: 'partial', diy: 'none' },
    { feature: 'Mobile Optimization', factoryjet: 'full', agencies: 'partial', freelancers: 'partial', diy: 'partial' },
    { feature: 'SEO Setup', factoryjet: 'full', agencies: 'partial', freelancers: 'none', diy: 'partial' },
    { feature: 'Payment Integration', factoryjet: 'full', agencies: 'full', freelancers: 'partial', diy: 'partial' },
    { feature: 'WhatsApp Integration', factoryjet: 'full', agencies: 'partial', freelancers: 'partial', diy: 'none' },
    { feature: 'Post-Launch Support', factoryjet: 'full', agencies: 'partial', freelancers: 'none', diy: 'none' },
    { feature: 'Scalability', factoryjet: 'full', agencies: 'full', freelancers: 'partial', diy: 'none' },
    { feature: 'Ownership', factoryjet: 'full', agencies: 'partial', freelancers: 'full', diy: 'none' },
  ];

  const reasons = [
    {
      number: 1,
      title: 'Pune Market Expertise',
      description: 'We understand the Pune market — from tech-savvy Hinjewadi IT companies to traditional PCMC manufacturers. Our designs reflect local business culture while maintaining global standards. We understand the IT-Manufacturing duality that defines Pune\'s economy.',
    },
    {
      number: 2,
      title: '7-Day Launch Guarantee',
      description: 'When we say 4 weeks, we mean it. Our AI-enhanced design process and experienced team ensure on-time delivery. Delays are rare — but if they happen, we compensate.',
    },
    {
      number: 3,
      title: 'Transparent Pricing',
      description: 'No hidden costs. No surprise bills. What we quote is what you pay. Compare this to agencies that add "extra charges" after project start.',
    },
    {
      number: 4,
      title: 'Full-Stack Capability',
      description: 'We don\'t just design websites. We build e-commerce stores, integrate CRMs, set up ERPs, and run digital marketing. One partner for all your digital needs.',
    },
    {
      number: 5,
      title: 'AI-Enhanced Design',
      description: 'We use AI tools to speed up design iterations, generate content variations, and optimize user experience — giving you better results faster.',
    },
    {
      number: 6,
      title: 'Pune-Based Support Team',
      description: 'Not an overseas team. Real people in Pune who understand your time zone, your business culture, and your customers. Fluent in Marathi, Hindi, and English.',
    },
    {
      number: 7,
      title: 'SEO Built-In',
      description: 'Every website we build is optimized for Google from day one. No extra charges for basic SEO — it\'s included.',
    },
    {
      number: 8,
      title: 'Future-Proof Technology',
      description: 'We build on platforms that scale. Whether you grow from 10 to 1,000 products, or 100 to 10,000 visitors — your website can handle it.',
    },
  ];

  const getIcon = (value: string) => {
    if (value === 'full') return <CheckCircle2 className="w-5 h-5 text-jet-green" />;
    if (value === 'partial') return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    if (value === 'none') return <XCircle className="w-5 h-5 text-red-500" />;
    return null;
  };

  const getValueDisplay = (value: string) => {
    if (value === 'full') return { icon: getIcon(value), text: '✅ Yes', color: 'text-jet-green' };
    if (value === 'partial') return { icon: getIcon(value), text: '⚠️ Varies', color: 'text-yellow-600' };
    if (value === 'none') return { icon: getIcon(value), text: '❌ No', color: 'text-red-500' };
    return { icon: null, text: value, color: 'text-gray-700' };
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">Why Choose FactoryJet</h2>
          <p className="text-xl text-gray-600">FactoryJet vs. Other Options</p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-jet-blue to-jet-navy text-white">
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-center font-bold bg-jet-orange">FactoryJet</th>
                  <th className="p-4 text-center font-bold">Other Pune Agencies</th>
                  <th className="p-4 text-center font-bold">Freelancers</th>
                  <th className="p-4 text-center font-bold">DIY (Wix/Squarespace)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-jet-navy border-b border-gray-200">{row.feature}</td>
                    <td className="p-4 text-center bg-blue-50 border-b border-gray-200">
                      <div className="flex items-center justify-center gap-2 font-semibold">
                        {getValueDisplay(row.factoryjet).icon}
                        <span className={getValueDisplay(row.factoryjet).color}>
                          {getValueDisplay(row.factoryjet).text}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        {getValueDisplay(row.agencies).icon}
                        <span className={getValueDisplay(row.agencies).color}>
                          {getValueDisplay(row.agencies).text}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        {getValueDisplay(row.freelancers).icon}
                        <span className={getValueDisplay(row.freelancers).color}>
                          {getValueDisplay(row.freelancers).text}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-b border-gray-200">
                      <div className="flex items-center justify-center gap-2">
                        {getValueDisplay(row.diy).icon}
                        <span className={getValueDisplay(row.diy).color}>
                          {getValueDisplay(row.diy).text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 8 Reasons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-jet-navy text-center mb-12">
            8 Reasons to Choose FactoryJet for Website Design in Pune
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-jet-blue text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {reason.number}
                </div>
                <Award className="w-6 h-6 text-jet-orange" />
              </div>
              <h4 className="text-lg font-bold text-jet-navy mb-3">{reason.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
