import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getPageSlugs, getPageBySlug, extractHeadings } from '@/lib/content'
import { ArticleLayout } from '@/components/ArticleLayout'
import { mdxComponents } from '@/components/MdxComponents'
import { site } from '@/lib/site'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getPageSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = getPageBySlug(params.slug)
  if (!page) return {}
  return {
    title: page.meta.title,
    description: page.meta.description,
    alternates: {
      canonical: `/${params.slug}/`,
    },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: `/${params.slug}/`,
      type: 'article',
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const page = getPageBySlug(params.slug)
  if (!page) notFound()

  const { meta, content } = page
  const headings = extractHeadings(content)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: meta.title,
            description: meta.description,
            url: `${site.url}/${params.slug}/`,
            dateModified: meta.verified,
          }),
        }}
      />
      <ArticleLayout
        title={meta.title}
        description={meta.description}
        verified={meta.verified}
        category={meta.category}
        headings={headings}
        showCta={meta.category !== 'legal'}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: meta.title },
        ]}
      >
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </ArticleLayout>
    </>
  )
}
