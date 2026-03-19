import { useState } from 'react'

const bullets = [
  'A 5-minute Sunday ritual to reset your week with intention',
  'Three questions that cut through the noise and point to what matters',
  'A simple framework to distinguish urgent from important in your own life',
]

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="guide" className="py-24 md:py-32" style={{ backgroundColor: '#EEF2F0' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="overflow-hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(141,163,153,0.25)',
            borderRadius: '4px',
            boxShadow: '0 4px 40px rgba(45,45,45,0.06)',
          }}
        >
          <div className="grid md:grid-cols-2">

            {/* Left — content & form */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px" style={{ backgroundColor: '#8DA399' }} />
                <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#8DA399' }}>
                  Free Resource
                </span>
              </div>

              <h2
                className="leading-tight mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 500,
                  color: '#2D2D2D',
                  letterSpacing: '-0.02em',
                }}
              >
                The Weekly Reset
              </h2>

              <p className="leading-relaxed mb-8" style={{ color: '#4A4A4A', fontSize: '0.95rem' }}>
                A free guide to help high-performers reclaim their Sunday, reset their perspective,
                and walk into the week with intention rather than inertia.
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-10">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#4A4A4A' }}>
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="#8DA399"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Form */}
              {submitted ? (
                <div
                  className="flex items-center gap-4 p-5"
                  style={{
                    backgroundColor: 'rgba(141,163,153,0.1)',
                    border: '1px solid rgba(141,163,153,0.3)',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#8DA399', borderRadius: '50%' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="#fff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#2D2D2D' }}>You're all set — check your inbox.</p>
                    <p className="text-xs" style={{ color: '#6B6B6B' }}>The Weekly Reset guide is on its way to you.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="flex-1 text-sm transition-all duration-200"
                    style={{
                      padding: '14px 16px',
                      border: '1px solid rgba(141,163,153,0.4)',
                      borderRadius: '2px',
                      backgroundColor: '#FAFAFA',
                      color: '#2D2D2D',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={e => { e.target.style.borderColor = '#8DA399' }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(141,163,153,0.4)' }}
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 font-medium text-sm transition-all duration-300 whitespace-nowrap"
                    style={{
                      padding: '14px 24px',
                      backgroundColor: '#2D2D2D',
                      color: '#F9F7F2',
                      border: 'none',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#8DA399' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#2D2D2D' }}
                  >
                    Send Me the Guide
                  </button>
                </form>
              )}

              <p className="text-xs mt-3" style={{ color: '#A8A29E' }}>
                No spam. Unsubscribe at any time.
              </p>
            </div>

            {/* Right — decorative preview */}
            <div
              className="hidden md:flex items-center justify-center p-16 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #EEF2F0 0%, #F9F7F2 100%)' }}
            >
              {/* Dot grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, #8DA399 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Guide card mockup */}
              <div className="relative">
                <div
                  className="w-52 h-72 flex flex-col p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '6px',
                    boxShadow: '0 20px 60px rgba(45,45,45,0.12)',
                    border: '1px solid rgba(141,163,153,0.2)',
                  }}
                >
                  {/* Guide header */}
                  <div className="mb-5">
                    <div
                      className="w-8 h-8 mb-4 flex items-center justify-center"
                      style={{ backgroundColor: '#EEF2F0', borderRadius: '4px' }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="#8DA399" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.02 12.02l.707.707M3 12h1m16 0h1M4.927 19.073l.707-.707M18.366 4.927l.707-.707" />
                      </svg>
                    </div>
                    <div className="h-2.5 rounded-sm mb-2" style={{ backgroundColor: '#2D2D2D', width: '75%' }} />
                    <div className="h-1.5 rounded-sm" style={{ backgroundColor: '#D6D3D1', width: '55%' }} />
                  </div>
                  <div className="w-full h-px mb-5" style={{ backgroundColor: 'rgba(141,163,153,0.2)' }} />
                  {/* Lines */}
                  <div className="space-y-2 flex-1">
                    {[100, 85, 90, 70, 95, 65, 80].map((w, j) => (
                      <div
                        key={j}
                        className="h-1.5 rounded-sm"
                        style={{ backgroundColor: '#E7E5E4', width: `${w}%` }}
                      />
                    ))}
                  </div>
                  {/* Footer of guide mockup */}
                  <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(141,163,153,0.2)' }}>
                    <span
                      className="text-[9px] font-medium tracking-widest uppercase"
                      style={{ color: '#8DA399' }}
                    >
                      The Weekly Reset
                    </span>
                  </div>
                </div>
                {/* Floating tag */}
                <div
                  className="absolute -top-3 -right-3 px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: '#8DA399',
                    color: '#fff',
                    borderRadius: '2px',
                    boxShadow: '0 4px 12px rgba(141,163,153,0.4)',
                  }}
                >
                  Free Guide
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
