import { ArticleLayout } from '@/components/ArticleLayout'
import { site } from '@/lib/site'
import bosses from '@/content/bosses.json'

export const metadata = {
  title: `${site.gameName} Bosses List`,
  description: `A complete list of bosses in ${site.gameName}, including locations, difficulty ratings, weaknesses, and key strategies.`,
}

const pageUrl = `${site.url}/bosses/`

export default function BossesPage() {
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
        title={`${site.gameName} Bosses List`}
        description="Every major Naytiba encounter, with difficulty ratings, weaknesses, and quick tips."
        category="Bosses"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Bosses' },
        ]}
      >
        <p>
          Stellar Blade features cinematic boss fights that test your parry, dodge, and Beta-skill
          timing. Below is a quick-reference list of the toughest Naytiba bosses and where to find
          them.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-sage/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-sage text-cream">
              <tr>
                <th className="px-4 py-3 font-display font-bold">Boss</th>
                <th className="px-4 py-3 font-display font-bold">Location</th>
                <th className="px-4 py-3 font-display font-bold">Type</th>
                <th className="px-4 py-3 font-display font-bold">Difficulty</th>
                <th className="px-4 py-3 font-display font-bold">Key Tip</th>
              </tr>
            </thead>
            <tbody>
              {bosses.map((boss, index) => (
                <tr
                  key={boss.name}
                  className={`border-t border-sage/20 ${
                    index % 2 === 1 ? 'bg-oatmeal' : 'bg-cream'
                  }`}
                >
                  <td className="px-4 py-3 font-bold text-forest">{boss.name}</td>
                  <td className="px-4 py-3 text-ink">{boss.location}</td>
                  <td className="px-4 py-3 text-ink">{boss.type}</td>
                  <td className="px-4 py-3 text-ink">{boss.difficulty}</td>
                  <td className="px-4 py-3 text-ink">{boss.keyTip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ArticleLayout>
    </>
  )
}
