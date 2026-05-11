import { experiences } from '../data/resumeData'
import BlurFade from './BlurFade'

const teamConfig: Record<string, { label: string; color: string; border: string; bg: string; dot: string; logo: string }> = {
  blue: { label: 'Blue Team', color: 'text-accent-cyan', border: 'border-accent-cyan/30', bg: 'bg-accent-cyan/8', dot: 'bg-accent-cyan', logo: 'bg-gradient-to-br from-accent-cyan/20 to-cyan-600/20 text-accent-cyan' },
  red: { label: 'Red Team', color: 'text-accent-pink', border: 'border-accent-pink/30', bg: 'bg-accent-pink/8', dot: 'bg-accent-pink', logo: 'bg-gradient-to-br from-accent-pink/20 to-rose-600/20 text-accent-pink' },
  both: { label: 'Both', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/8', dot: 'bg-purple-400', logo: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20 text-purple-400' },
}

function CompanyLogo({ company, team }: { company: string; team: string }) {
  const initials = company.split(' ').map((w: string) => w[0]).join('').slice(0, 2)
  const cfg = teamConfig[team]
  return (
    <div className={`w-10 h-10 rounded-lg ${cfg.logo} flex items-center justify-center font-display text-sm font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">03.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Experience</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <div className="relative mt-12">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-pink to-accent-pink opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp: { role: string; company: string; team: string; period: string; location: string; highlights: string[] }, idx: number) => {
              const team = teamConfig[exp.team]
              return (
                <BlurFade key={`${exp.company}-${exp.role}`} delay={idx * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-5 md:gap-10 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-2 w-4 h-4 rounded-full border-2 border-accent-pink/50 bg-bg-primary z-10">
                      <div className={`w-2 h-2 rounded-full ${team.dot} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} />
                    </div>

                    <div className={`md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                      <div className={`p-5 rounded-lg border ${team.border} ${team.bg} backdrop-blur-sm hover:shadow-[0_0_25px_rgba(150,78,194,0.1)] transition-all duration-300`}>
                        <div className={`flex flex-wrap items-center gap-3 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} mb-3`}>
                          <CompanyLogo company={exp.company} team={exp.team} />
                          <div className={`flex-1 min-w-0 ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                            <div className={`flex flex-wrap items-center gap-2 ${idx % 2 === 0 ? '' : 'md:justify-end'}`}>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${team.color} border ${team.border}`}>
                                {team.label}
                              </span>
                              <span className="font-mono text-xs text-text-secondary/50">{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <h3 className="font-display text-base font-bold text-text-primary mb-0.5">{exp.role}</h3>
                        <p className="font-body text-accent-pink font-semibold text-sm mb-0.5">{exp.company}</p>
                        <p className="font-mono text-xs text-text-secondary/40 mb-3">{exp.location}</p>

                        <ul className="space-y-1.5">
                          {exp.highlights.slice(0, 5).map((h: string, i: number) => (
                            <li key={i} className="font-body text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                              <span className={`${team.dot} w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${idx % 2 === 0 ? '' : 'md:order-1'}`} />
                              <span>{h}</span>
                            </li>
                          ))}
                          {exp.highlights.length > 5 && (
                            <li className="font-mono text-xs text-text-secondary/50 mt-2">
                              +{exp.highlights.length - 5} more highlights
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
