import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import LeadMagnet from './components/LeadMagnet'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="bg-white font-sans text-stone-600 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <LeadMagnet />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
