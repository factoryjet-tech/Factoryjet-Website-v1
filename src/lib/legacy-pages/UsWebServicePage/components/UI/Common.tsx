import React from 'react';
import { Lightbulb, Target, ArrowRight } from 'lucide-react';

export const QuickAnswer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative group my-8 py-6 px-7 rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none overflow-hidden transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,82,204,0.12)] border-l-4 border-jet-blue hover:border-jet-orange bg-gradient-to-br from-[#EBF4FF] via-[#F0F9FF] to-[#E8F4FD]">
    
    {/* Decorative Watermark */}
    <div className="absolute -bottom-2 right-5 text-[120px] font-black text-jet-blue/5 rotate-[15deg] pointer-events-none leading-none select-none font-heading">
      ?
    </div>

    {/* Label Badge */}
    <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-br from-[#FFB020] to-[#FF8C00] text-white text-xs font-bold uppercase tracking-wide animate-label-glow shadow-[0_2px_8px_rgba(255,107,53,0.3)]">
      <Lightbulb className="w-4 h-4" />
      <span>Quick Answer</span>
    </div>

    {/* Answer Text */}
    <div className="relative mt-3 text-slate-900 text-[17px] font-medium leading-relaxed">
      {children}
    </div>

    {/* Schema Indicator */}
    <div className="absolute bottom-3 right-4 text-[10px] text-jet-blue/50 bg-jet-blue/5 px-2 py-1 rounded opacity-70">
      Featured Snippet Optimized
    </div>
  </div>
);

export const ExpertTake: React.FC<{ quote: string; author: string; role: string }> = ({ quote, author, role }) => (
  <div className="relative group rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 p-8 shadow-lg my-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="absolute -top-4 -right-4 w-24 h-24 bg-jet-orange/10 rounded-full blur-2xl group-hover:bg-jet-orange/20 transition-all"></div>
    <div className="flex items-center gap-3 mb-4 text-jet-orange font-bold text-xs uppercase tracking-widest relative z-10">
      <div className="p-2 rounded-full bg-jet-orange/10">
        <Target className="w-4 h-4" />
      </div>
      <span>FactoryJet Expert Take</span>
    </div>
    <blockquote className="text-navy text-xl md:text-2xl font-heading font-semibold italic leading-relaxed mb-6 relative z-10">
      "{quote}"
    </blockquote>
    <div className="flex items-center gap-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
            {author.charAt(0)}{author.split(' ')[1]?.charAt(0)}
        </div>
        <div>
            <div className="font-bold text-navy">{author}</div>
            <div className="text-slate-500 text-xs uppercase tracking-wide">{role}</div>
        </div>
    </div>
  </div>
);

export const SectionHeader: React.FC<{
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}> = ({ icon: Icon, eyebrow, title, subtitle, centered = true, dark = false }) => (
  <div className={`${centered ? 'text-center' : 'text-left'} mb-16 relative z-10`}>
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 shadow-sm ${
      dark 
        ? 'bg-white/10 border-white/20 text-white' 
        : 'bg-gradient-to-r from-blue-50 to-white border-blue-100 text-jet-blue'
    }`}>
      <Icon className="w-3 h-3" />
      <span>{eyebrow}</span>
    </div>
    <h2 className={`text-3xl md:text-5xl font-heading font-extrabold mb-6 leading-tight ${dark ? 'text-white' : 'text-navy'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', fullWidth, className = '', children, ...props }) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold tracking-tight transition-all duration-300 ease-out transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group";
  
  const variants = {
    primary: "bg-jet-blue text-white shadow-neon-blue hover:shadow-lg hover:bg-jet-blue-dark border border-transparent",
    secondary: "bg-white/10 backdrop-blur-sm text-jet-blue border border-jet-blue/20 hover:bg-white/80 hover:border-jet-blue",
    accent: "bg-jet-orange text-white shadow-neon-orange hover:shadow-lg hover:bg-jet-orange-dark border border-transparent",
    ghost: "bg-transparent text-slate-600 hover:text-jet-blue hover:bg-jet-blue/5"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Liquid morph hover effect for primary/accent */}
      {(variant === 'primary' || variant === 'accent') && (
        <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-t from-black/10 to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
      )}
    </button>
  );
};

export const CtaSection: React.FC<{ 
  title: string; 
  subtitle: string; 
  primaryBtn: string; 
  secondaryBtn: string; 
  variant?: 'blue' | 'orange' | 'dark';
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}> = ({ title, subtitle, primaryBtn, secondaryBtn, variant = 'blue', onPrimaryClick, onSecondaryClick }) => {
  const styles = variant === 'dark' 
    ? 'bg-navy text-white border-white/10' 
    : variant === 'orange' 
        ? 'bg-gradient-to-br from-jet-orange-light to-white text-navy border-jet-orange/10' 
        : 'bg-gradient-to-br from-jet-blue-light to-white text-navy border-jet-blue/10';

  return (
    <section className={`relative overflow-hidden py-20 px-6 ${styles} border rounded-3xl my-24 mx-4 md:mx-auto max-w-6xl text-center shadow-2xl`}>
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
       
      <h3 className={`relative z-10 text-3xl md:text-5xl font-heading font-bold mb-6 ${variant === 'dark' ? 'text-white' : 'text-navy'}`}>{title}</h3>
      <p className={`relative z-10 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant={variant === 'orange' ? 'accent' : 'primary'} onClick={onPrimaryClick}>{primaryBtn}</Button>
        <Button variant="secondary" className={variant === 'dark' ? 'bg-white/5 border-white/20 text-white hover:bg-white/10' : ''} onClick={onSecondaryClick}>
          {secondaryBtn}
        </Button>
      </div>
      
      <p className={`relative z-10 mt-8 text-xs font-bold uppercase tracking-widest opacity-60`}>
        No obligation • Free Strategy • Fast Response
      </p>
    </section>
  );
};