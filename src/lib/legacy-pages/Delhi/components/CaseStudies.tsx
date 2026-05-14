import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  const caseStudies = [
    {
      industry: 'Manufacturing & Industrial',
      location: 'Noida',
      title: 'Auto Parts Manufacturer — From Offline to ₹2 Cr+ Online Sales',
      client: 'Leading auto parts manufacturer in Noida Sector 63',
      challenge: 'Zero online presence, relying 100% on offline distributors. Wanted to sell directly to garages and workshops across Delhi NCR.',
      solution: 'Built a B2B e-commerce platform with product catalog (500+ SKUs), bulk ordering, distributor login, and WhatsApp order notifications. Integrated with Shiprocket for pan-India shipping.',
      results: [
        { metric: '₹2.1 Cr', label: 'Annual Online Revenue (Year 1)' },
        { metric: '850+', label: 'New B2B Customers' },
        { metric: '40%', label: 'Repeat Purchase Rate' },
        { metric: '7 Days', label: 'Project Delivery Time' },
      ],
      deliveryTime: '7 days',
      timeline: 'Launched in 7 days, ₹50L revenue in first 3 months',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      industry: 'Corporate Services',
      location: 'Gurgaon (Cyber City)',
      title: 'Consulting Firm — 300% Increase in Qualified Leads',
      client: 'Management consulting firm in Gurgaon Cyber City',
      challenge: 'Outdated website from 2018, zero SEO, no lead generation. Competitors were dominating Google for "management consulting Gurgaon".',
      solution: 'Rebuilt website with case study showcase, service pages optimized for local SEO, blog section, and lead magnet (free consultation). Ran Google Ads + SEO campaign.',
      results: [
        { metric: '300%', label: 'Increase in Qualified Leads' },
        { metric: '#1 Ranking', label: 'For 15+ Keywords (Gurgaon)' },
        { metric: '12,000+', label: 'Monthly Organic Visitors' },
        { metric: '14 Days', label: 'Website + SEO Setup' },
      ],
      deliveryTime: '14 days',
      timeline: '14-day website launch, 3 months to Page 1 rankings',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      industry: 'E-Commerce & Retail',
      location: 'Delhi (Karol Bagh)',
      title: 'Fashion Brand — ₹5 Cr D2C Revenue via Shopify',
      client: 'Women\'s ethnic wear brand based in Karol Bagh',
      challenge: 'Selling only through third-party marketplaces (Amazon, Flipkart) — losing 25-30% margins. Wanted own D2C channel.',
      solution: 'Built Shopify store with custom theme, UPI/card payments (Razorpay), WhatsApp commerce, Instagram integration, and influencer collaboration campaigns.',
      results: [
        { metric: '₹5 Cr', label: 'Annual D2C Revenue' },
        { metric: '18,000+', label: 'Direct Customers (Year 1)' },
        { metric: '45%', label: 'Repeat Customer Rate' },
        { metric: '10 Days', label: 'Store Launch Time' },
      ],
      deliveryTime: '10 days',
      timeline: 'Shopify store live in 10 days, ₹1 Cr in first quarter',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      industry: 'Real Estate',
      location: 'Greater Noida',
      title: 'Real Estate Developer — 500+ Qualified Leads in 6 Months',
      client: 'Premium residential project developer in Greater Noida',
      challenge: 'Launching new luxury project, needed high-quality leads from Delhi NCR homebuyers. Budget: ₹10L for digital marketing.',
      solution: 'Built property showcase website with virtual tours, floor plans, EMI calculator, and lead capture forms. Ran hyper-targeted Google Ads + Meta Ads (targeting Noida/Gurgaon/Delhi professionals).',
      results: [
        { metric: '500+', label: 'Qualified Leads' },
        { metric: '₹250/lead', label: 'Cost Per Lead (vs. ₹1,500 industry avg)' },
        { metric: '45', label: 'Site Visits Booked' },
        { metric: '12', label: 'Confirmed Bookings (₹6 Cr+ value)' },
      ],
      deliveryTime: '10 days',
      timeline: 'Website + Ads live in 10 days, 50+ leads in Week 1',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
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
            Real Results from Delhi NCR Businesses
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From Noida manufacturers to Gurgaon corporates to Delhi retailers — here's how we've driven growth for businesses just like yours
          </p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${study.bgColor} rounded-2xl p-8 border-2 ${study.borderColor} hover:shadow-2xl transition-all`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className={`${study.color} bg-white px-4 py-2 rounded-lg font-bold border ${study.borderColor}`}>
                  {study.industry}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-2xl">📍</span>
                  <span className="font-semibold">{study.location}</span>
                </div>
                <div className="ml-auto flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <Clock className="w-4 h-4 text-jet-green" />
                  <span className="font-semibold text-jet-navy">Delivered in {study.deliveryTime}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-jet-navy mb-4">
                {study.title}
              </h3>

              {/* Client */}
              <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                <div className="font-semibold text-gray-600 mb-1">Client Profile:</div>
                <div className="text-gray-800">{study.client}</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-bold">❌</span>
                    </div>
                    <h4 className="text-xl font-bold text-jet-navy">The Challenge</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-white rounded-lg p-4 border border-gray-200">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <h4 className="text-xl font-bold text-jet-navy">Our Solution</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-white rounded-lg p-4 border border-gray-200">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white rounded-xl p-6 border-2 border-jet-green mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-jet-green" />
                  <h4 className="text-xl font-bold text-jet-navy">Results Delivered</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-3xl font-bold ${study.color} mb-1`}>
                        {result.metric}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gradient-to-r from-jet-blue/10 to-jet-green/10 rounded-lg p-4 border border-jet-blue/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-jet-blue" />
                  <span className="font-semibold text-jet-navy">Timeline:</span>
                  <span className="text-gray-700">{study.timeline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-jet-navy to-jet-blue text-white rounded-2xl p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to See Similar Results for Your Delhi NCR Business?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            These aren't outliers — they're our standard. Let's discuss how we can replicate this success for your business.
          </p>
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jet-orange hover:bg-[#e55a2b] text-white px-10 py-5 rounded-lg font-bold text-xl shadow-xl transition-all inline-flex items-center gap-2"
          >
            Get Your Free Strategy Session
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
