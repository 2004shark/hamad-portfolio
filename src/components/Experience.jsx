import { useState } from 'react'
import { experiences } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'

const teamMeta = {
  blue: { label: 'Defensive', color: 'text-def', dot: 'bg-def', bar: 'bg-def' },
  red: { label: 'Offensive', color: 'text-off', dot: 'bg-off', bar: 'bg-off' },
  both: { label: 'Defensive & Offensive', color: 'text-violet', dot: 'bg-violet', bar: 'bg-violet' },
}

export default function Experience() {
  const [expanded, setExpanded] = useState({})

  return (
    <section id="experience" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <SectionHeading title="Experience" color="bg-violet" />
        </BlurFade>

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const team = teamMeta[exp.team]
            const isOpen = expanded[idx] || exp.highlights.length <= 5
            const shown = isOpen ? exp.highlights : exp.highlights.slice(0, 5)

            return (
              <BlurFade key={`${exp.company}-${exp.role}`} delay={idx * 0.05}>
                <div className="grid gap-x-10 gap-y-3 md:grid-cols-[150px_1fr]">
                  <div className="flex items-center gap-2.5 md:block">
                    <span aria-hidden="true" className={`w-2 h-2 rounded-full ${team.dot} md:hidden`} />
                    <span className="text-[13px] font-mono text-faint">
                      {exp.period}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5">
                      <span aria-hidden="true" className={`w-2 h-2 rounded-full ${team.dot} hidden md:block`} />
                      <h3 className="text-lg font-semibold text-ink tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="mt-1 ml-[18px] text-sm text-muted">
                      {exp.company} · {exp.location}
                    </p>
                    <p className={`mt-1.5 ml-[18px] text-xs font-semibold uppercase tracking-wider ${team.color}`}>
                      {team.label}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {shown.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-muted leading-relaxed">
                          <span
                            aria-hidden="true"
                            className={`mt-[9px] w-1.5 h-1.5 rounded-full ${team.dot} flex-shrink-0`}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {!isOpen && (
                      <button
                        onClick={() => setExpanded((prev) => ({ ...prev, [idx]: true }))}
                        className="mt-3 text-sm text-accent hover:underline underline-offset-4"
                      >
                        Show {exp.highlights.length - 5} more
                      </button>
                    )}
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}