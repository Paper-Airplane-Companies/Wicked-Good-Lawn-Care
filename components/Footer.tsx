import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + contact */}
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Wicked Good Lawn Care"
              width={200}
              height={80}
              className="h-12 w-auto object-contain brightness-0 invert mb-4"
            />
            <ul className="space-y-2 text-sm text-green-300">
              <li>
                <a href="tel:3522831966" className="hover:text-white transition-colors">
                  📞 (352) 283-1966
                </a>
              </li>
              <li>
                <a href="mailto:wickedgoodlawn@outlook.com" className="hover:text-white transition-colors">
                  📧 wickedgoodlawn@outlook.com
                </a>
              </li>
              <li>📍 Alachua County and surrounding area</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-green-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-green-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#reviews" className="text-green-300 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-green-300 hover:text-white transition-colors">Get a Quote</a></li>
              <li>
                <a
                  href="https://www.measuremylawn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Measure My Lawn
                </a>
              </li>
              <li>
                <a
                  href="https://www.getsunday.com/custom-lawn-plan/?coupon=wickedgood25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Shop Sunday (25% off)
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/wickedgoodlawn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wickedgoodlawn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="http://www.x.com/wickedgoodlawn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCYKgQq_K6d2OIjGhrDaOvVQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-300 hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-green-400">
          &copy; {new Date().getFullYear()} Wicked Good Lawn Care LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
