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
    <div style={{ backgroundColor: '#F9F7F2', color: '#2D2D2D', fontFamily: "'Inter', system-ui, sans-serif" }}>
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
