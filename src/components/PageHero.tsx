interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 grid-tech opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-gold uppercase">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-extrabold text-white md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
