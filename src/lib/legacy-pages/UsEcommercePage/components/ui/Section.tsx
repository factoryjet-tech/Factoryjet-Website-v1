import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${dark ? 'text-white' : 'text-jet-dark'} ${className}`}
    >
      {children}
    </section>
  );
};

export const SectionHeader: React.FC<{ 
  eyebrow: string; 
  title: string; 
  subtitle?: string; 
  center?: boolean;
  dark?: boolean;
}> = ({ eyebrow, title, subtitle, center = true, dark = false }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'} max-w-3xl lg:max-w-4xl mx-auto`}>
    <span className={`text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block ${dark ? 'text-jet-green' : 'text-jet-blue'}`}>
      {eyebrow}
    </span>
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight mb-4 md:mb-6 leading-[1.1] ${dark ? 'text-white' : 'text-jet-dark'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl leading-relaxed ${dark ? 'text-slate-300' : 'text-jet-gray'} max-w-2xl mx-auto`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const Button: React.FC<{
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ variant = 'primary', children, className = '', onClick }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 md:py-3 border text-base font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";
  
  const variants = {
    primary: "border-transparent text-white bg-jet-orange hover:bg-orange-600 focus-visible:ring-jet-orange",
    secondary: "border-transparent text-white bg-jet-blue hover:bg-blue-700 focus-visible:ring-jet-blue",
    outline: "border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus-visible:ring-jet-blue",
    white: "border-transparent text-jet-blue bg-white hover:bg-slate-50 focus-visible:ring-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};