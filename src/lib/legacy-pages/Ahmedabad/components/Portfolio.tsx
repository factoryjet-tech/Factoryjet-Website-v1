
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Briefcase, Sparkles, Truck, ShoppingBag, Globe, Zap, Building2, ArrowRight, Play } from 'lucide-react';

interface PortfolioProps {
  onCtaClick?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onCtaClick }) => {
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
      category: 'ecommerce',
      badge: 'E-Commerce + Distribution',
      client: 'Balaji Wafers',
      industry: 'FMCG',
      services: 'E-Commerce Platform, Distributor Portal, Inventory Management',
      result: 'Pan-India Reach Achieved',
      description: 'Built a nationwide e-commerce platform with distributor portal and inventory management. Integrated multi-location warehouse sync, dealer ordering system, and real-time stock visibility across Gujarat and pan-India distribution network.',
      outcomes: 'Pan-India e-commerce presence, automated distributor management, real-time inventory sync',
      icon: ShoppingBag,
      color: 'bg-orange-500/10 text-orange-500 border-orange-200',
    },
    {
      id: 2,
      category: 'corporate',
      badge: 'Corporate + B2B Portal',
      client: 'Torrent Pharma',
      industry: 'Pharmaceuticals',
      services: 'Enterprise Website, Doctor Portal, Product Catalog, HCP Platform',
      result: '+250% Digital Leads',
      description: 'Enterprise website with comprehensive doctor portal, detailed product catalog, and healthcare professional engagement platform. Built secure login systems for doctors with prescription tools and medical resources.',
      outcomes: '250% increase in digital leads, enhanced HCP engagement, streamlined product information',
      icon: Building2,
      color: 'bg-blue-500/10 text-blue-500 border-blue-200',
    },
    {
      id: 3,
      category: 'ecommerce',
      badge: 'B2B + Export Portal',
      client: 'Ahmedabad Textile Mills',
      industry: 'Textiles',
      services: 'Multi-currency B2B Platform, Sample Ordering, Global Shipping',
      result: 'International Orders Enabled',
      description: 'Developed a multi-currency B2B platform enabling international sample ordering and global shipping integration. Supports USD, EUR, GBP payments with automated duty calculations and export documentation.',
      outcomes: 'International market access, automated export compliance, multi-currency transactions',
      icon: Globe,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-200',
    },
    {
      id: 4,
      category: 'erp',
      badge: 'Dealer Network + ERP',
      client: 'Gujarat Automotive',
      industry: 'Automotive',
      services: 'Dealer Management System, Inventory Sync, Multi-location ERP',
      result: '45+ Dealer Portals Live',
      description: 'Centralized dealer management system with real-time inventory sync across all Gujarat locations. Implemented automated ordering, parts tracking, and sales reporting for the entire dealer network.',
      outcomes: '45 dealer portals integrated, real-time inventory visibility, automated reporting',
      icon: Truck,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-200',
      featured: true,
    },
    {
      id: 5,
      category: 'ecommerce',
      badge: 'Luxury E-Commerce',
      client: 'Navrangpura Jewellers',
      industry: 'Jewellery',
      services: 'Premium E-Commerce, Virtual Try-On, Gold Rate API, EMI Integration',
      result: '3X Online Revenue',
      description: 'Premium e-commerce experience with cutting-edge virtual try-on feature, live gold rate API integration, and flexible EMI payment options. Mobile-first design optimized for high-value purchases.',
      outcomes: '3X revenue growth, enhanced customer experience, reduced return rates with virtual try-on',
      icon: Sparkles,
      color: 'bg-yellow-500/10 text-yellow-500 border-yellow-200',
    },
    {
      id: 6,
      category: 'corporate',
      badge: 'Real Estate Platform',
      client: 'SG Highway Realty',
      industry: 'Real Estate',
      services: 'Property Portal, Virtual Tours, Lead Management, Broker CRM',
      result: '500+ Property Listings',
      description: 'Comprehensive property portal featuring 360° virtual tours, intelligent lead management system, and dedicated broker CRM. Integrated with Google Maps for location-based property discovery.',
      outcomes: '500+ active listings, automated lead distribution, improved broker productivity',
      icon: Building2,
      color: 'bg-green-500/10 text-green-500 border-green-200',
    },
    {
      id: 7,
      category: 'corporate',
      badge: 'Creative Portfolio + SEO',
      client: 'CEPT Design Studio',
      industry: 'Architecture',
      services: 'Portfolio Website, SEO Optimization, Project Showcase',
      result: 'Award-Worthy Design',
      description: 'Visually stunning portfolio website showcasing architectural excellence. Implemented smooth animations, high-resolution project galleries, and SEO optimization for architecture-related search queries.',
      outcomes: 'Industry recognition, increased project inquiries, enhanced brand perception',
      icon: Palette,
      color: 'bg-purple-500/10 text-purple-500 border-purple-200',
    },
    {
      id: 8,
      category: 'corporate',
      badge: 'Healthcare Platform',
      client: 'Prahlad Nagar Clinic',
      industry: 'Healthcare',
      services: 'Patient Portal, Appointment Booking, Teleconsultation, Records Management',
      result: 'Fully Digital Operations',
      description: 'Complete patient portal with online appointment booking, teleconsultation integration, and electronic medical records management. HIPAA-compliant design with secure patient data handling.',
      outcomes: 'Online appointment bookings, reduced no-shows, improved patient experience',
      icon: Briefcase,
      color: 'bg-rose-500/10 text-rose-500 border-rose-200',
    }
  ];

  const filteredCaseStudies = activeTab === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
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
            Real Results from Ahmedabad Businesses
          </h2>
          <p className="text-jet-slate max-w-2xl mx-auto">
            See how we've helped businesses across Gujarat and India achieve digital transformation.
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
                onClick={onCtaClick}
                className={`bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all cursor-pointer ${study.featured ? 'md:col-span-2 border-jet-green/30' : 'border-slate-100'}`}
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
            <span className="font-bold">8 Success Stories</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold">6 Industries</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold">Gujarat & Pan-India</span>
            <span className="text-slate-300">|</span>
            <span className="font-bold text-jet-green">100% Client Satisfaction</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 text-jet-blue font-bold hover:underline"
          >
            <Play size={18} className="text-jet-orange" />
            View Full Case Studies
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
