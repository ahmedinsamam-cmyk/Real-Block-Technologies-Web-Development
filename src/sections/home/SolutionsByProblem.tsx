import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { solutionsByProblem } from '@/data/solutions'
import { Button } from '@/components/Button'
import { useLocale } from '@/components/LocaleProvider'

export function SolutionsByProblem() {
  const { t } = useLocale()

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-royal">{t('home.solutionsEyebrow')}</p>
          <h2 className="mt-4 font-display text-4xl font-medium text-navy md:text-5xl lg:text-[3.35rem]">
            {t('home.solutionsTitle')}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            {t('home.solutionsBody')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutionsByProblem.map((item, index) => (
            <motion.article
              key={item.id}
              className="flex h-full flex-col border border-border bg-surface p-6 md:p-7"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-royal uppercase">
                {t('home.businessProblem')}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium text-navy md:text-2xl">
                {t(`solution.${item.id}.problem`)}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {t(`solution.${item.id}.description`)}
              </p>
              <p className="mt-4 text-sm font-semibold text-navy">
                {t('home.outcome')}: {t(`solution.${item.id}.outcome`)}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.solutions.map((s) => (
                  <li
                    key={s}
                    className="border border-border bg-white px-2.5 py-1 text-[0.7rem] font-medium text-ink-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to={item.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition hover:text-royal"
              >
                {t('home.exploreApproach')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button to="/services" variant="primary">
            {t('home.viewAllServices')}
          </Button>
          <Button to="/strategy-session" variant="ghost">
            {t('home.bookStrategySession')}
          </Button>
        </div>
      </div>
    </section>
  )
}
