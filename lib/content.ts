import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { slugify } from './slugify'

const contentDir = path.join(process.cwd(), 'content')

export type PageMeta = {
  title: string
  description: string
  slug: string
  category?: string
  verified?: string
  date?: string
}

export type Heading = {
  id: string
  text: string
  level: number
}

function readMdx<T extends { title: string; description: string }>(dir: string, slug: string) {
  const filePath = path.join(contentDir, dir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const meta = { ...data, slug } as unknown as T
  for (const key of Object.keys(meta) as Array<keyof T>) {
    const value = meta[key]
    if (value instanceof Date) {
      // eslint-disable-next-line
      ;(meta as any)[key] = value.toISOString().split('T')[0]
    }
  }
  return {
    meta,
    content,
  }
}

function listSlugs(dir: string): string[] {
  const dirPath = path.join(contentDir, dir)
  if (!fs.existsSync(dirPath)) return []
  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPageSlugs() {
  return listSlugs('pages')
}

export function getPageBySlug(slug: string) {
  return readMdx<PageMeta>('pages', slug)
}

export function getAllPages() {
  return (getPageSlugs()
    .map((slug) => getPageBySlug(slug)?.meta)
    .filter(Boolean) as PageMeta[]
  ).sort((a, b) => {
    const dateA = a.verified || a.date || ''
    const dateB = b.verified || b.date || ''
    return dateB.localeCompare(dateA)
  })
}

export function getLatestPages(count = 6) {
  return getAllPages().slice(0, count)
}

export function getQuestSlugs() {
  return listSlugs('quests')
}

export function getQuestBySlug(slug: string) {
  return readMdx<PageMeta>('quests', slug)
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = []
  const lines = content.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      headings.push({ id: slugify(text), text, level })
    }
  }
  return headings
}
