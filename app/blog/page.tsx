import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Lawn Care Blog | Wicked Good Lawn Care',
  description:
    'Tips, guides, and real talk on lawn care in North Central Florida from Brandon Labonte at Wicked Good Lawn Care.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Lawn Care Blog</h1>
        <p className="text-gray-600 mb-10">
          Tips, seasonal guides, and real talk from the field in North Central Florida.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8 last:border-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-green-700 hover:text-green-900 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-3">
                {post.author}
                {post.date && (
                  <>
                    {' '}&mdash;{' '}
                    {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </>
                )}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-green-700 font-medium hover:underline"
              >
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
