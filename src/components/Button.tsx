import { Link } from 'react-router-dom'
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
    href?: undefined
  }

type ButtonAsLink = BaseProps & {
  to: string
  href?: undefined
  onClick?: () => void
}

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string
    to?: undefined
  }

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-royal text-white hover:bg-royal-dark shadow-sm shadow-royal/25 border border-transparent',
  secondary: 'bg-navy text-white hover:bg-navy-light border border-transparent',
  outline: 'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50',
  ghost: 'bg-transparent text-navy border border-border hover:border-royal/40 hover:text-royal',
  gold: 'bg-gold text-navy hover:bg-gold-light border border-transparent font-semibold',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '' } = props
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsExternal
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const { to: _to, href: _href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
