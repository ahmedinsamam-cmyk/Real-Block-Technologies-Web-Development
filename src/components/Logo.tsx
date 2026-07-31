import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  compact?: boolean
}

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Real Block Technologies home">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-md ${light ? 'bg-white/10' : 'bg-navy'} transition-colors group-hover:bg-royal`}
        />
        <svg viewBox="0 0 40 40" className="relative h-6 w-6" aria-hidden>
          <rect x="6" y="18" width="12" height="12" rx="1.5" className="fill-gold" />
          <rect x="22" y="10" width="12" height="20" rx="1.5" className={light ? 'fill-white' : 'fill-royal-light'} />
          <path
            d="M12 18V12a2 2 0 0 1 2-2h8"
            className={light ? 'stroke-white' : 'stroke-royal'}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-[0.95rem] font-extrabold tracking-tight ${
              light ? 'text-white' : 'text-navy'
            }`}
          >
            Real Block
          </span>
          <span
            className={`text-[0.65rem] font-semibold tracking-[0.16em] uppercase ${
              light ? 'text-gold-light' : 'text-ink-muted'
            }`}
          >
            Technologies
          </span>
        </span>
      )}
    </Link>
  )
}
