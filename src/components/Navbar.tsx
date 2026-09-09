import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { NAV_LINKS } from '@/utils/constants'
import { trackCtaClick } from '@/utils/analytics'

const navClass = (isActive: boolean) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-white' : 'text-white/70 hover:text-white'
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo light />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.href} to={item.href} end={item.href === '/'} className={({ isActive }) => navClass(isActive)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/contact" variant="primary" size="sm" onClick={() => trackCtaClick('navbar_talk')}>
            Talk to us
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
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
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-navy md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex min-h-full flex-col px-6 py-8" aria-label="Mobile">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="border-b border-white/10 py-4 text-2xl font-semibold text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-auto pt-8 pb-8">
                <Button to="/contact" variant="primary" size="lg" className="w-full">
                  Talk to us
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
