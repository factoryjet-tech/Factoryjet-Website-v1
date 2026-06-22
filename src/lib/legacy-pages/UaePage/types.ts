export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  priceRange: string;
  description: string;
  bestFor: string;
  features: string[];
  timeline: string;
  keyBenefit: string;
}

export interface IndustryItem {
  name: string;
  stat: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  timeline: string;
  description: string;
}

export interface SuccessStory {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
  investment: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}