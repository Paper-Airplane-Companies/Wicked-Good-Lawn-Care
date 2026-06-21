import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🌿",
    title: "Lawn Care",
    description:
      "Mowing, edging, trimming, and blowing on a schedule that keeps your lawn healthy and sharp all season.",
  },
  {
    icon: "🪵",
    title: "Mulching Magic",
    description:
      "Fresh mulch to clean up your beds, lock in moisture, and keep the weeds down.",
  },
  {
    icon: "🍂",
    title: "Seasonal Cleanups",
    description:
      "Clearing leaves, debris, and yard waste so your property stays tidy through the seasons.",
  },
  {
    icon: "🏠",
    title: "Gutter Cleaning",
    description:
      "Clearing your gutters to protect your home from water damage, pests, and roof problems.",
  },
  {
    icon: "✂️",
    title: "Shrub Sculpting",
    description:
      "Trimming and shaping shrubs to keep your landscape clean, healthy, and looking sharp.",
  },
];

const reviews = [
  {
    name: "Tosha Sweat",
    text: "Reached out to Brandon in the hopes of finding quality expert home lawn care while helping a local small business. Brandon showed up, took measurements, we had a brief chat and I was on his schedule within a week. Very affordable, reliable and meticulous with detail. He treated my fence areas and around my house for weeds as part of the package. He also looks out for my pups outside and lets me know if he sees anything amiss while he’s here. Professional and courteous all the time. As a Veteran household, I’m proud that we can help a local family owned Veteran business here in High Springs.",
  },
  {
    name: "Mischa Sachmorov",
    text: "Amazing lawn care provider. It’s rare to find someone who cares so much and gives you individual attention. Brandon is always so thoughtful and caring and always does an amazing job. I really can’t recommend him enough.",
  },
  {
    name: "Monica Acevedo",
    text: "I wholeheartedly recommend Wicked Good Lawn for all your lawn care needs. Their service is truly exceptional, characterized by both excellence and professionalism. Trustworthy, efficient, and dedicated, Wicked Good Lawn delivers beyond expectations every time.",
  },
  {
    name: "Rob Swan",
    text: "I’m so happy I found Wicked Good. They are the best. Friendly, professional, and thorough.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-green-50 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Veteran-owned lawn care that shows up and does it right.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Serving Alachua County and the surrounding area. Reliable, detailed, and easy to reach. Excellence starts at the root.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="https://www.measuremylawn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-600 text-green-700 hover:bg-green-100 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Measure My Lawn
            </a>
            <a
              href="tel:3522831966"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
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
              <div
                key={service.title}
                className="bg-green-50 border border-green-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
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

          {/* Why folks stick with us */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Folks Stick With Us</h3>
            <ul className="space-y-4">
              {[
                "Veteran-owned and insured. Certificate of insurance available on request.",
                "No contracts. Simple monthly billing.",
                "We treat your lawn like our own.",
                "Easy to reach, and we actually communicate.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-green-600 font-bold text-lg leading-none">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
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

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <div className="text-yellow-400 text-xl mb-3" aria-label="5 stars">★★★★★</div>
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
              href="#contact"
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
