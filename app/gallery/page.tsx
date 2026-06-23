import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Photo Gallery | Wicked Good Lawn Care',
  description:
    'Photos of lawns, landscaping, and work done by Wicked Good Lawn Care in Alachua County, FL.',
}

const photos = [
  { src: '/images/gallery/01-riverside-lawn.jpg',     alt: 'Riverside lawn with picnic tables and waterfront property' },
  { src: '/images/gallery/02-golden-hour-home.jpg',   alt: 'Residential home with sweeping green lawn at golden hour' },
  { src: '/images/gallery/03-dusk-pond-dock.jpg',     alt: 'Large mowed property with pond and dock at dusk' },
  { src: '/images/gallery/04-craftsman-home.jpg',     alt: 'Two-story craftsman home with wide manicured lawn' },
  { src: '/images/gallery/05-stucco-home.jpg',        alt: 'Beige stucco home with bright green lawn and clean driveway' },
  { src: '/images/gallery/06-hillside-stucco.jpg',    alt: 'Elegant stucco home on hillside with sweeping green lawn and mature oaks' },
  { src: '/images/gallery/07-stucco-palms.jpg',       alt: 'Blue-green stucco home with queen palms and manicured island beds' },
  { src: '/images/gallery/08-egret-on-lawn.jpg',      alt: 'Lush green lawn with white egret near mature trees' },
  { src: '/images/gallery/09-curved-road-hedge.jpg',  alt: 'Beautifully edged curved road with red-leafed hedge' },
  { src: '/images/gallery/10-river-rock-garden.jpg',  alt: 'Backyard river rock garden bed with ornamental grass and privacy hedge' },
  { src: '/images/gallery/11-condo-after-trim.jpg',   alt: 'Condo complex with neatly trimmed round shrubs and rock beds' },
  { src: '/images/gallery/12-lawn-egret-trees.jpg',   alt: 'Residential lawn under mature trees with white egret' },
  { src: '/images/gallery/13-shaped-hedge-row.jpg',   alt: 'Multi-tier hedge row along home with metal roof, precisely shaped' },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Our Work</h1>
        <p className="text-gray-600 mb-10">
          A look at properties we&apos;ve cared for across Alachua County and surrounding areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Like what you see? We serve Alachua County and the surrounding area.
          </p>
          <a
            href="/#contact"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors inline-block"
          >
            Get a Free Quote
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
