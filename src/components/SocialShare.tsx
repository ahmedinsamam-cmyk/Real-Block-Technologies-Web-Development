import { LinkedInIcon, XIcon } from '@/components/icons/SocialIcons'
import { Mail } from 'lucide-react'
import { COMPANY } from '@/utils/constants'
import { trackEvent } from '@/utils/analytics'
import { blogToLinkedInDraft } from '@/services/cms'

interface SocialShareProps {
  title: string
  path?: string
  excerpt?: string
  className?: string
}

export function SocialShare({ title, path = '', excerpt = '', className = '' }: SocialShareProps) {
  const url = encodeURIComponent(`${COMPANY.url}${path}`)
  const text = encodeURIComponent(title)

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
  const twitterHref = `https://twitter.com/intent/tweet?url=${url}&text=${text}`
  const emailHref = `mailto:?subject=${text}&body=${encodeURIComponent(`${title}\n\n${excerpt}\n\n${COMPANY.url}${path}`)}`

  const copyLinkedInDraft = async () => {
    const draft = blogToLinkedInDraft({
      title,
      excerpt: excerpt || title,
      slug: path.replace(/^\//, ''),
    })
    try {
      await navigator.clipboard.writeText(draft)
      trackEvent({ event: 'social_share', label: 'linkedin_draft_copy' })
    } catch {
      // ignore clipboard failures
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Share</span>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-navy hover:border-royal hover:text-royal"
        onClick={() => trackEvent({ event: 'social_share', label: 'linkedin' })}
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon className="h-3.5 w-3.5" />
        LinkedIn
      </a>
      <a
        href={twitterHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-navy hover:border-royal hover:text-royal"
        onClick={() => trackEvent({ event: 'social_share', label: 'x' })}
        aria-label="Share on X"
      >
        <XIcon className="h-3.5 w-3.5" />
        X
      </a>
      <a
        href={emailHref}
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-navy hover:border-royal hover:text-royal"
        onClick={() => trackEvent({ event: 'social_share', label: 'email' })}
        aria-label="Share via email"
      >
        <Mail className="h-3.5 w-3.5" />
        Email
      </a>
      <button
        type="button"
        onClick={copyLinkedInDraft}
        className="rounded-md border border-dashed border-border px-2.5 py-1.5 text-xs font-semibold text-ink-muted hover:border-gold hover:text-navy"
      >
        Copy LinkedIn draft
      </button>
    </div>
  )
}
