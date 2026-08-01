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
      className="group flex h-full flex-col border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-lg hover:shadow-navy/5 md:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center bg-navy text-white transition-colors group-hover:bg-royal">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.details.slice(0, 3).map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-xs text-ink-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-navy" />
            {detail}
          </li>
        ))}
      </ul>
      <Link
        to={service.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-royal"
      >
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.article>
  )
}
