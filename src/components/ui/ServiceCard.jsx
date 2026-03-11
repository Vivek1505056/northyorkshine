import { CheckIcon } from '../icons/Icons'

export default function ServiceCard({ icon: Icon, title, description, type, features }) {
  const isSubscription = type === 'subscription'

  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-6 md:p-8 flex flex-col">
      {/* Icon */}
      <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 shrink-0">
        {Icon && <Icon size={26} />}
      </div>

      {/* Badge */}
      <div className="mt-4">
        {isSubscription ? (
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
            Subscription Plan
          </span>
        ) : (
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
            Book Anytime
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold text-neutral-900 mt-3">{title}</h3>
      <p className="text-neutral-500 mt-2 text-sm leading-relaxed flex-1">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
              <span className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                <CheckIcon size={10} className="text-brand-600" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
