import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

// --- BUTTON ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', withArrow, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-jetBlue text-white hover:bg-jetBlue-600 shadow-lg hover:shadow-jetBlue/30 hover:-translate-y-0.5",
      secondary: "bg-white text-jetBlue border-2 border-jetBlue hover:bg-jetBlue-50",
      accent: "bg-jetOrange text-white hover:bg-jetOrange-600 shadow-lg hover:shadow-jetOrange/30 hover:-translate-y-0.5",
      ghost: "bg-transparent text-white hover:bg-white/10 border border-white/20 backdrop-blur-sm",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
        {withArrow && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </button>
    );
  }
);
Button.displayName = "Button";

// --- CONTAINER ---
export const Container = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

// --- SECTION ---
export const Section = ({ children, className, id }: { children?: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-16 md:py-24 lg:py-32 overflow-hidden", className)}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </section>
);

// --- BADGE ---
export const Badge = ({ children, variant = 'primary', className }: { children?: React.ReactNode; variant?: 'primary' | 'success' | 'warning'; className?: string }) => {
  const variants = {
    primary: "bg-jetBlue-50 text-jetBlue",
    success: "bg-jetGreen-50 text-jetGreen-600",
    warning: "bg-jetOrange-50 text-jetOrange-600",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
};

// --- CARD ---
export const Card = ({ children, className, hoverEffect = true }: { children?: React.ReactNode; className?: string; hoverEffect?: boolean }) => (
  <motion.div
    whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
    className={cn(
      "bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8",
      hoverEffect && "hover:shadow-xl hover:border-jetBlue/20 transition-all duration-300",
      className
    )}
  >
    {children}
  </motion.div>
);