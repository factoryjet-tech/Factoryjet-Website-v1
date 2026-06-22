export interface Milestone {
  phase: string;
  period: string;
  focus: string;
  description: string[];
  milestone: string;
}

export interface ValueItem {
  title: string;
  items: string[];
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface ReasonItem {
  title: string;
  subtitle: string;
  description: string[];
  comparison?: {
    label: string;
    items: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image?: string;
  LinkedInUrl?: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}