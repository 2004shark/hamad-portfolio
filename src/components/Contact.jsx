import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">06.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <span className="h-px w-12 bg-gradient-to-l from-cyber-purple to-transparent" />
          </div>

          <p className="font-body text-lg text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
            I'm currently open to remote opportunities in SOC, penetration testing,
            and AI security roles. Whether you have a project or just want to connect,
            feel free to reach out.
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-magenta text-white hover:shadow-[0_0_40px_rgba(150,78,194,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </motion.a>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 hover:text-cyber-pink hover:border-cyber-pink/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 hover:text-cyber-pink hover:border-cyber-pink/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 hover:text-cyber-pink hover:border-cyber-pink/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>

          <p className="font-mono text-xs text-gray-600 mt-8">
            {personalInfo.location}
          </p>
        </motion.div>
      </div>

      <div className="mt-24 pt-8 border-t border-cyber-purple/10 text-center">
        <p className="font-mono text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Hamad Moiz Chodhry. Built with cyberpunk precision.
        </p>
        <p className="font-mono text-[10px] text-gray-700 mt-1">
          <span className="text-cyan-400">sudo</span> rm -rf /impress --no-preserve-root
        </p>
      </div>
    </section>
  )
}
