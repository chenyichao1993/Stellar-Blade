import Link from 'next/link'
import { ReactNode } from 'react'

export function CategoryCard({
  href,
  label,
  icon,
  color = 'sage',
}: {
  href: string
  label: string
  icon: ReactNode
  color?: 'sage' | 'sun' | 'terracotta' | 'forest'
}) {
  const colorMap = {
    sage: 'bg-sage/10 text-sage hover:bg-sage/20',
    sun: 'bg-sun/15 text-amber-700 hover:bg-sun/25',
    terracotta: 'bg-terracotta/10 text-terracotta hover:bg-terracotta/20',
    forest: 'bg-forest/10 text-forest hover:bg-forest/20',
  }

  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-sage/10 p-6 text-center transition hover:-translate-y-1 hover:shadow-sm ${colorMap[color]}`}
    >
      <span className="rounded-full bg-white/60 p-3 shadow-sm">{icon}</span>
      <span className="font-display font-bold">{label}</span>
    </Link>
  )
}
