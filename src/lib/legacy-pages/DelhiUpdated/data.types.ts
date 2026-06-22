export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  icon: any; // Lucide icon component
  title: string;
  price: string;
  timeline: string;
  description: string;
  features: string[];
  bestFor: string;
}

export interface ProblemItem {
  icon: any;
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: any;
  title: string;
  description: string;
}

export interface FeatureCategory {
  title: string;
  items: string[];
}

export interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  period: string; // e.g. "+ GST" or "/Year"
  popular?: boolean;
  categories: FeatureCategory[];
  buttonText: string;
}

export interface PricingTab {
  id: string;
  label: string;
  tiers: PricingTier[];
}

export interface CaseStudy {
  title: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  tech: string;
}

export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Timeline' | 'Technical';
}

export interface IndustryItem {
  icon: any;
  title: string;
  description: string;
  stats: string;
  areas: string;
}