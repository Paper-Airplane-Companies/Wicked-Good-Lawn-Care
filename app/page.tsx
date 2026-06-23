import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    href: "/services/lawn-mowing",
    photo: "/images/services/lawn-care.jpg",
    photoAlt: "Zero-turn mower creating perfect stripes on a green lawn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18M7 19V14c-1-1-1-3 0-5M12 19V12c-1-2-1-4 0-6M17 19V14c1-1 1-3 0-5" />
      </svg>
    ),
    title: "Lawn Care",
    description:
      "Mowing, edging, trimming, and blowing on a schedule that keeps your lawn healthy and sharp all season.",
  },
  {
    href: "/services/mulching",
    photo: "/images/services/mulching.jpg",
    photoAlt: "Freshly mulched curved driveway island bed with shaped shrubs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" d="M3 9h18M3 13h18M3 17h18" />
      </svg>
    ),
    title: "Mulching Magic",
    description:
      "Fresh mulch to clean up your beds, lock in moisture, and keep the weeds down.",
  },
  {
    href: "/services/seasonal-cleanup",
    photo: "/images/services/cleanups.jpg",
    photoAlt: "Crew loading brush and debris clippings into a trailer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V14M12 14c-2 0-6-3-6-8a6 6 0 0 1 12 0c0 5-4 8-6 8z" />
      </svg>
    ),
    title: "Seasonal Cleanups",
    description:
      "Clearing leaves, debris, and yard waste so your property stays tidy through the seasons.",
  },
  {
    href: "/services/gutter-cleaning",
    photo: "/images/services/gutters.jpg",
    photoAlt: "Crew member on tall ladder working at height with WGLC trailer visible",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5L12 4l9 7.5M5 11.5V19h14v-7.5M10 19v-4h4v4" />
        <path strokeLinecap="round" d="M9 22l.5-2M12 22l.5-2M15 22l.5-2" />
      </svg>
    ),
    title: "Gutter Cleaning",
    description:
      "Clearing your gutters to protect your home from water damage, pests, and roof problems.",
  },
  {
    href: "/services/shrub-sculpting",
    photo: "/images/services/shrubs.jpg",
    photoAlt: "Crew member in branded WGLC shirt using pole hedge trimmer on large shrub",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18h14M7 18a5 5 0 0 1 10 0M5 14a7 7 0 0 1 14 0" />
        <path strokeLinecap="round" d="M12 14V9M9.5 11.5l2.5-2.5 2.5 2.5" />
      </svg>
    ),
    title: "Shrub Sculpting",
    description:
      "Trimming and shaping shrubs to keep your landscape clean, healthy, and looking sharp.",
  },
];

const reviews = [
  {
    name: "Tosha Sweat",
    text: "Reached out to Brandon in the hopes of finding quality expert home lawn care while helping a local small business. Brandon showed up, took measurements, we had a brief chat and I was on his schedule within a week. Very affordable, reliable and meticulous with detail. He treated my fence areas and around my house for weeds as part of the package. He also looks out for my pups outside and lets me know if he sees anything amiss while he's here. Professional and courteous all the time. As a Veteran household, I'm proud that we can help a local family owned Veteran business here in High Springs.",
  },
  {
    name: "Monica Acevedo",
    text: "I wholeheartedly recommend Wicked Good Lawn for all your lawn care needs. Their service is truly exceptional, characterized by both excellence and professionalism. Trustworthy, efficient, and dedicated, Wicked Good Lawn delivers beyond expectations every time.",
  },
  {
    name: "Rob Swan",
    text: "I'm so happy I found Wicked Good. They are the best. Friendly, professional, and thorough.",
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] flex items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="Stunning riverfront lawn at sunrise through live oak trees — Wicked Good Lawn Care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Veteran-owned lawn care that shows up and does it right.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Serving Alachua County and the surrounding area. Reliable, detailed, and easy to reach. Excellence starts at the root.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="/#contact"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="https://www.measuremylawn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/20 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Measure My Lawn
            </a>
            <a
              href="tel:3522831966"
              className="border-2 border-white/70 text-white/90 hover:bg-white/20 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call or Text (352) 283-1966
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.photo}
                    alt={service.photoAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-green-600 mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <p className="text-green-700 text-sm font-semibold mt-4 group-hover:underline">
                    Learn more &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">About Wicked Good</h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  I&apos;m Brandon Labonte, owner of Wicked Good Lawn Care. I&apos;m an Army veteran, a husband, a dad, and a granddad, and I spent years in HR before I started this company in 2021.
                </p>
                <p>
                  I run it on the same things the Army and that career taught me. Show up when you say you will. Pay attention to the details. Talk to people straight.
                </p>
                <p>
                  We take care of everything from small neighborhood lawns to larger properties, HOAs, and commercial spaces. Every yard gets treated like it&apos;s my own, because my name is on it. We&apos;re not the biggest crew in town and we&apos;re not trying to be. What we are is reliable, detailed, and easy to get ahold of. If something looks off in your yard, you&apos;ll hear it from us first.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Folks Stick With Us</h3>
                <ul className="space-y-4">
                  {[
                    "Veteran-owned and insured. Certificate of insurance available on request.",
                    "No contracts. Simple monthly billing.",
                    "We treat your lawn like our own.",
                    "Easy to reach, and we actually communicate.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-brandon.jpg"
                  alt="Brandon Labonte, owner of Wicked Good Lawn Care"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/fleet.jpg"
                  alt="Full Wicked Good Lawn Care fleet — both trucks and branded trailers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-6">How We Work</h2>
          <div className="space-y-5 text-green-100 text-lg leading-relaxed">
            <p>
              We follow UF/IFAS best practices for healthy lawns in North Florida. We mulch grass clippings back into the turf to feed the soil instead of bagging them, and we keep clippings out of the road and storm drains to protect local water from runoff.
            </p>
            <p>
              For weed control and fertilization, we point homeowners to Sunday. Their products are eco-friendly and delivered right to your door for easy application.
            </p>
          </div>
        </div>
      </section>

      {/* Sunday Partner Callout */}
      <section className="py-16 px-4 bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-3">Partner</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            Need weed control and fertilization?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            We partner with Sunday for eco-friendly lawn products delivered straight to your door. Use our link for 25% off.
          </p>
          <a
            href="https://www.getsunday.com/custom-lawn-plan/?coupon=wickedgood25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Shop Sunday and Save 25%
          </a>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-20 px-4 bg-green-900">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-10">
          {/* Book cover */}
          <div className="shrink-0 w-44 h-64 rounded-lg shadow-2xl border-l-8 border-green-500 bg-green-950 flex flex-col items-center justify-center p-5 text-center">
            <p className="text-green-400 text-[8px] font-bold uppercase tracking-widest mb-1">
              Playbook for a
            </p>
            <p className="text-white font-extrabold text-base leading-snug mb-2">
              Wicked Good Lawn
            </p>
            <div className="w-6 h-px bg-green-500 mb-2" />
            <p className="text-green-200 text-[10px] leading-snug mb-3">
              Contemporary Lawn Care Advice for Savvy Homeowners
            </p>
            <p className="text-green-400 text-[10px]">Brandon Labonte</p>
          </div>

          {/* Text */}
          <div>
            <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">
              The Book
            </p>
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Playbook for a Wicked Good Lawn
            </h2>
            <p className="text-green-200 text-lg mb-2">
              Contemporary Lawn Care Advice for Savvy Homeowners
            </p>
            <p className="text-gray-300 mb-6">
              Practical lawn care guidance for North Florida homeowners, written by Brandon Labonte. Available on Amazon.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://amzn.to/4eWR76V"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-7 py-3 rounded-xl text-base transition-colors"
              >
                Buy on Amazon
              </a>
              <Link
                href="/book"
                className="inline-block text-green-300 hover:text-white text-sm font-medium transition-colors self-center"
              >
                Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <div className="text-yellow-400 text-xl mb-3" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
                <p className="font-bold text-gray-900 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://g.page/r/CS9-PvhmXuP1EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors mb-4"
            >
              Read all our reviews on Google
            </a>
            <p className="text-gray-500 text-sm">Brandon has 20+ five-star reviews on Google.</p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="contact" className="bg-green-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
            Let us care for your lawn.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-10">
            <a
              href="tel:3522831966"
              className="bg-white hover:bg-gray-100 text-green-800 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Call or Text (352) 283-1966
            </a>
            <a
              href="mailto:wickedgoodlawn@outlook.com"
              className="border-2 border-white text-white hover:bg-green-600 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              wickedgoodlawn@outlook.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="/#contact"
              className="border-2 border-white text-white hover:bg-green-600 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="https://www.measuremylawn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-green-600 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Measure My Lawn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
