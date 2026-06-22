export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface ServiceItem {
    title: string;
    price: string;
    features: string[];
    ctaText: string;
    description?: string;
    highlight?: boolean;
  }
  
  export interface CaseStudy {
    title: string;
    category: string;
    challenge: string;
    solution: string;
    metrics: { value: string; label: string }[];
    quote: string;
  }
  
  export interface Testimonial {
    text: string;
    name: string;
    role: string;
    rating: number;
  }