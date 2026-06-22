import React from 'react';
import { BaseProps } from '../types';

interface HeadingProps extends BaseProps {
  level?: 1 | 2 | 3 | 4;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
}

export const Heading: React.FC<HeadingProps> = ({ 
  level = 1, 
  as, 
  children, 
  className = '' 
}) => {
  const Component = as || `h${level}` as any;
  
  const styles = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-navy",
    2: "text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-navy",
    3: "text-2xl md:text-3xl font-bold leading-[1.3] text-navy",
    4: "text-xl md:text-2xl font-bold leading-[1.4] text-navy",
  };

  return (
    <Component className={`${styles[level]} ${className}`}>
      {children}
    </Component>
  );
};

export const Text: React.FC<BaseProps & { size?: 'sm' | 'base' | 'lg', variant?: 'primary' | 'secondary' | 'light' }> = ({ 
  size = 'base', 
  variant = 'primary',
  children, 
  className = '' 
}) => {
  const sizes = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed",
    lg: "text-lg leading-relaxed"
  };
  
  const variants = {
    primary: "text-slate-700",
    secondary: "text-slate-500",
    light: "text-slate-400"
  };

  return (
    <p className={`${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </p>
  );
};