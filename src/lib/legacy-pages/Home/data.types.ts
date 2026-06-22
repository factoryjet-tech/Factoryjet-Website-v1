import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PricingFeatureGroup {
  category: string;
  items: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeatureGroup[];
  isPopular?: boolean;
  buttonText: string;
  highlight?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Metric {
  value: string;
  label: string;
}
