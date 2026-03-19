'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useContactModal } from '@/context/ContactModalContext';

interface FormContextType {
  isFormOpen: boolean;
  openForm: (service?: string) => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { openModal, closeModal, isOpen } = useContactModal();

  const openForm = (service?: string) => {
    openModal('us');
  };

  const closeForm = () => {
    closeModal();
  };

  return (
    <FormContext.Provider value={{ isFormOpen: isOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
