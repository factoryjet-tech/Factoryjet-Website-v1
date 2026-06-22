import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

// Official WhatsApp icon SVG
const WhatsAppIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = "",
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface NavbarProps {
  onOpenModal: () => void;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-dark text-white border-b border-white/10 h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
              <span className="font-bold text-lg text-white">F</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-white">FactoryJet</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Dubai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-[#25D366] transition-colors text-white">
                <WhatsAppIcon size={18} />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <button
                onClick={onOpenModal}
                className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/30 flex items-center gap-2"
              >
                Get Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-navy/95 backdrop-blur-xl border-b border-white/10 pb-6 px-4 shadow-2xl">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-white/90 hover:text-secondary py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href="https://wa.me/919699977699?text=Hi%20FactoryJet%20Dubai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-lg font-semibold hover:bg-[#25D366]/20 transition-colors">
                <WhatsAppIcon size={18} /> WhatsApp Us
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold shadow-lg transition-colors"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
