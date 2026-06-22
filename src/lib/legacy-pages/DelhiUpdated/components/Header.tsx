import React, { useState } from 'react';
import { Menu, X, Phone, Rocket } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[49] bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-jet-blue mr-2" />
            <span className="font-heading font-bold text-2xl text-navy">FactoryJet</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Process', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-slate hover:text-jet-blue font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <a href="tel:+919699977699" className="flex items-center text-jet-blue font-semibold hover:underline">
               <Phone className="h-5 w-5 mr-2" />
               +91-969-997-7699
             </a>
             <a href="#hero" className="bg-jet-orange hover:bg-jet-orange-dark text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
               Get Quote
             </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'Services', 'Process', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block px-3 py-3 rounded-md text-base font-medium text-slate hover:text-jet-blue hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#hero" className="block w-full text-center bg-jet-orange text-white py-3 rounded-md font-bold mt-4">
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;