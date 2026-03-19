export default function FinalCTA() {
  return (
    <section id="book" className="bg-stone-800 py-24 md:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-600 rounded-full opacity-30 blur-3xl -translate-x-1/3 translate-y-1/4" />
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6 px-4 py-1.5 bg-blue-600/10 rounded-full border border-blue-500/20">
          Let's talk
        </span>

        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
          Ready to move forward?
        </h2>

        <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          If you're done overthinking and ready for clarity, let's talk.
          The first conversation is free — and it's just that: a conversation.
        </p>

        {/* CTA button */}
        <a
          href="mailto:hello@jamiegrant.co"
          className="inline-flex items-center gap-3 bg-white text-stone-800 font-semibold px-10 py-4 rounded-full hover:bg-stone-100 transition-colors text-base shadow-md"
        >
          Book Your Clarity Call
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Reassurance line */}
        <p className="text-stone-500 text-sm mt-6">
          No commitment. No sales pressure. Just clarity.
        </p>

        {/* Divider + mini trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-12 border-t border-stone-700">
          {[
            { label: '100+', sub: 'Clients supported' },
            { label: '4.9★', sub: 'Average rating' },
            { label: '90min', sub: 'First session depth' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-semibold text-2xl tracking-tight">{stat.label}</p>
              <p className="text-stone-500 text-xs mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
