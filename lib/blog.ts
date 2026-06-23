import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
  content: string
  contentHtml?: string
}

function parseDate(raw: string): string {
  if (!raw || !raw.trim()) return ''
  const d = new Date(raw)
  if (!isNaN(d.getTime())) return raw
  // Handle "Month DD, YYYY" format (e.g. "April 15, 2024")
  const d2 = new Date(raw + ' UTC')
  if (!isNaN(d2.getTime())) return d2.toISOString().split('T')[0]
  return ''
}

function extractExcerpt(content: string): string {
  const text = content
    .replace(/^---+\s*$/gm, '')               // strip horizontal rules / stray --- separators
    .replace(/^#+\s.+$/gm, '')                // strip headings
    .replace(/\*\*([^*]+)\*\*/g, '$1')        // strip **bold**, keep text
    .replace(/\*([^*]+)\*/g, '$1')            // strip *italic*, keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip [links](url), keep text
    .trim()

  const paragraphs = text.split(/\n\n+/)
  const first = paragraphs.find((p) => p.trim().length > 20) || ''
  const flat = first.replace(/\s+/g, ' ').trim()
  return flat.substring(0, 200) + (flat.length > 200 ? '...' : '')
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))
}

export function getAllPosts(): Omit<BlogPost, 'contentHtml'>[] {
  const slugs = getAllPostSlugs()

  const posts = slugs.map((slug) => {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      author: data.author || 'Brandon Labonte',
      date: parseDate(data.date || ''),
      excerpt: data.excerpt || extractExcerpt(content),
      content,
    }
  })

  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return a.date < b.date ? 1 : -1
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title || '',
      author: data.author || 'Brandon Labonte',
      date: parseDate(data.date || ''),
      excerpt: data.excerpt || extractExcerpt(content),
      content,
      contentHtml,
    }
  } catch {
    return null
  }
}
