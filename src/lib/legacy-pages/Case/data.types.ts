
export interface Metric {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  location: string;
  category: 'E-Comm' | 'SaaS' | 'Manufacturing' | 'FinTech' | 'Real Estate' | 'Healthcare' | 'EdTech' | 'Logistics' | 'Corporate' | 'Construction' | 'Other';
  image: string;
  title: string;
  snippet: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: Metric[];
  testimonial?: Testimonial;
  tags: string[];
}

export type CategoryFilter = 'All' | CaseStudy['category'];
