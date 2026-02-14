'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ModalRegion = 'in' | 'us';

interface ContactModalContextType {
  isOpen: boolean;
  region: ModalRegion;
  openModal: (region?: ModalRegion) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState<ModalRegion>('in');

  const openModal = (region: ModalRegion = 'in') => {
    setRegion(region);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, region, openModal, closeModal }}>
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
