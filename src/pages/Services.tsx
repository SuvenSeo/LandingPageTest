import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const categories = [
  {
    title: 'Hair',
    items: [
      { name: 'Women\'s Cut & Blow-Dry', price: '$185' },
      { name: 'Men\'s Cut & Style', price: '$95' },
      { name: 'Balayage — Partial', price: '$285' },
      { name: 'Balayage — Full', price: '$395' },
      { name: 'Single Process Color', price: '$165' },
      { name: 'Highlights — Partial', price: '$245' },
      { name: 'Highlights — Full', price: '$355' },
      { name: 'Keratin Smoothing', price: '$320' },
      { name: 'Olaplex Treatment', price: '$65' },
      { name: 'Gloss / Toner', price: '$85' },
    ],
  },
  {
    title: 'Skincare',
    items: [
      { name: 'Signature Facial', price: '$195' },
      { name: 'HydraFacial', price: '$275' },
      { name: 'Micro-needling', price: '$350' },
      { name: 'LED Light Therapy', price: '$95' },
      { name: 'Chemical Peel — Light', price: '$150' },
      { name: 'Chemical Peel — Deep', price: '$295' },
      { name: 'Dermaplaning', price: '$85' },
      { name: 'Vitamin C Boost', price: '$55' },
    ],
  },
  {
    title: 'Bridal',
    items: [
      { name: 'Bridal Consultation', price: '$0' },
      { name: 'Trial Session — Hair & Makeup', price: '$350' },
      { name: 'Day-Of Bridal Hair', price: '$295' },
      { name: 'Day-Of Bridal Makeup', price: '$275' },
      { name: 'Bridal Party — Hair', price: '$185' },
      { name: 'Bridal Party — Makeup', price: '$165' },
      { name: 'Hair & Makeup Package', price: '$525' },
    ],
  },
  {
    title: 'Nails',
    items: [
      { name: 'Classic Manicure', price: '$55' },
      { name: 'Classic Pedicure', price: '$75' },
      { name: 'Gel Manicure', price: '$75' },
      { name: 'Gel Pedicure', price: '$95' },
      { name: 'Nail Art — Per Nail', price: '$15' },
      { name: 'Sculpture Set', price: '$95' },
      { name: 'Paraffin Dip', price: '$35' },
    ],
  },
  {
    title: 'Body',
    items: [
      { name: 'Swedish Massage — 60m', price: '$135' },
      { name: 'Deep Tissue — 60m', price: '$155' },
      { name: 'Hot Stone Massage — 75m', price: '$195' },
      { name: 'Body Scrub & Wrap', price: '$175' },
      { name: 'Body Contouring — 45m', price: '$225' },
    ],
  },
]

const categoryImages: Record<string, string> = {
  Hair: '/images/haircare.jpg',
  Skincare: '/images/skincare.jpg',
  Bridal: '/images/bridal.jpg',
  Nails: '/images/nails.jpg',
}

export default function Services() {
  return (
    <PageTransition>
      <section className="py-32 px-6 relative">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#c9a96e06_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#c9a96e08_0%,_transparent_70%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-ui)]">Our Menu</span>
            <div className="relative inline-block mt-6 mb-6">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#c9a96e]/40" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#c9a96e]/40" aria-hidden="true" />
              <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-heading)] text-white">Our Services</h1>
            </div>
            <div className="w-12 h-px bg-[#c9a96e]/40 mx-auto" />
          </ScrollReveal>

          {categories.flatMap((cat, ci) => {
            const section = (
              <ScrollReveal key={cat.title} delay={ci * 0.08} className="mb-20">
                <div className="flex items-center gap-6 mb-10">
                  <span className="text-[#c9a96e] text-4xl font-[family-name:var(--font-heading)]">0{ci + 1}</span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-white">{cat.title}</h2>
                    <div className="w-16 h-px bg-[#c9a96e]/30 mt-3" />
                  </div>
                </div>
                <div className="space-y-1">
                  {cat.items.map((item) => (
                    <div
                      key={`${cat.title}-${item.name}`}
                      className="group flex items-center justify-between py-4 px-6 hover:bg-white/[0.02] focus-visible:bg-white/[0.03] focus-visible:outline-none transition-colors duration-300 border-b border-white/[0.03] relative"
                    >
                      <span className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/40 transition-colors duration-500" />
                      <span className="text-[#a69c94] group-hover:text-white transition-colors duration-300 text-sm tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-[#c9a96e] text-sm font-[family-name:var(--font-ui)] font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )

            if (ci < categories.length - 1 && categoryImages[cat.title]) {
              return [
                section,
                <div key={`divider-${cat.title}`} className="relative h-64 -mx-8 md:-mx-12 rounded-sm overflow-hidden border border-white/5 my-24">
                  <img src={categoryImages[cat.title]} alt={`${cat.title} treatment`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/80 via-transparent to-[#0d0d0d]/80" />
                </div>,
              ]
            }
            return [section]
          })}

          <ScrollReveal className="text-center mt-16 p-12 border border-white/5 bg-[#0a0a0a]">
            <p className="text-[#a69c94] text-sm mb-4 italic font-[family-name:var(--font-body)]">Prices subject to change based on stylist seniority.</p>
            <p className="text-[#a69c94] text-sm italic font-[family-name:var(--font-body)] mb-8">A 20% gratuity is respectfully suggested for exceptional service.</p>
            <Link
              to="/contact"
              className="inline-block px-10 py-3.5 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0d0d0d] transition-all duration-500 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c9a96e]/50"
            >
              Book an Appointment
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
