import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-navy border-t border-slate-800 pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Address */}
          <div>
            <h3 className="text-3xl font-bold font-heading text-white mb-6">FactoryJet Technologies</h3>
            <p className="text-sm text-slate-400 mb-4">Digital Transformation Partner for Chennai Businesses</p>
            <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-jet-blue shrink-0" size={18} />
                <p>70/1, Brookefield, <br/>ITPL Road, Whitefield</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-jet-blue shrink-0" size={18} />
                <p>+91 96999 77699</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-jet-blue shrink-0" size={18} />
                <p>connect@factoryjet.com</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">
               Mon - Fri: 9:00 AM - 7:00 PM<br/>Sat: 10:00 AM - 4:00 PM
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/services/web-design/chennai" className="hover:text-jet-orange transition-colors">Website Design Chennai</a></li>
              <li><a href="/services/ecommerce-development" className="hover:text-jet-orange transition-colors">E-Commerce Development</a></li>
              <li><a href="/services/ecommerce-development/shopify-development" className="hover:text-jet-orange transition-colors">Shopify Development</a></li>
              <li><a href="/services/ai-agent-development" className="hover:text-jet-orange transition-colors">AI Agent Development</a></li>
              <li><a href="/services/web-design" className="hover:text-jet-orange transition-colors">Web Design India</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/about" className="hover:text-jet-orange transition-colors">About Us</a></li>
              <li><a href="/case" className="hover:text-jet-orange transition-colors">Case Studies</a></li>
              <li><a href="/portfolio" className="hover:text-jet-orange transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-jet-orange transition-colors">Blog & Insights</a></li>
              <li><a href="/pricing" className="hover:text-jet-orange transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-jet-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
             <ul className="space-y-3 text-sm text-slate-400 mb-6">
                <li><a href="/blog" className="hover:text-jet-orange transition-colors">Blog & Insights</a></li>
                <li><a href="/case" className="hover:text-jet-orange transition-colors">Case Studies</a></li>
                <li><a href="/pricing" className="hover:text-jet-orange transition-colors">Pricing Guide</a></li>
                <li><a href="/contact" className="hover:text-jet-orange transition-colors">Free Website Audit</a></li>
             </ul>

             <div className="flex gap-4">
                 {[
                   { Icon: Facebook, href: 'https://www.facebook.com/factoryjet' },
                   { Icon: Instagram, href: 'https://www.instagram.com/factoryjet' },
                   { Icon: Linkedin, href: 'https://in.linkedin.com/company/factoryjet' },
                   { Icon: Twitter, href: 'https://x.com/FactoryJet_Tech' }
                 ].map(({ Icon, href }, i) => (
                     <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-jet-blue hover:text-white transition-all">
                         <Icon size={16} />
                     </a>
                 ))}
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
           <p className="text-white font-bold mb-4 text-sm">Chennai Service Areas:</p>
           <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-8">
              {['OMR', 'T. Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'Guindy', 'Mylapore', 'Taramani', 'Porur', 'Perungudi', 'Sholinganallur', 'Nungambakkam', 'Kodambakkam', 'Egmore', 'Ambattur', 'Chromepet', 'Tambaram'].map((area) => (
                  <span key={area} className="hover:text-jet-orange cursor-default">{area} |</span>
              ))}
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
             <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span> 
                <span>4.9/5 Rating from 100+ Chennai Clients | ISO Certified</span>
             </div>
             <div className="flex gap-4">
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                <a href="/terms" className="hover:text-white">Terms of Service</a>
                <a href="/refund-policy" className="hover:text-white">Refund Policy</a>
             </div>
             <p>© 2024 FactoryJet Technologies. All rights reserved.</p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;