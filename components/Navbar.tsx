'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/lib/site'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-sage shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-cream">
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-md bg-cream p-1 text-forest"
          >
            <path
              d="M12 3C8 6 5 9 5 13C5 17 8 20 12 21C16 20 19 17 19 13C19 9 16 6 12 3Z"
              fill="currentColor"
            />
            <circle cx="9" cy="12" r="1.5" fill="#FDF8F0" />
            <circle cx="15" cy="12" r="1.5" fill="#FDF8F0" />
            <path d="M9 16C10.5 17 13.5 17 15 16" stroke="#FDF8F0" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="font-display text-lg font-bold">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {site.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.cta.url}
            target="_blank"
            rel="nofollow noopener"
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-terracotta/90"
          >
            {site.cta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-cream transition hover:bg-forest/30 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-cream/10 bg-sage md:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 py-3">
            <ul className="space-y-2">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-cream/90 transition hover:bg-forest/30 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.cta.url}
                  target="_blank"
                  rel="nofollow noopener"
                  className="block rounded-full bg-terracotta px-4 py-2 text-center text-sm font-semibold text-white"
                >
                  {site.cta.label}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
