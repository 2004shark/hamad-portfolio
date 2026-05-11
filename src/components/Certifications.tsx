import BlurFade from './BlurFade'
import { certifications } from '../data/resumeData'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Certifications</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {certifications.map((cert: { name: string; issuer: string; status?: string; color?: string }, idx: number) => (
            <BlurFade key={cert.name} delay={idx * 0.04}>
              <div className="group relative p-4 rounded-lg border border-accent-purple/20 bg-bg-surface/30 hover:border-accent-pink/50 transition-all duration-300 h-full">
                <div className="mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-sm font-semibold text-text-primary mb-1 group-hover:text-accent-pink transition-colors">
                  {cert.name}
                </h3>
                <p className="font-mono text-xs text-text-secondary/50">{cert.issuer}</p>
                {cert.status && (
                  <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">
                    {cert.status}
                  </span>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
