import React from 'react';
import { X, ArrowRight, Phone, Mail } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenForm: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onOpenForm }) => {
  const links = [
    { label: 'Services', href: '#overview' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#method' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  return (
    <div className={`fixed inset-0 z-[200] md:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible delay-300'}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      ></div>

      {/* Menu Panel */}
      <div className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="text-xl font-heading font-extrabold text-jet-blue">FACTORYJET</div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-6">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center justify-between p-4 rounded-xl text-left font-medium text-slate-600 hover:bg-slate-50 hover:text-jet-blue transition-colors group"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-jet-blue" />
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+13328670003" className="flex items-center gap-3 text-slate-600 hover:text-jet-blue transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-jet-blue">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+1 (332) 867-0003</span>
              </a>
              <a href="mailto:connect@factoryjet.com" className="flex items-center gap-3 text-slate-600 hover:text-jet-blue transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-jet-blue">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">connect@factoryjet.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <button 
            onClick={() => {
              onClose();
              onOpenForm();
            }}
            className="w-full py-4 bg-jet-blue text-white rounded-xl font-bold shadow-lg hover:bg-jet-blue-dark transition-colors flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};