import { motion } from 'framer-motion'
import { researchTopics } from '../data/resumeData'
import BlurFade from './BlurFade'
import { FileSearch, Book, Bot, Shield, Search, Globe } from 'lucide-react'

const topicIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'AI Security': Bot,
  'LLM': Bot,
  'Mobile Forensics': Search,
  'MCP': Globe,
  'Zero Trust': Shield,
  'Sigma': FileSearch,
  'Threat Intel': Globe,
}

function getIcon(tags: string[]) {
  for (const tag of tags) {
    if (topicIcons[tag]) return topicIcons[tag]
  }
  return Book
}

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-accent-pink text-sm">05.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Research</h2>
            <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
          </div>
        </BlurFade>

        <BlurFade delay={0.1}>
          <p className="font-body text-base text-text-secondary/80 max-w-2xl mb-10 leading-relaxed">
            Ongoing research in AI security, detection engineering, and offensive cybersecurity methodologies.
          </p>
        </BlurFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {researchTopics.map((topic: { title: string; description: string; tags: string[] }, idx: number) => {
            const Icon = getIcon(topic.tags)
            return (
              <BlurFade key={topic.title} delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative p-5 rounded-lg border border-accent-purple/20 bg-bg-surface/30 backdrop-blur-sm h-full flex flex-col"
                >
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div
                    className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-md pointer-events-none"
                    style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(139,92,246,0.15), transparent 40%)' }}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-9 h-9 rounded-lg bg-accent-purple/10 flex items-center justify-center mb-3 group-hover:bg-accent-purple/20 transition-colors">
                      <Icon className="w-4 h-4 text-accent-purple" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-text-primary mb-2 group-hover:text-accent-purple transition-colors">
                      {topic.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary/70 leading-relaxed mb-4 flex-1">
                      {topic.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {topic.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono border border-accent-purple/15 text-accent-purple/70 bg-accent-purple/8"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
