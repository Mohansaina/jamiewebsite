const steps = [
  {
    number: '01',
    title: 'The Discovery Call',
    subtitle: 'Identify the hidden blocks',
    body: 'We begin with a deep, unhurried conversation about where you are and where you want to be. Together we surface the hidden patterns, beliefs, and blind spots that have been keeping you stuck — and establish a clear picture of what "fulfilled" actually looks like for you.',
    tags: ['Values Audit', 'Life Mapping', 'Block Identification'],
  },
  {
    number: '02',
    title: 'The Custom Roadmap',
    subtitle: 'A strategy tailored to your life',
    body: 'Based on your discovery, we build a bespoke roadmap — not a generic framework copied from a course. Your roadmap reflects your specific situation, your strengths, and the life you\'re designing. It gives you a clear, sequential path forward with priorities that actually make sense.',
    tags: ['Personal Strategy', 'Priority Architecture', 'Decision Filters'],
  },
  {
    number: '03',
    title: 'Sustained Growth',
    subtitle: 'Weekly partnership & accountability',
    body: 'Real change doesn\'t happen in a single session. Through consistent, weekly partnership we implement your roadmap, navigate real-life challenges as they arise, and build the internal resources that make clarity and confidence your new default — not just a temporary state.',
    tags: ['Weekly Sessions', 'Ongoing Support', 'Momentum Tracking'],
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32" style={{ backgroundColor: '#F9F7F2' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
              The Process
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
          </div>
          <h2
            className="leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.02em',
            }}
          >
            How we work together
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
            A three-phase journey designed to move you from where you are to
            where you know you're meant to be.
          </p>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="relative">

          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute h-px z-0"
            style={{
              top: '2.75rem',
              left: 'calc(16.5% + 24px)',
              right: 'calc(16.5% + 24px)',
              background: 'linear-gradient(to right, rgba(141,163,153,0.4) 0%, rgba(141,163,153,0.4) 100%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col">

                {/* Step bubble */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="relative flex-shrink-0 z-10 flex items-center justify-center w-14 h-14 transition-all duration-300"
                    style={{
                      backgroundColor: '#F9F7F2',
                      border: '1.5px solid #8DA399',
                      borderRadius: '2px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '1.1rem',
                        color: '#8DA399',
                        fontWeight: 500,
                      }}
                    >
                      {s.number}
                    </span>
                  </div>
                  <div className="md:hidden">
                    <p className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>{s.subtitle}</p>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-8 transition-all duration-300"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(141,163,153,0.2)',
                    borderRadius: '4px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(141,163,153,0.5)'
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(45,45,45,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(141,163,153,0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-3 hidden md:block"
                    style={{ color: '#8DA399' }}
                  >
                    {s.subtitle}
                  </p>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 500,
                      fontSize: '1.25rem',
                      color: '#2D2D2D',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B6B6B' }}>{s.body}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid rgba(141,163,153,0.15)' }}>
                    {s.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium px-3 py-1"
                        style={{
                          backgroundColor: 'rgba(141,163,153,0.1)',
                          color: '#6B8A7F',
                          borderRadius: '2px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-sm mb-6" style={{ color: '#6B6B6B' }}>
            The first step is a single conversation. No commitment required.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-3 font-medium text-sm tracking-wide transition-all duration-300"
            style={{ backgroundColor: '#2D2D2D', color: '#F9F7F2', padding: '16px 36px', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8DA399' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2D2D2D' }}
          >
            Book Your Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
