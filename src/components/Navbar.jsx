import { useState, useEffect } from 'react'
import { personalInfo } from '../data/resumeData'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean)
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect()
        if (rect.top <= 200) {
          setActive(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-darkest/95 backdrop-blur-md shadow-[0_0_20px_rgba(49,56,102,0.5)]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-display text-lg font-bold tracking-wider">
          <span className="text-cyber-pink">H</span>
          <span className="text-white">MC</span>
          <span className="text-cyber-magenta">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-300 relative ${
                active === item.id
                  ? 'text-cyber-pink'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded bg-cyber-pink/5 border border-cyber-pink/20" />
              )}
              <span className="relative z-10 font-mono tracking-wider uppercase text-xs">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href={`mailto:${personalInfo.email}`} className="hidden sm:inline-flex px-4 py-1.5 rounded text-xs font-mono tracking-wider uppercase border border-cyber-magenta/50 text-cyber-magenta hover:bg-cyber-magenta/10 transition-all">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
