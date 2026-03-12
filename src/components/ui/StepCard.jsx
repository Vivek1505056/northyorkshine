export default function StepCard({ number, title, description, isLast }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {/* Connector line (hidden on last item and on mobile) */}
      {!isLast && (
        <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-gradient-to-r from-brand-200 to-brand-100 z-0" />
      )}

      {/* Number bubble */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-brand-600 text-white font-bold text-xl flex items-center justify-center shadow-btn">
        {number}
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        <p className="text-neutral-500 mt-2 text-sm leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
}
