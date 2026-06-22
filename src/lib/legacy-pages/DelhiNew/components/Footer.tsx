import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { FOOTER_SEO_PARAGRAPH } from '../data.constants';

const Footer: React.FC = () => (
  <footer className="bg-navy text-gray-400 pt-16 lg:pt-20 pb-10 border-t border-gray-800">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
        <div>
          <h3 className="text-white text-2xl font-bold font-heading mb-4 lg:mb-6">FactoryJet</h3>
          <p className="text-sm leading-relaxed mb-6">
            Delhi NCR's most trusted website design company. We transform businesses into digital
            powerhouses through professional websites and e-commerce solutions.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Case Studies', 'Blog', 'Contact'].map(
              (link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors block py-1">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Our Services</h4>
          <ul className="space-y-3 text-sm">
            <li className="block py-1">Website Design</li>
            <li className="block py-1">WordPress Development</li>
            <li className="block py-1">Shopify E-Commerce</li>
            <li className="block py-1">Custom Web Apps</li>
            <li className="block py-1">UI/UX Design</li>
            <li className="block py-1">Website Redesign</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 lg:mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0" />
              WeWork, Two Horizon Center, Golf Course Road, Sector 43, Gurugram, Haryana 122002
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0" />
              +91 96999 77699
            </li>
            <li className="flex items-center">
              <div className="h-5 w-5 mr-3 text-jet-orange flex-shrink-0">@</div>
              connect@factoryjet.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 lg:pt-10 pb-6">
        <h4 className="text-white font-bold mb-4 text-xs lg:text-sm uppercase tracking-wider">
          SEO Information
        </h4>
        <p className="text-xs leading-relaxed text-gray-500 text-justify whitespace-pre-line">
          {FOOTER_SEO_PARAGRAPH}
        </p>
      </div>

      <div className="text-center text-xs text-gray-600 mt-8">
        © 2026 FactoryJet Technologies. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </div>
  </footer>
);

export default Footer;
