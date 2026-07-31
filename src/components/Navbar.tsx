import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { NAV_LINKS, SOCIAL_LINKS } from '@/utils/constants'
import { trackCtaClick, trackEvent } from '@/utils/analytics'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const darkHero = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo light={darkHero} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? darkHero
                      ? 'text-white'
                      : 'text-navy'
                    : darkHero
                      ? 'text-white/70 hover:text-white'
                      : 'text-ink-muted hover:text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Real Block Technologies on LinkedIn"
            className={`flex h-9 w-9 items-center justify-center rounded-sm border transition ${
              darkHero
                ? 'border-white/20 text-white hover:border-white hover:bg-white/10'
                : 'border-border text-navy hover:border-navy'
            }`}
            onClick={() => trackEvent({ event: 'linkedin_follow', label: 'navbar' })}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <Button
            to="/contact#consultation"
            variant={darkHero ? 'gold' : 'primary'}
            size="sm"
            onClick={() => trackCtaClick('navbar_schedule_consultation')}
          >
            Schedule Consultation
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-sm p-2 lg:hidden ${
            darkHero ? 'text-white' : 'text-navy'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-navy lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto space-y-3 pb-8">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm border border-white/20 py-3 text-sm font-semibold text-white"
                  onClick={() => trackEvent({ event: 'linkedin_follow', label: 'mobile_nav' })}
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Follow on LinkedIn
                </a>
                <Button to="/contact#consultation" variant="gold" size="lg" className="w-full">
                  Schedule Consultation
                </Button>
                <Button to="/services" variant="outline" size="lg" className="w-full">
                  Explore Services
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
