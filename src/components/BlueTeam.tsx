import { motion } from 'framer-motion'
import { Shield, Search, Target, Database, CircleAlert, Radio, Eye, Zap, Bot } from 'lucide-react'
import { blueTeamStats } from '../data/resumeData'
import BlurFade from './BlurFade'

const statIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  alert: CircleAlert,
  shield: Shield,
  target: Target,
  database: Database,
}

const capabilities = [
  { label: 'SIEM Monitoring', icon: Eye, desc: 'Real-time log analysis', active: true },
  { label: 'Threat Hunting', icon: Search, desc: 'Proactive threat detection', active: true },
  { label: 'Incident Response', icon: Radio, desc: 'Automated IR playbooks', active: true },
  { label: 'Sigma Rules', icon: Zap, desc: 'Custom detection rules', active: true },
  { label: 'SOC Automation', icon: Bot, desc: 'AI-powered triage', active: true },
]

export default function BlueTeam() {
  return (
    <section id="blueteam" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-accent-purple/5 pointer-events-none" />

      <div className="absolute top-40 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-cyan text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Blue Team</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-cyan to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="font-mono text-xs text-accent-cyan/60 tracking-widest uppercase mb-2">Detection &amp; Response</p>
          <p className="font-body text-base text-text-secondary/80 max-w-2xl mb-10 leading-relaxed">
            SOC operations, threat detection, and AI-driven security automation.
            Monitoring enterprise environments with SIEM, EDR, and SOAR platforms.
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {blueTeamStats.map((stat: { label: string; value: string; icon: string }, idx: number) => {
            const Icon = statIcons[stat.icon] || Shield
            return (
              <BlurFade key={stat.label} delay={idx * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative p-5 rounded-lg border border-accent-cyan/20 bg-bg-surface/40 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent-cyan" />
                    </div>
                    <p className="font-display text-2xl font-bold text-text-primary mb-0.5">{stat.value}</p>
                    <p className="font-mono text-xs text-text-secondary/50">{stat.label}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-cyan/5 rounded-bl-full blur-xl" />
                </motion.div>
              </BlurFade>
            )
          })}
        </div>

        <BlurFade delay={0.2}>
          <div className="rounded-lg border border-accent-cyan/20 bg-bg-surface/30 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-accent-cyan/10 bg-accent-cyan/5">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="font-mono text-xs text-accent-cyan/80 tracking-wider uppercase">SOC Dashboard — Active Capabilities</span>
            </div>
            <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-accent-cyan/10">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon
                return (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 + 0.3 }}
                    className="p-4 text-center group hover:bg-accent-cyan/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-accent-cyan/20 transition-colors">
                      <Icon className="w-4 h-4 text-accent-cyan" />
                    </div>
                    <p className="font-display text-sm font-semibold text-text-primary mb-0.5">{cap.label}</p>
                    <p className="font-mono text-[10px] text-text-secondary/50">{cap.desc}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20">
                      Active
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
