'use client';

import React from 'react';
import Header from '@/components/Header';
import FooterUS from '@/components/FooterUS';
import { Home } from './views/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-700 bg-slate-50 selection:bg-primary/20 selection:text-primary">
      <Header basePath="/us" variant="solid" />
      <Home />
      <FooterUS />
    </div>
  );
};

export default App;