import React from 'react';
import { ButtonVariant, ButtonSize } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}) => {
  // Added min-heights for better touch targets on mobile
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 hover:shadow-glow-primary focus:ring-primary shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-orange-600 hover:shadow-glow-secondary focus:ring-secondary shadow-lg shadow-secondary/20",
    ghost: "bg-transparent text-primary hover:bg-primary/5 hover:text-blue-700 focus:ring-gray-200",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary"
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-1.5 min-h-[40px]",
    md: "text-base px-6 py-3 gap-2 min-h-[48px]", // Mobile touch friendly min-height
    lg: "text-lg px-8 py-4 gap-2.5 min-h-[56px]"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};