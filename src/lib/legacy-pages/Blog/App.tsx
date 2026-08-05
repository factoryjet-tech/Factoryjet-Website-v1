import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { POSTS } from './posts';
import { Category, BlogPost } from './data.types';
import { CategoryFilter } from './components/CategoryFilter';
import { BlogCard } from './components/BlogCard';

const App: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const sortedPosts = useMemo(() => {
    return [...POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return sortedPosts;
    return sortedPosts.filter(post => post.category === activeCategory);
  }, [activeCategory, sortedPosts]);

  const handlePostClick = (post: BlogPost) => {
    router.push(`/blog/${post.slug}`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans selection:bg-[#B23E13] selection:text-white">

      {/* Header Section */}
      <header className="pt-8 pb-6 md:pt-16 md:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[#B23E13] font-semibold tracking-wide uppercase text-xs md:text-sm mb-2">
            The FactoryJet Journal
          </p>
          <h1 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-6 leading-tight">
            Web &amp; Digital Insights for <span className="text-[#F05A28]">Growing Brands</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Expert strategies on web design, e-commerce, AI, and digital growth for SMBs across India and the US.
          </p>
        </div>
      </header>

      {/* Filter & Grid Section */}
      <main className="min-h-[800px]">
        <CategoryFilter 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-[#B23E13] font-medium hover:underline"
              >
                View all articles
              </button>
            </div>
          )}

          {/* 2026-08-04: the article list had no heading of its own. The page's only H2 was
              the newsletter block, so nothing on the page announced what the list actually is. */}
          {filteredPosts.length > 0 && (
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-6 md:mb-8">
              {activeCategory === 'All'
                ? `All articles (${filteredPosts.length})`
                : `${activeCategory} (${filteredPosts.length})`}
            </h2>
          )}

          {/* Bento Grid.
              2026-08-04: was a <div> of <article> cards. This page is literally a list of
              posts and rendered zero list items, which is the single highest-weighted
              structural check in the perfect-page rubric (X1) and the main way an answer
              engine reads a directory page. Now a real <ul>/<li>. Tailwind's preflight
              already strips list markers and padding from <ul>, and the <li> carries the
              grid item's height, so this renders identically. */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr list-none p-0 m-0">
            {filteredPosts.map((post, index) => (
              <li key={post.id} className="h-full">
                <BlogCard
                  post={post}
                  index={index}
                  onClick={handlePostClick}
                />
              </li>
            ))}
          </ul>

          {/* Newsletter Section */}
          <div className="mt-12 md:mt-20 bg-[#0F0F12] rounded-2xl md:rounded-3xl p-6 md:p-12 text-center md:text-left relative overflow-hidden">
             {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-jetOrange opacity-10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="max-w-xl">
                {/* 2026-08-04: was "Join 10,000+ Factory Owners" over "Get the latest
                    manufacturing insights". Unreplaced template boilerplate: FactoryJet is not
                    a manufacturing publication and has no verified 10,000-subscriber list, so
                    it was an invented figure aimed at the wrong audience, and it was the only
                    H2 on the page. No subscriber count replaces it, because there is no
                    confirmed number to use. */}
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 md:mb-4">
                  Get new posts by email
                </h2>
                <p className="text-white/90 text-sm md:text-lg">
                  Practical writing on web design, e-commerce, AI search and digital growth, sent when we publish. No spam, ever.
                </p>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="px-4 md:px-6 py-3 md:py-3.5 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-jetOrange outline-none w-full sm:w-80 text-sm md:text-base"
                  />
                  <button className="bg-[#B23E13] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-[#9A3510] transition-colors shadow-lg shadow-orange-900/20 whitespace-nowrap text-sm md:text-base">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/70 text-xs mt-3 text-center sm:text-left">
                  We care about your data in our privacy policy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;