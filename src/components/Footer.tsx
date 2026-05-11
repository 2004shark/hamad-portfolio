import { personalInfo } from '../data/resumeData'
import { GitHub, LinkedIn, Mail } from './icons'

export default function Footer() {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-accent-purple/10 bg-bg-primary">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <button onClick={() => scrollTo('hero')} className="font-display text-lg font-bold tracking-wider text-text-primary mb-2">
              <span className="text-accent-purple">H</span>MC<span className="text-accent-purple">.</span>
            </button>
            <p className="font-mono text-xs text-text-secondary/50 max-w-xs leading-relaxed">
              Cybersecurity professional specializing in red team operations, blue team defense, and AI security engineering.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold text-text-primary uppercase tracking-widest mb-3">Quick Links</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {links.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-mono text-xs text-text-secondary/50 hover:text-accent-purple transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold text-text-primary uppercase tracking-widest mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded border border-accent-purple/20 text-text-secondary/50 hover:text-accent-purple hover:border-accent-purple/40 transition-all">
                <GitHub className="w-4 h-4" />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded border border-accent-purple/20 text-text-secondary/50 hover:text-accent-purple hover:border-accent-purple/40 transition-all">
                <LinkedIn className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2 rounded border border-accent-purple/20 text-text-secondary/50 hover:text-accent-purple hover:border-accent-purple/40 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-accent-purple/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[10px] text-text-secondary/40">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with precision.
          </p>
          <p className="font-mono text-[10px] text-text-secondary/30">
            <span className="text-accent-cyan">sudo</span> rm -rf /impress --no-preserve-root
          </p>
        </div>
      </div>
    </footer>
  )
}
