const testimonials = [
  {
    quote:
      "I came to Jamie completely stuck — I'd been running in circles with my coaching business for months. What stood out was how practical the process was. No fluff, no overwhelming frameworks. Within four sessions I had a clear positioning statement and a simple plan I could actually act on. The progress I made in those weeks exceeded what I\'d done in the past year.",
    name: 'Sarah Mitchell',
    role: 'Leadership Coach, 6 years in practice',
    initials: 'SM',
    result: 'Launched her first group programme within 6 weeks',
  },
  {
    quote:
      "I was skeptical of coaching — I\'d tried a couple of programmes and felt more overwhelmed after than before. Jamie\'s approach is different. She asks the right questions, helps you think, and never tells you what to do. I finally feel like I have a clear direction and the confidence to make decisions without second-guessing everything. That shift alone has been worth every penny.",
    name: 'Daniel Osei',
    role: 'Founder & Executive Coach',
    initials: 'DO',
    result: 'Signed 3 new clients after clarifying his niche',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400 block mb-4">
            Client stories
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-stone-800 leading-tight tracking-tight">
            Real clarity. Real progress.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col p-10 rounded-3xl bg-stone-50 border border-stone-100">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-stone-600 leading-relaxed text-[15px] flex-1 mb-8">
                "{t.quote}"
              </blockquote>

              {/* Result badge */}
              <div className="mb-6 inline-flex items-center gap-2 text-xs text-stone-500 bg-white rounded-full px-4 py-2 border border-stone-100 self-start">
                <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <div className="w-11 h-11 rounded-full bg-stone-200 flex items-center justify-center text-sm font-semibold text-stone-600 flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-stone-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
