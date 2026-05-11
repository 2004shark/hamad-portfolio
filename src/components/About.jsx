import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personalInfo } from '../data/resumeData'

export default function About() {
  const [activeTeam, setActiveTeam] = useState('blue')

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">01.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-cyber-purple to-transparent" />
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-10">
            <div className="md:col-span-3">
              <p className="font-body text-lg text-gray-300 leading-relaxed mb-6">
                {personalInfo.summaryBlue}
              </p>
              <p className="font-body text-lg text-gray-300 leading-relaxed">
                {personalInfo.summaryRed}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-4 py-2 rounded border border-cyber-purple/30 bg-cyber-darkest/50">
                  <span className="font-display text-2xl font-bold text-cyber-pink">{personalInfo.gpa}</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">GPA</p>
                </div>
                <div className="px-4 py-2 rounded border border-cyber-purple/30 bg-cyber-darkest/50">
                  <span className="font-display text-2xl font-bold text-cyber-pink">3+</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">Certifications</p>
                </div>
                <div className="px-4 py-2 rounded border border-cyber-purple/30 bg-cyber-darkest/50">
                  <span className="font-display text-2xl font-bold text-cyber-pink">ISC2</span>
                  <p className="font-mono text-xs text-gray-500 mt-1">Certified</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="rounded-lg border border-cyber-magenta/20 bg-cyber-dark/50 overflow-hidden">
                <div className="p-4 border-b border-cyber-magenta/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 font-mono text-xs text-gray-500">profile.sh</span>
                  </div>
                  <div className="font-mono text-xs space-y-1.5">
                    <p><span className="text-green-400">$</span> <span className="text-cyan-400">whoami</span></p>
                    <p className="text-gray-300 pl-4">{personalInfo.name}</p>
                    <p><span className="text-green-400">$</span> <span className="text-cyan-400">cat</span> <span className="text-yellow-300">/etc/roles</span></p>
                    <p className="text-cyan-400 pl-4">blue_team: SOC Analyst | AI Security</p>
                    <p className="text-cyber-pink pl-4">red_team: Penetration Tester | Offensive Security</p>
                    <p><span className="text-green-400">$</span> <span className="text-cyan-400">curl</span> <span className="text-yellow-300">-X GET /api/location</span></p>
                    <p className="text-gray-300 pl-4">{personalInfo.location}</p>
                    <p><span className="text-green-400">$</span> <span className="text-cyan-400">_</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
