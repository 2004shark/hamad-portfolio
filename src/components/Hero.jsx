import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'

const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01'

export default function Hero() {
  const [matrixDrops, setMatrixDrops] = useState([])
  const titleBlue = "SOC Analyst | AI Security Engineer | Detection Engineer"
  const titleRed = "Red Team Analyst | Penetration Tester | Offensive Security"

  useEffect(() => {
    const drops = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      chars: Array.from({ length: 8 + Math.floor(Math.random() * 12) }, () =>
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      ),
    }))
    setMatrixDrops(drops)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-darkest">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 123, 191, 0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      {matrixDrops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-[10px] leading-none text-cyber-pink/20 font-mono"
          style={{
            left: `${drop.left}%`,
            top: '-20%',
            animation: `matrix-rain ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        >
          {drop.chars.map((char, i) => (
            <div key={i} style={{ opacity: 1 - i * 0.08 }}>{char}</div>
          ))}
        </div>
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-cyber-pink" />
            <span className="font-mono text-xs tracking-[0.3em] text-cyber-pink uppercase">Cyber Security Professional</span>
            <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-cyber-pink" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
            <span className="text-white">HAMAD MOIZ</span><br />
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-magenta to-cyber-pink bg-clip-text text-transparent">CHODHRY</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 text-sm md:text-base font-mono">
            <span className="px-3 py-1 rounded border border-cyber-blue/30 bg-cyber-dark/50 text-cyan-400">
              <span className="text-cyan-400">&lt;</span>
              Blue Team
              <span className="text-cyan-400"> /&gt;</span>
            </span>
            <span className="text-gray-600">✦</span>
            <span className="px-3 py-1 rounded border border-cyber-magenta/30 bg-cyber-dark/50 text-cyber-pink">
              <span className="text-cyber-pink">[</span>
              Red Team
              <span className="text-cyber-pink">]</span>
            </span>
          </div>

          <p className="font-body text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.summaryBlue.slice(0, 200)}...
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.a
              href="#about"
              className="px-8 py-3 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-magenta text-white hover:shadow-[0_0_30px_rgba(150,78,194,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Portfolio
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 border border-cyber-pink/50 text-cyber-pink hover:bg-cyber-pink/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-6 font-mono text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
            <span className="hidden sm:block">|</span>
            <span className="hidden sm:block">{personalInfo.location}</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyber-magenta/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
