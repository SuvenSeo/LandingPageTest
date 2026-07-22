import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const categories = ['All', 'Hair', 'Skincare', 'Bridal', 'Nails']

const works = [
  { id: 1, cat: 'Hair', title: 'Editorial Balayage', subtitle: 'Sun-kissed transformation', img: '/images/gallery-1.jpg' },
  { id: 2, cat: 'Skincare', title: 'HydraFacial Glow', subtitle: 'Deep hydration therapy', img: '/images/gallery-2.jpg' },
  { id: 3, cat: 'Bridal', title: 'Garden Wedding', subtitle: 'Bridal party of eight', img: '/images/gallery-3.jpg' },
  { id: 4, cat: 'Nails', title: 'Sculptural Art', subtitle: 'Gold leaf application', img: '/images/gallery-4.jpg' },
  { id: 5, cat: 'Hair', title: 'Platinum Pixie', subtitle: 'Bold transformation', img: '/images/gallery-5.jpg' },
  { id: 6, cat: 'Skincare', title: 'Micro-needling', subtitle: 'Skin rejuvenation', img: '/images/gallery-6.jpg' },
  { id: 7, cat: 'Bridal', title: 'Modern Bride', subtitle: 'Minimalist elegance', img: '/images/gallery-7.jpg' },
  { id: 8, cat: 'Nails', title: 'Gel Ombre Set', subtitle: 'Custom color blend', img: '/images/gallery-8.jpg' },
  { id: 9, cat: 'Hair', title: 'Textured Bob', subtitle: 'Effortless waves', img: '/images/gallery-9.jpg' },
  { id: 10, cat: 'Skincare', title: 'Chemical Peel', subtitle: 'Radiance renewal', img: '/images/gallery-10.jpg' },
  { id: 11, cat: 'Bridal', title: 'Boho Bride', subtitle: 'Flower crown beauty', img: '/images/gallery-11.jpg' },
  { id: 12, cat: 'Nails', title: 'Chrome Finish', subtitle: 'Mirror shine', img: '/images/gallery-12.jpg' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = useMemo(() => works.filter(w => active === 'All' || w.cat === active), [active])

  return (
    <PageTransition>
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] text-white leading-[1.1] mt-6 mb-6">
              Our Work
            </h1>
            <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto" />
          </ScrollReveal>

          <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`px-6 py-3.5 text-xs tracking-[0.15em] uppercase transition-all duration-500 focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 ${
                  active === c
                    ? 'bg-[#c9a96e] text-[#0d0d0d]'
                    : 'text-white/50 border border-white/10 hover:border-[#c9a96e]/40 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </ScrollReveal>

          <div aria-live="polite">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    tabIndex={0}
                    onKeyDown={() => {}}
                    className="break-inside-avoid group relative overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
                  >
                    <div className={`${item.id % 3 === 0 ? 'aspect-[3/4]' : item.id % 3 === 1 ? 'aspect-[1/1]' : 'aspect-[4/5]'} overflow-hidden`}>
                      <img src={item.img} alt={item.title} loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <span className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase">{item.cat}</span>
                        <h3 className="text-white text-lg font-[family-name:var(--font-heading)]">{item.title}</h3>
                        <p className="text-[#a69c94] text-sm italic font-[family-name:var(--font-body)]">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            {filtered.length === 0 && (
              <p className="text-center text-[#a69c94] py-20">No works found in this category.</p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
