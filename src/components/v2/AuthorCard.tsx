import React from 'react';
import Link from 'next/link';

interface AuthorCardProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function AuthorCard({ variant = 'light', className = '' }: AuthorCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 transition-all ${
        isDark
          ? 'bg-[#18181B] border-[#2E2E33] text-white shadow-xl shadow-black/20'
          : 'bg-white border-[#E6E6EC] text-[#141414] shadow-sm'
      } ${className}`.trim()}
      style={{ maxWidth: '960px', margin: '0 auto' }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        {/* Author Avatar / Badge */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#FF5622] to-[#B23E13] flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-md">
            BB
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center"
            title="Verified Technical Architect"
          >
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Author Details & Bio */}
        <div className="flex-grow">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5622] bg-[#FFF0EB] px-2.5 py-0.5 rounded-full">
              Senior Technical Leadership
            </span>
            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              18+ Years Engineering Experience
            </span>
          </div>

          <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${isDark ? 'text-white' : 'text-[#141414]'}`}>
            Bhavesh Barot
          </h3>

          <p className={`text-xs sm:text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-[#494852]'}`}>
            Founder &amp; Chief Technical Architect at FactoryJet · Enterprise Systems &amp; Frontend Specialist
          </p>

          <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-[#6E6E80]'}`}>
            Architect of high-performance Next.js web applications, headless commerce systems, and local search infrastructure for growing brands across North America. Every project is planned, reviewed, and deployed directly under senior technical supervision with zero junior agency handoffs.
          </p>

          {/* Entity Profile Links & Credentials */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold">
            <a
              href="https://www.linkedin.com/in/bhavesh-ai-gtm-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                isDark
                  ? 'border-gray-700 bg-gray-800 text-gray-200 hover:text-white hover:border-gray-500'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:text-[#141414] hover:border-gray-300'
              }`}
            >
              <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/factoryjet-tech"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                isDark
                  ? 'border-gray-700 bg-gray-800 text-gray-200 hover:text-white hover:border-gray-500'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:text-[#141414] hover:border-gray-300'
              }`}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub Organization
            </a>

            <Link
              href="/about"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                isDark
                  ? 'border-gray-700 bg-gray-800 text-gray-200 hover:text-white hover:border-gray-500'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:text-[#141414] hover:border-gray-300'
              }`}
            >
              About FactoryJet →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
