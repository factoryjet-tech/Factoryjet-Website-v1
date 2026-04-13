import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jet-dark text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
           <div className="text-white font-bold text-2xl font-heading mb-4">FactoryJet</div>
           <p className="mb-4">America's AI-Native E-Commerce Development Company.</p>
           <a href="mailto:connect@factoryjet.com" className="flex items-center gap-2 hover:text-white transition-colors">
             📧 connect@factoryjet.com
           </a>
           <a href="https://wa.me/919699977699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors mt-2">
             💬 Chat on WhatsApp
           </a>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="/us/services/shopify-development" className="hover:text-white">Shopify Development</a></li>
            <li><a href="/us/services/ecommerce-development" className="hover:text-white">E-Commerce Development</a></li>
            <li><a href="/us/services/web-design" className="hover:text-white">Web Design</a></li>
            <li><a href="/services/ai-agent-development" className="hover:text-white">AI Agent Development</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-bold mb-4">Company</h4>
           <ul className="space-y-2">
             <li><a href="/case" className="hover:text-white">Case Studies</a></li>
             <li><a href="/us/pricing" className="hover:text-white">Pricing</a></li>
             <li><a href="/us/about" className="hover:text-white">About Us</a></li>
           </ul>
        </div>
        
        <div>
           <h4 className="text-white font-bold mb-4">Locations</h4>
           <p>Serving clients across the United States. </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-xs text-center">
         © 2026 FactoryJet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;