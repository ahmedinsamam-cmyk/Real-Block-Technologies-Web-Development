import { Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { LinkedInIcon, XIcon, YouTubeIcon } from '@/components/icons/SocialIcons'
import { COMPANY, FOOTER_COMPANY, FOOTER_SERVICES, SOCIAL_LINKS } from '@/utils/constants'
import { trackEvent } from '@/utils/analytics'

const socialItems = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'X/Twitter', href: SOCIAL_LINKS.twitter, Icon: XIcon },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, Icon: YouTubeIcon },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12">
          <NewsletterSignup variant="footer" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 text-sm leading-relaxed text-white/65">{COMPANY.tagline}</p>

            <div className="mt-8">
              <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/50 uppercase">
                Follow Real Block Technologies
              </h3>
              <ul className="mt-4 space-y-3">
                {socialItems.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 text-sm text-white/75 transition hover:text-gold"
                      onClick={() =>
                        trackEvent({
                          event: label === 'LinkedIn' ? 'linkedin_follow' : 'cta_click',
                          label: `footer_${label.toLowerCase()}`,
                        })
                      }
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className="transition hover:text-white">
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.address}</li>
              <li>
                <Link to="/resources/rwa-tokenization-guide" className="font-semibold text-white hover:text-gold-light">
                  Download the RWA Guide →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
