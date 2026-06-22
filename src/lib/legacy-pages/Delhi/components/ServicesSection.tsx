import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Code2,
  TrendingUp,
  Database,
  ArrowRight,
  CheckCircle2,
  FileText,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenModal: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenModal }) => {
  const services = [
    {
      icon: Globe,
      title: 'Website Design & Development',
      subtitle: 'Professional, Mobile-Optimized, SEO-Ready Websites',
      description: 'Custom websites designed for Delhi NCR businesses — from startups in Connaught Place to corporates in Gurgaon. Mobile-first, lightning-fast, conversion-focused.',
      features: [
        'Responsive design (works on all devices)',
        'Fast loading (under 2 seconds)',
        'SEO-optimized structure',
        'Contact forms & WhatsApp integration',
        'Google Maps integration',
        'SSL security included',
      ],
      price: 'Starting ₹29,999',
      deliveryTime: '7 Days',
      color: 'text-jet-blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-jet-blue',
      example: 'Example: Corporate website for Gurgaon-based consulting firm',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      subtitle: 'Shopify, WooCommerce, Magento — Full Online Store Setup',
      description: 'Complete e-commerce solutions for Delhi NCR retailers and D2C brands. Integrated with UPI, Razorpay, Paytm, Shiprocket, and WhatsApp for instant checkouts.',
      features: [
        'Product catalog (unlimited products)',
        'Payment gateway integration (UPI, cards, wallets)',
        'Shipping integration (Delhivery, Shiprocket)',
        'Inventory management',
        'Order tracking & invoicing',
        'WhatsApp order notifications',
      ],
      price: 'Starting ₹49,999',
      deliveryTime: '14 Days',
      color: 'text-jet-orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-jet-orange',
      example: 'Example: D2C fashion brand selling across Delhi NCR',
    },
    {
      icon: Code2,
      title: 'Custom Web Application Development',
      subtitle: 'Portals, Dashboards, SaaS Platforms for Delhi NCR Businesses',
      description: 'Build custom web apps tailored to your business — CRM portals, booking systems, vendor management, employee dashboards. Built with React, Node.js, Python.',
      features: [
        'Custom workflows & automation',
        'User authentication & role-based access',
        'Database design & API development',
        'Third-party integrations (ERP, CRM)',
        'Real-time dashboards & analytics',
        'Mobile app development (React Native)',
      ],
      price: 'Starting ₹1,50,000',
      deliveryTime: '4-8 Weeks',
      color: 'text-jet-green',
      bgColor: 'bg-green-50',
      borderColor: 'border-jet-green',
      example: 'Example: Vendor management portal for Noida manufacturer',
    },
    {
      icon: FileText,
      title: 'WordPress Development',
      subtitle: 'Custom WordPress Websites with Admin Control',
      description: 'Perfect for Delhi NCR businesses that want easy content management. Custom themes, plugin development, and full training for your team.',
      features: [
        'Custom WordPress theme design',
        'Plugin customization & development',
        'WooCommerce integration',
        'SEO plugins (Yoast, Rank Math)',
        'Admin training & documentation',
        'Maintenance & support',
      ],
      price: 'Starting ₹39,999',
      deliveryTime: '10 Days',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-600',
      example: 'Example: Blog + e-commerce for Delhi-based lifestyle brand',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & SEO',
      subtitle: 'Rank on Google, Drive Traffic, Convert Customers',
      description: 'Dominate Delhi NCR search results. We handle SEO (rank #1 for "your service + Delhi NCR"), Google Ads, Meta Ads, and content marketing.',
      features: [
        'Local SEO (Google My Business optimization)',
        'Keyword research & on-page SEO',
        'Google Ads & Meta Ads campaigns',
        'Content marketing & blog writing',
        'Link building & reputation management',
        'Monthly analytics & reporting',
      ],
      price: 'Starting ₹25,000/month',
      deliveryTime: 'Ongoing',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-600',
      example: 'Example: SEO for Gurgaon real estate developer',
    },
    {
      icon: Database,
      title: 'CRM & ERP Implementation',
      subtitle: 'Zoho, Salesforce, Odoo — Business Process Automation',
      description: 'Streamline operations for Delhi NCR SMBs. We implement and customize Zoho CRM, Salesforce, Odoo ERP, and custom integrations.',
      features: [
        'CRM/ERP selection & implementation',
        'Custom workflows & automation',
        'Sales pipeline & lead management',
        'Inventory & accounting integration',
        'WhatsApp & email automation',
        'Team training & ongoing support',
      ],
      price: 'Starting ₹75,000',
      deliveryTime: '3-6 Weeks',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-600',
      example: 'Example: Zoho CRM for B2B services company in Aerocity',
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
            Our Services — Website Design Company in Delhi NCR
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From website design to e-commerce to digital marketing — we're your one-stop solution for online growth in Delhi, Gurgaon, Noida, and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:shadow-2xl transition-all group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.bgColor} border-2 ${service.borderColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-jet-navy mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className={`${service.color} font-semibold mb-4`}>
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-5 h-5 ${service.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing & Delivery */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 font-medium">Price:</span>
                  <span className={`${service.color} font-bold text-lg`}>{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Delivery:</span>
                  <span className="text-jet-navy font-semibold">{service.deliveryTime}</span>
                </div>
              </div>

              {/* Example */}
              <div className="bg-white/70 rounded-lg p-3 mb-6 border border-gray-200">
                <p className="text-xs text-gray-600 italic">{service.example}</p>
              </div>

              {/* CTA */}
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-jet-orange to-orange-600 hover:from-[#e55a2b] hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Not sure which service you need? Let's discuss your Delhi NCR business goals.
          </p>
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-jet-blue hover:bg-[#003d99] text-white px-10 py-5 rounded-lg font-bold text-xl shadow-xl transition-all inline-flex items-center gap-2"
          >
            Get Free Consultation
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
