import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Eye } from 'lucide-react'
import { GitHub, LinkedIn } from './icons'
import { personalInfo, roles } from '../data/resumeData'

const techLogos = [
  { label: 'CRTA', color: '#EC4899' },
  { label: 'ISC2', color: '#8B5CF6' },
  { label: 'CEH', color: '#06B6D4' },
  { label: 'Fortinet', color: '#8B5CF6' },
  { label: 'Wazuh', color: '#06B6D4' },
  { label: 'Elastic', color: '#EC4899' },
  { label: 'Suricata', color: '#8B5CF6' },
  { label: 'Docker', color: '#06B6D4' },
  { label: 'Python', color: '#8B5CF6' },
  { label: 'Linux', color: '#EC4899' },
  { label: 'Splunk', color: '#8B5CF6' },
]

function FloatingBadge({ label, color, index }: { label: string; color: string; index: number }) {
  const angle = (index / techLogos.length) * Math.PI * 2
  const radius = 155
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  const duration = 8 + Math.random() * 4
  const delay = Math.random() * 3

  return (
    <motion.div
      className="absolute"
      style={{ left: '50%', top: '50%' }}
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: [x, x + 12, x - 8, x],
        y: [y, y - 12, y + 8, y],
        opacity: 1,
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="px-2.5 py-1 rounded text-[10px] font-mono font-semibold tracking-wider whitespace-nowrap"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
          color,
          backdropFilter: 'blur(8px)',
        }}
      >
        {label}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && displayText.length < current.length) {
      timer = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60)
    } else if (!deleting && displayText.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayText.length > 0) {
      timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30)
    } else if (deleting && displayText.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timer)
  }, [displayText, deleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent"
            style={{ animation: 'scanline 8s linear infinite' }} />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-text-secondary tracking-wider">Active for opportunities</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-4 tracking-tight">
              <span className="text-text-primary">HAMAD MOIZ</span>
              <br />
              <span className="bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink bg-clip-text text-transparent">
                CHODHRY
              </span>
            </h1>

            <div className="h-9 flex items-center mb-6">
              <span className="font-mono text-sm sm:text-base text-accent-cyan">
                {displayText}
                <span className="inline-block w-[2px] h-4 sm:h-5 bg-accent-cyan ml-0.5 animate-pulse" />
              </span>
            </div>

            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-purple text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Eye size={16} />
                View Projects
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-purple/30 text-accent-purple text-sm font-semibold hover:bg-accent-purple/5 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Contact Me
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-secondary text-sm font-semibold hover:border-text-secondary/30 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/hamad-moiz" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 transition-all">
                <LinkedIn size={18} />
              </a>
              <a href="https://github.com/2004shark" target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 transition-all">
                <GitHub size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-border-subtle text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[380px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/20 via-accent-cyan/10 to-accent-pink/20 animate-pulse-glow" />

              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 rounded-full border"
                  style={{
                    borderColor: `rgba(139, 92, 246, ${0.15 - i * 0.04})`,
                    transform: `scale(${1 + i * 0.2})`,
                    animation: `float ${3 + i * 1.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}

              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-purple/20 mx-auto mb-2 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-accent-purple">H</span>
                  </div>
                  <span className="font-mono text-[10px] text-text-secondary">Cybersecurity</span>
                </div>
              </div>

              {techLogos.map((logo, i) => (
                <FloatingBadge key={logo.label} {...logo} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
