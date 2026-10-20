import { useState } from 'react'
import { experiences } from '../data/resumeData'
import BlurFade from './BlurFade'

const teamMeta = {
  blue: { label: 'Defensive', color: 'text-def' },
  red: { label: 'Offensive', color: 'text-off' },
  both: { label: 'Defensive & Offensive', color: 'text-muted' },
}

export default function Experience() {
  const [expanded, setExpanded] = useState({})

  return (
    <section id="experience" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <header className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">Experience</h2>
          </header>
        </BlurFade>

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const team = teamMeta[exp.team]
            const isOpen = expanded[idx] || exp.highlights.length <= 5
            const shown = isOpen ? exp.highlights : exp.highlights.slice(0, 5)

            return (
              <BlurFade key={`${exp.company}-${exp.role}`} delay={idx * 0.05}>
                <div className="grid gap-x-10 gap-y-3 md:grid-cols-[150px_1fr]">
                  <div className="text-[13px] font-mono text-faint pt-1.5">
                    {exp.period}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-ink tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {exp.company} · {exp.location}
                    </p>
                    <p className={`mt-1.5 text-xs font-medium uppercase tracking-wider ${team.color}`}>
                      {team.label}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {shown.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-[15px] text-muted leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-[9px] w-1 h-1 rounded-full bg-faint flex-shrink-0"
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