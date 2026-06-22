import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Factory, ShoppingBag, Heart, Home, GraduationCap, Beaker, Wrench } from 'lucide-react';

const IndustryExpertise: React.FC = () => {
  const industries = [
    {
      icon: Monitor,
      title: 'IT & Software Services',
      location: 'Hinjewadi, Kharadi, Magarpatta, Baner',
      experience: '100+ IT company websites built',
      solutions: 'Corporate websites, SaaS landing pages, developer portals, career pages',
      clientExample: 'CloudTech Solutions saw 220% increase in B2B leads after website redesign',
      color: 'blue',
    },
    {
      icon: Factory,
      title: 'Automobile & Manufacturing',
      location: 'Chakan, PCMC, Talegaon, Ranjangaon',
      experience: '80+ manufacturing websites and B2B portals',
      solutions: 'Corporate sites, B2B dealer portals, product catalogs, OEM supplier websites',
      clientExample: 'Precision Auto Components reduced order processing time by 65% with B2B portal',
      color: 'orange',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce & Retail',
      location: 'Pune City, FC Road, MG Road, Koregaon Park',
      experience: '100+ e-commerce stores',
      solutions: 'Shopify stores, WooCommerce, D2C brands, multi-vendor platforms',
      clientExample: 'Fashion brand achieved ₹4.5 Cr annual online revenue',
      color: 'purple',
    },
    {
      icon: Heart,
      title: 'Healthcare & Diagnostics',
      location: 'All Pune',
      experience: '40+ healthcare websites',
      solutions: 'Hospital websites, appointment booking, patient portals, multi-location sites',
      clientExample: 'Diagnostic center chain integrated online booking for 6 locations, 75% bookings now online',
      color: 'green',
    },
    {
      icon: Home,
      title: 'Real Estate & Construction',
      location: 'Hinjewadi, Baner, Wakad, Kothrud',
      experience: '40+ real estate websites',
      solutions: 'Property listing sites, lead generation, virtual tours, builder websites',
      clientExample: 'Real estate developer generated 400+ qualified leads in 3 months',
      color: 'indigo',
    },
    {
      icon: GraduationCap,
      title: 'Education & EdTech',
      location: 'All Pune — "Oxford of the East"',
      experience: '50+ education websites',
      solutions: 'School websites, university portals, online course platforms, student management',
      clientExample: 'Coaching institute increased admissions 40% through website leads',
      color: 'teal',
    },
    {
      icon: Beaker,
      title: 'Pharmaceuticals & Chemicals',
      location: 'MIDC Areas',
      experience: '25+ pharma/chemical websites',
      solutions: 'Corporate sites, product catalogs, compliance-ready content, B2B portals',
      clientExample: 'Pharma exporter expanded to 5 new markets with multilingual website',
      color: 'pink',
    },
    {
      icon: Wrench,
      title: 'Engineering & Heavy Industries',
      location: 'PCMC, Bhosari, Hadapsar',
      experience: '35+ engineering company websites',
      solutions: 'Corporate sites, project portfolios, technical catalogs, dealer networks',
      clientExample: 'Engineering firm increased international inquiries by 180%',
      color: 'yellow',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
      teal: 'bg-teal-50 border-teal-200 text-teal-700',
      pink: 'bg-pink-50 border-pink-200 text-pink-700',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    };
    return colors[color] || colors.blue;
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
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            Pune Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">Industries We Serve Across Pune</p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${getColorClasses(industry.color)} border-2 rounded-xl p-6 hover:shadow-xl transition-all group cursor-pointer`}
            >
              {/* Icon */}
              <div className="mb-4">
                <industry.icon className="w-12 h-12 text-jet-navy" />
              </div>

              {/* Title & Location */}
              <h3 className="text-xl font-bold text-jet-navy mb-2">{industry.title}</h3>
              <div className="text-sm text-gray-600 mb-4 font-medium">{industry.location}</div>

              {/* Experience */}
              <div className="mb-3 pb-3 border-b border-gray-200">
                <div className="text-sm font-semibold text-jet-navy mb-1">Our Experience:</div>
                <div className="text-sm text-gray-700">{industry.experience}</div>
              </div>

              {/* Solutions */}
              <div className="mb-3 pb-3 border-b border-gray-200">
                <div className="text-sm font-semibold text-jet-navy mb-1">Solutions:</div>
                <div className="text-sm text-gray-700">{industry.solutions}</div>
              </div>

              {/* Client Example */}
              <div className="bg-white/80 rounded-lg p-3 border-l-4 border-jet-green">
                <div className="text-xs font-semibold text-gray-600 mb-1">Client Example:</div>
                <div className="text-sm text-gray-700 leading-snug">{industry.clientExample}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
