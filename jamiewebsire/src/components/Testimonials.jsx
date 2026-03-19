const testimonials = [
  {
    quote: "I came to Jamie after fourteen years in finance — successful by every external measure, completely lost internally. The work we did together wasn't about productivity hacks or goal-setting. It was about finally understanding who I actually am, separate from my CV. Six months later I\'ve restructured my entire career around what matters to me. I feel like myself again.",
    name: 'Marcus T.',
    role: 'CFO → Portfolio Career',
    initials: 'MT',
    result: 'Left corporate to build a portfolio career aligned to his values',
  },
  {
    quote: "I was sceptical — I\'d worked with coaches before and always felt like I was being sold a system. Jamie doesn\'t do that. She listens in a way that makes you think more clearly just by talking to her. The clarity I found wasn\'t handed to me; she helped me excavate it myself. That\'s a completely different experience, and one that actually lasts.",
    name: 'Rachel O.',
    role: 'Senior Partner, Law',
    initials: 'RO',
    result: 'Rebuilt her relationship with her work — and her evenings',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
              Client Stories
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
          </div>
          <h2
            className="leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.02em',
            }}
          >
            Real people. Real transformation.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-10 transition-all duration-300"
              style={{
                backgroundColor: '#F9F7F2',
                border: '1px solid rgba(141,163,153,0.2)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(141,163,153,0.45)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(45,45,45,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(141,163,153,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Opening quote mark */}
              <div
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '4rem',
                  lineHeight: '1',
                  color: '#8DA399',
                  opacity: 0.4,
                  userSelect: 'none',
                }}
              >
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote
                className="flex-1 mb-8 leading-relaxed"
                style={{ color: '#4A4A4A', fontSize: '0.95rem', lineHeight: '1.85' }}
              >
                {t.quote}
              </blockquote>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 self-start mb-7 text-xs font-medium px-4 py-2"
                style={{
                  backgroundColor: 'rgba(141,163,153,0.12)',
                  color: '#6B8A7F',
                  borderRadius: '2px',
                }}
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.result}
              </div>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: '1px solid rgba(141,163,153,0.2)' }}
              >
                <div
                  className="w-11 h-11 flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(141,163,153,0.15)',
                    color: '#6B8A7F',
                    borderRadius: '50%',
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="font-medium text-sm"
                    style={{
                      color: '#2D2D2D',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: '#8DA399' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
