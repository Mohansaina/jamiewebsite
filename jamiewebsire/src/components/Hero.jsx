export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#F9F7F2', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #8DA399 0%, transparent 70%)', transform: 'translate(30%, -20%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2D2D2D 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        />
        {/* Thin horizontal rule accent */}
        <div className="absolute top-1/2 left-0 right-0 h-px opacity-10" style={{ backgroundColor: '#8DA399' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 w-full">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: '#8DA399' }}
            >
              High-Performance Life Coaching
            </span>
          </div>

          {/* Headline */}
          <h1
            className="mb-8 leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.02em',
            }}
          >
            Move from{' '}
            <em style={{ color: '#8DA399', fontStyle: 'italic' }}>'Successful'</em>
            <br className="hidden sm:block" />
            {' '}to Truly Fulfilled.
          </h1>

          {/* Sub-headline */}
          <p
            className="mb-12 leading-relaxed"
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#4A4A4A',
              maxWidth: '620px',
              lineHeight: 1.75,
            }}
          >
            High-performance coaching for leaders who have built the career,
            but lost the spark. Reclaim your clarity and design a life that feels
            as good as it looks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-3 font-medium text-sm tracking-wide transition-all duration-300"
              style={{
                backgroundColor: '#2D2D2D',
                color: '#F9F7F2',
                padding: '18px 36px',
                borderRadius: '2px',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8DA399' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2D2D2D' }}
            >
              Book Your Clarity Session
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#guide"
              className="inline-flex items-center justify-center gap-2 font-medium text-sm tracking-wide transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: '#2D2D2D',
                padding: '18px 36px',
                borderRadius: '2px',
                border: '1px solid rgba(45,45,45,0.25)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#8DA399'
                e.currentTarget.style.color = '#8DA399'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(45,45,45,0.25)'
                e.currentTarget.style.color = '#2D2D2D'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download the Weekly Reset (Free)
            </a>
          </div>

          {/* Social proof bar */}
          <div
            className="flex flex-wrap items-center gap-8 pt-10"
            style={{ borderTop: '1px solid rgba(45,45,45,0.1)' }}
          >
            {[
              { value: '100+', label: 'Leaders Coached' },
              { value: '4.9', label: 'Average Rating' },
              { value: '6 yrs', label: 'In Practice' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <div className="w-px h-6 hidden sm:block" style={{ backgroundColor: 'rgba(45,45,45,0.12)' }} />}
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#2D2D2D', fontSize: '1.25rem' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: '#6B6B6B', letterSpacing: '0.04em' }}>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
