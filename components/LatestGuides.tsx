import { getAllPages } from '@/lib/content'
import { GuideCard } from './GuideCard'

export function LatestGuides({ count = 6 }: { count?: number }) {
  const pages = getAllPages()
    .filter((page) => page.category !== 'legal')
    .slice(0, count)

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((page) => (
        <GuideCard
          key={page.slug}
          slug={page.slug}
          title={page.title}
          description={page.description}
          category={page.category}
        />
      ))}
    </div>
  )
}
