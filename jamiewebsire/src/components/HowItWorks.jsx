const steps = [
  {
    step: '1',
    title: 'Gain Clarity',
    body: 'Through focused conversation, we surface what\'s genuinely important, identify where the confusion is coming from, and define what "forward" actually means for you.',
    detail: 'Discovery sessions · Values mapping · Goal alignment',
  },
  {
    step: '2',
    title: 'Build Structure',
    body: 'We translate your clarity into a practical, personalised framework — one that reduces decision fatigue and makes it easier to choose what to focus on each day.',
    detail: 'Priority framework · Decision filters · Weekly rhythm',
  },
  {
    step: '3',
    title: 'Move Forward with Confidence',
    body: 'With clarity and structure in place, you act from alignment rather than anxiety. Progress becomes consistent, and decisions feel grounded rather than guesswork.',
    detail: 'Accountability · Momentum tracking · Ongoing support',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-stone-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400 block mb-4">
            The process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-800 leading-tight tracking-tight mb-5">
            How we work together
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            A structured, three-phase process that moves you from overthinking to confident action —
            at a pace that feels sustainable.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-stone-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-start md:items-center text-left md:text-center">
                {/* Step number bubble */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-stone-200 text-2xl font-semibold text-stone-700 mb-6 shadow-sm flex-shrink-0">
                  {s.step}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow w-full">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">{s.body}</p>
                  <div className="pt-4 border-t border-stone-100">
                    <p className="text-xs text-stone-400 font-medium">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-14">
          <p className="text-stone-500 text-sm mb-5">Ready to start? The first step is a free conversation.</p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-stone-800 text-white font-medium px-8 py-3.5 rounded-full hover:bg-stone-700 transition-colors text-sm"
          >
            Book a Free Clarity Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
