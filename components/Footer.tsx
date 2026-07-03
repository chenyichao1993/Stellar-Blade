import Link from 'next/link'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="mt-16 rounded-t-3xl bg-oatmeal px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-forest">
              <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-md bg-forest p-1 text-cream"
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
            <p className="mt-3 text-sm leading-relaxed text-mist">
              {site.footer.tagline}
            </p>
          </div>

          {site.footer.groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display font-bold text-forest">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition hover:text-forest hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-sage/20 pt-6 sm:flex-row">
          <p className="text-sm text-mist">
            © {new Date().getFullYear()} {site.name}. {site.footer.disclaimer}
          </p>
          <a
            href={site.cta.url}
            target="_blank"
            rel="nofollow noopener"
            className="text-sm font-semibold text-forest hover:underline"
          >
            {site.cta.label}
          </a>
        </div>
      </div>
    </footer>
  )
}
