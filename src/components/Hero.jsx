import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'
import { GitHub, LinkedIn, Mail } from './icons'

const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01'

export default function Hero() {
  const [matrixDrops, setMatrixDrops] = useState([])
  const [displayText, setDisplayText] = useState('')
  const tagline = 'SOC Analyst // Penetration Tester // AI Security Engineer'

  useEffect(() => {
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 2 + Math.random() * 6,
      chars: Array.from({ length: 6 + Math.floor(Math.random() * 15) }, () =>
        matrixChars[Math.floor(Math.random() * matrixChars.length)]
      ),
    }))
    setMatrixDrops(drops)
  }, [])

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(tagline.slice(0, i + 1))
      i++
      if (i >= tagline.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-darkest">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 123, 191, 0.4) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-pink/20 to-transparent"
          style={{ animation: 'scanline 8s linear infinite', transform: 'translateY(-100%)' }} />
      </div>

      {matrixDrops.map(drop => (
        <div
          key={drop.id}
          className="absolute text-[8px] leading-none text-cyber-pink/[0.12] font-mono"
          style={{
            left: `${drop.left}%`,
            top: '-20%',
            animation: `matrix-rain ${drop.duration}s linear ${drop.delay}s infinite`,
          }}
        >
          {drop.chars.map((char, i) => (
            <div key={i} style={{ opacity: 1 - i * 0.07 }}>{char}</div>
          ))}
        </div>
      ))}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyber-magenta" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-cyber-magenta uppercase">Cyber Security Professional</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyber-magenta" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tight leading-[1.1]">
            <span className="text-white/90">HAMAD MOIZ</span><br />
            <span className="bg-gradient-to-r from-cyber-purple via-cyber-magenta to-cyber-pink bg-clip-text text-transparent">CHODHRY</span>
          </h1>

          <div className="h-8 md:h-10 flex items-center justify-center mb-6">
            <span className="font-mono text-sm md:text-base text-gray-400">
              {displayText}
              <span className="inline-block w-[3px] h-4 md:h-5 bg-cyber-pink ml-0.5 animate-pulse" />
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm font-mono">
            <span className="px-3 py-1.5 rounded border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs">
              <span className="text-cyan-400">&lt;</span> Blue Team <span className="text-cyan-400">/&gt;</span>
            </span>
            <span className="text-gray-700 text-lg">✦</span>
            <span className="px-3 py-1.5 rounded border border-cyber-pink/30 bg-cyber-pink/5 text-cyber-pink text-xs">
              <span className="text-cyber-pink">[</span> Red Team <span className="text-cyber-pink">]</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-magenta text-white hover:shadow-[0_0_30px_rgba(150,78,194,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Portfolio
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 border border-cyber-pink/50 text-cyber-pink hover:bg-cyber-pink/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-5 mb-8">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-pink transition-colors">
              <GitHub className="w-5 h-5" />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-pink transition-colors">
              <LinkedIn className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-cyber-pink transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 font-mono text-xs text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available
            </span>
            <span className="text-gray-800">|</span>
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-cyber-magenta/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
