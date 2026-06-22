import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      // Background: #FFFFFF, Border-radius: 12px, Subtle shadow
      // Added p-8 default padding for spacing
      className={`bg-white rounded-xl shadow-card border border-slate-100 p-8 ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 25px rgba(0, 82, 204, 0.1)" } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;