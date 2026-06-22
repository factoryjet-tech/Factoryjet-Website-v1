import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ShoppingCart,
  Code2,
  Globe,
  TrendingUp,
  Database,
  CheckCircle2,
  Award,
  MapPin,
} from 'lucide-react';

const EntityBlock: React.FC = () => {
  const coreServices = [
    { icon: Building2, title: 'Website Design & Development', color: 'text-jet-blue' },
    { icon: ShoppingCart, title: 'E-Commerce Development (Shopify, WooCommerce, Magento)', color: 'text-jet-orange' },
    { icon: Code2, title: 'Custom Web Application Development', color: 'text-jet-green' },
    { icon: Globe, title: 'WordPress Development', color: 'text-blue-600' },
    { icon: TrendingUp, title: 'Digital Marketing & SEO', color: 'text-purple-600' },
    { icon: Database, title: 'CRM & ERP Implementation', color: 'text-indigo-600' },
  ];

  const differentiators = [
    '7-day average website delivery (50% faster than Pune industry average)',
    'Transparent pricing starting at ₹29,999 (no hidden costs)',
    'AI-enhanced design process for faster turnaround',
    'Dedicated Pune-based support team',
    'Full-stack capabilities (design + development + marketing + ERP)',
    '500+ successful projects across 50+ industries',
  ];

  const industries = [
    { name: 'IT & Software Services', location: 'Hinjewadi, Kharadi, Magarpatta, Baner', color: 'bg-blue-100 text-blue-800' },
    { name: 'Automobile & Manufacturing', location: 'Chakan, PCMC, Talegaon, Ranjangaon', color: 'bg-orange-100 text-orange-800' },
    { name: 'Engineering & Heavy Industries', location: 'PCMC, Bhosari, Hadapsar', color: 'bg-gray-100 text-gray-800' },
    { name: 'Healthcare & Diagnostics', location: 'All Pune', color: 'bg-green-100 text-green-800' },
    { name: 'E-Commerce & Retail', location: 'Pune City, FC Road, MG Road', color: 'bg-purple-100 text-purple-800' },
    { name: 'Real Estate & Construction', location: 'Hinjewadi, Baner, Wakad', color: 'bg-indigo-100 text-indigo-800' },
    { name: 'Education & EdTech', location: 'All Pune — "Oxford of the East"', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Pharmaceuticals & Chemicals', location: 'MIDC areas', color: 'bg-teal-100 text-teal-800' },
    { name: 'Export & Import', location: 'Chakan, PCMC near JNPT connectivity', color: 'bg-pink-100 text-pink-800' },
  ];

  const certifications = [
    'Google Partner',
    'Shopify Partner',
    'Meta Business Partner',
    'Razorpay Certified',
    'ISO 27001 (Information Security)',
  ];

  const awards = [
    'Top 10 Web Design Companies in Pune (2024)',
    'Best SMB Digital Partner Award',
    'Excellence in E-Commerce Development',
  ];

  return (
    <section className="py-20 bg-white border-l-4 border-jet-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jet-navy mb-4">
            About FactoryJet — Website Design Company in Pune
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Company Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-600 font-medium">Company Name</div>
                  <div className="text-jet-navy font-semibold">FactoryJet Technologies</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">Type</div>
                  <div className="text-jet-navy font-semibold">Website Design Company</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">Founded</div>
                  <div className="text-jet-navy font-semibold">2015</div>
                </div>
                <div>
                  <div className="text-gray-600 font-medium">Headquarters</div>
                  <div className="text-jet-navy font-semibold">Pune, Maharashtra</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-gray-600 font-medium mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-jet-blue" />
                  Service Areas
                </div>
                <div className="text-sm text-gray-700">
                  Pune, Hinjewadi, Kharadi, Magarpatta City, Baner, Viman Nagar, Aundh, Koregaon Park, PCMC (Pimpri-Chinchwad), Chakan, Talegaon, Ranjangaon, Hadapsar, Wakad, and all Pune districts
                </div>
              </div>
            </motion.div>

            {/* Core Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-jet-navy mb-4">Core Services</h3>
              <div className="grid grid-cols-1 gap-3">
                {coreServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-jet-blue hover:shadow-md transition-all"
                  >
                    <service.icon className={`w-6 h-6 ${service.color} flex-shrink-0`} />
                    <span className="font-medium text-gray-800">{service.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Client Profile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-jet-blue/5 to-jet-orange/5 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-jet-navy mb-4">Client Profile</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jet-green flex-shrink-0 mt-0.5" />
                  <span><strong>Company size:</strong> 10-500 employees</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jet-green flex-shrink-0 mt-0.5" />
                  <span><strong>Annual revenue:</strong> ₹50 Lakhs - ₹500 Crore</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-jet-green flex-shrink-0 mt-0.5" />
                  <span><strong>Industries:</strong> B2B, B2C, D2C, IT Services, Manufacturing, Engineering, Services, Retail</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Key Differentiators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-jet-navy mb-4">Key Differentiators</h3>
              <div className="space-y-3">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-jet-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industries Served */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-jet-navy mb-4">Industries Served in Pune</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className={`${industry.color} px-3 py-2 rounded-lg text-sm font-medium cursor-default hover:scale-105 transition-transform`}
                    title={industry.location}
                  >
                    {industry.name}
                    <div className="text-xs opacity-75 mt-0.5">{industry.location}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications & Partnerships */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-jet-navy mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-jet-blue" />
                Certifications & Partnerships
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-jet-blue/10 text-jet-blue px-4 py-2 rounded-lg text-sm font-semibold border border-jet-blue/20"
                  >
                    {cert}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-jet-navy mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-jet-orange" />
                Awards & Recognition
              </h3>
              <div className="space-y-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700">
                    <Award className="w-4 h-4 text-jet-orange flex-shrink-0 mt-0.5" />
                    <span>{award}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntityBlock;
