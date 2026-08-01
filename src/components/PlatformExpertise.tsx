import { CONSULTING_PLATFORMS } from '@/utils/constants'

/** Premium text wordmarks — avoids embedding trademarked logo artwork */
export function PlatformExpertise({
  className = '',
}: {
  className?: string
}) {
  return (
    <section className={`bg-white py-16 md:py-20 ${className}`} aria-labelledby="platforms-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-royal">Platform professional services</p>
        <h2 id="platforms-heading" className="mt-4 max-w-3xl font-display text-3xl font-medium text-navy md:text-4xl">
          Workday, Microsoft Dynamics 365, and HubSpot—delivered as professional services
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          We help mid-market enterprises implement, integrate, and adopt leading platforms with
          scoped engagements typically between $5,000 and $50,000.
        </p>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {CONSULTING_PLATFORMS.map((platform) => (
            <li
              key={platform.name}
              className="border border-border bg-surface p-7 transition hover:border-navy/25"
            >
              <div
                className="flex h-14 items-center font-display text-2xl font-semibold tracking-tight text-navy"
                aria-hidden
              >
                {platform.name === 'Microsoft Dynamics 365' ? (
                  <span>
                    Microsoft <span className="text-royal">Dynamics 365</span>
                  </span>
                ) : (
                  platform.name
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{platform.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
