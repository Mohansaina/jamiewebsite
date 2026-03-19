import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about',        label: 'About' },
    { href: '#how-it-works', label: 'Process' },
    { href: '#guide',        label: 'Free Guide' },
    { href: '#testimonials', label: 'Stories' },
  ]

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(249,247,242,0.97)' : 'rgba(249,247,242,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(141,163,153,0.25)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(45,45,45,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-xl font-medium tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2D2D2D' }}
          >
            Jamie Grant
          </span>
          <span
            className="hidden sm:inline text-xs tracking-widest uppercase font-medium border-l pl-2 ml-1"
            style={{ color: '#8DA399', borderColor: '#8DA399' }}
          >
            Coaching
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: '#4A4A4A' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 hover:text-sage"
              style={{ '--tw-text-opacity': 1 }}
              onMouseEnter={e => e.target.style.color = '#8DA399'}
              onMouseLeave={e => e.target.style.color = '#4A4A4A'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 transition-all duration-300"
          style={{
            backgroundColor: '#2D2D2D',
            color: '#F9F7F2',
            borderRadius: '2px',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8DA399' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2D2D2D' }}
        >
          Book a Session
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: '#4A4A4A' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5 text-sm"
          style={{ borderTop: '1px solid rgba(141,163,153,0.2)', backgroundColor: '#F9F7F2' }}
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#4A4A4A' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center font-medium px-6 py-3 text-sm mt-1"
            style={{ backgroundColor: '#2D2D2D', color: '#F9F7F2', borderRadius: '2px' }}
          >
            Book a Session
          </a>
        </div>
      )}
    </header>
  )
}
