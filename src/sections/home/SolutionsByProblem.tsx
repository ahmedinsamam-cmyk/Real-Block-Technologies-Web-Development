import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { solutionsByProblem } from '@/data/solutions'
import { Button } from '@/components/Button'

export function SolutionsByProblem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-royal">Business problems</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl lg:text-[3.35rem]">
            Solutions mapped to the problems leaders actually face
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            Technology follows the outcome. Start with the operating challenge—then select the
            capabilities that fit.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutionsByProblem.map((item, index) => (
            <motion.article
              key={item.id}
              className="flex h-full flex-col border border-border bg-surface p-6 md:p-7"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-royal uppercase">
                Business problem
              </p>
              <h3 className="mt-3 font-display text-xl font-medium text-navy md:text-2xl">
                {item.problem}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              <p className="mt-4 text-sm font-semibold text-navy">Outcome: {item.outcome}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.solutions.map((s) => (
                  <li key={s} className="border border-border bg-white px-2.5 py-1 text-[0.7rem] font-medium text-ink-muted">
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to={item.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition hover:text-royal"
              >
                Explore approach
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button to="/services" variant="primary">
            View all services
          </Button>
          <Button to="/strategy-session" variant="ghost">
            Book a strategy session
          </Button>
        </div>
      </div>
    </section>
  )
}
