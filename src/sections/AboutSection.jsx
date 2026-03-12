import SectionWrapper from '../components/ui/SectionWrapper'
import Button from '../components/ui/Button'
import { MapPinIcon, CheckIcon } from '../components/icons/Icons'

const neighbourhoods = [
  'Willowdale',
  'Bayview Village',
  'Don Mills',
  'Newtonbrook',
  'North York Centre',
  'Lansing',
]

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Left: Text content */}
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mt-2">
            North York's Home Services Team
          </h2>

          <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
            <p>
              North York Shine was started by a family that grew up in this
              neighbourhood. We know how important it is to maintain your home —
              and how hard it can be to find a service team you actually trust to
              show up and do things right.
            </p>
            <p>
              Every technician we send to your home is trained, professional, and
              held to a high standard. We don't cut corners, and we don't
              disappear after the job. If something isn't right, we make it right.
            </p>
            <p>
              We're proud to be a local business, not a franchise. When you book
              with us, you're supporting people who live and invest in this
              community.
            </p>
          </div>

          <div className="mt-8">
            <Button to="/contact" variant="primary" size="lg">
              Contact Our Team
            </Button>
          </div>
        </div>

        {/* Right: Neighbourhood callout */}
        <div className="lg:col-span-2">
          <div className="bg-brand-50 border border-brand-100 rounded-3xl p-7 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPinIcon className="text-white" size={18} />
              </div>
              <div>
                <p className="font-bold text-neutral-900 text-sm">Our Service Area</p>
                <p className="text-neutral-500 text-xs mt-0.5">Proudly local</p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed mb-5">
              We serve homes across North York and the surrounding Toronto area,
              including:
            </p>

            <ul className="space-y-2.5">
              {neighbourhoods.map((area) => (
                <li key={area} className="flex items-center gap-2.5 text-sm text-neutral-700">
                  <CheckIcon size={13} className="text-brand-600 shrink-0" />
                  {area}
                </li>
              ))}
              <li className="flex items-center gap-2.5 text-sm text-neutral-500 italic">
                <CheckIcon size={13} className="text-neutral-300 shrink-0" />
                And surrounding areas
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-brand-100">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Not sure if we cover your address?{' '}
                <a
                  href="/contact"
                  className="text-brand-600 font-medium hover:underline"
                >
                  Send us a message
                </a>{' '}
                and we'll let you know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
