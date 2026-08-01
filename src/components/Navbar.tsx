import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { NavDropdown } from '@/components/NavDropdown'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { SOCIAL_LINKS } from '@/utils/constants'
import { services, industries } from '@/data/content'
import { trackCtaClick, trackEvent } from '@/utils/analytics'

const serviceMenu = services.map((s) => ({
  label: s.shortTitle ?? s.title,
  href: s.href,
}))

const industryMenu = industries.map((i) => ({
  label: i.title,
  href: i.href,
}))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
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
    setMobileServicesOpen(false)
    setMobileIndustriesOpen(false)
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

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <NavLink
            to="/"
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
            Home
          </NavLink>
          <NavLink
            to="/about"
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
            About
          </NavLink>

          <NavDropdown label="Services" href="/services" items={serviceMenu} dark={darkHero} />
          <NavDropdown label="Industries" href="/industries" items={industryMenu} dark={darkHero} />

          <NavLink
            to="/insights"
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
            Insights
          </NavLink>
          <NavLink
            to="/contact"
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
            Contact
          </NavLink>
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
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-navy lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex min-h-full flex-col px-6 py-8" aria-label="Mobile">
              <div className="flex flex-col">
                <Link to="/" className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">
                  Home
                </Link>
                <Link to="/about" className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">
                  About
                </Link>

                <button
                  type="button"
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  Services
                  <ChevronDown className={`h-5 w-5 transition ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-b border-white/10"
                    >
                      <Link to="/services" className="block py-3 pl-2 text-sm font-semibold text-gold-light">
                        View all services
                      </Link>
                      {serviceMenu.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block py-2.5 pl-2 text-sm text-white/75"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                >
                  Industries
                  <ChevronDown className={`h-5 w-5 transition ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-b border-white/10"
                    >
                      <Link to="/industries" className="block py-3 pl-2 text-sm font-semibold text-gold-light">
                        View all industries
                      </Link>
                      {industryMenu.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block py-2.5 pl-2 text-sm text-white/75"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link to="/insights" className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">
                  Insights
                </Link>
                <Link to="/contact" className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white">
                  Contact
                </Link>
              </div>

              <div className="mt-auto space-y-3 pt-8 pb-8">
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
