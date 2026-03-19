export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#2D2D2D', borderTop: '1px solid rgba(141,163,153,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <a
            href="#"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.1rem',
              color: '#F9F7F2',
              textDecoration: 'none',
            }}
          >
            Jamie Grant{' '}
            <span style={{ color: '#8DA399', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Coaching
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: 'rgba(249,247,242,0.45)' }}>
            {[
              { href: '#about', label: 'About' },
              { href: '#how-it-works', label: 'Process' },
              { href: '#guide', label: 'Free Guide' },
              { href: '#testimonials', label: 'Stories' },
              { href: '#book', label: 'Book a Session' },
            ].map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{ color: 'rgba(249,247,242,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.target.style.color = '#8DA399' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(249,247,242,0.45)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'rgba(249,247,242,0.3)' }}>
            &copy; {year} Jamie Grant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
