import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CtaButton } from './CtaButton'
import { Breadcrumbs } from './Breadcrumbs'
import { PebbleStamp } from './PebbleStamp'
import { site } from '@/lib/site'
import type { Heading } from '@/lib/content'

export function ArticleLayout({
  title,
  description,
  verified,
  category,
  headings = [],
  children,
  breadcrumbs,
  showCta = true,
}: {
  title: string
  description: string
  verified?: string
  category?: string
  headings?: Heading[]
  children: React.ReactNode
  breadcrumbs?: { label: string; href?: string }[]
  showCta?: boolean
}) {
  const hasToc = headings.length > 0
  const isLegal = category === 'legal'

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className={`grid gap-10 ${hasToc ? 'lg:grid-cols-[1fr_280px]' : ''}`}>
          <article className="min-w-0">
            {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

            <header className="mb-8">
              {category && !isLegal && (
                <div className="mb-3">
                  <PebbleStamp label={category} />
                </div>
              )}
              <h1 className="font-display text-3xl font-extrabold text-forest sm:text-4xl md:text-5xl">
                {title}
              </h1>
              <p className="mt-3 text-lg text-mist">{description}</p>
              {verified && (
                <p className="mt-2 text-sm text-mist">
                  Last verified: {verified}
                </p>
              )}
              {showCta && !isLegal && (
                <div className="mt-6">
                  <CtaButton />
                </div>
              )}
            </header>

            <div className="prose-custom">{children}</div>

            {showCta && !isLegal && (
              <footer className="mt-12 rounded-2xl bg-sage/10 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-forest">
                  Start Playing {site.gameName}
                </h2>
                <p className="mt-2 text-mist">
                  Ready to play? Grab {site.gameName} now and start your adventure.
                </p>
                <div className="mt-4">
                  <CtaButton />
                </div>
              </footer>
            )}
          </article>

          {hasToc && (
            <aside className="hidden lg:block">
              <nav
                aria-label="Page contents"
                className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto rounded-2xl border border-sage/20 bg-oatmeal p-5"
              >
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-forest">
                  On this page
                </h2>
                <ol className="mt-4 space-y-2">
                  {headings.map((heading) => (
                    <li
                      key={heading.id}
                      className={heading.level === 3 ? 'pl-4' : ''}
                    >
                      <a
                        href={`#${heading.id}`}
                        className="block text-sm text-mist transition hover:text-forest hover:underline"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
