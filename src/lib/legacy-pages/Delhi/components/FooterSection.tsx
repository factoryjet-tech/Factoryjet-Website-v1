import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone, MessageCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSection: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<number | null>(null);

  const serviceAreas = [
    {
      region: 'Delhi (Central & South)',
      areas: [
        'Connaught Place', 'Chandni Chowk', 'Karol Bagh', 'Lajpat Nagar',
        'Sarojini Nagar', 'Nehru Place', 'Defence Colony', 'Greater Kailash',
        'Saket', 'Hauz Khas', 'Green Park', 'Vasant Vihar',
      ],
    },
    {
      region: 'Gurgaon (Gurugram)',
      areas: [
        'Cyber City', 'DLF Phase 1-5', 'Golf Course Road', 'MG Road',
        'Sohna Road', 'Sector 29', 'Sector 32', 'Sector 48',
        'Sector 56', 'Udyog Vihar', 'Manesar', 'New Gurgaon',
      ],
    },
    {
      region: 'Noida',
      areas: [
        'Sector 18', 'Sector 62', 'Sector 63', 'Sector 16',
        'Sector 50', 'Sector 58', 'Film City', 'Electronic City',
        'Greater Noida West', 'Expressway', 'Knowledge Park',
      ],
    },
    {
      region: 'Greater Noida',
      areas: [
        'Alpha 1 & 2', 'Beta 1 & 2', 'Gamma 1 & 2', 'Pari Chowk',
        'Knowledge Park', 'Techzone', 'Surajpur', 'Ecotech',
      ],
    },
    {
      region: 'Faridabad',
      areas: [
        'Sector 15-89', 'New Industrial Town (NIT)', 'Old Faridabad',
        'Ballabgarh', 'Badarpur Border', 'Neemka',
      ],
    },
    {
      region: 'Ghaziabad',
      areas: [
        'Indirapuram', 'Vaishali', 'Kaushambi', 'Raj Nagar Extension',
        'Crossings Republik', 'Vasundhara', 'Mohan Nagar',
      ],
    },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Website Design & Development', href: '/services/website-design' },
    { name: 'E-Commerce Development', href: '/services/ecommerce-development' },
    { name: 'WordPress Development', href: '/services/wordpress' },
    { name: 'Custom Web Applications', href: '/services/web-apps' },
    { name: 'Digital Marketing & SEO', href: '/services/digital-marketing' },
    { name: 'CRM & ERP Implementation', href: '/services/crm-erp' },
  ];

  const toggleArea = (index: number) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  return (
    <footer className="bg-gradient-to-br from-jet-navy to-[#002466] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FactoryJet</h3>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Leading website design company in Delhi NCR. Serving businesses across Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad since 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/factoryjet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/factoryjet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/factoryjet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/factoryjet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919699977699"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 96999 77699</span>
              </a>
              <a
                href="https://wa.me/919699977699"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:connect@factoryjet.com"
                className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>connect@factoryjet.com</span>
              </a>
              <div className="flex items-start gap-2 text-blue-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <MapPin className="w-8 h-8 inline-block mr-2 text-jet-orange" />
            Our Service Areas in Delhi NCR
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20"
              >
                <button
                  onClick={() => toggleArea(index)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{area.region}</span>
                  <motion.div
                    animate={{ rotate: expandedArea === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedArea === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3 text-sm text-blue-200">
                        <div className="flex flex-wrap gap-2">
                          {area.areas.map((location, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 px-2 py-1 rounded"
                            >
                              {location}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEO Footer Content */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-6">
              Website Design Company in Delhi NCR — Complete Digital Solutions
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-blue-200 leading-relaxed">
              <div>
                <p className="mb-4">
                  <strong className="text-white">FactoryJet</strong> is a leading <strong className="text-white">website design company in Delhi NCR</strong>,
                  serving businesses across Delhi, Gurgaon (Gurugram), Noida, Greater Noida, Faridabad, and Ghaziabad. With 25+ years of combined expertise,
                  we specialize in <strong className="text-white">website development</strong>, <strong className="text-white">e-commerce development</strong> (Shopify, WooCommerce, Magento),
                  custom web applications, WordPress development, and digital marketing.
                </p>
                <p>
                  Our team has delivered 500+ successful projects for Delhi NCR businesses — from startups in Connaught Place to manufacturers in Noida,
                  corporates in Gurgaon, retailers in Karol Bagh, and real estate developers in Greater Noida. We understand the unique challenges of the
                  Delhi NCR market and build websites that convert visitors into customers.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  <strong className="text-white">Why choose FactoryJet as your Delhi NCR web design partner?</strong> We offer 7-day average delivery
                  (50% faster than industry average), transparent pricing starting at ₹29,999, AI-enhanced design processes, full-stack capabilities
                  (design + development + marketing + ERP), and dedicated local support teams who understand Delhi NCR business culture.
                </p>
                <p>
                  Whether you need a simple business website, a full-fledged e-commerce store, a custom B2B portal, or end-to-end digital marketing,
                  FactoryJet is your trusted partner. We serve all industries: Manufacturing, IT Services, Healthcare, E-Commerce, Real Estate,
                  Education, Government/PSU, and more. <strong className="text-white">Contact us today for a free consultation and website audit.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-blue-200 text-sm">
          <p>
            © {new Date().getFullYear()} FactoryJet Technologies. All rights reserved. |
            <a href="/privacy-policy" className="hover:text-white ml-2">Privacy Policy</a> |
            <a href="/terms-of-service" className="hover:text-white ml-2">Terms of Service</a> |
            <a href="/sitemap.xml" className="hover:text-white ml-2">Sitemap</a>
          </p>
          <p className="mt-2">
            <strong className="text-white">Service Areas:</strong> Delhi, Gurgaon (Gurugram), Noida, Greater Noida, Faridabad, Ghaziabad,
            and all NCR districts including Connaught Place, Cyber City, Sector 62, Aerocity, Karol Bagh, and more.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
