import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '../components/icons/Icons'
import Button from '../components/ui/Button'

const serviceOptions = [
  'Window Cleaning',
  'Gutter Cleaning',
  'Power Washing',
  'Snow Removal',
  'Multiple Services',
]

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Give Us a Call',
    primary: '(416) 555-0100',
    secondary: 'Mon–Sat, 7:00 AM – 7:00 PM',
    href: 'tel:+14165550100',
  },
  {
    icon: EnvelopeIcon,
    label: 'Send an Email',
    primary: 'hello@northyorkshine.ca',
    secondary: 'We reply within 1 business day',
    href: 'mailto:hello@northyorkshine.ca',
  },
  {
    icon: MapPinIcon,
    label: 'Our Service Area',
    primary: 'North York & Toronto, ON',
    secondary: 'We come to you',
    href: null,
  },
]

const hours = [
  { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-brand-800 pt-28 pb-16">
        <div className="container-width">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300 mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Get a Free Quote
          </h1>
          <p className="text-brand-200 text-lg mt-4 max-w-lg leading-relaxed">
            Tell us what you need and where you are. We'll get back to you as
            soon as possible — usually within one business day.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-neutral-50 py-16 md:py-20">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Form — left, wider */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-card p-7 md:p-10">
                <h2 className="text-xl font-bold text-neutral-900">Request a Free Quote</h2>
                <p className="text-neutral-500 text-sm mt-1">
                  Fill in the details below and we'll be in touch shortly.
                </p>

                {/* Form — UI only, no submission logic */}
                <form className="mt-7 space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Full Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        aria-required="true"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Email Address <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        aria-required="true"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(416) 555-0123"
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm"
                      />
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-neutral-700 mb-1.5"
                      >
                        Service Needed <span className="text-brand-600">*</span>
                      </label>
                      <select
                        id="service"
                        aria-required="true"
                        defaultValue=""
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-neutral-700 mb-1.5"
                    >
                      Property Address <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="123 Main St, North York, ON"
                      aria-required="true"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1.5"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us more about what you need, preferred dates, or any questions..."
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <Button variant="primary" size="lg" className="w-full" type="submit">
                      Send My Request
                      <ArrowRightIcon size={18} />
                    </Button>
                    <p className="text-xs text-neutral-400 text-center mt-3">
                      We'll get back to you as soon as possible — usually within 1 business day.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Business Info — right */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">Get in Touch</h2>
                <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                  Prefer to reach us directly? Here's how to connect.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  const inner = (
                    <div className="flex items-start gap-4 p-5 bg-white border border-neutral-100 rounded-xl shadow-sm hover:border-brand-200 hover:shadow-card transition-all duration-200">
                      <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="text-brand-600" size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-neutral-900 mt-0.5">
                          {item.primary}
                        </p>
                        <p className="text-xs text-neutral-400 mt-0.5">{item.secondary}</p>
                      </div>
                    </div>
                  )

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  )
                })}
              </div>

              {/* Hours */}
              <div className="bg-white border border-neutral-100 rounded-xl shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon className="text-brand-600" size={16} />
                  <p className="text-sm font-semibold text-neutral-800">Service Hours</p>
                </div>
                <ul className="space-y-2.5">
                  {hours.map(({ day, time }) => (
                    <li
                      key={day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-neutral-600">{day}</span>
                      <span
                        className={`font-medium ${
                          time === 'Closed' ? 'text-neutral-400' : 'text-neutral-900'
                        }`}
                      >
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  <span className="font-semibold text-neutral-800">Quick response:</span>{' '}
                  We aim to respond to all quote requests within 1 business day.
                  During busy seasons, it may take slightly longer — we appreciate
                  your patience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
