import { publications } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'

const DocumentIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
)

const ArrowIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
  </svg>
)

export default function Research() {
  return (
    <section id="research" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <SectionHeading
            title="Research"
            blurb="Published work on autonomous, LLM-driven security operations."
            color="bg-violet"
          />
        </BlurFade>

        {publications.map((paper) => (
          <div key={paper.title}>
            <BlurFade>
              <article className="rounded-xl border border-line bg-surface overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent via-violet to-off" />

                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-accent bg-accent-soft">
                      <DocumentIcon className="w-3.5 h-3.5" />
                      Published paper
                    </span>
                    <span className="text-xs text-faint">{paper.venue}</span>
                    <span aria-hidden="true" className="text-line">·</span>
                    <span className="text-xs text-faint">{paper.year}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-ink leading-snug tracking-tight">
                    {paper.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-muted">
                    {paper.authors}
                  </p>

                  <p className="mt-5 text-[15px] text-muted leading-relaxed max-w-3xl">
                    {paper.abstract}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-accent bg-accent-soft rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-accent text-white hover:opacity-90 transition-opacity"
                    >
                      <DocumentIcon className="w-4 h-4" />
                      Read the paper (PDF)
                    </a>
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md border border-line text-ink hover:border-faint transition-colors"
                    >
                      View on journal site
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            </BlurFade>

            <BlurFade delay={0.08}>
              <div className="mt-10">
                <h3 className="text-[13px] font-semibold uppercase tracking-wider text-faint">
                  Research interests
                </h3>
                <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {paper.topics.map((topic, i) => (
                    <div
                      key={topic.title}
                      className="p-5 rounded-lg border border-line bg-surface border-t-2"
                      style={{
                        borderTopColor: ['var(--c-accent)', 'var(--c-off)', 'var(--c-def)', 'var(--c-violet)', 'var(--c-accent)'][i % 5],
                      }}
                    >
                      <h4 className="text-[15px] font-semibold text-ink leading-snug">
                        {topic.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{topic.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        ))}

        <BlurFade delay={0.12}>
          <p className="mt-12 text-sm text-faint">
            Questions about the work are welcome.{' '}
            <a href="#contact" className="text-accent hover:underline underline-offset-4">
              Get in touch
            </a>
            {' '}or find me on{' '}
            <a
              href="https://github.com/2004shark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </BlurFade>
      </div>
    </section>
  )
}