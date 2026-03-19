const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'You\'ve achieved the milestones — but something feels hollow',
    body: 'The promotion. The income. The recognition. You ticked every box society told you to tick. Yet at the end of the day, you find yourself asking: "Is this it?"',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'You\'re performing, but running on empty',
    body: 'On the outside you look like you have it together. On the inside, the motivation that once drove you has quietly dried up. You\'re functioning — but not thriving.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: 'You feel disconnected from your own life',
    body: 'Days blur into weeks. You\'re busy, always busy — but the busyness feels like noise rather than purpose. You\'ve lost the thread of what you actually want.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'You know change is needed — but clarity feels out of reach',
    body: 'You\'ve read the books. Listened to the podcasts. Maybe even hired a therapist. But the fog around "what\'s next" remains. What\'s missing is someone who helps you think clearly.',
  },
]

export default function Problem() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ backgroundColor: '#8DA399' }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
              The Real Problem
            </span>
          </div>
          <h2
            className="leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 500,
              color: '#2D2D2D',
              letterSpacing: '-0.02em',
            }}
          >
            You don't need another strategy.{' '}
            <em style={{ color: '#8DA399' }}>You need to rediscover yourself.</em>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4A4A4A' }}>
            High achievers are rarely held back by ability. They're held back by
            disconnection — from their values, their vision, and what truly matters to them.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex gap-6 p-8 transition-all duration-300 group cursor-default"
              style={{
                backgroundColor: '#F9F7F2',
                border: '1px solid rgba(141,163,153,0.15)',
                borderRadius: '4px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(141,163,153,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(141,163,153,0.15)' }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(141,163,153,0.3)',
                  borderRadius: '2px',
                  color: '#8DA399',
                }}
              >
                {p.icon}
              </div>

              <div>
                <h3
                  className="mb-2 leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: '#2D2D2D',
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
