export default function TrustBadge({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 shrink-0 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center text-brand-600">
        {Icon && <Icon size={22} />}
      </div>
      <div>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
        <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
