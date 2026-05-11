import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { BlogPostPage } from '@/pages/Blog/components/BlogPostPage'
import { POSTS } from '@/pages/Blog/posts'
import { getAuthorByName } from '@/data/authors'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | FactoryJet',
    }
  }

  return {
    title: post.meta?.title || `${post.title} | FactoryJet Blog`,
    description: post.meta?.description || post.excerpt,
    authors: [{ name: post.author }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      siteName: 'FactoryJet',
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt,
      url: `https://factoryjet.com/blog/${resolvedParams.slug}`,
      images: [
        {
          url: post.imageUrl?.startsWith('http') ? post.imageUrl : `https://factoryjet.com${post.imageUrl || '/logo.png'}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta?.title || post.title,
      description: post.meta?.description || post.excerpt,
      images: [post.imageUrl?.startsWith('http') ? post.imageUrl : `https://factoryjet.com${post.imageUrl || '/logo.png'}`],
    },
    alternates: {
      canonical: `https://factoryjet.com/blog/${resolvedParams.slug}`,
    },
  }
}

// Generate Article JSON-LD structured data for SEO
function generateArticleJsonLd(post: typeof POSTS[0], slug: string) {
  const authorProfile = getAuthorByName(post.author)

  const authorSchema = authorProfile
    ? {
        '@type': 'Person' as const,
        name: authorProfile.name,
        url: `https://factoryjet.com/author/${authorProfile.slug}`,
        jobTitle: authorProfile.jobTitle,
        description: authorProfile.shortBio,
        sameAs: [authorProfile.linkedin, authorProfile.twitter].filter(Boolean),
        knowsAbout: authorProfile.knowsAbout,
        worksFor: {
          '@type': 'Organization' as const,
          name: 'FactoryJet',
          url: 'https://factoryjet.com',
        },
      }
    : {
        '@type': 'Person' as const,
        name: post.author,
      }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl?.startsWith('http') ? post.imageUrl : `https://factoryjet.com${post.imageUrl || '/logo.png'}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: authorSchema,
    publisher: {
      '@type': 'Organization',
      name: 'FactoryJet',
      logo: {
        '@type': 'ImageObject',
        url: 'https://factoryjet.com/FinalLogo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://factoryjet.com/blog/${slug}`,
    },
  }
}

// Generate FAQ JSON-LD structured data for SEO (AEO optimization)
function generateFaqJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const post = POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const articleJsonLd = generateArticleJsonLd(post, resolvedParams.slug)
  const faqJsonLd = post.faqs ? generateFaqJsonLd(post.faqs) : null

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Blog', url: 'https://factoryjet.com/blog' },
        { name: post.title, url: `https://factoryjet.com/blog/${resolvedParams.slug}` },
      ]} />

      {/* Article Structured Data */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* FAQ Structured Data (if FAQs exist) */}
      {faqJsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <SiteHeader />
      <BlogPostPage post={post} />
      <SiteFooter />
    </>
  )
}
