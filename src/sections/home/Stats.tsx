import { AnimatedCounter } from '@/components/AnimatedCounter'
import { STATS } from '@/utils/constants'

export function Stats() {
  return (
    <section className="relative z-10 -mt-8 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-border bg-white px-6 py-10 shadow-xl shadow-navy/5 sm:grid-cols-3 md:px-10 md:py-12">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
