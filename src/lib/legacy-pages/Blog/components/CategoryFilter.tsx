import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../data.types';
import { Search } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CATEGORIES: Category[] = [
  'All', 
  'Web Design & Strategy', 
  'E-Commerce Development', 
  'Maintenance & Security', 
  'Emerging Tech'
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-20 md:top-20 z-40 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 py-3 md:py-4 mb-6 md:mb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">

          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`
                  px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${activeCategory === cat
                    ? 'bg-jetBlue text-white shadow-lg shadow-blue-500/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:block group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 md:h-4 md:w-4 text-gray-400 group-focus-within:text-jetBlue transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-9 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 w-56 md:w-64 bg-gray-50 border border-gray-200 rounded-full text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-jetBlue/20 focus:border-jetBlue transition-all"
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
};