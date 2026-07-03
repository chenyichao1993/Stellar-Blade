import { site } from '@/lib/site'

export function CtaButton() {
  return (
    <a
      href={site.cta.url}
      target="_blank"
      rel="nofollow noopener"
      className="inline-flex items-center rounded-full bg-terracotta px-6 py-3 font-display font-bold text-white shadow-sm transition hover:bg-terracotta/90 hover:shadow-md"
    >
      {site.cta.label}
    </a>
  )
}
