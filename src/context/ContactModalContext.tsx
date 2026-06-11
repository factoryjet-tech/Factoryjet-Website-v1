'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

/* 'au' (2026-06-11): AU market launch — /au CTAs tag leads with region 'au'. */
export type ModalRegion = 'in' | 'us' | 'uk' | 'au';
/* 'seo' (2026-06-06): SEO-page CTAs ("Get your free {City} SEO audit") pre-select
   the SEO service and open on step 2, making the form effectively one step. */
export type ModalVariant = 'default' | 'ai' | 'seo';

interface ContactModalContextType {
  isOpen: boolean;
  region: ModalRegion;
  variant: ModalVariant;
  openModal: (region?: ModalRegion, variant?: ModalVariant) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState<ModalRegion>('in');
  const [variant, setVariant] = useState<ModalVariant>('default');

  const openModal = (region: ModalRegion = 'in', variant: ModalVariant = 'default') => {
    setRegion(region);
    setVariant(variant);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, region, variant, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
