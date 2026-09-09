import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  compact?: boolean
}

export function Logo({ light = false, compact = false }: LogoProps) {
  const ink = light ? 'text-white' : 'text-navy'
  const muted = light ? 'text-white/55' : 'text-ink-muted'

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Real Block Technologies home">
      <span
        className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan text-navy"
        aria-hidden
      >
        <svg viewBox="0 0 36 36" className="h-5 w-5" fill="currentColor">
          <rect x="4" y="8" width="28" height="3.2" rx="0.6" />
          <rect x="4" y="16.4" width="20" height="3.2" rx="0.6" />
          <rect x="4" y="24.8" width="28" height="3.2" rx="0.6" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`text-[0.82rem] font-semibold tracking-tight ${ink}`}>Real Block</span>
          <span className={`mt-0.5 text-[0.62rem] font-medium tracking-[0.12em] uppercase ${muted}`}>
            Technologies
          </span>
        </span>
      )}
    </Link>
  )
}
