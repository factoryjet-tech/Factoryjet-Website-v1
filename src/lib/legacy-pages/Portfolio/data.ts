export interface PortfolioItem {
  id: string;
  name: string;
  url: string;
  logo: string;
  category: string;
  description: string;
  tags: string[];
}

export type PortfolioCategoryFilter = 'All' | 'Branding' | 'E-Commerce' | 'Corporate' | 'SaaS' | 'Service';

export const PORTFOLIO_CATEGORIES: PortfolioCategoryFilter[] = [
  'All',
  'Branding',
  'E-Commerce',
  'Corporate',
  'SaaS',
  'Service',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    name: 'Formative Concepts',
    url: 'https://formativeconcepts.com',
    logo: '/portfolio/formativeconcepts.png',
    category: 'Corporate',
    description: 'Professional corporate website for a consulting and strategic advisory firm.',
    tags: ['Corporate', 'Consulting'],
  },
  {
    id: '2',
    name: 'MindSource',
    url: 'https://mindsource.com',
    logo: '/portfolio/mindsource.png',
    category: 'Corporate',
    description: 'AI and data analytics consulting firm with a modern, professional web presence.',
    tags: ['AI', 'Consulting'],
  },
  {
    id: '3',
    name: 'GPS UK',
    url: 'https://gpsuk.co',
    logo: '/portfolio/gpsuk.png',
    category: 'SaaS',
    description: 'GPS tracking and fleet management SaaS platform for UK businesses.',
    tags: ['SaaS', 'GPS Tracking'],
  },
  {
    id: '4',
    name: 'Wetstone Labs',
    url: 'https://www.wetstonelabs.com',
    logo: '/portfolio/wetstonelabs.png',
    category: 'SaaS',
    description: 'Innovative tech lab website showcasing cutting-edge software solutions and services.',
    tags: ['SaaS', 'Tech'],
  },
  {
    id: '5',
    name: 'CuraShield',
    url: 'https://curashield-design-system.pages.dev',
    logo: '/portfolio/curashield.png',
    category: 'SaaS',
    description: 'Healthcare design system with comprehensive UI components and WCAG-compliant guidelines.',
    tags: ['Healthcare', 'Design System'],
  },
  {
    id: '6',
    name: 'VidAML',
    url: 'https://vidamltest.pages.dev',
    logo: '/portfolio/vidaml.png',
    category: 'SaaS',
    description: 'Anti-money laundering video verification platform with modern UX and compliance workflows.',
    tags: ['FinTech', 'Compliance'],
  },
  {
    id: '7',
    name: 'StegoHunt',
    url: 'https://stegohuntapp.pages.dev',
    logo: '/portfolio/stegohunt.png',
    category: 'SaaS',
    description: 'Steganography detection security app with a sleek interface and powerful analysis tools.',
    tags: ['Security', 'SaaS'],
  },
  {
    id: '8',
    name: 'KD Associates',
    url: 'https://kdassociates-sample.pages.dev',
    logo: '/portfolio/kdassociates.png',
    category: 'Corporate',
    description: 'Professional services firm website with clean design and a client-focused layout.',
    tags: ['Corporate', 'Professional Services'],
  },
];
