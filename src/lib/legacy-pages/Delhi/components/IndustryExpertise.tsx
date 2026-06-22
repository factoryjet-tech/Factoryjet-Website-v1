import React from 'react';
import { motion } from 'framer-motion';
import {
  Factory,
  Code,
  Briefcase,
  HeartPulse,
  ShoppingBag,
  Building2,
  Landmark,
  GraduationCap,
  Package,
  ArrowRight,
} from 'lucide-react';

interface IndustryExpertiseProps {
  onOpenModal: () => void;
}

const IndustryExpertise: React.FC<IndustryExpertiseProps> = ({ onOpenModal }) => {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing & Industrial',
      locations: 'Noida, Greater Noida, Faridabad, Ghaziabad',
      description: 'B2B websites, product catalogs, and supplier portals for manufacturers, fabricators, and industrial equipment suppliers across Delhi NCR.',
      services: 'B2B Website Design, Product Catalog, Lead Generation, ERP Integration',
      examples: 'Auto parts manufacturers, machinery suppliers, packaging companies',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      icon: Code,
      name: 'Technology & IT Services',
      locations: 'Gurgaon, Noida, Delhi',
      description: 'SaaS platforms, tech company websites, and custom web applications for startups and IT services firms in major tech hubs.',
      services: 'SaaS Development, Corporate Websites, Lead Gen Funnels, Product Demos',
      examples: 'Software companies, app developers, IT consulting firms',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Briefcase,
      name: 'Corporate & Professional Services',
      locations: 'Connaught Place, Aerocity, Cyber City',
      description: 'Premium corporate websites for consulting firms, legal practices, CA firms, and professional services in Delhi NCR\'s business districts.',
      services: 'Corporate Website Design, Service Showcase, Client Portals, Appointment Booking',
      examples: 'Consulting firms, law firms, CA/CS practices, architects',
      color: 'text-gray-700',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
    },
    {
      icon: HeartPulse,
      name: 'Healthcare & Diagnostics',
      locations: 'All NCR',
      description: 'Patient-friendly websites, appointment booking systems, and health portals for hospitals, clinics, diagnostic centers, and pharma across NCR.',
      services: 'Medical Website Design, Online Appointment Booking, Patient Portals, Telemedicine Integration',
      examples: 'Hospitals, diagnostic labs, dental clinics, pharmacies',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: ShoppingBag,
      name: 'E-Commerce & Retail',
      locations: 'Delhi, Gurgaon, All NCR',
      description: 'Complete online stores for Delhi NCR retailers and D2C brands — from fashion to electronics to home decor.',
      services: 'Shopify/WooCommerce Development, Payment Gateway Setup, WhatsApp Commerce, Social Commerce',
      examples: 'Fashion brands, electronics retailers, home decor stores',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: Building2,
      name: 'Real Estate & Construction',
      locations: 'Gurgaon, Noida, Greater Noida',
      description: 'Property showcasing websites, lead capture systems, and virtual tours for real estate developers and construction companies.',
      services: 'Property Listing Websites, Virtual Tours, Lead Management, CRM Integration',
      examples: 'Real estate developers, property dealers, interior designers',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
    {
      icon: Landmark,
      name: 'Government & PSU',
      locations: 'Central Delhi, Chanakya Puri',
      description: 'Secure, accessible, and compliant websites for government departments, PSUs, and public sector organizations.',
      services: 'Government Portal Development, Accessibility Compliance, Secure Authentication, Public Information Systems',
      examples: 'Government departments, PSUs, public sector companies',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
    },
    {
      icon: GraduationCap,
      name: 'Education & EdTech',
      locations: 'All NCR',
      description: 'Learning management systems, school websites, and EdTech platforms for schools, coaching centers, and online education providers.',
      services: 'LMS Development, Online Course Platforms, Student Portals, Admission Systems',
      examples: 'Schools, coaching centers, online tutoring platforms',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
    {
      icon: Package,
      name: 'Export & Import',
      locations: 'Okhla, Noida',
      description: 'Global-ready B2B websites, product catalogs, and export portals for import/export businesses and international traders.',
      services: 'B2B Export Websites, Multi-currency Support, Global SEO, Inquiry Management',
      examples: 'Export houses, import companies, international traders',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jet-navy mb-4">
            Industries We Serve in Delhi NCR
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            500+ projects delivered across 50+ industries in Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${industry.bgColor} rounded-xl p-6 border-2 ${industry.borderColor} hover:shadow-xl transition-all group`}
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`${industry.bgColor} border-2 ${industry.borderColor} rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                  <industry.icon className={`w-8 h-8 ${industry.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-jet-navy">
                    {industry.name}
                  </h3>
                  <p className={`text-sm ${industry.color} font-semibold flex items-center gap-1 mt-1`}>
                    📍 {industry.locations}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {industry.description}
              </p>

              {/* Services */}
              <div className="bg-white rounded-lg p-3 mb-3 border border-gray-200">
                <div className="text-xs font-semibold text-gray-600 mb-1">Core Services:</div>
                <div className="text-sm text-gray-800">{industry.services}</div>
              </div>

              {/* Examples */}
              <div className="bg-white/70 rounded-lg p-3 border border-gray-200">
                <div className="text-xs font-semibold text-gray-600 mb-1">Typical Clients:</div>
                <div className="text-sm text-gray-700">{industry.examples}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 bg-gradient-to-br from-jet-blue to-jet-navy text-white rounded-2xl p-10 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            Your Industry Not Listed? We've Got You Covered.
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We've worked with 50+ industries across Delhi NCR — from startups to corporates, B2B to D2C. Let's discuss your specific needs.
          </p>
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jet-orange hover:bg-[#e55a2b] text-white px-10 py-5 rounded-lg font-bold text-xl shadow-xl transition-all inline-flex items-center gap-2"
          >
            Discuss My Industry
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
