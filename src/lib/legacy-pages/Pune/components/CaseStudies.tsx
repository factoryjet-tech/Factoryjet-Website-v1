import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle2, Clock, Target } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      client: 'TechVision Solutions',
      location: 'Hinjewadi Phase 2',
      industry: 'IT Services & Software Development',
      challenge: 'IT services company relying only on referrals, needed consistent B2B lead pipeline for US and European clients',
      solution: [
        'Professional corporate website with service pages and case studies',
        'Lead capture with HubSpot CRM integration',
        'SEO optimization for IT services keywords',
        'Multi-timezone contact forms (US, UK, India hours)',
        'LinkedIn integration for B2B outreach',
      ],
      results: [
        { metric: '220%', label: 'increase in qualified B2B leads in 6 months' },
        { metric: '4 deals', label: 'enterprise deals closed worth $850K' },
        { metric: 'Page 1', label: 'rankings for 35+ IT services keywords' },
        { metric: '45%', label: 'of leads from organic search' },
      ],
      timeline: '4 weeks website + 4 months SEO',
      color: 'blue',
    },
    {
      client: 'Precision Auto Components',
      location: 'Chakan MIDC',
      industry: 'Automobile Parts Manufacturing',
      challenge: 'Outdated website, no dealer portal, manual order process with 150+ dealers',
      solution: [
        'Modern corporate website redesign',
        'B2B dealer portal with login and tiered pricing',
        'Product catalog with specifications and CAD downloads',
        'Quote request and order management system',
        'Integration with Tally ERP',
      ],
      results: [
        { metric: '65%', label: 'reduction in order processing time' },
        { metric: '150+', label: 'dealers onboarded to portal in 2 months' },
        { metric: '45%', label: 'increase in repeat orders' },
        { metric: 'Zero', label: 'order errors (vs 5% error rate manually)' },
      ],
      timeline: '8 weeks (including portal development)',
      color: 'orange',
    },
    {
      client: 'PuneStyle Fashion',
      location: 'Koregaon Park',
      industry: 'Fashion Retail (D2C)',
      challenge: 'Traditional retail store wanted to expand online, compete with national D2C brands',
      solution: [
        'Built Shopify e-commerce store with 600+ products',
        'Integrated Razorpay + UPI + COD payment options',
        'Connected with Shiprocket for pan-India shipping',
        'WhatsApp catalog integration',
        'Instagram Shopping and Facebook Shop setup',
      ],
      results: [
        { metric: '₹4.5 Cr', label: 'online revenue in Year 1' },
        { metric: '55%', label: 'of customers from outside Maharashtra' },
        { metric: '32%', label: 'repeat customer rate' },
        { metric: '180%', label: 'ROI on website investment' },
      ],
      timeline: '6 weeks from kickoff to launch',
      color: 'purple',
    },
    {
      client: 'PuneHealth Diagnostics',
      location: 'Multiple Locations',
      industry: 'Healthcare Diagnostics',
      challenge: '6 diagnostic centers across Pune with no unified online presence, 80% phone bookings',
      solution: [
        'Multi-location WordPress website with location finder',
        'Online appointment booking system',
        'Test package catalog with pricing',
        'Report download portal with secure login',
        'WhatsApp booking integration',
        'Google Maps integration for each location',
      ],
      results: [
        { metric: '75%', label: 'of appointments now booked online' },
        { metric: '50%', label: 'reduction in call center volume' },
        { metric: '180%', label: 'increase in website traffic' },
        { metric: '6 locations', label: 'unified under one brand' },
      ],
      timeline: '6 weeks',
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-700' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700' },
      green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600">Real Results for Pune Businesses</p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Header */}
              <div className={`${getColorClasses(study.color).bg} p-6 border-b-4 ${getColorClasses(study.color).border}`}>
                <h3 className="text-2xl font-bold text-jet-navy mb-2">{study.client}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
                  <span className="font-semibold">{study.location}</span>
                  <span>•</span>
                  <span>{study.industry}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Challenge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold text-jet-navy">Challenge</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-jet-blue" />
                    <h4 className="font-bold text-jet-navy">Solution</h4>
                  </div>
                  <ul className="space-y-2">
                    {study.solution.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-jet-blue flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-jet-green" />
                    <h4 className="font-bold text-jet-navy">Results</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="text-2xl font-bold text-jet-green mb-1">{result.metric}</div>
                        <div className="text-xs text-gray-700">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm font-semibold text-gray-600">Timeline</div>
                    <div className="text-sm text-jet-navy font-medium">{study.timeline}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
