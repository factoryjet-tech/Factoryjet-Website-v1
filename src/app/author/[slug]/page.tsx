import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import SiteHeader from '@/components/v2/SiteHeader'
import SiteFooter from '@/components/v2/SiteFooter'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'
import { AuthorPage } from '@/pages/Blog/components/AuthorPage'
import { getAllAuthors, getAuthorBySlug } from '@/data/authors'
import { POSTS } from '@/pages/Blog/posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    slug: author.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const author = getAuthorBySlug(resolvedParams.slug)

  if (!author) {
    return {
      title: 'Author Not Found | FactoryJet',
    }
  }

  return {
    title: `${author.name} | ${author.jobTitle}, FactoryJet Web Design`,
    description: author.bio,
    authors: [{ name: author.name }],
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
      type: 'profile',
      siteName: 'FactoryJet',
      title: `${author.name} - ${author.jobTitle}`,
      description: author.bio,
      url: `https://factoryjet.com/author/${resolvedParams.slug}`,
      images: [
        {
          url: author.image,
          width: 256,
          height: 256,
          alt: `${author.name} - ${author.jobTitle}`,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: `${author.name} - ${author.jobTitle}`,
      description: author.shortBio,
      images: [author.image],
    },
    alternates: {
      canonical: `https://factoryjet.com/author/${resolvedParams.slug}`,
    },
  }
}

function generateAuthorJsonLd(author: ReturnType<typeof getAuthorBySlug>) {
  if (!author) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: `https://factoryjet.com/author/${author.slug}`,
    jobTitle: author.jobTitle,
    description: author.bio,
    image: author.image,
    sameAs: [author.linkedin, author.twitter].filter(Boolean),
    knowsAbout: author.knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: 'FactoryJet',
      url: 'https://factoryjet.com',
    },
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const author = getAuthorBySlug(resolvedParams.slug)

  if (!author) {
    notFound()
  }

  const authorPosts = POSTS.filter((post) => post.author === author.name)
  const authorJsonLd = generateAuthorJsonLd(author)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Blog', url: 'https://factoryjet.com/blog' },
        { name: author.name, url: `https://factoryjet.com/author/${resolvedParams.slug}` },
      ]} />

      {authorJsonLd && (
        <Script
          id="author-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(authorJsonLd) }}
        />
      )}

      <SiteHeader locale="in" />
      <AuthorPage author={author} posts={authorPosts} />
      <SiteFooter locale="in" />
    </>
  )
}
