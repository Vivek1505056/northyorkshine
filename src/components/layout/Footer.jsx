import { Link } from 'react-router-dom'
import { SparkleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '../icons/Icons'

const serviceLinks = [
  'Window Cleaning',
  'Gutter Cleaning',
  'Power Washing',
  'Snow Removal',
]

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container-width py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-white font-bold text-lg hover:text-brand-200 transition-colors"
            >
              <SparkleIcon className="text-brand-300" size={20} />
              <span>North York Shine</span>
            </Link>
            <p className="text-brand-200 text-sm mt-3 leading-relaxed italic">
              "Your windows deserve to shine like you do."
            </p>
            <p className="text-brand-300 text-sm mt-4 leading-relaxed">
              Professional home exterior cleaning services serving North York and
              Toronto. Trusted, local, and detail-oriented.
            </p>
          </div>

          {/* Quick Links + Services */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-brand-200 uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) =>
                  link.href ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-brand-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-brand-300 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-brand-200 uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <a
                      href="/#services"
                      className="text-brand-300 hover:text-white text-sm transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-brand-200 uppercase tracking-widest mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon className="text-brand-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">(416) 555-0100</p>
                  <p className="text-brand-400 text-xs mt-0.5">Mon–Sat, 7am–7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="text-brand-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">hello@northyorkshine.ca</p>
                  <p className="text-brand-400 text-xs mt-0.5">We reply within 1 business day</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="text-brand-400 mt-0.5 shrink-0" size={16} />
                <div>
                  <p className="text-white text-sm font-medium">North York & Toronto, ON</p>
                  <p className="text-brand-400 text-xs mt-0.5">We come to you</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-800">
        <div className="container-width py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-400 text-xs">
            &copy; {new Date().getFullYear()} North York Shine. All rights reserved.
          </p>
          <p className="text-brand-400 text-xs">
            Proudly serving North York &amp; Toronto
          </p>
        </div>
      </div>
    </footer>
  )
}
