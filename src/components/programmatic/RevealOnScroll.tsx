'use client';

import { motion, type Variants, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  /** Delay in seconds. Defaults to 0. Use to stagger sibling reveals. */
  delay?: number;
  /** Override default fade-up motion. Use 'fade' for fade-only (no Y translate). */
  variant?: 'fade-up' | 'fade';
  /** When true, runs only once when entering viewport. Defaults to true. */
  once?: boolean;
  /** Class on the wrapping element. */
  className?: string;
}

/**
 * Modern Agency motion primitive.
 *
 * Server-renders children at their final state (no FOUC).
 * On client hydration, applies the reveal animation when
 * the element enters the viewport at 20% visibility.
 *
 * Per spec §4: 400ms duration, 50ms stagger between siblings.
 * Honors prefers-reduced-motion (framer-motion built-in).
 */
export function RevealOnScroll({
  children,
  delay = 0,
  variant = 'fade-up',
  once = true,
  className = '',
}: RevealOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: variant === 'fade-up' ? 16 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for grids — children should each be
 * <RevealOnScroll delay={i * 0.05}> or wrap with this.
 *
 * Use for industries grid, case study tiles, logo strip.
 */
export function RevealStagger({
  children,
  staggerDelay = 0.05,
  className = '',
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.35 },
    },
  };

  // Normalize children to an array so we can wrap each in a <motion.div>
  // for the stagger to apply per child.
  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
