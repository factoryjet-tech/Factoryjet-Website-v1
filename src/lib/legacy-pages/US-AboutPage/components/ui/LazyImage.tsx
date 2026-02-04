import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

export interface LazyImageProps extends HTMLMotionProps<'img'> {
  src?: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export default function LazyImage({ src, alt, className, containerClassName, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-slate-100", containerClassName)}>
      {/* Blurred Placeholder Effect (fade out when loaded) */}
      <motion.div
        className="absolute inset-0 bg-slate-200 z-10"
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Main Image */}
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ 
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
        className={cn("w-full h-full object-cover block", className)}
        {...props}
      />
    </div>
  );
}