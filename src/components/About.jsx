import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'
import BlurFade from './BlurFade'
import { Shield, Skull } from './icons'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">01.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-cyber-purple to-transparent" />
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-5 gap-8 mt-10">
          <div className="md:col-span-3">
            <BlurFade delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-cyan-500/20 bg-cyan-500/5">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs text-cyan-400">Blue Team</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded border border-cyber-pink/20 bg-cyber-pink/5">
                  <Skull className="w-4 h-4 text-cyber-pink" />
                  <span className="font-mono text-xs text-cyber-pink">Red Team</span>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="font-body text-base text-gray-300 leading-relaxed mb-4">
                {personalInfo.summaryBlue}
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="font-body text-base text-gray-300 leading-relaxed mb-6">
                {personalInfo.summaryRed}
              </p>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2.5 rounded border border-cyber-purple/20 bg-cyber-darkest/50">
                  <span className="font-display text-xl font-bold text-cyber-pink">{personalInfo.gpa}</span>
                  <p className="font-mono text-[10px] text-gray-500 mt-0.5">GPA</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-cyber-purple/20 bg-cyber-darkest/50">
                  <span className="font-display text-xl font-bold text-cyber-pink">9</span>
                  <p className="font-mono text-[10px] text-gray-500 mt-0.5">Certifications</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-cyber-purple/20 bg-cyber-darkest/50">
                  <span className="font-display text-xl font-bold text-cyber-pink">ISC2</span>
                  <p className="font-mono text-[10px] text-gray-500 mt-0.5">Certified</p>
                </div>
                <div className="px-4 py-2.5 rounded border border-cyber-purple/20 bg-cyber-darkest/50">
                  <span className="font-display text-xl font-bold text-cyber-pink">CRTA</span>
                  <p className="font-mono text-[10px] text-gray-500 mt-0.5">Red Team</p>
                </div>
              </div>
            </BlurFade>
          </div>

          <div className="md:col-span-2">
            <BlurFade delay={0.3} direction="right">
              <div className="rounded-lg border border-cyber-magenta/20 bg-cyber-dark/50 overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 pt-3 pb-2 border-b border-cyber-magenta/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[10px] text-gray-600">profile.sh</span>
                </div>
                <div className="p-4 font-mono text-xs space-y-1.5 leading-relaxed">
                  <p><span className="text-green-400">$</span> <span className="text-cyan-400">whoami</span></p>
                  <p className="text-gray-300 pl-4">{personalInfo.name}</p>
                  <p><span className="text-green-400">$</span> <span className="text-cyan-400">cat</span> <span className="text-yellow-300">/etc/roles</span></p>
                  <p className="text-cyan-400 pl-4">blue_team: SOC Analyst | AI Security</p>
                  <p className="text-cyber-pink pl-4">red_team: Pentester | Offensive Security</p>
                  <p><span className="text-green-400">$</span> <span className="text-cyan-400">curl</span> <span className="text-yellow-300">-s https://api.location</span></p>
                  <p className="text-gray-300 pl-4 break-all">{personalInfo.location}</p>
                  <p><span className="text-green-400">$</span> <span className="text-cyan-400">gpa</span> <span className="text-yellow-300">--degree "B.S. Cybersecurity"</span></p>
                  <p className="text-gray-300 pl-4">{personalInfo.gpa} — {personalInfo.university}</p>
                  <p><span className="text-green-400">$</span> <span className="text-cyan-400">_</span><span className="animate-pulse">▊</span></p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
