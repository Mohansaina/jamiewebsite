const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Stuck in indecision',
    body: 'You know what you want, but every path forward feels uncertain. You loop back to the same question without landing anywhere.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Refining, but not moving',
    body: 'You\'re constantly tweaking — your offer, your messaging, your plan — but nothing is actually shipping or changing.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Overwhelmed by options',
    body: 'Too many ideas, frameworks, and strategies. The more you consume, the harder it becomes to act on anything at all.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'More information isn\'t the answer',
    body: 'You\'ve read the books, watched the videos, taken the courses. What\'s missing isn\'t knowledge — it\'s a clear next step.',
  },
]

export default function Problem() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400 block mb-4">
            Does this sound familiar?
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-800 leading-tight tracking-tight mb-5">
            You don't need more information.{' '}
            <span className="text-blue-600 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              You need clarity.
            </span>
          </h2>
          <p className="text-stone-500 text-lg leading-relaxed">
            The problem isn't that you're not smart enough or don't work hard enough.
            It's that without a clear framework, effort alone keeps you spinning.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-500 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shadow-sm">
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-stone-800 mb-1.5">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
