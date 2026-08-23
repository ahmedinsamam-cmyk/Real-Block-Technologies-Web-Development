interface LegalNoticeProps {
  compact?: boolean
  text?: string
}

const DEFAULT =
  'Illustrative Product Architecture. This RCP is an illustrative Resource Capital Product demonstrating how an underlying resource, economic right or cash-flow opportunity could potentially be analyzed, valued and structured into a capital product. Any actual product would remain subject to appropriate legal, regulatory, technical, financial and commercial validation and, where applicable, issuance, distribution and other regulated activities by appropriately authorized entities.'

export function LegalNotice({ compact = false, text = DEFAULT }: LegalNoticeProps) {
  return (
    <aside
      className={`border border-copper/25 bg-stone ${compact ? 'p-4' : 'p-5 md:p-6'}`}
      role="note"
    >
      <p className="eyebrow text-copper">Illustrative Product Architecture</p>
      <p className={`mt-2 leading-relaxed text-ink-muted ${compact ? 'text-xs' : 'text-sm'}`}>
        {text}
      </p>
    </aside>
  )
}
