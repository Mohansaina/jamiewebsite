import { useState } from 'react'

export default function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="guide" className="bg-blue-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-blue-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4 inline-block">
                Free resource
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-stone-800 leading-tight tracking-tight mb-4">
                Free Clarity Reset Guide
              </h2>
              <p className="text-stone-500 leading-relaxed mb-8">
                A simple framework to help you get unstuck and start making aligned decisions —
                without adding more to your plate.
              </p>

              {/* What's inside */}
              <ul className="space-y-3 mb-8">
                {[
                  'Identify exactly where you\'re getting stuck',
                  'A 3-step framework to reset your thinking',
                  'Questions that cut through the noise fast',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Form */}
              {submitted ? (
                <div className="flex items-center gap-3 p-5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 text-sm">You're on the list!</p>
                    <p className="text-stone-500 text-xs">Check your inbox — the guide is on its way.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-full border border-stone-200 text-stone-800 placeholder-stone-400 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-stone-800 text-white font-medium px-6 py-3 rounded-full hover:bg-stone-700 transition-colors text-sm whitespace-nowrap"
                  >
                    Get the Guide
                  </button>
                </form>
              )}

              <p className="text-xs text-stone-400 mt-3">No spam, ever. Unsubscribe anytime.</p>
            </div>

            {/* Right — visual / decorative */}
            <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-stone-50 to-blue-50 p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative text-center">
                {/* Stylised guide mockup */}
                <div className="w-48 h-64 bg-white rounded-2xl shadow-lg border border-stone-100 flex flex-col items-center justify-center gap-3 mx-auto">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="space-y-1.5 w-28">
                    <div className="h-2 bg-stone-100 rounded-full" />
                    <div className="h-2 bg-stone-100 rounded-full w-4/5" />
                    <div className="h-2 bg-stone-100 rounded-full" />
                  </div>
                  <div className="w-24 h-px bg-stone-100" />
                  <div className="space-y-1.5 w-28">
                    <div className="h-1.5 bg-stone-100 rounded-full" />
                    <div className="h-1.5 bg-stone-100 rounded-full w-3/4" />
                    <div className="h-1.5 bg-stone-100 rounded-full" />
                    <div className="h-1.5 bg-stone-100 rounded-full w-4/5" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-stone-400">Free Guide</span>
                </div>
                <p className="text-sm text-stone-500 mt-4 font-medium">Clarity Reset Guide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
