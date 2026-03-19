export default function Hero() {
  return (
    <section className="relative bg-stone-50 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-3xl translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-100 rounded-full opacity-60 blur-3xl -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 mb-6 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
            Life &amp; Business Coaching
          </span>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-800 leading-tight tracking-tight mb-6">
            Move from Overthinking to{' '}
            <span className="text-blue-600 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Clear, Grounded
            </span>{' '}
            Decisions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Practical coaching to help you gain clarity, build structure, and move forward with
            confidence — without more noise or overwhelm.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-800 text-white font-medium px-8 py-3.5 rounded-full hover:bg-stone-700 transition-colors text-base shadow-sm"
            >
              Book a Clarity Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#guide"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-stone-600 font-medium px-8 py-3.5 rounded-full border border-stone-200 hover:border-stone-300 hover:bg-white transition-all text-base bg-white/60"
            >
              Get the Free Clarity Guide
            </a>
          </div>

          {/* Social proof */}
          <p className="mt-10 text-sm text-stone-400">
            Trusted by coaches &amp; individuals ready to move forward
          </p>
        </div>
      </div>

      {/* Divider wave */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  )
}
