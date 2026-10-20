import { personalInfo } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'
import { GitHub, LinkedIn, Mail, Phone } from './icons'

const links = [
  { label: 'GitHub', href: personalInfo.social.github, icon: GitHub, external: true },
  { label: 'LinkedIn', href: personalInfo.social.linkedin, icon: LinkedIn, external: true },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${personalInfo.phone}`, icon: Phone },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <BlurFade>
              <SectionHeading title="Contact" color="bg-accent" />
              <p className="text-[17px] text-muted leading-relaxed max-w-md">
                I am open to remote and relocation opportunities in SOC operations,
                detection engineering, penetration testing, and AI security. If you have
                a role or a project in mind, the fastest way to reach me is email.
              </p>
            </BlurFade>

            <BlurFade delay={0.08}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 mt-7 px-5 py-2.5 text-sm font-medium rounded-md bg-accent text-white hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
            </BlurFade>
          </div>

          <BlurFade delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-4 py-4 text-sm text-muted hover:text-ink transition-colors"
                    >
                      <Icon className="w-4 h-4 text-faint group-hover:text-ink transition-colors" />
                      <span className="flex-1">{link.label}</span>
                      <svg
                        className="w-3.5 h-3.5 text-faint group-hover:text-ink transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </li>
                )
              })}
            </ul>
          </BlurFade>
        </div>

        <footer className="mt-20 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-sm text-faint">{personalInfo.location}</p>
        </footer>
      </div>
    </section>
  )
}