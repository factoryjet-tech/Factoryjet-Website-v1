
import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Youtube, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-navy text-white pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Col 1 */}
          <div>
            <div className="text-xl sm:text-2xl font-bold font-heading mb-6">
              <span className="text-jet-blue">Factory</span>
              <span className="text-jet-orange">Jet</span>
            </div>
            <p className="text-jet-gray text-sm leading-relaxed mb-6">
              Pune's trusted web design partner for SMBs. We build high-performance e-commerce and business websites that actually convert.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-jet-blue transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="mt-4 md:mt-6 flex items-center gap-2">
              <span className="text-yellow-500 font-bold">4.9/5.0 &#9733;</span>
              <span className="text-xs text-jet-gray">on Google Reviews</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-jet-gray text-sm">
              <li><Link href="/web-design" className="hover:text-white transition-colors">Website Design & Development</Link></li>
              <li><Link href="/ecommerce" className="hover:text-white transition-colors">E-Commerce Store Development</Link></li>
              <li><Link href="/web-design" className="hover:text-white transition-colors">Local SEO & Google My Business</Link></li>
              <li><Link href="/web-design" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/web-design" className="hover:text-white transition-colors">CRM & ERP Solutions</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Pune Areas We Serve</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-jet-gray text-sm">
              <li>Koregaon Park</li>
              <li>Hinjewadi</li>
              <li>Baner</li>
              <li>Kothrud</li>
              <li>Wakad</li>
              <li>Pimpri-Chinchwad</li>
              <li>Viman Nagar</li>
              <li>Aundh</li>
              <li>Magarpatta</li>
              <li>Kalyani Nagar</li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-jet-gray text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-jet-blue flex-shrink-0" size={18} />
                <span>Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-jet-blue" size={18} />
                <span>connect@factoryjet.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-jet-blue" size={18} />
                <span>+91 96999 77699</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-jet-green" size={18} />
                <span>WhatsApp: +91 96999 77699</span>
              </li>
            </ul>
          </div>

          {/* Col 5 - Other Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Other Locations</h4>
            <ul className="space-y-3 text-jet-gray text-sm">
              <li><Link href="/mumbai" className="hover:text-white transition-colors">Mumbai</Link></li>
              <li><Link href="/bangalore" className="hover:text-white transition-colors">Bangalore</Link></li>
              <li><Link href="/ahmedabad" className="hover:text-white transition-colors">Ahmedabad</Link></li>
              <li><Link href="/surat" className="hover:text-white transition-colors">Surat</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-8 md:py-10 border-y border-white/5 grayscale opacity-50 mb-8 md:mb-10">
          <span className="text-xs font-bold uppercase">Google Partner</span>
          <span className="text-xs font-bold uppercase">Shopify Expert</span>
          <span className="text-xs font-bold uppercase">Razorpay Partner</span>
          <span className="text-xs font-bold uppercase">Zoho Partner</span>
          <span className="text-xs font-bold uppercase">SSL Secure</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-jet-gray text-xs">
          <p>&copy; 2026 FactoryJet Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
          <p>Made with &#10084; in Pune</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
