export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  services: string[];
  goal: string;
  timeline: string;
  budget: string;
  description: string;
  referral: string;
  contactMethod: string;
  bestTime: string;
  comments: string;
}

export type AccordionItem = {
  question: string;
  answer: string;
};

export const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  services: [],
  goal: '',
  timeline: '',
  budget: '',
  description: '',
  referral: '',
  contactMethod: '',
  bestTime: '',
  comments: '',
};