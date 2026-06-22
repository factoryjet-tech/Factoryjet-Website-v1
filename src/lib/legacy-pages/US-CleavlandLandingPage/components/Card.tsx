import React from 'react';
import { CardVariant, BaseProps } from '../types';

interface CardProps extends BaseProps {
  variant?: CardVariant;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'standard',
  hoverEffect = false,
  onClick,
  children,
  className = ''
}) => {
  const baseStyles = "rounded-2xl transition-all duration-300 overflow-hidden";
  
  const variants = {
    standard: "bg-white border border-light shadow-sm",
    glass: "bg-white/80 backdrop-blur-xl border border-white/50 shadow-glass",
    bento: "bg-slate-50 border border-light shadow-sm hover:shadow-md h-full flex flex-col",
    outlined: "bg-transparent border border-light"
  };

  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-1 hover:shadow-glow-primary/20 cursor-pointer" 
    : "";

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};