import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogPost } from '../data.types';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onClick: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index, onClick }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const imageUrl = imageError ? '/blog_placeholder.webp' : post.imageUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(post)}
      className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer h-full flex flex-col"
    >
      {/* Image Container - Fixed Height */}
      <div className="relative overflow-hidden flex-shrink-0 h-40 md:h-48">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={imageUrl}
          alt={post.imageAlt || post.title}
          onError={handleImageError}
          width={400}
          height={192}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${post.imageFit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-700`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden" aria-hidden="true" />
      </div>

      {/* Content Container - Uniform Height */}
      <div className={`
        relative flex flex-col justify-between p-4 md:p-6 bg-white flex-grow
      `}>
        <div>
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <span className="px-2 md:px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FFF3EE] text-[#B23E13]">
              {post.category}
            </span>
            <span className="flex items-center text-xs text-gray-400">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-display font-bold text-gray-900 group-hover:text-[#F05A28] transition-colors duration-300 text-base md:text-lg lg:text-xl mb-2">
            {post.title}
          </h3>

          <p className="text-gray-600 line-clamp-2 md:line-clamp-3 text-xs md:text-sm mb-3 md:mb-4">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-3 md:pt-4">
          <div className="flex flex-col">
            <span className="text-xs md:text-sm font-medium text-gray-900">{post.author}</span>
            <div className="flex items-center text-xs text-gray-500 mt-0.5">
              <Calendar className="w-3 h-3 mr-1" />
              {post.date}
            </div>
          </div>

          <div className="bg-orange-50 p-1.5 md:p-2 rounded-full text-jetOrange transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
};