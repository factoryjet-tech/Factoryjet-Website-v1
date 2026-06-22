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
    name: 'Impulse Branding',
    url: 'https://impulsebranding.in',
    logo: '/portfolio/impulsebranding.png',
    category: 'Branding',
    description: 'A creative branding agency website with bold visuals and dynamic storytelling.',
    tags: ['Branding', 'Web Design'],
  },
  {
    id: '2',
    name: 'Formative Concepts',
    url: 'https://formativeconcepts.com',
    logo: '/portfolio/formativeconcepts.png',
    category: 'Corporate',
    description: 'Professional corporate website for a consulting and strategic advisory firm.',
    tags: ['Corporate', 'Consulting'],
  },
  {
    id: '3',
    name: 'Belle Maison',
    url: 'https://bellemaison.in',
    logo: '/portfolio/bellemaison.png',
    category: 'E-Commerce',
    description: 'Elegant home decor e-commerce store with refined aesthetics and seamless shopping.',
    tags: ['E-Commerce', 'Home Decor'],
  },
  {
    id: '4',
    name: 'Bombay Petals',
    url: 'https://bombaypetals.in',
    logo: '/portfolio/bombaypetals.png',
    category: 'E-Commerce',
    description: 'Beautiful floral e-commerce platform delivering fresh flowers across India.',
    tags: ['E-Commerce', 'Flowers'],
  },
  {
    id: '5',
    name: 'GroFresh Agro',
    url: 'https://grofreshagro.com',
    logo: '/portfolio/grofreshagro.png',
    category: 'Corporate',
    description: 'Agricultural business website showcasing fresh produce and sustainable farming.',
    tags: ['Agriculture', 'Corporate'],
  },
  {
    id: '6',
    name: 'Shevva Car Driver Services',
    url: 'https://shevvaacardriverservices.com',
    logo: '/portfolio/shevva.png',
    category: 'Service',
    description: 'Professional car driver service platform with easy booking and fleet management.',
    tags: ['Service', 'Automotive'],
  },
  {
    id: '7',
    name: 'Flying Pixel',
    url: 'https://www.flyingpixel.in',
    logo: '/portfolio/flyingpixel.png',
    category: 'Branding',
    description: 'Creative digital agency website with stunning portfolio and interactive design.',
    tags: ['Branding', 'Agency'],
  },
  {
    id: '8',
    name: 'Rukman Transport',
    url: 'https://www.rukmantransport.com',
    logo: '/portfolio/rukmantransport.png',
    category: 'Service',
    description: 'Transport and logistics company website with fleet tracking and service details.',
    tags: ['Logistics', 'Transport'],
  },
  {
    id: '9',
    name: 'GPS UK',
    url: 'https://gpsuk.co',
    logo: '/portfolio/gpsuk.png',
    category: 'SaaS',
    description: 'GPS tracking and fleet management SaaS platform for UK businesses.',
    tags: ['SaaS', 'GPS Tracking'],
  },
  {
    id: '10',
    name: 'Wetstone Labs',
    url: 'https://www.wetstonelabs.com',
    logo: '/portfolio/wetstonelabs.png',
    category: 'SaaS',
    description: 'Innovative tech lab website showcasing cutting-edge software solutions.',
    tags: ['SaaS', 'Tech'],
  },
  {
    id: '11',
    name: 'CuraShield',
    url: 'https://curashield-design-system.pages.dev',
    logo: '/portfolio/curashield.png',
    category: 'SaaS',
    description: 'Healthcare design system with comprehensive UI components and guidelines.',
    tags: ['Healthcare', 'Design System'],
  },
  {
    id: '12',
    name: 'MindSource',
    url: 'https://mindsource.com',
    logo: '/portfolio/mindsource.png',
    category: 'Corporate',
    description: 'AI and data analytics consulting firm with a modern, professional web presence.',
    tags: ['AI', 'Consulting'],
  },
  {
    id: '13',
    name: 'StegoHunt',
    url: 'https://stegohuntapp.pages.dev',
    logo: '/portfolio/stegohunt.png',
    category: 'SaaS',
    description: 'Steganography detection app with sleek interface and powerful analysis tools.',
    tags: ['Security', 'SaaS'],
  },
  {
    id: '14',
    name: 'VidAML',
    url: 'https://vidamltest.pages.dev',
    logo: '/portfolio/vidaml.png',
    category: 'SaaS',
    description: 'Anti-money laundering video verification platform with modern UX.',
    tags: ['FinTech', 'Compliance'],
  },
  {
    id: '15',
    name: 'KD Associates',
    url: 'https://kdassociates-sample.pages.dev',
    logo: '/portfolio/kdassociates.png',
    category: 'Corporate',
    description: 'Professional services firm website with clean design and client-focused layout.',
    tags: ['Corporate', 'Professional Services'],
  },
];
