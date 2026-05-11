import { motion } from 'framer-motion'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Certifications</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-cyber-purple to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="group relative p-4 rounded-lg border border-cyber-purple/20 bg-cyber-dark/30 hover:border-cyber-magenta/50 transition-all duration-300"
              >
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-magenta flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-sm font-semibold text-white mb-1 group-hover:text-cyber-pink transition-colors">
                  {cert.name}
                </h3>
                <p className="font-mono text-xs text-gray-500">{cert.issuer}</p>
                {cert.status && (
                  <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                    {cert.status}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
