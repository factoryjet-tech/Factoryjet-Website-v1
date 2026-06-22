import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AccordionItemProps {
  icon: LucideIcon;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface HiddenCostRow {
  save: string;
  lose: string;
}