import { LucideIcon } from 'lucide-react';

export interface StatProps {
  label: string;
  value: string;
  sub?: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface CaseStudyProps {
  industry: string;
  platform: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string; change: string }[];
  title: string;
}