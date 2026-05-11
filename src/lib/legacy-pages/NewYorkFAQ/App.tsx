'use client';

import React from 'react';
import FAQSection from './components/FAQSection';
import GuaranteesSection from './components/GuaranteesSection';
import ContactSection from './components/ContactSection';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
        {/* Section 14: Comprehensive FAQ */}
        <FAQSection />

        {/* Section 15: Our Guarantees */}
        <GuaranteesSection />

        {/* Section 16: Contact & Call to Action */}
        <ContactSection />

        {/* Section 17: Final Call-to-Action */}
        <FinalCTA />
      </main>

    </div>
  );
}

export default App;
