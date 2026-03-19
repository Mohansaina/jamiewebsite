export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden" style={{ backgroundColor: '#2D2D2D', padding: '100px 0' }}>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(141,163,153,0.2) 0%, transparent 70%)', transform: 'translate(20%, -20%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #F9F7F2 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        {/* Top sage line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#8DA399', opacity: 0.3 }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
            Take the First Step
          </span>
          <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
        </div>

        {/* Headline */}
        <h2
          className="leading-tight mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 500,
            color: '#F9F7F2',
            letterSpacing: '-0.02em',
          }}
        >
          Ready to move forward?
        </h2>

        {/* Body */}
        <p
          className="leading-relaxed mb-12 mx-auto"
          style={{
            color: 'rgba(249,247,242,0.6)',
            fontSize: '1.1rem',
            maxWidth: '520px',
            lineHeight: 1.8,
          }}
        >
          If you're done overthinking and ready for clarity, let's talk.
          The first conversation is completely free — and it may be the most
          valuable hour you spend this year.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:hello@jamiegrant.co"
          className="inline-flex items-center gap-3 font-medium tracking-wide transition-all duration-300 mb-5"
          style={{
            backgroundColor: '#F9F7F2',
            color: '#2D2D2D',
            padding: '20px 48px',
            borderRadius: '2px',
            fontSize: '1rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#8DA399'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#F9F7F2'
            e.currentTarget.style.color = '#2D2D2D'
          }}
        >
          Book Your Clarity Session
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="text-xs mb-20" style={{ color: 'rgba(249,247,242,0.35)' }}>
          No commitment. No sales pressure. Just an honest conversation.
        </p>

        {/* Stats strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-12 pt-12"
          style={{ borderTop: '1px solid rgba(141,163,153,0.2)' }}
        >
          {[
            { value: '100+', label: 'Leaders Coached' },
            { value: '4.9 / 5', label: 'Client Satisfaction' },
            { value: '6 Years', label: 'In Practice' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  color: '#F9F7F2',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {s.value}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: '#8DA399' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
