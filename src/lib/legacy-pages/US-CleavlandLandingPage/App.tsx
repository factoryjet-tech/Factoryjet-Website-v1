'use client';

import React from 'react';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { useContactModal } from '@/context/ContactModalContext';
import { Home } from './views/Home';

const App: React.FC = () => {
  const { openModal } = useContactModal();
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-slate-50 selection:bg-primary/20 selection:text-primary">
      <Header basePath="/us" variant="solid" />
      <Home />
      <FooterUS onCtaClick={() => openModal('us')} />
    </div>
  );
};

export default App;