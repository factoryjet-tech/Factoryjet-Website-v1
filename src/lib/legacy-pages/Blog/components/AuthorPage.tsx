'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Linkedin,
  ArrowUpRight,
  BookOpen,
  Award,
  Briefcase,
  Wrench,
  Sparkles,
  ArrowLeft,
  Calendar,
  Clock,
} from 'lucide-react'
import { AuthorProfile } from '@/data/authors'
import { BlogPost } from '../data.types'

interface AuthorPageProps {
  author: AuthorProfile
  posts: BlogPost[]
}

export const AuthorPage: React.FC<AuthorPageProps> = ({ author, posts }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 82 204) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full -mr-48 -mt-48 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-50 to-transparent rounded-full -ml-48 -mb-48 opacity-40" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-jetBlue transition-colors mb-8 md:mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            {/* Author Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex-shrink-0"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden ring-4 ring-white shadow-2xl shadow-blue-900/10">
                <img
                  src={author.image}
                  alt={`${author.name} - ${author.jobTitle}`}
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-green-500 border-4 border-white rounded-xl flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <h1 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl text-slate-900 mb-2 md:mb-3">
                {author.name}
              </h1>
              <p className="text-jetBlue font-semibold text-base md:text-lg mb-4 md:mb-5">
                {author.jobTitle}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mb-5 md:mb-6">
                {author.bio}
              </p>

              {/* Quick Stats + Social */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-jetBlue text-xs md:text-sm font-semibold border border-blue-100">
                  <Briefcase className="w-3.5 h-3.5" />
                  {author.yearsExperience} Years Experience
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-[#B23E13] text-xs md:text-sm font-semibold border border-orange-100">
                  <BookOpen className="w-3.5 h-3.5" />
                  {posts.length} Articles Published
                </span>
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0077B5]/10 text-[#0077B5] text-xs md:text-sm font-semibold border border-[#0077B5]/20 hover:bg-[#0077B5] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise, Credentials, Tools */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-jetBlue to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h2 className="font-display font-bold text-base md:text-lg text-slate-900">Expertise Areas</h2>
            </div>
            <ul className="space-y-2.5">
              {author.expertiseAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-jetBlue mt-1.5" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-jetOrange to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/25">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h2 className="font-display font-bold text-base md:text-lg text-slate-900">Credentials</h2>
            </div>
            <ul className="space-y-2.5">
              {author.credentials.map((cred, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-jetOrange mt-1.5" />
                  {cred}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
                <Wrench className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h2 className="font-display font-bold text-base md:text-lg text-slate-900">Tools & Platforms</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {author.toolsAndPlatforms.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-gray-50 text-xs font-medium text-gray-600 border border-gray-100"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Industries</h3>
              <div className="flex flex-wrap gap-1.5">
                {author.industries.map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-blue-50 text-xs font-medium text-jetBlue"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles by Author */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 md:pb-24">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <BookOpen className="w-5 h-5 text-jetBlue" />
          <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900">
            Articles by {author.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="relative h-40 md:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt || post.title}
                    width={400}
                    height={192}
                    loading="lazy"
                    className={`w-full h-full ${post.imageFit === 'contain' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-white/90 text-jetBlue backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-gray-900 group-hover:text-jetBlue transition-colors text-base md:text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm line-clamp-2 mb-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-jetOrange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
