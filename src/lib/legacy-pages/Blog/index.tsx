'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogApp from './App';

const Blog: React.FC = () => {
  return (
    <>
      <Header variant="solid" />
      <BlogApp />
      <Footer />
    </>
  );
};

export default Blog;
