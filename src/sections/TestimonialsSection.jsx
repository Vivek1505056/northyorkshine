import SectionWrapper from '../components/ui/SectionWrapper'
import SectionHeading from '../components/ui/SectionHeading'
import TestimonialCard from '../components/ui/TestimonialCard'

// Replace these with real testimonials as you collect them
const testimonials = [
  {
    quote:
      'They showed up right on time, did an incredible job on all our windows, and even cleaned up before they left. Would absolutely book again.',
    name: 'Sarah M.',
    neighbourhood: 'Willowdale',
    service: 'Window Cleaning',
  },
  {
    quote:
      'Our gutters were completely blocked after the fall. The team cleared everything out in under an hour and took pictures before and after. Really professional.',
    name: 'David K.',
    neighbourhood: 'Bayview Village',
    service: 'Gutter Cleaning',
  },
  {
    quote:
      "Signed up for the snow removal plan and it's been a game-changer this winter. Every time we wake up after a snowfall, the driveway is already done.",
    name: 'Jennifer L.',
    neighbourhood: 'North York',
    service: 'Snow Removal',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-800 section-padding">
      <div className="container-width">
        <SectionHeading
          eyebrow="What Clients Say"
          title="Real Homes, Real Results"
          subtitle="We're proud of the work we do and the relationships we build."
          align="center"
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <p className="text-brand-400 text-xs text-center mt-8">
          Testimonials are representative of the typical customer experience.
        </p>
      </div>
    </section>
  )
}
