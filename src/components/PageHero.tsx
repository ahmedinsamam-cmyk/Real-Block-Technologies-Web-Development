interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 hero-photo opacity-90" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/35 via-navy/60 to-navy"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="eyebrow mb-4 text-gold-light md:mb-5">{eyebrow}</p>}
        <h1 className="max-w-4xl font-display text-3xl font-medium leading-[1.1] text-white text-balance sm:text-4xl md:text-5xl lg:text-[3.75rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:mt-6 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
