import SectionWrapper from '../components/ui/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import TrustBadge from '../components/ui/TrustBadge'
import Button from '../components/ui/Button'
import { ShieldCheckIcon, CheckCircleIcon, MapPinIcon, ClockIcon } from '../components/icons/Icons'

const trustPoints = [
  {
    icon: ShieldCheckIcon,
    title: 'Fully Insured',
    description:
      "Every technician is covered. You're protected on every visit, no exceptions.",
  },
  {
    icon: CheckCircleIcon,
    title: 'Satisfaction Guaranteed',
    description:
      "If you're not happy with the result, we'll come back and make it right. It's that simple.",
  },
  {
    icon: MapPinIcon,
    title: 'Local & Community-Focused',
    description:
      "We live and work in North York. We care about this neighbourhood because it's ours.",
  },
  {
    icon: ClockIcon,
    title: 'On-Time, Every Time',
    description:
      "We respect your schedule. If something changes, we'll let you know well in advance.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Heading */}
        <div>
          <SectionHeading
            eyebrow="Why Us"
            title="The North York Shine Difference"
            subtitle="We're not a national chain — we're your neighbours. That means we show up, we do the work right, and we stand behind it."
            align="left"
          />
          <div className="mt-8">
            <Button to="/contact" variant="primary" size="lg">
              Work With Us
            </Button>
          </div>
        </div>

        {/* Right: Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {trustPoints.map((point) => (
            <TrustBadge key={point.title} {...point} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
