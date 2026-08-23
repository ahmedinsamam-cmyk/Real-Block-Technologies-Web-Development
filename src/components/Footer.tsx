import { Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { LinkedInIcon, XIcon, YouTubeIcon } from '@/components/icons/SocialIcons'
import {
  COMPANY,
  FOOTER_COMPANY,
  FOOTER_PRODUCTS,
  FOOTER_SERVICES,
  SOCIAL_LINKS,
  LEGAL_DISCLAIMER,
} from '@/utils/constants'
import { trackEvent } from '@/utils/analytics'

const socialItems = [
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: LinkedInIcon },
  { label: 'X', href: SOCIAL_LINKS.twitter, Icon: XIcon },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, Icon: YouTubeIcon },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-xl">
          <h2 className="font-display text-2xl font-medium text-white">Stay informed</h2>
          <p className="mt-2 text-sm text-white/60">
            Briefings on Resource Capital, mining finance and digital asset registry for resource owners.
          </p>
          <div className="mt-5">
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">{COMPANY.tagline}</p>
            <div className="mt-6 flex gap-3">
              {socialItems.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition hover:border-copper/50 hover:text-copper-light"
                  onClick={() =>
                    trackEvent({
                      event: label === 'LinkedIn' ? 'linkedin_follow' : 'cta_click',
                      label: `footer_${label.toLowerCase()}`,
                    })
                  }
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <ul className="mt-8 space-y-2 text-sm text-white/65">
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
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_PRODUCTS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-white/70 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
              Services
            </h3>
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
            <h3 className="font-body text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase">
              Company
            </h3>
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
        </div>

        <p className="mt-12 max-w-4xl text-xs leading-relaxed text-white/40">{LEGAL_DISCLAIMER}</p>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-white/35">Resource Capital for mining and mineral companies</p>
        </div>
      </div>
    </footer>
  )
}
