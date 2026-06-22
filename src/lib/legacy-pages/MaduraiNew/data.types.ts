import { LucideIcon } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  metric: string;
}

export interface ServiceCard {
  title: string;
  price: string;
  originalPrice?: string;
  delivery: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export interface ProblemCard {
  title: string;
  icon: LucideIcon;
  badge: string;
  description: string;
}

export interface ComparisonRow {
  aspect: string;
  without: string;
  with: string;
}

// Old Pricing Tier (kept for compatibility if needed, though we will replace usage)
export interface PricingTier {
  name: string;
  price: string;
  bestFor: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

// New Pricing Structures
export interface PricingFeatureCategory {
  category: string;
  features: string[];
}

export interface NewPricingPlan {
  name: string;
  subtitle: string;
  price: string;
  suffix: string;
  cta: string;
  highlight: boolean;
  features: PricingFeatureCategory[];
}

export interface PricingTab {
  id: string;
  label: string;
  plans: NewPricingPlan[];
}

export interface IndustryCard {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface CaseStudy {
  name: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: { metric: string; result: string }[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}
