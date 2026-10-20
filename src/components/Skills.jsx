import { useState } from 'react'
import { blueTeam, redTeam } from '../data/resumeData'
import BlurFade from './BlurFade'

const tabs = [
  { key: 'blue', label: blueTeam.label, data: blueTeam },
  { key: 'red', label: redTeam.label, data: redTeam },
]

export default function Skills() {
  const [active, setActive] = useState('blue')
  const current = tabs.find((t) => t.key === active).data

  return (
    <section id="skills" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <header className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">Skills</h2>
            <p className="mt-2 text-muted max-w-2xl">
              {current.title}
            </p>
          </header>
        </BlurFade>

        <BlurFade delay={0.05}>
          <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-line bg-surface">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  active === tab.key
                    ? 'bg-ink text-canvas'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </BlurFade>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-9">
          {current.skills.map((skill, index) => (
            <BlurFade key={skill.category} delay={0.04 * index}>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink">
                  {skill.category}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  {skill.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-mono text-muted bg-surface border border-line rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}