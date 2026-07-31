import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ServiceItem } from '@/data/content'

interface ServiceCardProps {
  service: ServiceItem
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.article
      className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-lg hover:shadow-navy/5 md:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-royal group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-lg font-bold text-navy md:text-xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.details.slice(0, 3).map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-xs text-ink-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {detail}
          </li>
        ))}
      </ul>
      <Link
        to={service.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-royal-dark"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  )
}
