import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import BlueTeam from './components/BlueTeam'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThreatParticles from './components/ThreatParticles'
import CyberWeb from './components/CyberWeb'

export default function App() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <CyberWeb />
      <ThreatParticles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <BlueTeam />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
