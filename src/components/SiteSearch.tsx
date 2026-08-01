import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, FileText, BookOpen } from 'lucide-react'
import { insights } from '@/data/insights'
import { resourcesLibrary } from '@/data/resourcesLibrary'

export type SearchScope = 'all' | 'insights' | 'resources'

interface SiteSearchProps {
  scope?: SearchScope
  placeholder?: string
  className?: string
}

interface SearchHit {
  type: 'insight' | 'resource'
  title: string
  excerpt: string
  href: string
  meta: string
}

function buildIndex(): SearchHit[] {
  const articleHits: SearchHit[] = insights.map((a) => ({
    type: 'insight',
    title: a.title,
    excerpt: a.excerpt,
    href: `/insights/${a.slug}`,
    meta: `${a.category} · ${a.readTime}`,
  }))
  const resourceHits: SearchHit[] = resourcesLibrary.map((r) => ({
    type: 'resource',
    title: r.title,
    excerpt: r.description,
    href: `/resources#${r.slug}`,
    meta: `${r.category} · ${r.readTime}`,
  }))
  return [...articleHits, ...resourceHits]
}

export function SiteSearch({
  scope = 'all',
  placeholder = 'Search insights and resources…',
  className = '',
}: SiteSearchProps) {
  const [query, setQuery] = useState('')
  const index = useMemo(() => buildIndex(), [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q.length < 2) return []
    return index
      .filter((hit) => {
        if (scope === 'insights' && hit.type !== 'insight') return false
        if (scope === 'resources' && hit.type !== 'resource') return false
        const hay = `${hit.title} ${hit.excerpt} ${hit.meta}`.toLowerCase()
        return hay.includes(q)
      })
      .slice(0, 8)
  }, [index, query, scope])

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="site-search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full border border-border bg-white py-3 pr-4 pl-10 text-sm text-navy outline-none transition focus:border-navy"
          autoComplete="off"
        />
      </div>

      {query.trim().length >= 2 && (
        <div className="absolute z-30 mt-2 w-full border border-border bg-white shadow-lg shadow-navy/10">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-ink-muted">No matches found.</p>
          ) : (
            <ul className="max-h-80 overflow-auto py-1">
              {results.map((hit) => (
                <li key={`${hit.type}-${hit.href}`}>
                  <Link
                    to={hit.href}
                    className="flex gap-3 px-4 py-3 transition hover:bg-surface"
                    onClick={() => setQuery('')}
                  >
                    {hit.type === 'insight' ? (
                      <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    ) : (
                      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    )}
                    <span>
                      <span className="block text-sm font-semibold text-navy">{hit.title}</span>
                      <span className="mt-0.5 block text-xs text-ink-muted">{hit.meta}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
