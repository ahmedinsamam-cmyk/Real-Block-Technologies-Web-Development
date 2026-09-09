interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 grid-fine opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="eyebrow mb-4 text-cyan">{eyebrow}</p>}
        <h1 className="max-w-3xl text-4xl font-semibold text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
