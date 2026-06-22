import React from 'react';

export default function SkipLink() {
  return (
    <a 
      href="#main-content" 
      className="fixed top-4 left-4 z-[100] -translate-y-[150%] bg-jetBlue text-white px-6 py-3 rounded-lg font-bold shadow-xl transition-transform focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-jetOrange"
    >
      Skip to content
    </a>
  );
}