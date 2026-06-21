import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-white text-lg">Wicked Good Lawn Care</span>
            </div>
            <p className="text-green-300 text-sm">
              Professional lawn care services you can count on. Serving the local community with pride.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="text-green-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#about" className="text-green-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-green-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#contact" className="text-green-300 hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-green-300">
              <li>📞 (555) 000-0000</li>
              <li>📧 hello@wickedgoodlawncare.com</li>
              <li>📍 Serving the Greater Area</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-green-400">
          © {new Date().getFullYear()} Wicked Good Lawn Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
