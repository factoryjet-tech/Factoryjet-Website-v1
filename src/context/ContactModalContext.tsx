'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ModalRegion = 'in' | 'us' | 'uk';
export type ModalVariant = 'default' | 'ai';

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
