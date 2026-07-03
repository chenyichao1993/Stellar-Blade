import { LatestGuides } from '@/components/LatestGuides'
import { CtaButton } from '@/components/CtaButton'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CategoryCard } from '@/components/CategoryCard'
import { Sword, Zap, Shirt, HelpCircle } from 'lucide-react'
import { site } from '@/lib/site'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  sword: <Sword className="h-6 w-6" />,
  zap: <Zap className="h-6 w-6" />,
  shirt: <Shirt className="h-6 w-6" />,
  help: <HelpCircle className="h-6 w-6" />,
}

export default function HomePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.organization.name,
    url: site.url,
    sameAs: site.organization.sameAs,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <section className="relative overflow-hidden rounded-3xl">
          {site.hero.image ? (
            <Image
              src={site.hero.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              unoptimized
            />
          ) : null}
          <div
            className={`absolute inset-0 ${
              site.hero.image
                ? 'bg-gradient-to-br from-forest/90 via-forest/80 to-sage/70'
                : 'bg-gradient-to-br from-forest via-forest/90 to-sage'
            }`}
          />
          <div className="relative px-6 py-16 text-center text-white sm:px-12 sm:py-24">
            <span className="font-pixel text-sm uppercase tracking-[0.2em] text-sun">
              {site.hero.tagline}
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              {site.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-cream/90 sm:text-xl">
              {site.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CtaButton />
              <Link
                href="/beginners-guide/"
                className="rounded-full bg-cream px-6 py-3 font-display font-bold text-forest shadow-sm transition hover:bg-white hover:shadow-md"
              >
                Read Beginner&apos;s Guide
              </Link>
            </div>
          </div>
        </section>

        <section id="latest-guides" className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-forest sm:text-3xl">
                Latest Guides
              </h2>
              <p className="mt-1 text-mist">Fresh tips and walkthroughs for {site.gameName}.</p>
            </div>
          </div>
          <LatestGuides count={6} />
        </section>

        <section className="mt-16">
          <h2 className="text-center font-display text-2xl font-bold text-forest">
            Explore {site.gameName}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.homeCategories.map((category) => (
              <CategoryCard
                key={category.href}
                href={category.href}
                label={category.label}
                icon={iconMap[category.icon]}
                color={category.color}
              />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-sage/20 bg-oatmeal p-6 sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold text-forest">
              Why use this guide?
            </h2>
            <p className="mt-3 text-mist">
              Stellar Blade blends fast action RPG combat with deep exploration. Whether you are
              stuck on a boss, hunting for every Nano Suit, or trying to unlock the secret Eidos 9
              ending, our guides are written to get you back into the fight fast.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
