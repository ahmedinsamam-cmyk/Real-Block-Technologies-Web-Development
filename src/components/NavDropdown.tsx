import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export interface NavDropdownItem {
  label: string
  href: string
  description?: string
}

interface NavDropdownProps {
  label: string
  href: string
  items: NavDropdownItem[]
  dark?: boolean
}

export function NavDropdown({ label, href, items, dark = false }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | null>(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openMenu = () => {
    clearCloseTimer()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), 140)
  }

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
      clearCloseTimer()
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <div
        className={`inline-flex items-center rounded-sm ${
          dark ? 'text-white/70' : 'text-ink-muted'
        }`}
      >
        <NavLink
          to={href}
          className={({ isActive }) =>
            `px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
              isActive
                ? dark
                  ? 'text-white'
                  : 'text-navy'
                : dark
                  ? 'hover:text-white'
                  : 'hover:text-navy'
            }`
          }
        >
          {label}
        </NavLink>
        <button
          type="button"
          className={`-ml-1 px-1.5 py-2 transition-colors ${
            dark ? 'hover:text-white' : 'hover:text-navy'
          }`}
          aria-label={`${label} menu`}
          aria-expanded={open}
          aria-haspopup="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            className="absolute top-full left-0 z-50 mt-2 w-72 border border-border bg-white py-2 shadow-xl shadow-navy/10"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16 }}
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
          >
            <Link
              to={href}
              className="block border-b border-border px-4 py-2.5 text-xs font-semibold tracking-wider text-royal uppercase"
              onClick={() => setOpen(false)}
            >
              View all {label.toLowerCase()}
            </Link>
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
