import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-bold text-green-700 text-lg leading-tight">
              Wicked Good<br />
              <span className="text-sm font-semibold text-gray-600">Lawn Care</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-green-700 font-medium transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-green-700 font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-green-700 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
