import Button from '../components/ui/Button'
import { ArrowRightIcon, PhoneIcon } from '../components/icons/Icons'

export default function FinalCTASection() {
  return (
    <section className="bg-cta-gradient section-padding">
      <div className="container-width text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-4">
          Ready to get started?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto leading-tight">
          Ready for a Cleaner Home?
        </h2>
        <p className="text-lg text-brand-200 mt-5 max-w-lg mx-auto leading-relaxed">
          Get a free, no-obligation quote from North York Shine today. We'll
          respond quickly and get you scheduled.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button to="/contact" variant="outline" size="lg">
            Get a Free Quote
            <ArrowRightIcon size={18} />
          </Button>
          <Button href="tel:+14165550100" variant="outline" size="lg" className="border-brand-400 text-brand-200 hover:bg-brand-800 hover:border-brand-300 hover:text-white">
            <PhoneIcon size={18} />
            (416) 555-0100
          </Button>
        </div>

        <p className="text-brand-400 text-sm mt-8">
          No contracts. No pressure. Just clean.
        </p>
      </div>
    </section>
  )
}
