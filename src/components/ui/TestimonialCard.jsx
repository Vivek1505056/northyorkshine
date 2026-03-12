import { StarIcon } from '../icons/Icons'

export default function TestimonialCard({ quote, name, neighbourhood, service }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400" size={18} />
        ))}
      </div>

      {/* Service tag */}
      <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mt-3">
        {service}
      </p>

      {/* Quote */}
      <blockquote className="text-neutral-700 mt-3 text-sm leading-relaxed flex-1 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-neutral-100">
        <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-bold text-sm flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-neutral-900 text-sm">{name}</p>
          <p className="text-xs text-neutral-400">{neighbourhood}</p>
        </div>
      </div>
    </div>
  )
}
