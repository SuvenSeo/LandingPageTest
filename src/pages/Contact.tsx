import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

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
                >
                  <div className="w-16 h-16 rounded-full border border-[#c9a96e] mx-auto mb-6 flex items-center justify-center">
                    <span className="text-[#c9a96e] text-2xl">✓</span>
                  </div>
                  <h2 className="text-3xl font-[family-name:var(--font-heading)] text-white mb-4">Thank You</h2>
                  <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)]">Your reservation request has been received. We will be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                      { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                      { label: 'Phone', key: 'phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
                      { label: 'Service', key: 'service', type: 'text', placeholder: 'e.g. Balayage, Facial' },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs tracking-[0.15em] uppercase text-[#a69c94] mb-3 font-[family-name:var(--font-ui)]">{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={(form as any)[f.key]}
                          onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                          required
                          className="w-full bg-transparent border border-white/10 px-5 py-3.5 text-white text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e]/50 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-[#a69c94] mb-3 font-[family-name:var(--font-ui)]">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your vision, concerns, or preferences..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border border-white/10 px-5 py-3.5 text-white text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e]/50 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#c9a96e] text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#dfc08a] transition-all duration-500"
                  >
                    Send Reservation
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
                <div className="aspect-[4/3] bg-[radial-gradient(ellipse_at_center,_#c9a96e08_0%,_#0a0a0a_100%)] border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border border-[#c9a96e]/30 mx-auto mb-3 flex items-center justify-center">
                      <span className="text-[#c9a96e]">⌂</span>
                    </div>
                    <p className="text-[#666] text-xs tracking-wider">Map placeholder</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
