

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'blueteam', label: 'Blue Team' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const ids = navItems.map(n => n.id).filter(id => document.getElementById(id))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="font-display text-xl font-bold tracking-wider text-text-primary">
          <span className="text-accent-purple">H</span>MC<span className="text-accent-purple">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded ${
                active === item.id ? 'text-accent-purple' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded bg-accent-purple/5 border border-accent-purple/20" />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-text-primary p-2">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border-subtle">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  active === item.id ? 'text-accent-purple bg-accent-purple/5' : 'text-text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
