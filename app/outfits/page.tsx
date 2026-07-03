import { ArticleLayout } from '@/components/ArticleLayout'
import { site } from '@/lib/site'
import outfits from '@/content/outfits.json'

export const metadata = {
  title: `${site.gameName} Nano Suits & Outfits List`,
  description: `A complete list of Nano Suits and outfits in ${site.gameName}, with unlock requirements and regions.`,
}

const pageUrl = `${site.url}/outfits/`

export default function OutfitsPage() {
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
        title={`${site.gameName} Nano Suits & Outfits List`}
        description="Every cosmetic Nano Suit and outfit for EVE, where to find it, and how to unlock it."
        category="Outfits"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Outfits' },
        ]}
      >
        <p>
          Nano Suits are purely cosmetic, but collecting them is one of Stellar Blade's most
          rewarding side activities. Grab 30 suits to unlock the Nano Suit Collector trophy, or hunt
          all 40 for the complete wardrobe.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-sage/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-sage text-cream">
              <tr>
                <th className="px-4 py-3 font-display font-bold">Outfit</th>
                <th className="px-4 py-3 font-display font-bold">Region</th>
                <th className="px-4 py-3 font-display font-bold">Unlock Requirement</th>
                <th className="px-4 py-3 font-display font-bold">NG+ Variant</th>
              </tr>
            </thead>
            <tbody>
              {outfits.map((outfit, index) => (
                <tr
                  key={outfit.name}
                  className={`border-t border-sage/20 ${
                    index % 2 === 1 ? 'bg-oatmeal' : 'bg-cream'
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-forest">{outfit.name}</td>
                  <td className="px-4 py-3 text-ink">{outfit.region}</td>
                  <td className="px-4 py-3 text-ink">{outfit.unlock}</td>
                  <td className="px-4 py-3 text-ink">{outfit.ngVariant ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleLayout>
    </>
  )
}
