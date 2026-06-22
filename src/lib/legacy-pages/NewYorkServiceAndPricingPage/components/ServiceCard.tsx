import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:shadow-[0_8px_12px_rgba(0,82,204,0.15)] transition-all duration-300 h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-[#0052CC] rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold text-[#0F172A] mb-4 tracking-tight font-heading">
        {title}
      </h3>
      
      <p className="text-[#334155] leading-relaxed text-[16px]">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;