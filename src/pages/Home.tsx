import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  { title: 'Hair', desc: 'Precision cuts, editorial color, and transformative treatments.', items: 'Cut & Blow-Dry • Balayage • Keratin • Glossing' },
  { title: 'Skincare', desc: 'Clinical-grade facials and advanced rejuvenation therapies.', items: 'HydraFacial • Micro-needling • LED • Chemical Peel' },
  { title: 'Bridal', desc: 'Curated bridal beauty for your most photographed moments.', items: 'Trial Session • Day-Of • Bridal Party • Hair & Makeup' },
  { title: 'Nail Art', desc: 'Sculptural nail design using luxury Italian and Japanese lacquers.', items: 'Gel • Sculpture • Artistic • Paraffin' },
  { title: 'Body', desc: 'Full-body treatments to restore, sculpt, and renew.', items: 'Massage • Body Wrap • Scrub • Toning' },
]

const testimonials = [
  { text: "An experience that transcends beauty. The attention to detail is extraordinary — from the moment you walk in, you feel transformed.", name: "Catherine D.", title: "Regular Client" },
  { text: "I've never had color this perfect. The consultation alone was more thorough than anywhere I've been in the city.", name: "Marcus W.", title: "Editorial Director" },
  { text: "My wedding day looked like a editorial spread thanks to the bridal team. Every single detail was flawless.", name: "Sophia L.", title: "Bride" },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
}

const easeOut = [0.25, 0.46, 0.45, 0.94] as const
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
}

export default function Home() {
  return (
    <PageTransition>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d0d0d] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a96e15_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 25% 50%, #1a1a1a 0%, #0d0d0d 100%)` }} />
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-[#c9a96e]/20 to-transparent" />
          <div className="absolute top-20 left-10 w-40 h-px bg-gradient-to-r from-[#c9a96e]/20 to-transparent" />
          <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-t from-[#c9a96e]/20 to-transparent" />
          <div className="absolute bottom-20 right-10 w-40 h-px bg-gradient-to-l from-[#c9a96e]/20 to-transparent" />
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-20 text-center px-6 max-w-4xl">
          <motion.p variants={fadeUp} className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-6 font-[family-name:var(--font-ui)]">
            Est. 2018 — Beverly Hills
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-[family-name:var(--font-heading)] text-white leading-[0.9] mb-8 tracking-tight">
            The Art<br />of Beauty
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#a69c94] max-w-xl mx-auto mb-12 font-[family-name:var(--font-body)] italic leading-relaxed">
            Where every treatment is a masterpiece and every guest is a muse.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
            <Link to="/services" className="group relative px-10 py-4 text-xs tracking-[0.2em] uppercase overflow-hidden">
              <span className="absolute inset-0 border border-[#c9a96e] group-hover:bg-[#c9a96e] transition-all duration-500" />
              <span className="absolute inset-0 border border-[#c9a96e]/0 group-hover:border-[#c9a96e]/40 group-hover:scale-110 transition-all duration-500" />
              <span className="relative text-[#c9a96e] group-hover:text-[#0d0d0d] transition-colors duration-500">Explore Services</span>
            </Link>
            <Link to="/contact" className="px-10 py-4 text-white/60 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
              Book Now
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#c9a96e] to-transparent mx-auto mb-3" />
          <p className="text-[#666] text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Scroll</p>
        </motion.div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5]">
                <div className="absolute inset-0 border border-white/5 rounded-sm" />
                <div className="absolute inset-2 bg-gradient-to-br from-[#c9a96e10] to-[#1a1a1a] rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border border-[#c9a96e]/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-[#c9a96e] text-2xl">✦</span>
                    </div>
                    <p className="text-[#a69c94] text-sm tracking-wider">Editorial Space</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#c9a96e]/10 rounded-sm pointer-events-none" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6 mb-8">
                Beauty as a<br />Fine Art
              </h2>
              <p className="text-[#a69c94] text-lg leading-relaxed font-[family-name:var(--font-body)] mb-6">
                At Maison Éclat, we believe beauty is not merely a service — it is an art form. Every cut, every color, every facial is approached with the same precision and passion that a sculptor brings to marble.
              </p>
              <p className="text-[#a69c94] text-lg leading-relaxed font-[family-name:var(--font-body)] mb-10">
                Housed in a sun-drenched atelier in Beverly Hills, our team of award-winning artists works with the finest products from around the world to create results that are nothing short of extraordinary.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase group">
                <span className="w-12 h-px bg-[#c9a96e] group-hover:w-20 transition-all duration-500" />
                Discover Our Story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6">
              Our Craft
            </h2>
            <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto mt-8" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {services.slice(0, 3).map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1} className="relative group bg-[#0a0a0a] p-10 md:p-14 hover:bg-[#111] transition-all duration-700 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/40 transition-all duration-700" />
                <span className="text-[#c9a96e] text-4xl font-[family-name:var(--font-heading)]">0{i + 1}</span>
                <h3 className="text-2xl font-[family-name:var(--font-heading)] text-white mt-6 mb-4">{s.title}</h3>
                <p className="text-[#a69c94] text-sm leading-relaxed mb-6">{s.desc}</p>
                <p className="text-[#666] text-xs tracking-wider leading-loose">{s.items}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {services.slice(3).map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1} className="relative group bg-[#0a0a0a] p-10 md:p-14 hover:bg-[#111] transition-all duration-700 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/40 transition-all duration-700" />
                <span className="text-[#c9a96e] text-4xl font-[family-name:var(--font-heading)]">0{i + 4}</span>
                <h3 className="text-2xl font-[family-name:var(--font-heading)] text-white mt-6 mb-4">{s.title}</h3>
                <p className="text-[#a69c94] text-sm leading-relaxed mb-6">{s.desc}</p>
                <p className="text-[#666] text-xs tracking-wider leading-loose">{s.items}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-16">
            <Link to="/services" className="inline-flex items-center gap-2 text-white text-xs tracking-[0.2em] uppercase group">
              View Full Menu
              <span className="w-8 h-px bg-white/30 group-hover:w-16 transition-all duration-500" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a96e05_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6">
              Voices of Devotion
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-8 border border-white/5 hover:border-[#c9a96e]/30 hover:bg-white/[0.02] transition-all duration-700 h-full flex flex-col relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#c9a96e]/5 to-transparent pointer-events-none" />
                  <div className="text-[#c9a96e] text-6xl leading-none font-[family-name:var(--font-heading)] mb-6">"</div>
                  <p className="text-[#a69c94] text-sm leading-relaxed mb-8 flex-1">{t.text}</p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-white text-sm font-[family-name:var(--font-ui)] font-medium">{t.name}</p>
                    <p className="text-[#666] text-xs tracking-wider mt-1">{t.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#c9a96e08_0%,_transparent_70%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 80% 50%, #c9a96e05 0%, transparent 60%)` }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mb-8">
              Ready to<br />Be Transformed?
            </h2>
            <p className="text-[#a69c94] text-lg font-[family-name:var(--font-body)] italic mb-12">
              Your journey to extraordinary begins with a single appointment.
            </p>
            <Link
              to="/contact"
              className="relative inline-block px-12 py-4 text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-ui)] font-medium group overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#c9a96e] group-hover:bg-[#dfc08a] transition-all duration-500" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_0%,transparent_40%,rgba(255,255,255,0.3)_50%,transparent_60%,transparent_100%)] bg-[length:200%_100%] group-hover:animate-[gold-shimmer_2s_ease-in-out] transition-opacity" />
              <span className="relative text-[#0d0d0d]">Reserve Your Experience</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
