import { certifications } from '../data/resumeData'
import BlurFade from './BlurFade'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <SectionHeading title="Certifications" color="bg-accent" />
        </BlurFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
          {certifications.map((cert, idx) => (
            <BlurFade key={cert.name} delay={0.03 * idx}>
              <div className="flex items-baseline justify-between gap-4 py-4 border-b border-line">
                <div>
                  <h3 className="text-[15px] font-medium text-ink leading-snug">{cert.name}</h3>
                  <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
                </div>
                {cert.status && (
                  <span className="flex-shrink-0 text-xs font-semibold text-violet bg-violet/10 px-2 py-1 rounded-full">
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