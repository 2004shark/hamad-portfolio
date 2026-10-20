import { personalInfo } from '../data/resumeData'
import { GitHub, LinkedIn, Mail } from './icons'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(720px 320px at 12% -10%, var(--c-accent-soft), transparent 60%), radial-gradient(560px 280px at 88% 0%, color-mix(in srgb, var(--c-violet) 10%, transparent), transparent 62%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-violet to-off" />

      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="w-10 h-[3px] rounded-full bg-accent" />
          <p className="text-sm font-semibold text-accent tracking-wide">Cybersecurity</p>
        </div>

        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
          Hamad Moiz Chodhry
        </h1>

        <p className="mt-5 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          <span className="text-def font-medium">SOC analyst</span>,{' '}
          <span className="text-off font-medium">penetration tester</span>, and{' '}
          <span className="text-violet font-medium">AI security engineer</span>. I work both
          sides of the field: running detection and response in a SOC, and testing the same
          systems the way an attacker would.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-faint">
          <span>{personalInfo.location}</span>
          <span aria-hidden="true" className="text-line">/</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-def" />
            Open to opportunities
          </span>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-accent text-white hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-line text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <GitHub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-line text-ink hover:border-violet hover:text-violet transition-colors"
          >
            <LinkedIn className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}