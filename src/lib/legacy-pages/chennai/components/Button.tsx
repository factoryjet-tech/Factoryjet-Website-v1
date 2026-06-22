import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'whatsapp' | 'white';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  // Border-radius 8px (rounded-lg)
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 active:scale-95 text-base cursor-pointer relative overflow-hidden";
  
  const variants = {
    // Primary: Jet Blue
    primary: "bg-jet-blue hover:bg-jet-blueDark text-white shadow-lg shadow-jet-blue/20",
    // Secondary: White bg, Blue text/border
    secondary: "bg-white border-2 border-jet-blue text-jet-blue hover:bg-blue-50",
    // Accent CTA: Jet Orange (for Get Started)
    accent: "bg-jet-orange hover:bg-orange-600 text-white shadow-lg shadow-jet-orange/20 transform hover:-translate-y-0.5",
    // Outline: Neutral
    outline: "border-2 border-jet-navy/20 hover:border-jet-navy text-jet-navy bg-transparent",
    // White: For dark backgrounds (Final CTA)
    white: "bg-white text-jet-blue hover:bg-slate-50 shadow-xl shadow-black/10 font-bold",
    // WhatsApp - WCAG AA compliant colors
    whatsapp: "bg-whatsapp hover:bg-whatsapp-hover text-white shadow-lg shadow-green-500/30"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;