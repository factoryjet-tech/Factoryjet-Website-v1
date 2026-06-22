export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  price?: string;
  idealFor: string;
  description: string;
  features: string[];
}

export interface CaseStudyItem {
  badge: string;
  client: string;
  industry: string;
  services: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  testimonialAuthor?: string;
  keyAchievement?: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
  rating: number;
}
