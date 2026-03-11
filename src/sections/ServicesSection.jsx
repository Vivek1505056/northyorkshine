import SectionWrapper from '../components/ui/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/ui/ServiceCard'
import {
  WindowIcon,
  GutterIcon,
  PowerWashIcon,
  SnowflakeIcon,
} from '../components/icons/Icons'

const services = [
  {
    icon: WindowIcon,
    title: 'Window Cleaning',
    description:
      'Crystal-clear windows from the inside out. We clean residential windows safely and thoroughly, leaving no streaks and no mess behind.',
    type: 'one-time',
    features: ['Interior & exterior', 'Screens included', 'Same-day availability'],
  },
  {
    icon: GutterIcon,
    title: 'Gutter Cleaning',
    description:
      'Prevent water damage before it starts. We clear out leaves, debris, and blockages so your drainage flows the way it should.',
    type: 'one-time',
    features: ['Full debris removal', 'Downspout flush', 'Before & after photos'],
  },
  {
    icon: PowerWashIcon,
    title: 'Power Washing',
    description:
      'Driveways, decks, siding, and more. Our pressure washing removes years of grime in a single visit and brings surfaces back to life.',
    type: 'one-time',
    features: ['Driveways & walkways', 'Decks & patios', 'Siding & fencing'],
  },
  {
    icon: SnowflakeIcon,
    title: 'Snow Removal',
    description:
      'Never shovel again. Subscribe to our seasonal plan and wake up to a clear driveway after every snowfall — no call needed, no hassle.',
    type: 'subscription',
    features: ['After every snowfall', 'Salting included', 'Automatic service'],
  },
]

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="bg-brand-50">
      <SectionHeading
        eyebrow="What We Do"
        title="Services Built for Every Season"
        subtitle="From one-time refreshes to ongoing care — we've got every corner of your home's exterior covered."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      {/* Clarifying note */}
      <p className="text-center text-sm text-neutral-400 mt-8">
        Window cleaning, gutter cleaning, and power washing are booked per job.{' '}
        <span className="text-indigo-600 font-medium">
          Snow removal is available as a subscription plan for the season.
        </span>
      </p>
    </SectionWrapper>
  )
}
