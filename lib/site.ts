export const site = {
  name: 'Stellar Blade Hub',
  gameName: 'Stellar Blade',
  developerName: 'Shift Up',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stellarblade.site',
  lang: 'en',
  metadata: {
    defaultTitle: 'Stellar Blade Hub | Guides, Bosses, Builds & Secrets',
    titleTemplate: '%s | Stellar Blade Hub',
    description:
      'The ultimate fan guide for Stellar Blade. Walkthroughs, boss strategies, skill builds, endings, codes, fishing, outfits, and secrets.',
  },
  organization: {
    name: 'Stellar Blade Hub',
    sameAs: [] as string[],
  },
  contactEmail: 'motionjoy93@gmail.com',
  hero: {
    tagline: 'Stellar Blade Fan Guide',
    title: 'Your complete companion for Stellar Blade',
    description:
      'Master combat, defeat every Naytiba, unlock every ending, and collect every secret in EVE\'s journey through a ruined Earth.',
    image: undefined as string | undefined,
  },
  cta: {
    label: 'Get Stellar Blade',
    url: process.env.NEXT_PUBLIC_GAME_URL || 'https://www.playstation.com/en-us/games/stellar-blade/',
  },
  nav: [
    { label: 'Guides', href: '/#latest-guides' },
    { label: 'Bosses', href: '/bosses/' },
    { label: 'Exospines', href: '/exospines/' },
    { label: 'Outfits', href: '/outfits/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  footer: {
    tagline: 'A fan-made guide hub built to help players survive the Naytiba threat.',
    disclaimer: 'Not affiliated with Shift Up or Sony Interactive Entertainment.',
    groups: [
      {
        title: 'Guides',
        links: [
          { label: "Beginner's Guide", href: '/beginners-guide/' },
          { label: 'Combat Guide', href: '/combat-guide/' },
          { label: 'Best Skills', href: '/best-skills-tier-list/' },
          { label: 'Best Exospines', href: '/best-exospines/' },
          { label: 'FAQ', href: '/faq/' },
        ],
      },
      {
        title: 'Bosses & Story',
        links: [
          { label: 'All Bosses', href: '/all-bosses-guide/' },
          { label: 'Raven Boss Guide', href: '/raven-boss-guide/' },
          { label: 'Tachy Boss Guide', href: '/tachy-boss-guide/' },
          { label: 'All Endings', href: '/all-endings-guide/' },
          { label: 'New Game Plus', href: '/new-game-plus-guide/' },
        ],
      },
      {
        title: 'Collectibles',
        links: [
          { label: 'All Passcodes', href: '/all-passcodes-codes/' },
          { label: 'Nano Suits', href: '/nano-suits-outfits/' },
          { label: 'Fishing Guide', href: '/fishing-guide/' },
          { label: 'Collectibles', href: '/collectibles-guide/' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'About', href: '/about/' },
          { label: 'Contact', href: '/contact/' },
          { label: 'Privacy Policy', href: '/privacy-policy/' },
          { label: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        ],
      },
    ],
  },
  homeCategories: [
    { label: 'Bosses', href: '/all-bosses-guide/', icon: 'sword' as const, color: 'terracotta' as const },
    { label: 'Skills', href: '/best-skills-tier-list/', icon: 'zap' as const, color: 'sun' as const },
    { label: 'Outfits', href: '/nano-suits-outfits/', icon: 'shirt' as const, color: 'sage' as const },
    { label: 'FAQ', href: '/faq/', icon: 'help' as const, color: 'forest' as const },
  ],
  sitemapStaticRoutes: [
    '/',
    '/about/',
    '/contact/',
    '/privacy-policy/',
    '/affiliate-disclosure/',
    '/faq/',
    '/bosses/',
    '/exospines/',
    '/outfits/',
  ],
}
