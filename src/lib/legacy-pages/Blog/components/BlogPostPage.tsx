'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BlogPost, FAQItem } from '../data.types';
import { ReadingProgress } from './ReadingProgress';
import { StickyCallToAction } from './StickyCallToAction';
import { getAuthorByName } from '@/data/authors';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Rocket,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Award,
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onBack?: () => void;
}

const KeyTakeaways = ({ items }: { items: string[] }) => (
  <div className="bg-blue-50/50 border-l-4 border-jetBlue p-4 md:p-6 my-6 md:my-8 rounded-r-xl">
    <div className="flex items-center gap-2 mb-3 md:mb-4">
      <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-jetBlue fill-current" />
      <h3 className="font-display font-bold text-base md:text-lg text-gray-900">Key Takeaways</h3>
    </div>
    <ul className="space-y-2 md:space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
          <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-100 text-jetBlue text-xs font-bold flex items-center justify-center mt-0.5">
            {idx + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FAQAccordion = ({ faqs }: { faqs: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 md:mt-16 bg-slate-50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-100" id="faqs">
      <h3 className="font-display font-bold text-xl md:text-2xl mb-4 md:mb-6 text-gray-900">Frequently Asked Questions</h3>
      <div className="space-y-3 md:space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-white rounded-lg md:rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`font-semibold text-sm md:text-base text-gray-900 ${isOpen ? 'text-jetBlue' : ''}`}>
                  {faq.q}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-jetBlue flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 flex-shrink-0 ml-2" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100/50 text-sm md:text-base">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  const [imageError, setImageError] = useState(false);

  const handleShare = async () => {
    const url = `https://factoryjet.com/blog/${post.slug}`;
    if (navigator.share) {
      await navigator.share({ title: post.title, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = imageError ? '/blog_placeholder.jpeg' : post.imageUrl;

  return (
    <div className="min-h-screen bg-slate-50 relative pt-16 md:pt-20">
      <ReadingProgress />
      <StickyCallToAction />

      {/* Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center text-gray-600 hover:text-jetBlue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm md:text-base">Back to Articles</span>
          </Link>

          <div className="hidden sm:flex items-center gap-3 md:gap-4">
             <span className="text-xs md:text-sm text-gray-500">Share:</span>
             <div className="flex gap-1 md:gap-2">
               <button className="p-1.5 md:p-2 text-gray-400 hover:text-jetBlue hover:bg-blue-50 rounded-full transition-all">
                 <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4" />
               </button>
               <button className="p-1.5 md:p-2 text-gray-400 hover:text-jetBlue hover:bg-blue-50 rounded-full transition-all">
                 <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
               </button>
             </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Header */}
      <header className="bg-white border-b border-gray-100 pt-8 pb-10 md:pt-16 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 text-jetBlue">
              {post.category}
            </span>
            <span className="flex items-center text-xs md:text-sm text-gray-500">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
              {post.readTime}
            </span>
            <span className="flex items-center text-xs md:text-sm text-gray-500">
              <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
              {post.date}
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-[1.1] mb-6 md:mb-8"
          >
            {post.title}
          </motion.h1>

          {(() => {
            const authorProfile = getAuthorByName(post.author);
            return (
              <Link
                href={authorProfile ? `/author/${authorProfile.slug}` : '/blog'}
                className="inline-flex items-center justify-center gap-3 md:gap-4 group/author"
              >
                <div className="relative">
                  <img
                    src={authorProfile?.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=0052CC&color=fff`}
                    alt={`${post.author} - Author`}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-[0_0_30px_-5px_rgba(0,82,204,0.3)]"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 border-2 border-white rounded-full" aria-hidden="true"></div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm md:text-lg leading-tight group-hover/author:text-jetBlue transition-colors">{post.author}</p>
                  <p className="text-xs md:text-sm text-gray-500">{authorProfile?.jobTitle || 'Senior Tech Journalist'}</p>
                </div>
              </Link>
            );
          })()}
        </div>
      </header>

      {/* Main Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-6 md:-mt-12 mb-10 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 aspect-[16/9] md:aspect-[21/9] bg-gray-100"
        >
          <img
            src={imageUrl}
            alt={post.imageAlt || post.title}
            onError={handleImageError}
            width={1200}
            height={514}
            loading="eager"
            decoding="async"
            className={`w-full h-full ${post.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
          />
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* REDESIGNED LAYOUT: 8 cols content + 4 cols sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16">

          {/* Main Content Area (Wider) */}
          <article className="lg:col-span-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 shadow-sm border border-gray-100">

              {/* Introduction/Excerpt */}
              {!post.hideExcerptOnPage && (
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-10 font-serif italic border-l-4 border-jetOrange pl-4 md:pl-6 py-2 bg-gray-50/50 rounded-r-lg">
                  "{post.excerpt}"
                </p>
              )}

              {/* AEO: Key Takeaways Module */}
              {post.keyTakeaways && (
                <div id="takeaways">
                  <KeyTakeaways items={post.keyTakeaways} />
                </div>
              )}

              {/* Main Content Body */}
              <div id="content" className="prose prose-slate prose-sm md:prose-base lg:prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-jetBlue prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg prose-p:leading-relaxed prose-li:text-gray-700">
                {post.content}
              </div>

              {/* AEO: FAQ Module */}
              {post.faqs && <FAQAccordion faqs={post.faqs} />}

              {/* Author Attribution Box (E-E-A-T) */}
              {(() => {
                const authorProfile = getAuthorByName(post.author);
                if (!authorProfile) return null;
                return (
                  <div className="mt-12 md:mt-16 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl md:rounded-2xl p-5 md:p-8 border border-gray-100" id="author">
                    <div className="flex items-start gap-4 md:gap-5">
                      <Link href={`/author/${authorProfile.slug}`} className="flex-shrink-0">
                        <img
                          src={authorProfile.image}
                          alt={`${authorProfile.name} - ${authorProfile.jobTitle}`}
                          width={80}
                          height={80}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl ring-2 ring-white shadow-lg"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Written by</span>
                        </div>
                        <Link href={`/author/${authorProfile.slug}`} className="group/name">
                          <h4 className="font-display font-bold text-lg md:text-xl text-gray-900 group-hover/name:text-jetBlue transition-colors">
                            {authorProfile.name}
                          </h4>
                        </Link>
                        <p className="text-jetBlue text-xs md:text-sm font-semibold mb-2">
                          {authorProfile.jobTitle}
                        </p>
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3">
                          {authorProfile.shortBio}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            href={`/author/${authorProfile.slug}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-jetBlue text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                          >
                            View Profile <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          {authorProfile.linkedin && (
                            <a
                              href={authorProfile.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0077B5]/10 text-[#0077B5] text-xs font-semibold hover:bg-[#0077B5] hover:text-white transition-colors"
                            >
                              <Linkedin className="w-3 h-3" /> LinkedIn
                            </a>
                          )}
                          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-orange-50 text-jetOrange text-xs font-semibold border border-orange-100">
                            <Award className="w-3 h-3" /> {authorProfile.yearsExperience} yrs exp.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>
          </article>

          {/* Right Sidebar: Consolidated (CTA + ToC) */}
          <aside className="lg:col-span-4 space-y-6 md:space-y-8">
            <div className="lg:sticky lg:top-24 space-y-6 md:space-y-8">
              
              {/* 1. High Converting CTA */}
              <div className="backdrop-blur-md bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl md:rounded-2xl p-5 md:p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-jetBlue to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white mb-3 md:mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 mb-2">
                    Transform Your Factory's Web Presence
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-5 md:mb-6 leading-relaxed">
                    Don't just read about growth. Get a high-performance, lead-generating website in just 7 days.
                  </p>

                  <Link href="/contact" className="w-full bg-[#0052CC] hover:bg-blue-700 text-white font-semibold py-3 md:py-3.5 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group/btn text-sm md:text-base">
                    Book Free Consultation
                    <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-center text-xs text-gray-400 mt-3">No commitment required. Limited slots.</p>
                </div>
              </div>


            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-5 md:mb-6">
                <button
                  aria-label="Share this article"
                  onClick={handleShare}
                  className="p-2 md:p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </button>
                <div className="h-6 md:h-8 w-px bg-gray-200" aria-hidden="true"></div>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://factoryjet.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="p-2 md:p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://factoryjet.com/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="p-2 md:p-3 bg-gray-50 rounded-full hover:bg-blue-50 hover:text-jetBlue transition-colors cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                </a>
            </div>
            <p className="text-gray-500 text-xs md:text-sm font-medium">&copy; 2026 FactoryJet. Designed for Growth.</p>
        </div>
      </footer>
    </div>
  );
};