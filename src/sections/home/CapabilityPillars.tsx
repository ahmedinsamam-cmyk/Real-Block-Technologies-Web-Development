import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { useLocale } from '@/components/LocaleProvider'

export function CapabilityPillars() {
  const { t } = useLocale()
  const features = [
    {
      title: t('home.pillar1Title'),
      text: t('home.pillar1Text'),
      href: '/services/real-estate-tokenization',
      imageClass: 'section-photo-a',
    },
    {
      title: t('home.pillar2Title'),
      text: t('home.pillar2Text'),
      href: '/services/ai-solutions',
      imageClass: 'section-photo-b',
    },
    {
      title: t('home.pillar3Title'),
      text: t('home.pillar3Text'),
      href: '/services/enterprise-consulting',
      imageClass: 'section-photo-c',
    },
  ]

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-royal">{t('home.aboutEyebrow')}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-navy md:text-5xl lg:text-[3.4rem]">
              {t('home.aboutTitle')}
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              {t('home.aboutBody')}
            </p>
            <Button to="/about" variant="ghost" className="mt-8">
              {t('home.aboutCta')}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
            >
              <Link to={feature.href} className="group relative block min-h-[28rem] overflow-hidden">
                <div
                  className={`absolute inset-0 ${feature.imageClass} transition-transform duration-700 group-hover:scale-[1.04]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="relative flex h-full min-h-[28rem] flex-col justify-end p-7 md:p-8">
                  <h3 className="font-display text-3xl font-medium text-white">{feature.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">{feature.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    {t('home.learnMore')}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
