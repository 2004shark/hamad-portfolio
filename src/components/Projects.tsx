import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/resumeData'
import BlurFade from './BlurFade'

const teamColors: Record<string, { border: string; tag: string; glow: string; tech: string }> = {
  blue: { border: 'border-accent-cyan/30', tag: 'bg-accent-cyan/20 text-accent-300 border-accent-cyan/20', glow: 'rgba(6,182,212,0.2)', tech: 'bg-accent-cyan/8 text-accent-cyan/70 border-accent-cyan/15' },
  red: { border: 'border-accent-pink/30', tag: 'bg-accent-pink/20 text-accent-pink border-accent-pink/20', glow: 'rgba(236,72,153,0.2)', tech: 'bg-accent-pink/8 text-accent-pink/70 border-accent-pink/15' },
  both: { border: 'border-purple-500/30', tag: 'bg-purple-500/20 text-purple-300 border-purple-500/20', glow: 'rgba(168,85,247,0.2)', tech: 'bg-purple-500/8 text-purple-400/70 border-purple-500/15' },
}

export default function Projects() {
  const [filter, setFilter] = useState<string>('all')
  const filtered = filter === 'all' ? projects : projects.filter(p => p.team === filter)

  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">04.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Projects</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            {['all', 'blue', 'red'].map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-1.5 rounded font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  filter === t
                    ? t === 'blue'
                      ? 'bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan'
                      : t === 'red'
                      ? 'bg-accent-pink/20 border border-accent-pink/50 text-accent-pink'
                      : 'bg-white/10 border border-white/30 text-text-primary'
                    : 'border border-text-secondary/20 text-text-secondary/50 hover:border-text-secondary/40'
                }`}
              >
                {t === 'all' ? '[ All ]' : t === 'blue' ? '< Blue />' : '[ Red ]'}
              </button>
            ))}
          </div>
        </BlurFade>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {filtered.map((project: { title: string; subtitle?: string; team: string; description: string; techStack?: string[]; highlights: string[] }, idx: number) => {
              const colors = teamColors[project.team]
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  className="group relative p-5 rounded-lg border border-accent-purple/20 bg-bg-surface/30 hover:border-accent-pink/50 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  <div
                    className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl pointer-events-none"
                    style={{ background: `radial-gradient(600px circle at 50% 0%, ${colors.glow}, transparent 40%)` }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border ${colors.tag}`}>
                        {project.subtitle || project.team}
                      </span>
                      <span className="text-text-secondary/40 text-lg font-mono">0{idx + 1}</span>
                    </div>

                    <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-accent-pink transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-body text-sm text-text-secondary/80 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.map((tech: string) => (
                          <span key={tech} className={`px-2 py-0.5 rounded text-[10px] font-mono border ${colors.tech}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.highlights.length > 0 && (
                      <details className="group/details mt-auto">
                        <summary className="font-mono text-xs text-text-secondary/50 cursor-pointer hover:text-text-secondary/70 transition-colors list-none flex items-center gap-1.5">
                          <svg className="w-3 h-3 transition-transform group-open/details:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Key highlights ({project.highlights.length})
                        </summary>
                        <ul className="space-y-1 mt-2">
                          {project.highlights.map((h: string, i: number) => (
                            <li key={i} className="font-body text-xs text-text-secondary/50 leading-relaxed flex items-start gap-1.5">
                              <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                                project.team === 'blue' ? 'bg-accent-cyan' : project.team === 'red' ? 'bg-accent-pink' : 'bg-purple-400'
                              }`} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
