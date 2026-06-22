import { LucideIcon } from "lucide-react";

export interface ServiceCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  icon: string;
  description: string;
  includes: string[];
  bestFor: string;
  delivery: string;
  className?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseStudyProps {
  badge: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string[];
  timeline: string;
}

export interface PricingTier {
  title: string;
  price: string;
  label?: string;
  description: string;
  includes: string[];
  cta: string;
}