import { motion } from 'framer-motion'
import { personalInfo } from '../data/resumeData'
import BlurFade from './BlurFade'
import { GitHub, LinkedIn, Mail, Phone } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/40 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <BlurFade>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="font-mono text-cyber-pink text-sm">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <span className="h-px w-12 bg-gradient-to-l from-cyber-purple to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="font-body text-lg text-gray-400 mt-6 max-w-xl mx-auto leading-relaxed">
            I'm currently open to remote opportunities in SOC, penetration testing,
            and AI security roles. Whether you have a project or just want to connect,
            feel free to reach out.
          </p>
        </BlurFade>

        <BlurFade delay={0.2}>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded font-semibold text-sm tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-cyber-purple to-cyber-magenta text-white hover:shadow-[0_0_40px_rgba(150,78,194,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="flex items-center justify-center gap-8 mt-12">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 group-hover:text-white group-hover:border-cyber-pink/50 group-hover:bg-cyber-pink/10 transition-all duration-300">
                <GitHub className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">GitHub</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 group-hover:text-white group-hover:border-cyber-pink/50 group-hover:bg-cyber-pink/10 transition-all duration-300">
                <LinkedIn className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 group-hover:text-white group-hover:border-cyber-pink/50 group-hover:bg-cyber-pink/10 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">Email</span>
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex flex-col items-center gap-2"
            >
              <div className="p-3 rounded-lg border border-cyber-purple/20 text-gray-500 group-hover:text-white group-hover:border-cyber-pink/50 group-hover:bg-cyber-pink/10 transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors">Phone</span>
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="font-mono text-xs text-gray-600 mt-8">
            {personalInfo.location}
          </p>
        </BlurFade>
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
