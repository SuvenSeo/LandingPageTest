import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const dur = 2000
    const step = 16
    const inc = to / (dur / step)
    const t = setInterval(() => {
      start += inc
      if (start >= to) { setCount(to); clearInterval(t) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(t)
  }, [isInView, to])

  return <span ref={ref}>{count}{suffix}</span>
}

const team = [
  { name: 'Amara Delacroix', role: 'Creative Director & Founder', bio: 'With over 18 years of experience in Paris and London, Amara brings editorial precision to every appointment.' },
  { name: 'Marcus Chen', role: 'Master Colorist', bio: 'Award-winning color artist specializing in balayage, lived-in color, and transformative blonding techniques.' },
  { name: 'Sofia Reyes', role: 'Lead Esthetician', bio: 'Certified in advanced facial therapies, Sofia creates customized skincare treatments for every skin type.' },
  { name: 'Julian Ward', role: 'Bridal Director', bio: 'Julian has orchestrated beauty for over 300 weddings, bringing calm and artistry to every bridal suite.' },
]

const values = [
  { title: 'Craft', desc: 'Every service is executed with the precision of a master artisan.' },
  { title: 'Luxury', desc: 'From the products we use to the environment we create, only the finest will do.' },
  { title: 'Connection', desc: 'We listen deeply to understand your vision and bring it to life.' },
  { title: 'Evolution', desc: 'We continuously study the world\'s best techniques to stay ahead of the craft.' },
]

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#c9a96e06_0%,_transparent_70%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">About</span>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] text-white leading-[1] mt-6 mb-8">
                Our Story
              </h1>
              <p className="text-[#a69c94] text-lg leading-relaxed font-[family-name:var(--font-body)] mb-6">
                Founded in 2018, Maison Éclat was born from a singular vision: to create a sanctuary where beauty is elevated to fine art. What began as a intimate studio in Beverly Hills has grown into one of the most celebrated salons on the West Coast.
              </p>
              <p className="text-[#a69c94] text-lg leading-relaxed font-[family-name:var(--font-body)]">
                Our team of twelve artists brings together expertise from Paris, London, Tokyo, and New York — each contributing a unique perspective to the Maison Éclat experience.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-[3/4] bg-gradient-to-br from-[#c9a96e10] to-[#1a1a1a] border border-white/5 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full border border-[#c9a96e]/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[#c9a96e] text-3xl">✦</span>
                  </div>
                  <p className="text-[#a69c94] text-sm tracking-wider">Beverly Hills Studio</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: 12, suf: '', label: 'Award-Winning Artists' },
            { num: 8, suf: 'K+', label: 'Happy Guests' },
            { num: 7, suf: '', label: 'Years of Excellence' },
            { num: 300, suf: '+', label: 'Bridal Stories' },
          ].map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="text-center">
              <p className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#c9a96e] mb-2">
                <Counter to={s.num} suffix={s.suf} />
              </p>
              <p className="text-[#666] text-xs tracking-wider uppercase">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Principles</span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-px bg-white/5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08} className="bg-[#0d0d0d] p-10 md:p-12 text-center group hover:bg-[#111] transition-all duration-500">
                <span className="text-[#c9a96e] text-3xl font-[family-name:var(--font-heading)]">0{i + 1}</span>
                <h3 className="text-xl font-[family-name:var(--font-heading)] text-white mt-6 mb-4">{v.title}</h3>
                <p className="text-[#a69c94] text-sm leading-relaxed">{v.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">The Team</span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6">Meet Our Artists</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.08}>
                <div className="group">
                  <div className="aspect-[3/4] bg-gradient-to-br from-[#c9a96e08] to-[#1a1a1a] border border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center relative z-10">
                      <div className="w-14 h-14 rounded-full border border-[#c9a96e]/30 mx-auto mb-3 flex items-center justify-center group-hover:border-[#c9a96e]/60 transition-colors duration-500">
                        <span className="text-[#c9a96e] text-2xl">✦</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#c9a96e15] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/60 transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] text-white mb-1">{m.name}</h3>
                  <p className="text-[#c9a96e] text-xs tracking-wider uppercase mb-3">{m.role}</p>
                  <p className="text-[#666] text-sm leading-relaxed">{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
