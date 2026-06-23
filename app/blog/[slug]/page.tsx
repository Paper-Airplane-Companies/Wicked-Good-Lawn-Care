import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Wicked Good Lawn Care`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="text-green-700 hover:underline text-sm mb-6 block">
          &larr; Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-green-800 mb-3">{post.title}</h1>
            <p className="text-gray-500 text-sm">
              By {post.author} &mdash;{' '}
              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          <div
            className="prose prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Need help with your lawn? We serve Alachua County and surrounding areas.
          </p>
          <Link
            href="/#contact"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
