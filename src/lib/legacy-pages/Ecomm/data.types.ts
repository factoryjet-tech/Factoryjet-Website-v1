
export interface BusinessModel {
  title: string;
  description: string;
  bestFor: string[];
  features?: string[];
  stats: string;
  icon?: string;
}

export interface Platform {
  name: string;
  description: string;
  why: string[];
  bestFor: string[];
  cost: string;
  timeline: string;
  roi: string;
  highlight?: boolean;
}

export interface FeatureItem {
  text: string;
  icon: string;
}

export interface FeatureSet {
  title: string;
  icon: string;
  description: string;
  items: FeatureItem[];
}

export interface ProcessStep {
  phase: string;
  duration: string;
  whatWeDo: string[];
  deliverables: string[];
}

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ROIData {
  investment: string;
  revenue: string;
  roi: string;
}
