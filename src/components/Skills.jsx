import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blueTeam, redTeam } from '../data/resumeData'

export default function Skills() {
  const [activeTeam, setActiveTeam] = useState('blue')

  const skills = activeTeam === 'blue' ? blueTeam.skills : redTeam.skills

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/30 via-transparent to-cyber-dark/30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Skills Matrix</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-cyber-purple to-transparent" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            <button
              onClick={() => setActiveTeam('blue')}
              className={`px-6 py-2 rounded font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTeam === 'blue'
                  ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border border-gray-700 text-gray-500 hover:border-gray-500'
              }`}
            >
              &lt; Blue Team /&gt;
            </button>
            <button
              onClick={() => setActiveTeam('red')}
              className={`px-6 py-2 rounded font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTeam === 'red'
                  ? 'bg-cyber-pink/20 border border-cyber-pink/50 text-cyber-pink shadow-[0_0_15px_rgba(255,123,191,0.3)]'
                  : 'border border-gray-700 text-gray-500 hover:border-gray-500'
              }`}
            >
              [ Red Team ]
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeam}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative p-5 rounded-lg border border-cyber-purple/20 bg-cyber-dark/30 hover:border-cyber-magenta/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(150,78,194,0.15)]"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-cyber-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="font-display text-sm font-semibold text-cyber-pink mb-1 uppercase tracking-wider">
                      {skill.category}
                    </h3>
                    <p className="font-body text-xs text-gray-500 mb-3">{skill.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span
                          key={item}
                          className={`px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 ${
                            activeTeam === 'blue'
                              ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                              : 'bg-cyber-pink/10 text-cyber-pink/90 border border-cyber-pink/20'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
