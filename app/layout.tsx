import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { AdsterraNativeBanner } from '@/components/AdsterraNativeBanner'
import './globals.css'

const rawGaId = process.env.NEXT_PUBLIC_GA_ID
const gaId = rawGaId && rawGaId !== 'G-XXXXXXXXXX' ? rawGaId : undefined
const rawClarityId = process.env.NEXT_PUBLIC_CLARITY_ID
const clarityId = rawClarityId && rawClarityId !== 'xxxxxxxxxx' ? rawClarityId : undefined
const adsterraPopunderUrl = process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_URL
const monetagTagUrl = process.env.NEXT_PUBLIC_MONETAG_TAG_URL

export const metadata: Metadata = {
  title: {
    default: site.metadata.defaultTitle,
    template: site.metadata.titleTemplate,
  },
  description: site.metadata.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: 'website',
    siteName: site.organization.name,
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: './',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.lang}>
      <head>
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {clarityId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
              `,
            }}
          />
        )}
        {adsterraPopunderUrl && (
          <script async src={adsterraPopunderUrl} />
        )}
        {monetagTagUrl && (
          <script async src={monetagTagUrl} data-zone="256182" data-cfasync="false" />
        )}

      </head>
      <body className="bg-cream text-ink antialiased">
        {children}
        <AdsterraNativeBanner />
      </body>
    </html>
  )
}
