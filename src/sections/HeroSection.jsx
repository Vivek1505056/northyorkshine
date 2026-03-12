import Button from '../components/ui/Button'
import { ArrowRightIcon, SparkleIcon, CheckIcon, MapPinIcon } from '../components/icons/Icons'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern pt-16">
      <div className="container-width py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <MapPinIcon size={14} />
              Serving North York &amp; Toronto
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight tracking-tight">
              Professional{' '}
              <span className="text-brand-600">Home Services</span>{' '}
              You Can Trust
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-neutral-500 leading-relaxed max-w-xl">
              From sparkling windows to clear gutters — North York Shine keeps
              your home looking its best, season after season.
            </p>

            {/* Slogan */}
            <p className="mt-3 text-sm font-medium text-brand-600 italic">
              "Your windows deserve to shine like you do."
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button to="/contact" variant="primary" size="lg">
                Get a Free Quote
                <ArrowRightIcon size={18} />
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                See Our Services
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7">
              {['No contracts', 'Free estimates', 'Local & trusted'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-neutral-500">
                  <CheckIcon size={14} className="text-brand-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Decorative Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Background circles */}
              <div className="absolute top-8 right-0 w-72 h-72 bg-brand-100 rounded-full opacity-70" />
              <div className="absolute bottom-12 left-0 w-44 h-44 bg-brand-200 rounded-full opacity-50" />

              {/* Center content card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-3xl shadow-card-hover p-8 w-64 text-center">
                  <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto">
                    <SparkleIcon className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-neutral-900 mt-4 text-lg">North York Shine</h3>
                  <p className="text-brand-600 text-sm font-medium mt-1">Home Services</p>
                  <div className="mt-4 pt-4 border-t border-neutral-100 grid grid-cols-2 gap-3 text-center">
                    <div>
                      <p className="text-xs text-neutral-400">Coverage</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-0.5">North York</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400">Services</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-0.5">4 Types</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini card — bottom left */}
              <div className="absolute -bottom-2 -left-4 bg-white rounded-2xl shadow-card p-4 w-48">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckIcon size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Status</p>
                    <p className="text-sm font-semibold text-neutral-800">Now booking</p>
                  </div>
                </div>
              </div>

              {/* Sparkle decorations */}
              <SparkleIcon
                className="absolute top-4 left-8 text-brand-300 opacity-70"
                size={16}
              />
              <SparkleIcon
                className="absolute top-24 right-4 text-brand-400 opacity-60"
                size={12}
              />
              <SparkleIcon
                className="absolute bottom-20 right-16 text-brand-300 opacity-50"
                size={10}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
    </section>
  )
}
