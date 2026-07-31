import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  compact?: boolean
}

export function Logo({ light = false, compact = false }: LogoProps) {
  const ink = light ? 'text-white' : 'text-navy'
  const muted = light ? 'text-white/50' : 'text-ink-muted'

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Real Block Technologies home">
      <span className={`relative flex h-8 w-8 items-center justify-center ${ink}`} aria-hidden>
        <svg viewBox="0 0 36 36" className="h-7 w-7" fill="currentColor">
          <rect x="3" y="7" width="30" height="2.8" />
          <rect x="3" y="15" width="22" height="2.8" />
          <rect x="3" y="23" width="30" height="2.8" />
          <rect x="3" y="31" width="14" height="2.8" opacity="0.45" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`font-body text-[0.78rem] font-bold tracking-[0.18em] uppercase ${ink}`}>
            Real Block
          </span>
          <span className={`mt-1 text-[0.56rem] font-medium tracking-[0.26em] uppercase ${muted}`}>
            Technologies
          </span>
        </span>
      )}
    </Link>
  )
}
