export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const subtitleAlign = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={alignClass}>
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-brand-300' : 'text-brand-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight mt-2 ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg mt-4 max-w-2xl leading-relaxed ${subtitleAlign} ${
            light ? 'text-brand-200' : 'text-neutral-500'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
