import { useState } from 'react'
import { projects } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'

const teamMeta = {
  blue: { label: 'Defensive', color: 'text-def', dot: 'bg-def', top: 'border-t-def' },
  red: { label: 'Offensive', color: 'text-off', dot: 'bg-off', top: 'border-t-off' },
  both: { label: 'Research', color: 'text-violet', dot: 'bg-violet', top: 'border-t-violet' },
}

const filters = [
  { key: 'all', label: 'All', active: 'bg-accent text-white' },
  { key: 'blue', label: 'Defensive', active: 'bg-def text-white' },
  { key: 'red', label: 'Offensive', active: 'bg-off text-white' },
]

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.team === filter)

  return (
    <section id="projects" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <SectionHeading
            title="Projects"
            blurb="Selected work from lab environments, client engagements, and personal research."
            color="bg-off"
          />
        </BlurFade>

        <BlurFade delay={0.05}>
          <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-line bg-surface">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  filter === f.key ? f.active : 'text-muted hover:text-ink'
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
                <article className={`h-full flex flex-col p-6 rounded-lg border border-line border-t-2 ${team.top} bg-surface`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${team.color}`}>
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
                            className={`mt-[7px] w-1.5 h-1.5 rounded-full ${team.dot} flex-shrink-0`}
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
                          className="px-2 py-1 text-[11px] font-mono text-faint border border-line rounded hover:border-accent hover:text-accent transition-colors"
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