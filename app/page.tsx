import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "🌿",
    title: "Lawn Mowing",
    description: "Regular mowing keeps your lawn healthy and looking its best all season long.",
  },
  {
    icon: "💧",
    title: "Fertilization",
    description: "Custom fertilization programs tailored to your lawn's specific needs.",
  },
  {
    icon: "✂️",
    title: "Edging & Trimming",
    description: "Clean, crisp edges that give your property a polished, professional look.",
  },
  {
    icon: "🍂",
    title: "Seasonal Cleanup",
    description: "Spring and fall cleanups to prepare your lawn for the season ahead.",
  },
  {
    icon: "🌱",
    title: "Overseeding",
    description: "Fill in thin or bare patches with targeted overseeding for a lush, full lawn.",
  },
  {
    icon: "🪨",
    title: "Mulching",
    description: "Fresh mulch application to protect roots, retain moisture, and boost curb appeal.",
  },
];

const whyUs = [
  {
    icon: "✅",
    title: "Reliable & On Time",
    description: "We show up when we say we will — every single time.",
  },
  {
    icon: "🏆",
    title: "Quality Results",
    description: "We take pride in every yard we service. No shortcuts, ever.",
  },
  {
    icon: "💬",
    title: "Easy Communication",
    description: "Responsive, friendly service from quote to cleanup.",
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
            Your Lawn, Done{" "}
            <span className="text-green-600">Wicked Good.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Professional lawn care services that keep your property looking sharp — without the hassle. Serving homeowners who want it done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border-2 border-green-600 text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From weekly mowing to full seasonal care — we handle it so you don&apos;t have to.
            </p>
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

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Why Wicked Good?</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              We built this business on showing up, doing great work, and treating every lawn like our own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-green-700 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready for a Lawn You&apos;ll Love?
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Get in touch for a free, no-pressure quote. We&apos;ll be in touch within one business day.
          </p>
          <form className="bg-white rounded-2xl p-8 text-left max-w-xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optional)</label>
              <textarea
                rows={3}
                placeholder="Tell us about your lawn..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-base"
            >
              Send My Quote Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
