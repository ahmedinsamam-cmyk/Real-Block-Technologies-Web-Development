interface PageHeroProps {
  eyebrow?: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 gradient-navy" />
      <div className="absolute inset-0 hero-photo opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 font-body text-[0.7rem] font-semibold tracking-[0.22em] text-gold-light uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">{description}</p>
      </div>
    </section>
  )
}
