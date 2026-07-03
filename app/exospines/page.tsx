import { ArticleLayout } from '@/components/ArticleLayout'
import { site } from '@/lib/site'
import exospines from '@/content/exospines.json'

export const metadata = {
  title: `${site.gameName} Exospines List`,
  description: `A complete list of Exospines in ${site.gameName}, including effects and the best builds for each one.`,
}

const pageUrl = `${site.url}/exospines/`

export default function ExospinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: metadata.title,
            description: metadata.description,
            url: pageUrl,
          }),
        }}
      />
      <ArticleLayout
        title={`${site.gameName} Exospines List`}
        description="Every Exospine in Stellar Blade, what it does, and which playstyle it supports."
        category="Exospines"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Exospines' },
        ]}
      >
        <p>
          Exospines are equippable enhancements that shape EVE's combat style. Swap them based on
          the enemy, region, or whether you want to emphasize offense, defense, or exploration.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-sage/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-sage text-cream">
              <tr>
                <th className="px-4 py-3 font-display font-bold">Exospine</th>
                <th className="px-4 py-3 font-display font-bold">Effect</th>
                <th className="px-4 py-3 font-display font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {exospines.map((exospine, index) => (
                <tr
                  key={exospine.name}
                  className={`border-t border-sage/20 ${
                    index % 2 === 1 ? 'bg-oatmeal' : 'bg-cream'
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-forest">{exospine.name}</td>
                  <td className="px-4 py-3 text-ink">{exospine.effect}</td>
                  <td className="px-4 py-3 text-ink">{exospine.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleLayout>
    </>
  )
}
