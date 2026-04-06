import React from 'react';

interface AuthorBylineProps {
  variant?: 'light' | 'dark';
}

export default function AuthorByline({ variant = 'light' }: AuthorBylineProps) {
  const textColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const linkColor = variant === 'dark' ? 'text-blue-400 hover:underline' : 'text-blue-600 hover:underline';

  return (
    <p className={`text-sm ${textColor} mt-3`}>
      By{" "}
      <a
        href="/author/bhavesh-barot/"
        className={linkColor}
      >
        Bhavesh Barot
      </a>{" "}
      · Founder at FactoryJet · 18+ Years Experience
    </p>
  );
}
