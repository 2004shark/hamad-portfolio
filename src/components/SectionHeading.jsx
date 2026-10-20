export default function SectionHeading({ title, blurb, color = 'bg-accent' }) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className={`w-1.5 h-7 rounded-full ${color}`} />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-ink">{title}</h2>
      </div>
      {blurb && <p className="mt-3 ml-4.5 text-muted max-w-2xl">{blurb}</p>}
    </header>
  )
}