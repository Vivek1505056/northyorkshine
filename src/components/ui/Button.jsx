import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-brand-600 hover:bg-brand-700 text-white shadow-btn hover:shadow-btn-hover',
  secondary:
    'bg-white hover:bg-brand-50 text-brand-700 border border-brand-200 hover:border-brand-300',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-brand-700',
  'outline-dark':
    'border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white',
}

const sizeClasses = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-sm px-5 py-2.5 gap-2',
  lg: 'text-base px-7 py-3.5 gap-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'

  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
