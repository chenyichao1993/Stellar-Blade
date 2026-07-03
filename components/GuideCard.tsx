import Link from 'next/link'
import { PebbleStamp } from './PebbleStamp'

export function GuideCard({
  slug,
  title,
  description,
  category,
}: {
  slug: string
  title: string
  description: string
  category?: string
}) {
  return (
    <Link
      href={`/${slug}/`}
      className="group flex flex-col rounded-2xl border border-sage/20 bg-oatmeal p-5 shadow-sm transition hover:-translate-y-1 hover:border-sage/40 hover:shadow-md"
    >
      <PebbleStamp label={category || 'Guide'} size="sm" />
      <h3 className="mt-3 font-display text-lg font-bold text-forest transition group-hover:text-terracotta">
        {title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-mist">{description}</p>
    </Link>
  )
}
