
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Briefcase, Sparkles, Truck, ShoppingBag, Globe, Zap, Building2, ArrowRight, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'corporate', label: 'Corporate Websites' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'erp', label: 'ERP Implementation' },
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Impulse Branding Solutions',
      industry: 'Branding & Marketing Agency',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Page 1 Google Rankings + AI Search Visibility',
      description: 'Built a modern, conversion-focused corporate website for this branding agency. Implemented comprehensive search optimization including traditional SEO, Generative Engine Optimization (GEO) for AI search engines, Answer Engine Optimization (AEO) for featured snippets, and AI Optimization (AIO) for LLM citations.',
      outcomes: 'Professional brand presence, ranking on Google AND AI search platforms like Perplexity & ChatGPT',
      icon: Palette,
      color: 'bg-orange-500/10 text-orange-500 border-orange-200',
    },
    {
      id: 2,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Formative Concepts',
      industry: 'Business Consulting / Professional Services',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: '300% Increase in Organic Traffic',
      description: 'Designed and developed a professional corporate website that communicates expertise and builds trust. Full-stack search optimization ensures visibility across Google, Bing, Perplexity, and AI-powered search experiences.',
      outcomes: 'Dominant search presence, inbound lead generation, AI search citations',
      icon: Briefcase,
      color: 'bg-blue-500/10 text-blue-500 border-blue-200',
    },
    {
      id: 3,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Flying Pixel',
      industry: 'Creative / Digital Agency',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Featured in AI Search Results',
      description: 'Created a visually stunning portfolio website showcasing creative work. Optimized for both traditional search and next-gen AI search engines. Content structured for featured snippets and knowledge panel eligibility.',
      outcomes: 'Award-worthy design, AI search visibility, consistent lead flow',
      icon: Sparkles,
      color: 'bg-purple-500/10 text-purple-500 border-purple-200',
    },
    {
      id: 4,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Rukman Transport',
      industry: 'Logistics & Transportation',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: '#1 Ranking for Industry Keywords',
      description: 'Built a professional corporate website for this logistics company with service pages, fleet showcase, and inquiry forms. Comprehensive SEO strategy targeting transportation and logistics keywords. GEO and AIO optimization ensures visibility when businesses search for logistics partners on AI platforms.',
      outcomes: 'Industry authority, B2B lead generation, AI-ready content',
      icon: Truck,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-200',
    },
    {
      id: 5,
      category: 'ecommerce',
      badge: 'B2B E-Commerce + DTC Store',
      client: 'Belle Maison',
      industry: 'Home & Lifestyle Products',
      services: 'B2B E-Commerce Platform + Direct-to-Consumer Online Store',
      result: 'Dual Revenue Streams - B2B + DTC',
      description: 'Developed a comprehensive e-commerce solution with TWO storefronts: a B2B wholesale portal for business buyers with volume pricing, credit terms, and bulk ordering, PLUS a beautiful DTC consumer store for retail customers. Integrated inventory sync, payment gateways (Razorpay, UPI), and shipping automation.',
      outcomes: '2x revenue channels, automated operations, seamless B2B/DTC management',
      icon: ShoppingBag,
      color: 'bg-rose-500/10 text-rose-500 border-rose-200',
    },
    {
      id: 6,
      category: 'ecommerce',
      badge: 'International DTC E-Commerce',
      client: 'Mawa UAE',
      industry: 'Consumer Products',
      services: 'DTC Online Store for UAE Market',
      result: 'Successful UAE Market Entry',
      description: 'Launched a Direct-to-Consumer e-commerce store targeting the Dubai and UAE market. Implemented region-specific payment gateways, AED currency, UAE shipping integrations, and Arabic language support. Mobile-first design optimized for Gulf region consumers.',
      outcomes: 'International expansion, UAE payment compliance, Gulf market penetration',
      icon: Globe,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-200',
    },
    {
      id: 7,
      category: 'ecommerce',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Commerceflo',
      industry: 'E-Commerce Technology Platform',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Thought Leadership in E-Commerce Space',
      description: 'Designed a cutting-edge corporate website for this AI-powered e-commerce platform. Implemented full-stack search optimization to establish Commerceflo as an authority in the e-commerce technology space. Content optimized for AI search visibility and featured snippets.',
      outcomes: 'Industry authority positioning, SaaS lead generation, AI search dominance',
      icon: Zap,
      color: 'bg-cyan-500/10 text-cyan-500 border-cyan-200',
    },
    {
      id: 8,
      category: 'erp',
      badge: 'ERP Implementation + Digital Transformation',
      client: 'Grofresh Agrofresh Pvt. Ltd.',
      industry: 'Agriculture / Agritech',
      services: 'ERPNext Implementation, End-to-End Business Digitization, Complete Digital Transformation',
      result: '100% Business Digitization Achieved',
      description: 'Comprehensive ERP implementation covering Finance & Accounting, Inventory Management, Purchase & Sales, HR & Payroll, and Operations. Transformed traditional business processes into a fully digital, automated system. Real-time visibility across all business functions with mobile access for management.',
      outcomes: 'Month-end close reduced from 15 days to 2 days, Real-time inventory tracking across warehouses, Automated purchase orders and sales workflows, Complete financial visibility and compliance, Mobile dashboards for management decision-making',
      icon: Building2,
      color: 'bg-green-500/10 text-green-500 border-green-200',
      featured: true,
    },
  ];

  const filteredCaseStudies = activeTab === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-jet-blue/10 text-jet-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy font-heading mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            See how we've helped businesses across India and UAE achieve digital transformation.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-jet-blue text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-100 text-jet-slate hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Case Study Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all ${study.featured ? 'md:col-span-2 border-jet-green/30' : 'border-slate-100'}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${study.color.split(' ').slice(0, 2).join(' ')}`}>
                    <study.icon size={24} className={study.color.split(' ')[1]} />
                  </div>

                  <div className="flex-1">
                    {/* Badge */}
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${study.color}`}>
                      {study.badge}
                    </span>

                    {/* Client Name */}
                    <h3 className="text-xl font-bold text-jet-navy font-heading mb-1">{study.client}</h3>
                    <p className="text-sm text-jet-gray mb-3">{study.industry}</p>

                    {/* Result Metric */}
                    <div className="bg-jet-green/10 text-jet-green px-3 py-1 rounded-lg inline-block text-sm font-bold mb-4">
                      📈 {study.result}
                    </div>

                    {/* Description */}
                    <p className="text-jet-slate text-sm mb-4">{study.description}</p>

                    {/* Key Outcomes */}
                    <p className="text-xs text-jet-gray">
                      <span className="font-bold">Key Outcomes:</span> {study.outcomes}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-jet-slate">
            <span className="font-bold">8 Success Stories</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold">4 Industries</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold">2 Countries (India + UAE)</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold text-jet-green">100% Client Satisfaction</span>
          </div>
        </motion.div>

        {/* Video CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button className="inline-flex items-center gap-2 text-jet-blue font-bold hover:underline">
            <Play size={18} className="text-jet-orange" />
            Watch: How Grofresh Achieved Complete Digital Transformation
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
