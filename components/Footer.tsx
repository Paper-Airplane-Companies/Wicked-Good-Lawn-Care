import Image from "next/image";

const PhoneIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-.398.187-.77.504-.997l2.25-1.575a1.125 1.125 0 0 1 1.483.2l1.875 2.25a1.125 1.125 0 0 1-.2 1.574l-.563.422c-.318.238-.45.65-.32 1.025.698 2.073 2.323 3.698 4.396 4.396.375.13.787-.002 1.025-.32l.422-.563a1.125 1.125 0 0 1 1.575-.2l2.25 1.875c.515.43.645 1.17.2 1.483l-1.575 2.25a1.125 1.125 0 0 1-.997.504C8.507 19.5 4.5 15.493 4.5 10.5a1.125 1.125 0 0 1 .338-.812z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + contact */}
          <div className="md:col-span-2">
            <Image
              src="/wglc-logo-white.png"
              alt="Wicked Good Lawn Care"
              width={200}
              height={80}
              className="h-12 w-auto object-contain mb-4"
            />
            <ul className="space-y-3 text-sm text-green-300">
              <li>
                <a href="tel:3522831966" className="flex items-center gap-2 hover:text-white transition-colors">
                  <PhoneIcon />
                  (352) 283-1966
                </a>
              </li>
              <li>
                <a href="mailto:wickedgoodlawn@outlook.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <EmailIcon />
                  wickedgoodlawn@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LocationIcon />
                Alachua County and surrounding area
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="text-green-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="/#about" className="text-green-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/gallery" className="text-green-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/blog" className="text-green-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/book" className="text-green-300 hover:text-white transition-colors">Book</a></li>
              <li><a href="/#contact" className="text-green-300 hover:text-white transition-colors">Get a Quote</a></li>
              <li>
                <a href="https://www.measuremylawn.com/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">
                  Measure My Lawn
                </a>
              </li>
              <li>
                <a href="https://www.getsunday.com/custom-lawn-plan/?coupon=wickedgood25" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">
                  Shop Sunday (25% off)
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.facebook.com/wickedgoodlawn/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/wickedgoodlawn" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="http://www.x.com/wickedgoodlawn" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">X</a></li>
              <li><a href="https://www.youtube.com/channel/UCYKgQq_K6d2OIjGhrDaOvVQ" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://www.tiktok.com/@wickedgoodlawn" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-white transition-colors">TikTok</a></li>
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
