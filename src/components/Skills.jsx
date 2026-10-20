import { useState } from 'react'
import { blueTeam, redTeam } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'

const tabs = [
  { key: 'blue', label: blueTeam.label, data: blueTeam, active: 'bg-def text-white', marker: 'bg-def' },
  { key: 'red', label: redTeam.label, data: redTeam, active: 'bg-off text-white', marker: 'bg-off' },
]

export default function Skills() {
  const [active, setActive] = useState('blue')
  const current = tabs.find((t) => t.key === active)

  return (
    <section id="skills" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <SectionHeading title="Skills" blurb={current.data.title} color="bg-def" />
        </BlurFade>

        <BlurFade delay={0.05}>
          <div className="inline-flex items-center gap-1 p-1 rounded-lg border border-line bg-surface">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-4 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  active === tab.key ? tab.active : 'text-muted hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </BlurFade>

        <div className="mt-10 grid sm:grid-cols-2 gap-x-12 gap-y-9">
          {current.data.skills.map((skill, index) => (
            <BlurFade key={skill.category} delay={0.04 * index}>
              <div>
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className={`w-2 h-2 rounded-full ${current.marker}`} />
                  <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink">
                    {skill.category}
                  </h3>
                </div>
                <p className="mt-1.5 ml-[18px] text-sm text-muted leading-relaxed">
                  {skill.desc}
                </p>
                <div className="mt-3 ml-[18px] flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-mono text-muted bg-surface border border-line rounded hover:border-accent hover:text-accent transition-colors"
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