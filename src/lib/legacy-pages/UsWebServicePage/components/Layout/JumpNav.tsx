import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'platforms', label: 'Platforms' },
  { id: 'b2b', label: 'B2B' },
  { id: 'startup', label: 'Startups' },
  { id: 'local', label: 'Local' },
  { id: 'compare', label: 'Comparisons' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export const JumpNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 600;
      const shouldShow = window.scrollY > heroHeight - 100;
      setIsVisible(shouldShow);

      // Calculate scroll progress percentage for the top bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if the section is roughly in the top part of the viewport
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
        
        // Auto-scroll the nav on mobile to keep active item in view
        const navContainer = document.getElementById('jump-nav-scroll');
        const activeBtn = document.getElementById(`nav-btn-${current.id}`);
        if (navContainer && activeBtn && window.innerWidth < 768) {
          const scrollLeft = activeBtn.offsetLeft - (navContainer.clientWidth / 2) + (activeBtn.clientWidth / 2);
          navContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navs (Main Nav 72px + Jump Nav approx 60px + breathing room)
      const offset = 150; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-[60px] md:top-[72px] left-0 right-0 z-[90] transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      role="navigation"
      aria-label="Page sections"
    >
      <div className="container mx-auto px-0 md:px-4 max-w-[1200px]">
        {/* Glassmorphic Container */}
        <div className="bg-white/95 md:bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:rounded-2xl overflow-hidden relative">
          
          {/* Scroll Progress Indicator */}
          <div 
            className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-jet-blue via-jet-orange to-jet-green transition-all duration-100 ease-out z-20 rounded-r-sm"
            style={{ width: `${scrollProgress}%` }}
          />

          <div className="relative group">
            {/* Mobile Fade Indicators */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 to-transparent pointer-events-none z-10" />
            <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 to-transparent pointer-events-none z-10" />

            {/* Nav Items */}
            <div id="jump-nav-scroll" className="flex overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory">
              <div className="flex w-max min-w-full md:justify-center px-4 md:px-0">
                {sections.map(section => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      id={`nav-btn-${section.id}`}
                      onClick={() => scrollTo(section.id)}
                      className={`
                        snap-start relative px-5 py-4 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-jet-blue focus-visible:ring-inset
                        border-b-[3px] whitespace-nowrap
                        ${isActive 
                          ? 'text-jet-blue font-bold bg-gradient-to-b from-transparent to-jet-blue/5 border-jet-blue' 
                          : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-jet-blue/5 hover:border-jet-blue/20'
                        }
                      `}
                    >
                      {section.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};