import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name || form.name.trim().length < 2) e.name = 'Name is required (min 2 characters)'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone || !/^[\d\s\-().+]{7,}$/.test(form.phone) || (form.phone.match(/\d/g) || []).length < 10)
      e.phone = 'Valid phone number is required (min 10 digits)'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message || form.message.trim().length < 10) e.message = 'Message is required (min 10 characters)'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length > 0) return
    setSubmitting(true)
    console.log('Form submitted:', form)
    setTimeout(() => {
      setSent(true)
      setSubmitting(false)
    }, 1500)
  }

  const handleReset = () => {
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setErrors({})
    setSent(false)
  }

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value })
    if (errors[key]) {
      const next = { ...errors }
      delete next[key]
      setErrors(next)
    }
  }

  const fields = [
    { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name', autoComplete: 'name' },
    { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com', autoComplete: 'email' },
    { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000', autoComplete: 'tel' },
  ]

  return (
    <PageTransition>
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Reservations</span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6 mb-6">
              Book Your Visit
            </h1>
            <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto" />
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-16">
            <ScrollReveal direction="left" className="md:col-span-3">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 border border-white/5"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full border border-[#c9a96e] mx-auto mb-6 flex items-center justify-center">
                    <span className="text-[#c9a96e] text-2xl">✓</span>
                  </div>
                  <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-4">Thank You</h2>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)] mb-8">Your reservation request has been received. We will be in touch within 24 hours.</p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="py-3 px-8 border border-[#c9a96e]/40 text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#c9a96e]/10 transition-all duration-500"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    {fields.map(f => (
                      <div key={f.key}>
                        <label htmlFor={`field-${f.key}`} className="block text-xs tracking-[0.15em] uppercase text-[#a69c94] mb-3 font-[family-name:var(--font-ui)]">{f.label}</label>
                        <input
                          id={`field-${f.key}`}
                          type={f.type}
                          name={f.key}
                          autoComplete={f.autoComplete}
                          placeholder={f.placeholder}
                          value={(form as any)[f.key]}
                          onChange={e => handleChange(f.key, e.target.value)}
                          aria-invalid={!!errors[f.key] || undefined}
                          aria-describedby={errors[f.key] ? `error-${f.key}` : undefined}
                          className="w-full bg-transparent border border-white/10 px-5 py-4 text-white text-sm placeholder:text-[#888] focus:outline-none focus:border-[#c9a96e]/50 focus-visible:ring-2 focus-visible:ring-[#c9a96e]/50 transition-all duration-300"
                        />
                        {errors[f.key] && <p id={`error-${f.key}`} role="alert" className="text-red-400/80 text-xs mt-1">{errors[f.key]}</p>}
                      </div>
                    ))}
                    <div key="service">
                      <label htmlFor="field-service" className="block text-xs tracking-[0.15em] uppercase text-[#a69c94] mb-3 font-[family-name:var(--font-ui)]">Service</label>
                      <select
                        id="field-service"
                        name="service"
                        autoComplete="off"
                        value={form.service}
                        onChange={e => handleChange('service', e.target.value)}
                        aria-invalid={!!errors.service || undefined}
                        aria-describedby={errors.service ? 'error-service' : undefined}
                        className="w-full bg-transparent border border-white/10 px-5 py-4 text-white text-sm placeholder:text-[#888] focus:outline-none focus:border-[#c9a96e]/50 focus-visible:ring-2 focus-visible:ring-[#c9a96e]/50 transition-all duration-300 appearance-none"
                      >
                        <option value="" disabled className="bg-[#1a1a1a] text-[#888]">Select a service</option>
                        <option value="balayage" className="bg-[#1a1a1a]">Balayage</option>
                        <option value="facial" className="bg-[#1a1a1a]">Facial</option>
                        <option value="haircut" className="bg-[#1a1a1a]">Haircut &amp; Styling</option>
                        <option value="color" className="bg-[#1a1a1a]">Color Treatment</option>
                        <option value="massage" className="bg-[#1a1a1a]">Massage</option>
                        <option value="bridal" className="bg-[#1a1a1a]">Bridal Package</option>
                        <option value="other" className="bg-[#1a1a1a]">Other</option>
                      </select>
                      {errors.service && <p id="error-service" role="alert" className="text-red-400/80 text-xs mt-1">{errors.service}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="field-message" className="block text-xs tracking-[0.15em] uppercase text-[#a69c94] mb-3 font-[family-name:var(--font-ui)]">Message</label>
                    <textarea
                      id="field-message"
                      name="message"
                      autoComplete="off"
                      rows={4}
                      placeholder="Tell us about your vision, concerns, or preferences..."
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      aria-invalid={!!errors.message || undefined}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      className="w-full bg-transparent border border-white/10 px-5 py-4 text-white text-sm placeholder:text-[#888] focus:outline-none focus:border-[#c9a96e]/50 focus-visible:ring-2 focus-visible:ring-[#c9a96e]/50 transition-all duration-300 resize-none"
                    />
                    {errors.message && <p id="error-message" role="alert" className="text-red-400/80 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                    className="w-full py-4 bg-[#c9a96e] text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#dfc08a] transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Reservation'
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2} className="md:col-span-2">
              <div className="space-y-12">
                <div>
                  <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-4 font-[family-name:var(--font-ui)]">Address</h3>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)]">456 Camden Drive</p>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)]">Beverly Hills, CA 90210</p>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-4 font-[family-name:var(--font-ui)]">Hours</h3>
                  <div className="space-y-2 text-[#a69c94] text-sm">
                    {[
                      { d: 'Monday — Friday', h: '9:00 AM — 7:00 PM' },
                      { d: 'Saturday', h: '9:00 AM — 6:00 PM' },
                      { d: 'Sunday', h: '10:00 AM — 4:00 PM' },
                    ].map(s => (
                      <div key={s.d} className="flex justify-between border-b border-white/[0.03] py-2">
                        <span className="text-white/60 text-xs tracking-wider">{s.d}</span>
                        <span className="text-white/80 text-xs">{s.h}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-4 font-[family-name:var(--font-ui)]">Contact</h3>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)]">+1 (310) 555-0189</p>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)]">reservations@maisoneclat.com</p>
                </div>
                <div className="aspect-[4/3] overflow-hidden border border-white/5 relative">
                  <img src="/images/contact-bg.jpg" alt="Maison Éclat Beverly Hills location" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
