import { personalInfo, certifications } from '../data/resumeData'
import BlurFade from './BlurFade'

const details = [
  { label: 'Education', value: `${personalInfo.degree}, ${personalInfo.university}` },
  { label: 'Graduation', value: personalInfo.graduation },
  { label: 'GPA', value: personalInfo.gpa },
  { label: 'Certifications', value: `${certifications.length} completed or in progress` },
  { label: 'Leadership', value: personalInfo.role },
  { label: 'Location', value: personalInfo.location },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <BlurFade>
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">About</h2>
          </header>
        </BlurFade>

        <div className="grid md:grid-cols-5 gap-10 md:gap-12">
          <div className="md:col-span-3 space-y-5">
            <BlurFade delay={0.05}>
              <p className="text-[17px] text-muted leading-relaxed">
                {personalInfo.summaryBlue}
              </p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <p className="text-[17px] text-muted leading-relaxed">
                {personalInfo.summaryRed}
              </p>
            </BlurFade>
            <BlurFade delay={0.15}>
              <p className="text-[17px] text-muted leading-relaxed">
                Currently finishing a B.S. in Cybersecurity at Air University, Multan, and
                serving as Vice President of the university's Cyber Security Society. I am
                looking for SOC, detection engineering, or penetration testing roles where
                I can keep working across both disciplines.
              </p>
            </BlurFade>
          </div>

          <div className="md:col-span-2">
            <BlurFade delay={0.1}>
              <dl className="divide-y divide-line border-y border-line">
                {details.map((item) => (
                  <div key={item.label} className="py-3.5 grid grid-cols-[110px_1fr] gap-4">
                    <dt className="text-xs font-medium uppercase tracking-wider text-faint pt-0.5">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-ink leading-relaxed">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}