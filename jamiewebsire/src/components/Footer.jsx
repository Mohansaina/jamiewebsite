export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-stone-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <a href="#" className="text-stone-800 font-semibold tracking-tight">
            Jamie <span className="text-blue-600">Grant</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
            <a href="#about" className="hover:text-stone-600 transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-stone-600 transition-colors">How It Works</a>
            <a href="#guide" className="hover:text-stone-600 transition-colors">Free Guide</a>
            <a href="#book" className="hover:text-stone-600 transition-colors">Book a Call</a>
          </nav>

          {/* Copyright */}
          <p className="text-stone-400 text-xs">
            &copy; {year} Jamie Grant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
