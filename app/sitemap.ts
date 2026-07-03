import { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { getPageSlugs, getQuestSlugs, getPageBySlug, getQuestBySlug } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutes = getPageSlugs().map((slug) => {
    const page = getPageBySlug(slug)
    return {
      route: `/${slug}/`,
      lastModified: page?.meta.verified,
    }
  })

  const questRoutes = getQuestSlugs().map((slug) => {
    const quest = getQuestBySlug(slug)
    return {
      route: `/quests/${slug}/`,
      lastModified: quest?.meta.verified,
    }
  })

  const staticRoutes = site.sitemapStaticRoutes.map((route) => ({
    route,
    lastModified: undefined as string | undefined,
  }))

  const routes = Array.from(
    new Map(
      [...pageRoutes, ...questRoutes, ...staticRoutes].map((item) => [
        item.route,
        item,
      ])
    ).values()
  )

  const today = new Date().toISOString().split('T')[0]

  return routes.map(({ route, lastModified }) => ({
    url: `${site.url}${route}`,
    lastModified: lastModified || today,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1.0 : 0.7,
  }))
}
