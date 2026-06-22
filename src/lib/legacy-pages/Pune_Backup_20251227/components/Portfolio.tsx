
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Sparkles, Globe, ShoppingBag, Package, Zap, Settings, ArrowRight, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'corporate', label: 'Corporate Websites' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Urbane Interiors',
      industry: 'Interior Design & Architecture',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Page 1 Google Rankings + AI Search Visibility',
      description: 'Built a stunning portfolio website showcasing their interior design projects. Implemented comprehensive search optimization including traditional SEO, Generative Engine Optimization (GEO) for AI search engines, Answer Engine Optimization (AEO) for featured snippets, and AI Optimization (AIO) for LLM citations.',
      outcomes: 'Professional brand presence, ranking on Google AND AI search platforms like Perplexity & ChatGPT',
      icon: Home,
      color: 'bg-orange-500/10 text-orange-500 border-orange-200',
    },
    {
      id: 2,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Infigon Futures',
      industry: 'Financial Services / Investment',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: '300% Increase in Organic Traffic',
      description: 'Designed and developed a professional corporate website that builds trust and communicates financial expertise. Full-stack search optimization ensures visibility across Google, Bing, Perplexity, and AI-powered search experiences.',
      outcomes: 'Dominant search presence, inbound lead generation, AI search citations',
      icon: Building2,
      color: 'bg-blue-500/10 text-blue-500 border-blue-200',
    },
    {
      id: 3,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'GACS India',
      industry: 'B2B Services / Corporate',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Featured in AI Search Results',
      description: 'Created a professional B2B website with service pages and inquiry forms. Optimized for both traditional search and next-gen AI search engines. Content structured for featured snippets and knowledge panel eligibility.',
      outcomes: 'Industry authority positioning, B2B lead generation, AI-ready content',
      icon: Sparkles,
      color: 'bg-purple-500/10 text-purple-500 border-purple-200',
    },
    {
      id: 4,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Shanti Overseas',
      industry: 'Export & International Trade',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: '#1 Ranking for Industry Keywords',
      description: 'Built a professional corporate website for this export company with product catalogs, company profile, and inquiry systems. Comprehensive SEO strategy targeting export and trade keywords. GEO and AIO optimization ensures visibility when businesses search for suppliers on AI platforms.',
      outcomes: 'International visibility, B2B lead generation, AI search dominance',
      icon: Globe,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-200',
    },
    {
      id: 5,
      category: 'ecommerce',
      badge: 'E-Commerce Store',
      client: 'YourStore Dropship',
      industry: 'E-Commerce Platform',
      services: 'E-Commerce Store Development',
      result: 'Successful Launch + Revenue Growth',
      description: 'Developed a complete dropshipping e-commerce store with automated order processing, inventory sync, and payment gateway integration. Built for scalability with Razorpay, UPI, and all Indian payment modes.',
      outcomes: 'Automated operations, seamless order management, multi-payment support',
      icon: ShoppingBag,
      color: 'bg-rose-500/10 text-rose-500 border-rose-200',
    },
    {
      id: 6,
      category: 'ecommerce',
      badge: 'E-Commerce Store',
      client: 'FabCouture',
      industry: 'Fashion & Apparel',
      services: 'E-Commerce Store Development',
      result: 'Beautiful Fashion Store Online',
      description: 'Launched a stunning fashion e-commerce store with product variants, size charts, wishlist functionality, and seamless checkout. Integrated with Razorpay for UPI, cards, and all payment modes. Mobile-first design optimized for fashion browsing.',
      outcomes: 'High-conversion fashion store, mobile shopping experience, payment flexibility',
      icon: Package,
      color: 'bg-pink-500/10 text-pink-500 border-pink-200',
    },
    {
      id: 7,
      category: 'ecommerce',
      badge: 'E-Commerce Store',
      client: 'PawsnCollars',
      industry: 'Pet Products & Accessories',
      services: 'E-Commerce Store Development',
      result: 'Niche E-Commerce Success',
      description: 'Built a specialized pet products e-commerce store with product recommendations, customer reviews, and subscription options. Full payment gateway integration and shipping automation with Shiprocket.',
      outcomes: 'Niche market capture, subscription revenue, automated fulfillment',
      icon: Zap,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-200',
    },
    {
      id: 8,
      category: 'corporate',
      badge: 'Corporate Website + Full SEO Stack',
      client: 'Mauli Controls',
      industry: 'Industrial Automation & Controls',
      services: 'Corporate Website Design, SEO, GEO, AEO, AIO Optimization',
      result: 'Industrial Authority Positioning',
      description: 'Designed a technical corporate website showcasing industrial control solutions with product catalogs, technical specifications, and inquiry systems. Comprehensive B2B SEO strategy and AI search optimization.',
      outcomes: 'Technical credibility, B2B lead generation, industry search visibility',
      icon: Settings,
      color: 'bg-cyan-500/10 text-cyan-500 border-cyan-200',
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
            Real Results from Real Pune Businesses
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            See how we've helped Pune businesses achieve digital transformation and online success.
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all"
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
                      {study.result}
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
            <span className="font-bold">8 Pune Success Stories</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold">Multiple Industries</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold text-jet-green">100% Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
