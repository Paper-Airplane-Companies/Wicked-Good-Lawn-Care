import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Playbook for a Wicked Good Lawn | Brandon Labonte',
  description:
    'Practical lawn care advice for savvy homeowners by Wicked Good Lawn Care owner Brandon Labonte. Available on Amazon.',
}

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-green-900 py-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-12">
            {/* Book cover */}
            <div className="shrink-0 relative w-48 h-72 rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/images/book-cover.jpg"
                alt="Playbook for a Wicked Good Lawn book cover"
                fill
                className="object-cover"
                sizes="192px"
                priority
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-3">
                Now Available
              </p>
              <h1 className="text-4xl font-extrabold text-white mb-3 leading-tight">
                Playbook for a Wicked Good Lawn
              </h1>
              <p className="text-green-200 text-xl mb-2">
                Contemporary Lawn Care Advice for Savvy Homeowners
              </p>
              <p className="text-gray-400 mb-2">By Brandon Labonte</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Practical, no-fluff guidance for homeowners who want a great-looking yard without the
                guesswork. Written from real-world experience across Alachua County.
              </p>
              <a
                href="https://amzn.to/4eWR76V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Buy on Amazon
              </a>
              <p className="text-gray-500 text-sm mt-3">Available on Kindle</p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">About the Book</h2>
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Brandon Labonte started Wicked Good Lawn Care in 2021 after a career in the Army and
              years in HR. He built the business on simple principles: show up, pay attention, and
              talk to people straight.
            </p>
            <p>
              This book applies those same principles to lawn care. It&apos;s written for homeowners
              who want practical answers — not a textbook, not vague advice that doesn&apos;t account
              for the Florida climate, and not a sales pitch.
            </p>
            <p>
              If you&apos;re in North Florida and you want to understand what your lawn actually
              needs — and why — this is a good place to start.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://amzn.to/4eWR76V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Buy on Amazon
            </a>
            <Link
              href="/#contact"
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center"
            >
              Get a Free Lawn Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
