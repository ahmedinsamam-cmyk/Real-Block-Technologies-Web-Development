interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="absolute inset-0 hero-photo" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/25 via-navy/50 to-navy" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="eyebrow mb-5 text-copper-light">{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-4xl font-medium text-white md:text-6xl lg:text-[3.7rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/68 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
