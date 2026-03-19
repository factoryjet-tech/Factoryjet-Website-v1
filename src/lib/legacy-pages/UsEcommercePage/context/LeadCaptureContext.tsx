'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useContactModal } from '@/context/ContactModalContext';

interface LeadCaptureContextType {
  isFormOpen: boolean;
  openForm: (initialInterest?: string) => void;
  closeForm: () => void;
  initialInterest: string;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export const LeadCaptureProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { openModal, closeModal, isOpen } = useContactModal();

  const openForm = (interest: string = 'General Inquiry') => {
    openModal('us');
  };

  const closeForm = () => {
    closeModal();
  };

  return (
    <LeadCaptureContext.Provider value={{ isFormOpen: isOpen, openForm, closeForm, initialInterest: '' }}>
      {children}
    </LeadCaptureContext.Provider>
  );
};

export const useLeadCapture = () => {
  const context = useContext(LeadCaptureContext);
  if (!context) {
    throw new Error('useLeadCapture must be used within a LeadCaptureProvider');
  }
  return context;
};
