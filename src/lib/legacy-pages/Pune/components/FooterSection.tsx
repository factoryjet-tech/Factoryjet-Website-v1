import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FooterSection: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const serviceAreas = {
    'IT Hubs': [
      'Hinjewadi Phase 1, 2, 3 (Rajiv Gandhi Infotech Park)',
      'Kharadi (EON Free Zone)',
      'Magarpatta City (Cybercity)',
      'Baner IT Park Road',
      'Viman Nagar',
      'Aundh',
    ],
    'Pune City (Central/East)': [
      'FC Road (Fergusson College Road)',
      'MG Road',
      'Koregaon Park',
      'Camp (Cantonment)',
      'Shivajinagar',
      'Deccan',
      'Hadapsar',
      'Wakad',
      'Kothrud',
      'Kondhwa',
    ],
    'PCMC (Pimpri-Chinchwad)': [
      'Pimpri',
      'Chinchwad',
      'Bhosari',
      'Nigdi',
      'Akurdi',
      'Ravet',
      'Pradhikaran',
    ],
    'Manufacturing Belt': [
      'Chakan MIDC',
      'Talegaon MIDC',
      'Ranjangaon MIDC',
      'Sanaswadi',
      'Pirangut',
      'Hinjewadi Industrial Area',
    ],
  };

  const toggleArea = (area: string) => {
    setExpandedArea(expandedArea === area ? null : area);
  };

  return (
    <footer className="bg-gradient-to-br from-jet-navy via-jet-blue to-jet-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Areas Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Complete Pune Coverage</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(serviceAreas).map(([area, locations]) => (
              <div key={area} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
                <button
                  onClick={() => toggleArea(area)}
                  className="w-full p-4 flex items-center justify-between hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-jet-orange" />
                    <span className="font-bold">{area}</span>
                  </div>
                  {expandedArea === area ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {expandedArea === area && (
                  <div className="p-4 pt-0">
                    <ul className="space-y-2">
                      {locations.map((location, i) => (
                        <li key={i} className="text-sm text-blue-100">• {location}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEO Footer Block */}
        <div className="mb-12 pb-12 border-b border-white/20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              FactoryJet — Website Design Company in Pune
            </h3>
            <div className="text-blue-100 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                FactoryJet is a leading <strong className="text-white">website design company in Pune</strong> specializing in <strong className="text-white">web development</strong>, <strong className="text-white">e-commerce development</strong>, and <strong className="text-white">digital transformation</strong> for small and medium businesses. With 25+ years of combined expertise, we've delivered 500+ successful projects across Pune, Hinjewadi, Kharadi, Magarpatta, PCMC, Chakan, Talegaon, and all Pune districts.
              </p>
              <p>
                Our <strong className="text-white">ecommerce development company in Pune</strong> has helped 200+ businesses launch successful online stores on <strong className="text-white">Shopify</strong>, <strong className="text-white">WooCommerce</strong>, <strong className="text-white">Magento</strong>, and custom platforms. Whether you need an <strong className="text-white">affordable website design company in Pune</strong> for your startup or a <strong className="text-white">professional web development company</strong> for your enterprise — FactoryJet delivers results.
              </p>
              <p>
                Pune's unique IT-Manufacturing duality makes it a special market. From Hinjewadi IT companies (Infosys, TCS, Wipro, Cognizant, IBM, Accenture, Tech Mahindra) to Chakan's automobile giants (Mercedes-Benz, Tata Motors, Bajaj Auto, Volkswagen, Hyundai), we understand the diverse needs of Pune businesses.
              </p>
            </div>

            {/* Service Areas Text */}
            <div className="mt-6">
              <div className="font-semibold text-jet-orange mb-2">Service Areas:</div>
              <p className="text-sm text-blue-100">
                Pune (FC Road, MG Road, Koregaon Park, Camp, Deccan, Shivajinagar), Hinjewadi (Phase 1, 2, 3, Rajiv Gandhi Infotech Park), Kharadi (EON Free Zone), Magarpatta (Cybercity), Baner, Aundh, Viman Nagar, PCMC (Pimpri, Chinchwad, Bhosari, Nigdi, Akurdi), Chakan (MIDC, Automobile Hub), Talegaon, Ranjangaon, Hadapsar, Wakad, Kothrud, and all Pune locations.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-jet-orange">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-jet-orange">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/services/web-design" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="/services/ecommerce" className="hover:text-white transition-colors">E-Commerce</a></li>
              <li><a href="/services/wordpress" className="hover:text-white transition-colors">WordPress</a></li>
              <li><a href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="/services/crm" className="hover:text-white transition-colors">CRM Implementation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-jet-orange">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-jet-orange">Legal</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+919699977699" className="flex items-center gap-2 hover:text-jet-orange transition-colors">
              <Phone className="w-5 h-5" />
              <span>+91 96999 77699</span>
            </a>
            <a href="https://wa.me/919699977699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-jet-orange transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a href="mailto:connect@factoryjet.com" className="flex items-center gap-2 hover:text-jet-orange transition-colors">
              <Mail className="w-5 h-5" />
              <span>connect@factoryjet.com</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a
                key={social}
                href={`https://${social.toLowerCase()}.com/factoryjet`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-jet-orange transition-all"
              >
                <span className="text-xs font-bold">{social.charAt(0)}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm text-blue-200">
          © 2026 FactoryJet Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
