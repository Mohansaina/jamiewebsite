const pillars = [
  {
    number: '01',
    title: 'Clear positioning',
    body: 'We distill your strengths, values, and direction into a focused point of view — so you stop second-guessing what you stand for.',
  },
  {
    number: '02',
    title: 'Practical structure',
    body: 'We build a simple, repeatable framework for your decisions and priorities. Structure reduces noise and makes progress feel natural.',
  },
  {
    number: '03',
    title: 'Steady decision-making',
    body: 'You develop the internal clarity to act without needing external validation — making confident decisions that align with your goals.',
  },
]

export default function Solution() {
  return (
    <section className="bg-stone-800 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 block mb-4">
            The approach
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-5">
            A practical approach to{' '}
            <span className="italic text-stone-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              moving forward
            </span>
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed">
            No hype. No hustle. No quick fixes. Just honest, grounded work that builds
            the clarity you need to make real decisions and real progress.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-stone-700/50 border border-stone-600/50 hover:bg-stone-700/80 transition-colors">
              <span className="text-xs font-mono text-blue-400 tracking-widest block mb-5">{p.number}</span>
              <h3 className="font-semibold text-white text-xl mb-3">{p.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl bg-blue-600/10 border border-blue-500/20">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-medium mb-1">This is not a "10-step system" or another framework to learn.</p>
            <p className="text-stone-400 text-sm">It's a focused, personal process built around how you think — designed to get you out of your head and into action.</p>
          </div>
          <a
            href="#book"
            className="flex-shrink-0 md:ml-auto inline-flex items-center gap-2 bg-white text-stone-800 font-medium px-6 py-3 rounded-full hover:bg-stone-100 transition-colors text-sm whitespace-nowrap"
          >
            Book a Clarity Call
          </a>
        </div>
      </div>
    </section>
  )
}
