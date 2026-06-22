import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type CardVariant = 'standard' | 'glass' | 'bento' | 'outlined';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum Features {
  MANUFACTURING = 'Manufacturing',
  LOGISTICS = 'Logistics',
  ENGINEERING = 'Engineering',
  QUALITY = 'Quality Assurance'
}