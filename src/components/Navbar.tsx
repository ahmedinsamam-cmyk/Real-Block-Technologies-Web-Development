import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { NavDropdown } from '@/components/NavDropdown'
import { LinkedInIcon } from '@/components/icons/SocialIcons'
import { SOCIAL_LINKS, PRODUCT_NAV } from '@/utils/constants'
import { trackCtaClick, trackEvent } from '@/utils/analytics'

const navClass = (darkHero: boolean, isActive: boolean) =>
  `rounded-sm px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
    isActive
      ? darkHero
        ? 'text-white'
        : 'text-navy'
      : darkHero
        ? 'text-white/70 hover:text-white'
        : 'text-ink-muted hover:text-navy'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
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
    setMobileProductsOpen(false)
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
          ? 'border-b border-border/80 bg-white/92 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo light={darkHero} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => navClass(darkHero, isActive)}>
            Home
          </NavLink>
          <NavLink to="/resource-capital" className={({ isActive }) => navClass(darkHero, isActive)}>
            Resource Capital
          </NavLink>
          <NavDropdown label="Products" href="/products" items={PRODUCT_NAV} dark={darkHero} />
          <NavLink to="/services" className={({ isActive }) => navClass(darkHero, isActive)}>
            Services
          </NavLink>
          <NavLink
            to="/digital-asset-registry"
            className={({ isActive }) => navClass(darkHero, isActive)}
          >
            Digital Asset Registry
          </NavLink>
          <NavLink to="/mining-companies" className={({ isActive }) => navClass(darkHero, isActive)}>
            For Mining Companies
          </NavLink>
          <NavLink to="/insights" className={({ isActive }) => navClass(darkHero, isActive)}>
            Insights
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => navClass(darkHero, isActive)}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => navClass(darkHero, isActive)}>
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
            to="/submit-asset"
            variant={darkHero ? 'gold' : 'primary'}
            size="sm"
            onClick={() => trackCtaClick('navbar_submit_asset')}
          >
            Submit Your Asset
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-sm p-2 xl:hidden ${
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
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-navy xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex min-h-full flex-col px-6 py-8" aria-label="Mobile">
              {[
                ['Home', '/'],
                ['Resource Capital', '/resource-capital'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                >
                  {label}
                </Link>
              ))}

              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                onClick={() => setMobileProductsOpen((v) => !v)}
              >
                Products
                <ChevronDown className={`h-5 w-5 transition ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-b border-white/10"
                  >
                    <Link to="/products" className="block py-3 pl-2 text-sm font-semibold text-copper-light">
                      View all products
                    </Link>
                    {PRODUCT_NAV.map((item) => (
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

              {[
                ['Services', '/services'],
                ['Digital Asset Registry', '/digital-asset-registry'],
                ['For Mining Companies', '/mining-companies'],
                ['Insights', '/insights'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                >
                  {label}
                </Link>
              ))}

              <div className="mt-auto space-y-3 pt-8 pb-8">
                <Button to="/submit-asset" variant="gold" size="lg" className="w-full">
                  Submit Your Asset
                </Button>
                <Button to="/resource-capital" variant="outline" size="lg" className="w-full">
                  Explore Resource Capital
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
