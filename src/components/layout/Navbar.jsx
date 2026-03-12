import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SparkleIcon, MenuIcon, CloseIcon } from '../icons/Icons'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    if (href.startsWith('/#')) return location.pathname === '/'
    return location.pathname === href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none border-b border-transparent'
      }`}
    >
      <nav className="container-width flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-800 font-bold text-lg tracking-tight hover:text-brand-700 transition-colors"
        >
          <SparkleIcon className="text-brand-600" size={22} />
          <span>North York Shine</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button to="/contact" variant="primary" size="sm">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg">
          <div className="container-width py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-3 pt-3 border-t border-neutral-100">
              <Button to="/contact" variant="primary" size="md" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
