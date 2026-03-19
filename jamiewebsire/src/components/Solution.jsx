const pillars = [
  {
    number: '01',
    title: 'Grounded clarity over reactive thinking',
    body: 'We slow down the noise and return you to what actually matters. Clarity isn\'t about having all the answers — it\'s about asking the right questions from a grounded place.',
  },
  {
    number: '02',
    title: 'A life architecture that fits you',
    body: 'We build a vision and structure tailored to who you are — not who you think you should be. No prescriptive frameworks, no borrowed blueprints.',
  },
  {
    number: '03',
    title: 'Decisions made from values, not fear',
    body: 'You learn to choose from alignment rather than anxiety. Each decision becomes less draining and more natural — because it\'s rooted in your own truth.',
  },
]

export default function Solution() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#2D2D2D' }}>

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #F9F7F2 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      {/* Sage accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: '#8DA399', opacity: 0.3 }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
              The Approach
            </span>
          </div>
          <h2
            className="leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#F9F7F2',
              letterSpacing: '-0.02em',
            }}
          >
            A practical path to a{' '}
            <em style={{ color: '#8DA399' }}>life that actually fits</em>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(249,247,242,0.6)' }}>
            No hustle culture. No overnight transformations. Just honest, sustained work
            that reconnects you to your own clarity — and keeps you there.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="p-8 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(249,247,242,0.04)',
                border: '1px solid rgba(141,163,153,0.2)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(141,163,153,0.1)'
                e.currentTarget.style.borderColor = 'rgba(141,163,153,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(249,247,242,0.04)'
                e.currentTarget.style.borderColor = 'rgba(141,163,153,0.2)'
              }}
            >
              <span
                className="block mb-6 font-light"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.5rem',
                  color: 'rgba(141,163,153,0.35)',
                  lineHeight: 1,
                }}
              >
                {p.number}
              </span>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 500,
                  fontSize: '1.15rem',
                  color: '#F9F7F2',
                }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(249,247,242,0.55)' }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Callout banner */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 md:p-10"
          style={{
            backgroundColor: 'rgba(141,163,153,0.1)',
            border: '1px solid rgba(141,163,153,0.3)',
            borderRadius: '4px',
          }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(141,163,153,0.2)', borderRadius: '2px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="#8DA399" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <p
              className="mb-1"
              style={{ color: '#F9F7F2', fontWeight: 500 }}
            >
              This isn't about fixing what's broken. It's about building what's next.
            </p>
            <p className="text-sm" style={{ color: 'rgba(249,247,242,0.55)' }}>
              You've already proven you can perform. This work is about making sure that performance is
              in service of a life you actually want to be living.
            </p>
          </div>
          <a
            href="#book"
            className="flex-shrink-0 inline-flex items-center gap-2 font-medium text-sm px-7 py-3.5 transition-all duration-300"
            style={{ backgroundColor: '#F9F7F2', color: '#2D2D2D', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8DA399'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F9F7F2'; e.currentTarget.style.color = '#2D2D2D' }}
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
