import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blueTeam, redTeam } from '../data/resumeData'
import { getSkillIcon } from './icons'
import BlurFade from './BlurFade'

export default function Skills() {
  const [activeTeam, setActiveTeam] = useState<'blue' | 'red'>('blue')
  const skills = activeTeam === 'blue' ? blueTeam.skills : redTeam.skills

  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-transparent to-bg-primary/30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Skills Matrix</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            <button
              onClick={() => setActiveTeam('blue')}
              className={`px-6 py-2 rounded font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTeam === 'blue'
                  ? 'bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'border border-text-secondary/20 text-text-secondary/50 hover:border-text-secondary/40'
              }`}
            >
              &lt; Blue Team /&gt;
            </button>
            <button
              onClick={() => setActiveTeam('red')}
              className={`px-6 py-2 rounded font-mono text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTeam === 'red'
                  ? 'bg-accent-pink/20 border border-accent-pink/50 text-accent-pink shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                  : 'border border-text-secondary/20 text-text-secondary/50 hover:border-text-secondary/40'
              }`}
            >
              [ Red Team ]
            </button>
          </div>
        </BlurFade>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTeam}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {skills.map((skill: { category: string; items: string[]; desc: string }, index: number) => {
              const Icon = getSkillIcon(skill.category)
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="group relative p-5 rounded-lg border border-accent-purple/20 bg-bg-surface/30 hover:border-accent-pink/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(150,78,194,0.15)]"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        activeTeam === 'blue' ? 'bg-accent-cyan/15 text-accent-cyan' : 'bg-accent-pink/15 text-accent-pink'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm font-semibold text-accent-pink uppercase tracking-wider">
                          {skill.category}
                        </h3>
                        <p className="font-body text-[11px] text-text-secondary/40 truncate">{skill.desc}</p>
                      </div>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                        activeTeam === 'blue' ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-accent-pink/10 text-accent-pink'
                      }`}>
                        {skill.items.length}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item: string) => (
                        <span
                          key={item}
                          className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all duration-200 ${
                            activeTeam === 'blue'
                              ? 'bg-accent-cyan/8 text-accent-cyan/80 border border-accent-cyan/15'
                              : 'bg-accent-pink/8 text-accent-pink/80 border border-accent-pink/15'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
