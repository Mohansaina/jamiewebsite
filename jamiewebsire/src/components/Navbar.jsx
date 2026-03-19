import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-stone-800 font-semibold text-lg tracking-tight">
          Jamie <span className="text-blue-600">Grant</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-stone-500">
          <a href="#about" className="hover:text-stone-800 transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-stone-800 transition-colors">How It Works</a>
          <a href="#guide" className="hover:text-stone-800 transition-colors">Free Guide</a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors"
        >
          Book a Call
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-stone-500 hover:text-stone-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm text-stone-600">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-stone-800">About</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="hover:text-stone-800">How It Works</a>
          <a href="#guide" onClick={() => setMenuOpen(false)} className="hover:text-stone-800">Free Guide</a>
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center bg-stone-800 text-white font-medium px-5 py-2.5 rounded-full hover:bg-stone-700 transition-colors"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
