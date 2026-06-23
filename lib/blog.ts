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

    const excerpt =
      data.excerpt ||
      content
        .replace(/^#+\s.+$/m, '')
        .replace(/\*\*/g, '')
        .trim()
        .split('\n\n')[0]
        .substring(0, 200) + '...'

    return {
      slug,
      title: data.title || '',
      author: data.author || 'Brandon Labonte',
      date: data.date || '',
      excerpt,
      content,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    const excerpt =
      data.excerpt ||
      content
        .replace(/^#+\s.+$/m, '')
        .replace(/\*\*/g, '')
        .trim()
        .split('\n\n')[0]
        .substring(0, 200) + '...'

    return {
      slug,
      title: data.title || '',
      author: data.author || 'Brandon Labonte',
      date: data.date || '',
      excerpt,
      content,
      contentHtml,
    }
  } catch {
    return null
  }
}
