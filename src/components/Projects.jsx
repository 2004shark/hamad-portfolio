import { useState } from 'react'
import { projects } from '../data/resumeData'
import BlurFade from './BlurFade'

const teamMeta = {
  blue: { label: 'Defensive', color: 'text-def' },
  red: { label: 'Offensive', color: 'text-off' },
  both: { label: 'Research', color: 'text-muted' },
}

const filters = [
  { key: 'all', label: 'All' },
  { key: 'blue', label: 'Defensive' },
  { key: 'red', label: 'Offensive' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.team === filter)

  return (
    <section id="projects" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">Projects</h2>
            <p className="mt-2 text-muted max-w-2xl">
              Selected work from lab environments, client engagements, and personal research.
            </p>
          </header>
        </BlurFade>

        <BlurFade delay={0.05}>
          <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-line bg-surface">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  filter === f.key ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </BlurFade>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {filtered.map((project, idx) => {
            const team = teamMeta[project.team]
            return (
              <BlurFade key={project.title} delay={0.04 * idx}>
                <article className="h-full flex flex-col p-6 rounded-lg border border-line bg-surface">
                  <p className={`text-xs font-medium uppercase tracking-wider ${team.color}`}>
                    {team.label}
                  </p>

                  <h3 className="mt-2 text-[17px] font-semibold text-ink tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-muted leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {project.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-muted leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-[7px] w-1 h-1 rounded-full bg-faint flex-shrink-0"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.techStack?.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-line flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[11px] font-mono text-faint border border-line rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}