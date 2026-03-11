import SectionWrapper from '../components/ui/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import { MapPinIcon } from '../components/icons/Icons'
import Button from '../components/ui/Button'

const areas = [
  'Willowdale',
  'Bayview Village',
  'Don Mills',
  'Newtonbrook',
  'North York Centre',
  'Lansing',
  'Yonge–Eglinton',
  'Midtown Toronto',
]

export default function ServiceAreaSection() {
  return (
    <SectionWrapper id="service-area" className="bg-white">
      <SectionHeading
        eyebrow="Coverage"
        title="We Come to You"
        subtitle="Serving neighbourhoods across North York and the greater Toronto area — we bring the service to your door."
        align="center"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-10">
        {areas.map((area) => (
          <div
            key={area}
            className="flex items-center gap-2.5 bg-brand-50 border border-brand-100 rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 hover:border-brand-300 hover:bg-brand-100 transition-colors"
          >
            <MapPinIcon size={14} className="text-brand-500 shrink-0" />
            {area}
          </div>
        ))}
      </div>

      {/* Additional note */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-neutral-500 text-sm text-center max-w-md">
          Not on this list? We may still cover your area.{' '}
          <span className="text-neutral-700">Reach out and we'll confirm.</span>
        </p>
        <Button to="/contact" variant="outline-dark" size="sm">
          Check Your Area
        </Button>
      </div>
    </SectionWrapper>
  )
}
