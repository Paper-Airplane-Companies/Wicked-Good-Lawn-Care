import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Gallery | Wicked Good Lawn Care',
  description:
    'See our work across Alachua County — lawns, shrubs, mulching, cleanups, and more from Wicked Good Lawn Care.',
}

const photos = [
  { src: '/images/gallery/01-riverside-lawn.jpg',    alt: 'Riverside property with wide green lawn, mature trees, and picnic tables at the waterfront' },
  { src: '/images/gallery/04-craftsman-home.jpg',    alt: 'Large two-story craftsman home with wide, perfectly manicured bright green lawn' },
  { src: '/images/gallery/02-golden-hour-home.jpg',  alt: 'Residential home at golden hour with sweeping green lawn and curved driveway' },
  { src: '/images/gallery/06-hillside-stucco.jpg',   alt: 'Elegant stucco home on hillside with sweeping bright green lawn and mature oak trees' },
  { src: '/images/gallery/03-dusk-pond-dock.jpg',    alt: 'Atmospheric dusk scene of large mowed property with pond and lit dock reflecting in water' },
  { src: '/images/gallery/07-stucco-palms.jpg',      alt: 'Blue-green stucco home with tall queen palms and manicured island bed with red mulch' },
  { src: '/images/gallery/08-egret-on-lawn.jpg',     alt: 'Lush green lawn next to concrete driveway with mature trees and a white egret' },
  { src: '/images/gallery/09-curved-road-hedge.jpg', alt: 'Beautifully edged curved road with red-leafed hedge and clean green lawn' },
  { src: '/images/gallery/05-stucco-home.jpg',       alt: 'Clean beige stucco home with wide bright green lawn and clean driveway in afternoon light' },
  { src: '/images/gallery/10-river-rock-garden.jpg', alt: 'Backyard river rock garden bed with ornamental grass, impatiens, and tall privacy hedge' },
  { src: '/images/gallery/13-shaped-hedge-row.jpg',  alt: 'Beautifully shaped multi-tier hedge row along front of home with metal roof, clean and precise' },
  { src: '/images/gallery/11-condo-after-trim.jpg',  alt: 'Well-maintained condo complex with neatly trimmed round shrubs and rock beds' },
  { src: '/images/photos/WGLC_photo_75.jpg',         alt: 'Residential garden bed with fan palms, red flowers, fresh mulch, and clean green lawn' },
  { src: '/images/gallery/12-lawn-egret-trees.jpg',  alt: 'Lush residential lawn under mature trees with white egret bird near ornamental grass bed' },
  { src: '/images/photos/WGLC_photo_111.jpg',        alt: 'Elegant front entry of stucco home with fan palm, manicured shrubs, and path lighting' },
  { src: '/images/photos/WGLC_photo_51.jpg',         alt: 'Condo front with neatly trimmed red-leaf and green shrubs in fresh mulch beds' },
  { src: '/images/photos/WGLC_photo_35.jpg',         alt: 'Low-angle close-up of St. Augustine grass carpet in front of stucco home' },
  { src: '/images/photos/WGLC_photo_134.jpg',        alt: 'Neat residential front yard with manicured shrubs, driveway, and brick planter' },
  { src: '/images/photos/WGLC_photo_62.JPG',         alt: 'Large two-story stucco home with tall palms, maintained shrub beds, and green lawn' },
  { src: '/images/photos/WGLC_photo_122.jpg',        alt: 'Beautiful live oak tree on open green pasture with horse fence and home in background' },
  { src: '/images/photos/WGLC_photo_28.jpg',         alt: 'Side of stucco building with neatly trimmed round shrubs along a clean green lawn' },
  { src: '/images/photos/WGLC_photo_59.jpg',         alt: 'Straw hat on truck dashboard with beautiful sunrise through the windshield' },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-green-900 py-20 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">Our Work</h1>
          <p className="text-green-200 text-xl max-w-2xl mx-auto">
            A look at what we deliver across Alachua County and surrounding areas.
          </p>
        </section>

        {/* Photo grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-50 py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-3">
            Ready for a lawn that looks like this?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We serve Alachua County and surrounding areas. Free quotes, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/lawn-mowing"
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See Our Services
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
