import SectionWrapper from '../components/ui/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import StepCard from '../components/ui/StepCard'

const steps = [
  {
    number: '1',
    title: 'Request a Quote',
    description:
      'Fill out our quick contact form or give us a call. Tell us what you need, where you are, and when works for you.',
  },
  {
    number: '2',
    title: 'We Schedule Your Visit',
    description:
      "We'll confirm a time that works for your schedule and send a reminder the day before so you're never caught off guard.",
  },
  {
    number: '3',
    title: 'Sit Back & Shine',
    description:
      'Our team arrives, does exceptional work, and leaves your property spotless. No mess, no fuss — just results.',
  },
]

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="bg-brand-50">
      <SectionHeading
        eyebrow="Simple Process"
        title="Getting Started Is Easy"
        subtitle="Three steps stand between you and a cleaner home. We keep things simple."
        align="center"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            {...step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
