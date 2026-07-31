import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  compact?: boolean
}

/**
 * Institutional wordmark inspired by BlackRock / Blackstone:
 * minimal monogram + tight uppercase brand name. No color blocks.
 */
export function Logo({ light = false, compact = false }: LogoProps) {
  const ink = light ? 'text-white' : 'text-navy'
  const muted = light ? 'text-white/55' : 'text-ink-muted'

  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Real Block Technologies home">
      <span className={`relative flex h-9 w-9 items-center justify-center ${ink}`} aria-hidden>
        <svg viewBox="0 0 36 36" className="h-8 w-8" fill="currentColor">
          {/* Abstract stacked-bar monogram — institutional, not playful */}
          <rect x="4" y="6" width="28" height="3.5" rx="0.5" />
          <rect x="4" y="14" width="20" height="3.5" rx="0.5" />
          <rect x="4" y="22" width="28" height="3.5" rx="0.5" />
          <rect x="4" y="30" width="12" height="3.5" rx="0.5" opacity="0.55" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className={`font-body text-[0.8rem] font-bold tracking-[0.14em] uppercase ${ink}`}>
            Real Block
          </span>
          <span className={`mt-1 text-[0.58rem] font-medium tracking-[0.22em] uppercase ${muted}`}>
            Technologies
          </span>
        </span>
      )}
    </Link>
  )
}
