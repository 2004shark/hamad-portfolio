import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { publications, researchTopics } from '../data/resumeData'
import BlurFade from './BlurFade'
import { FileSearch, Book, Bot, Shield, Search, Globe, ExternalLink, Download, X, Eye, Quote, BookOpen, Layers } from 'lucide-react'

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

function PaperThumbnail() {
  return (
    <div className="relative w-full max-w-[260px] mx-auto aspect-[3/4]">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-purple/20 via-accent-cyan/10 to-accent-pink/10 border border-accent-purple/30 shadow-lg overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-pink" />
        <div className="p-4 pt-6 flex flex-col gap-2.5">
          {[80, 95, 70, 85, 60, 90, 75, 65, 80, 55].map((w, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-cyan/20"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg-primary/80 to-transparent">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-accent-cyan/30 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent-cyan/50" />
            </div>
            <span className="font-mono text-[8px] text-accent-cyan/50 uppercase tracking-wider">AI SOC Research</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PdfPreviewModal({ paper, onClose }: { paper: typeof publications[0]; onClose: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => setShowSpinner(false), 2000)

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      clearTimeout(timer)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative w-[95vw] sm:w-[90vw] h-[85vh] sm:h-[90vh] max-w-6xl rounded-2xl border border-accent-purple/20 bg-bg-primary/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.25)] flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-accent-purple/10 bg-accent-purple/[0.03]">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-accent-purple" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs text-text-primary truncate max-w-[40vw] sm:max-w-none">
                {paper.title.split(':')[0]}
              </p>
              <p className="font-mono text-[10px] text-text-secondary/50 truncate">
                {paper.journal} &middot; {paper.year}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan/10 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open</span>
            </a>
            <a
              href={paper.pdfUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-accent-purple border border-accent-purple/20 hover:bg-accent-purple/10 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-text-secondary/50 hover:text-text-primary hover:bg-accent-purple/10 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 relative bg-[#0f0f1a] min-h-0">
          {showSpinner && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-accent-purple/30 border-t-accent-purple rounded-full animate-spin" />
                <span className="font-mono text-xs text-text-secondary/50">Loading PDF...</span>
              </div>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={paper.pdfUrl}
            className="w-full h-full border-0"
            title={paper.title}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function FeaturedPublication({ paper, onPreview }: { paper: typeof publications[0]; onPreview: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl border border-accent-purple/20 bg-bg-surface/30 backdrop-blur-sm overflow-hidden"
    >
      <motion.div
        className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl"
        style={{
          background: 'radial-gradient(600px circle at 50% 0%, rgba(139,92,246,0.12), transparent 50%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 grid lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-full bg-gradient-to-br from-accent-purple/[0.08] via-accent-cyan/[0.04] to-accent-pink/[0.08] flex items-center justify-center p-6 sm:p-8">
          <motion.div
            animate={isHovered ? { scale: 1.03, rotateY: 2 } : { scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full"
          >
            <PaperThumbnail />
          </motion.div>
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-accent-purple/15 text-accent-purple border border-accent-purple/20">
              <BookOpen className="w-3 h-3" />
              Published
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="font-mono text-[10px] text-text-secondary/40 bg-bg-primary/40 px-2 py-0.5 rounded backdrop-blur-sm">
              Vol. 1 No. 1 (2025)
            </span>
          </div>
        </div>

        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-accent-cyan/20 text-accent-cyan bg-accent-cyan/8">
              {paper.category}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-accent-purple/15 text-accent-purple/60 bg-accent-purple/8">
              Peer-Reviewed
            </span>
          </div>

          <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary mb-3 leading-snug group-hover:text-accent-purple transition-colors duration-300">
            {paper.title}
          </h3>

          <p className="font-mono text-xs text-accent-cyan/70 mb-4 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent-cyan/50" />
            {paper.authors}
          </p>

          <div className="relative mb-5 pl-5 border-l border-accent-purple/20">
            <Quote className="absolute -top-0.5 -left-2.5 w-3.5 h-3.5 text-accent-purple/30" />
            <p className="font-body text-sm text-text-secondary/70 leading-relaxed line-clamp-4">
              {paper.abstract}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {paper.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded text-[10px] font-mono border border-accent-purple/15 text-accent-purple/70 bg-accent-purple/[0.06] hover:bg-accent-purple/[0.12] hover:text-accent-purple transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            <motion.button
              onClick={onPreview}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-purple text-white text-xs font-semibold shadow-lg shadow-accent-purple/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              <Eye className="w-4 h-4" />
              Preview PDF
            </motion.button>
            <motion.a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent-cyan/30 text-accent-cyan text-xs font-semibold hover:bg-accent-cyan/5 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View Publication
            </motion.a>
            <motion.a
              href={paper.pdfUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-subtle text-text-secondary text-xs font-semibold hover:border-accent-purple/30 hover:text-accent-purple transition-all"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Research() {
  const [previewPaper, setPreviewPaper] = useState<typeof publications[0] | null>(null)

  return (
    <>
      <section id="research" className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-60 -right-40 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-accent-pink text-sm">05.</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">Research Publications</h2>
              <span className="flex-1 h-px bg-gradient-to-r from-accent-purple to-transparent" />
            </div>
          </BlurFade>

          <BlurFade delay={0.1}>
            <p className="font-body text-base text-text-secondary/80 max-w-3xl mb-10 leading-relaxed">
              Published research and ongoing work in AI security, cybersecurity architecture,
              digital forensics, and detection engineering.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <FeaturedPublication
              paper={publications[0]}
              onPreview={() => setPreviewPaper(publications[0])}
            />
          </BlurFade>

          <div className="mt-16 mb-6">
            <BlurFade>
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-accent-purple/60" />
                <h3 className="font-display text-lg font-bold text-text-primary">Research Areas</h3>
                <span className="flex-1 h-px bg-gradient-to-r from-accent-purple/30 to-transparent" />
              </div>
            </BlurFade>
          </div>

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

      <AnimatePresence>
        {previewPaper && (
          <PdfPreviewModal
            paper={previewPaper}
            onClose={() => setPreviewPaper(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
