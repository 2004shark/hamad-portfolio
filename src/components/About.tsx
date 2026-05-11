import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'
import BlurFade from './BlurFade'
import { Shield, Skull } from './icons'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">01.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">About Me</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-5 gap-8 mt-10">
          <div className="md:col-span-3">
            <BlurFade delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-accent-cyan/20 bg-accent-cyan/5">
                  <Shield className="w-4 h-4 text-accent-cyan" />
                  <span className="font-mono text-xs text-accent-cyan">Blue Team</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-accent-pink/20 bg-accent-pink/5">
                  <Skull className="w-4 h-4 text-accent-pink" />
                  <span className="font-mono text-xs text-accent-pink">Red Team</span>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-4">
                {personalInfo.summaryBlue}
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                {personalInfo.summaryRed}
              </p>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2.5 rounded border border-accent-purple/20 bg-bg-surface/50">
                  <span className="font-display text-xl font-bold text-accent-pink">{personalInfo.gpa}</span>
                  <p className="font-mono text-[10px] text-text-secondary/50 mt-0.5">GPA</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-accent-purple/20 bg-bg-surface/50">
                  <span className="font-display text-xl font-bold text-accent-pink">9</span>
                  <p className="font-mono text-[10px] text-text-secondary/50 mt-0.5">Certifications</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-accent-purple/20 bg-bg-surface/50">
                  <span className="font-display text-xl font-bold text-accent-pink">ISC2</span>
                  <p className="font-mono text-[10px] text-text-secondary/50 mt-0.5">Certified</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-accent-purple/20 bg-bg-surface/50">
                  <span className="font-display text-xl font-bold text-accent-pink">CRTA</span>
                  <p className="font-mono text-[10px] text-text-secondary/50 mt-0.5">Red Team</p>
                </div>
              </div>
            </BlurFade>
          </div>

          <div className="md:col-span-2">
            <BlurFade delay={0.3} direction="right">
              <div className="rounded-lg border border-accent-pink/20 bg-bg-surface/50 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 border-b border-accent-pink/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[10px] text-text-secondary/40">profile.sh</span>
                </div>
                <div className="p-4 font-mono text-xs space-y-1.5 leading-relaxed">
                  <p><span className="text-green-400">$</span> <span className="text-accent-cyan">whoami</span></p>
                  <p className="text-text-secondary/80 pl-4">{personalInfo.name}</p>
                  <p><span className="text-green-400">$</span> <span className="text-accent-cyan">cat</span> <span className="text-yellow-300">/etc/roles</span></p>
                  <p className="text-accent-cyan pl-4">blue_team: SOC Analyst | AI Security</p>
                  <p className="text-accent-pink pl-4">red_team: Pentester | Offensive Security</p>
                  <p><span className="text-green-400">$</span> <span className="text-accent-cyan">curl</span> <span className="text-yellow-300">-s https://api.location</span></p>
                  <p className="text-text-secondary/80 pl-4 break-all">{personalInfo.location}</p>
                  <p><span className="text-green-400">$</span> <span className="text-accent-cyan">gpa</span> <span className="text-yellow-300">--degree "B.S. Cybersecurity"</span></p>
                  <p className="text-text-secondary/80 pl-4">{personalInfo.gpa} — {personalInfo.university}</p>
                  <p><span className="text-green-400">$</span> <span className="text-accent-cyan">_</span><span className="animate-pulse">▊</span></p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
