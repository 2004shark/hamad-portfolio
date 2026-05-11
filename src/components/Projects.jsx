import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/resumeData'

const teamColors = {
  blue: { border: 'border-cyan-500/30', tag: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/20', glow: 'rgba(6,182,212,0.2)' },
  red: { border: 'border-cyber-pink/30', tag: 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/20', glow: 'rgba(255,123,191,0.2)' },
  both: { border: 'border-purple-500/30', tag: 'bg-purple-500/20 text-purple-300 border-purple-500/20', glow: 'rgba(168,85,247,0.2)' },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? projects : projects.filter(p => p.team === filter)

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/20 via-transparent to-cyber-dark/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">04.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-cyber-purple to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            {['all', 'blue', 'red'].map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-5 py-1.5 rounded font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  filter === t
                    ? t === 'blue'
                      ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-400'
                      : t === 'red'
                      ? 'bg-cyber-pink/20 border border-cyber-pink/50 text-cyber-pink'
                      : 'bg-white/10 border border-white/30 text-white'
                    : 'border border-gray-700 text-gray-500 hover:border-gray-500'
                }`}
              >
                {t === 'all' ? '[ All ]' : t === 'blue' ? '< Blue />' : '[ Red ]'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((project, idx) => {
                const colors = teamColors[project.team]
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="group relative p-6 rounded-lg border border-cyber-purple/20 bg-cyber-dark/30 hover:border-cyber-magenta/50 transition-all duration-500 overflow-hidden"
                  >
                    <div
                      className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl pointer-events-none"
                      style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${colors.glow}, transparent 40%)` }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase border ${colors.tag}`}>
                          {project.subtitle}
                        </span>
                        <span className="text-gray-600 text-xl font-mono">0{idx + 1}</span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyber-pink transition-colors">
                        {project.title}
                      </h3>

                      <p className="font-body text-sm text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {project.highlights.length > 0 && (
                        <ul className="space-y-1.5 mb-4">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="font-body text-xs text-gray-500 leading-relaxed flex items-start gap-2">
                              <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                                project.team === 'blue' ? 'bg-cyan-400' : project.team === 'red' ? 'bg-cyber-pink' : 'bg-purple-400'
                              }`} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="flex items-center gap-2 mt-auto">
                        <span className="text-xs font-mono text-gray-600">Status:</span>
                        <span className="text-xs font-mono text-green-400">Completed</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
