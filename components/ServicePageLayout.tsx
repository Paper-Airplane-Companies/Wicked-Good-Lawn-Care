import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  title: string
  heroImage: string
  heroAlt: string
  intro: string
  whyHeading: string
  whyContent: string
  included: string[]
  secondaryImage?: string
  secondaryAlt?: string
}

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function ServicePageLayout({
  title,
  heroImage,
  heroAlt,
  intro,
  whyHeading,
  whyContent,
  included,
  secondaryImage,
  secondaryAlt,
}: Props) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-72 md:h-[420px] flex items-end">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-10 w-full">
            <Link
              href="/#services"
              className="text-green-300 hover:text-white text-sm mb-3 inline-block transition-colors"
            >
              &larr; All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              {title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">{intro}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{whyHeading}</h2>
              <p className="text-gray-700 leading-relaxed">{whyContent}</p>

              <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {secondaryImage && (
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={secondaryImage}
                  alt={secondaryAlt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-700 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-8">Ready to get started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3522831966"
                className="bg-white hover:bg-gray-100 text-green-800 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Call or Text (352) 283-1966
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white text-white hover:bg-green-600 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
