import { ArticleLayout } from '@/components/ArticleLayout'
import { FAQSchema } from '@/components/FAQSchema'
import { Accordion } from '@/components/Accordion'
import { site } from '@/lib/site'

export const metadata = {
  title: `${site.gameName} FAQ`,
  description: `Answers to the most common ${site.gameName} questions, from combat and bosses to endings and collectibles.`,
}

const faqs = [
  {
    question: `What is ${site.gameName}?`,
    answer: `${site.gameName} is an action RPG developed by Shift Up and published by Sony Interactive Entertainment. You play as EVE, an Airborne Squad member sent to a ruined Earth to fight the Naytiba threat and reclaim the planet for humanity.`,
  },
  {
    question: `Is ${site.gameName} a Soulslike game?`,
    answer: `It shares some Soulslike DNA — challenging bosses, camp checkpoints, and precise parry/dodge timing — but it is more forgiving. Death does not make you lose currency, and you can change difficulty at any time.`,
  },
  {
    question: `What are the best skills to unlock first?`,
    answer: `Prioritize Perfect Parry, Blink, Rush, Ambush, and Beta Energy Recharge. For Beta skills, Triplet and Shield Breaker give the best damage and utility early on.`,
  },
  {
    question: `How do I unlock all three endings?`,
    answer: `The ending depends on whether you take Adam's hand at the end and whether Lily's progress bar reached 100%. Return to Colony comes from refusing his hand. Cost of Lost Memories comes from accepting with Lily below 100%. Making New Memories comes from accepting with Lily at 100%, which also unlocks the secret Eidos 9 level.`,
  },
  {
    question: `What is the best way to farm Gold?`,
    answer: `Farm high-density enemy zones in the Wasteland and Great Desert, sell excess crafting materials, and replay camps near vending machines. End-game areas and bounty boards also reward large amounts of Gold.`,
  },
  {
    question: `How do I unlock fishing and the Ocean Maid outfit?`,
    answer: `Talk to Clyde at the Great Desert Oasis to get the fishing rod. Catch all 25 fish species to unlock the Ocean Maid outfit. You will need to complete the bulletin-board quest chain to unlock Fantastic Bait for the Jumbo fish.`,
  },
  {
    question: `Do Nano Suits affect gameplay?`,
    answer: `No, Nano Suits are purely cosmetic. They do not provide stat bonuses, but collecting 30 of them unlocks the Nano Suit Collector trophy.`,
  },
  {
    question: `Can I respec my skills?`,
    answer: `Yes. Use an SP Initializer at any camp's Skill Settings machine to reset your skill trees. SP Initializers can be found in chests or bought from vendors for 200 Gold.`,
  },
]

export default function FAQPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    url: `${site.url}/faq/`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FAQSchema questions={faqs} />
      <ArticleLayout
        title={`${site.gameName} FAQ`}
        description={`Quick answers to the most common questions about ${site.gameName}.`}
        category="FAQ"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      >
        <Accordion items={faqs} />
      </ArticleLayout>
    </>
  )
}
