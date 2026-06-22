import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { CaseStudyPage } from '@/pages/Case/components/CaseStudyPage'
import { CASE_STUDIES } from '@/pages/Case/data.constants'
import { BreadcrumbSchema } from '@/components/BreadcrumbSchema'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = CASE_STUDIES.find((c) => c.slug === resolvedParams.slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | FactoryJet',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | FactoryJet`,
    description: caseStudy.snippet,
    authors: [{ name: 'FactoryJet' }],
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
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.snippet,
      url: `https://factoryjet.com/case/${resolvedParams.slug}`,
      images: [
        {
          url: caseStudy.image || 'https://factoryjet.com/logo.png',
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - Case Study`,
      description: caseStudy.snippet,
      images: [caseStudy.image || 'https://factoryjet.com/logo.png'],
    },
    alternates: {
      canonical: `https://factoryjet.com/case/${resolvedParams.slug}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params
  const caseStudy = CASE_STUDIES.find((c) => c.slug === resolvedParams.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://factoryjet.com' },
        { name: 'Case Studies', url: 'https://factoryjet.com/case' },
        { name: caseStudy.title, url: `https://factoryjet.com/case/${resolvedParams.slug}` },
      ]} />
      <CaseStudyPage caseStudy={caseStudy} />
      <Footer />
    </>
  )
}
