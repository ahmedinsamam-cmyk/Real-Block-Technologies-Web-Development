interface LegalNoticeProps {
  compact?: boolean
  text?: string
}

const DEFAULT =
  'Illustrative product architecture. Tokenised Royalty describes how a mining royalty or similar economic right could be structured as a digital investment product. It is not an offer, solicitation or recommendation. Any actual product remains subject to legal, regulatory, technical, financial and commercial validation, and any regulated activity would be conducted by appropriately authorized entities.'

export function LegalNotice({ compact = false, text = DEFAULT }: LegalNoticeProps) {
  return (
    <aside className={`rounded-lg border border-border bg-surface ${compact ? 'p-4' : 'p-5 md:p-6'}`} role="note">
      <p className="eyebrow text-cyan-dark">Important notice</p>
      <p className={`mt-2 leading-relaxed text-ink-muted ${compact ? 'text-xs' : 'text-sm'}`}>{text}</p>
    </aside>
  )
}
