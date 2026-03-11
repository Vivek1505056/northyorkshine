export default function SectionWrapper({ id, className = '', children, innerClassName = '' }) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`container-width ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
