import React from 'react';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const FooterLocal: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand */}
          <div>
            <div className="text-2xl font-bold font-heading mb-4 text-white">FactoryJet</div>
            <p className="text-slate-400 text-sm mb-6">Mumbai's most trusted industrial web design agency. We transform manufacturers and exporters into global brands through professional websites.</p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer"/>
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer"/>
              <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer"/>
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer"/>
              <Youtube className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer"/>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Portfolio</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white">Industrial Web Design</a></li>
              <li><a href="#" className="hover:text-white">Manufacturer Websites</a></li>
              <li><a href="#" className="hover:text-white">B2B E-Commerce Portals</a></li>
              <li><a href="#" className="hover:text-white">Export Lead Gen Sites</a></li>
              <li><a href="#" className="hover:text-white">Product Catalog Websites</a></li>
              <li><a href="#" className="hover:text-white">WordPress Development</a></li>
              <li><a href="#" className="hover:text-white">Mobile Responsive Sites</a></li>
              <li><a href="#" className="hover:text-white">Website Redesign</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Building #20, 10, Ajit Glass Garden Rd, opp. Amrutnagar, Somani Gram, Goregaon West, Mumbai, Maharashtra 400063</span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <span>+91 96999 77699</span>
              </li>
              <li className="flex gap-3">
                <span>💬</span>
                <span>WhatsApp: +91 96999 77699</span>
              </li>
              <li className="flex gap-3">
                <span>✉️</span>
                <span>connect@factoryjet.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO Paragraph */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <p className="text-xs text-slate-500 leading-relaxed text-justify">
            FactoryJet is the leading industrial web design company in Mumbai providing professional manufacturer website design, B2B website development, and web design for factories across Maharashtra. As the top-rated web design agency in Thane, Navi Mumbai, Vasai-Virar, Boisar, and Palghar, we specialize in industrial catalog websites, export lead generation websites, B2B e-commerce portals, product catalog development, mobile responsive industrial sites, and custom manufacturer websites.
            <br/><br/>
            Our industrial web design services help Mumbai manufacturers, exporters, wholesalers, and distributors get found by international buyers and generate direct inquiries. We serve businesses in MIDC Andheri, MIDC Taloja, Thane-Belapur Industrial Belt, Vasai Industrial Area, Boisar Industrial Zone, Bhiwandi Warehousing Hub, and all Mumbai Metropolitan Region industrial estates.
            <br/><br/>
            Whether you need a manufacturer website design in Thane, industrial web design in Navi Mumbai, factory website in Vasai-Virar, or B2B portal for export business — FactoryJet delivers results starting at ₹15,000 with 7-day delivery guarantee. Our mobile responsive sites help manufacturers grow wholesale orders and get export leads online.
            <br/><br/>
            Service Areas: Mumbai, Thane, Navi Mumbai, Vasai-Virar, Boisar, Palghar, Bhiwandi, Kalyan-Dombivli, Panvel, MIDC areas, and all Maharashtra industrial districts.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 FactoryJet Technologies. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLocal;
