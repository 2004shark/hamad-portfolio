import { personalInfo } from '../data/resumeData'
import { GitHub, LinkedIn, Mail } from './icons'

export default function Hero() {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-44 md:pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-accent tracking-wide">
          Cybersecurity
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05]">
          Hamad Moiz Chodhry
        </h1>

        <p className="mt-5 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          {personalInfo.tagline}. I work both sides of the field: running detection and
          response in a SOC, and testing the same systems the way an attacker would.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-faint">
          <span>{personalInfo.location}</span>
          <span aria-hidden="true" className="text-line">/</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Open to opportunities
          </span>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-ink text-canvas hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-line text-ink hover:border-faint transition-colors"
          >
            <GitHub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-line text-ink hover:border-faint transition-colors"
          >
            <LinkedIn className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}