import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:brightness-110 shadow-glow",
    accent: "bg-secondary text-white hover:brightness-110 shadow-glow-accent",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
    outline: "bg-transparent text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};