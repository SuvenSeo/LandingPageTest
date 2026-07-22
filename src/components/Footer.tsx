import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#c9a96e]/40 flex items-center justify-center">
                <span className="text-[#c9a96e] text-sm tracking-[0.2em] font-[family-name:var(--font-ui)]">M</span>
              </div>
              <span className="text-white text-xl tracking-[0.15em] font-[family-name:var(--font-heading)]">MAISON ÉCLAT</span>
            </div>
            <p className="text-[#a69c94] text-sm leading-relaxed max-w-md">
              Where artistry meets elegance. An intimate sanctuary dedicated to the craft of beauty and the art of refined self-care.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-6 font-[family-name:var(--font-ui)] font-medium">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-[#a69c94] text-sm hover:text-[#c9a96e] transition-colors duration-300">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs tracking-[0.15em] uppercase mb-6 font-[family-name:var(--font-ui)] font-medium">Connect</h4>
            <div className="flex flex-col gap-3 text-[#a69c94] text-sm">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>Facebook</span>
              <span>YouTube</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Maison Éclat. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#666] text-xs tracking-wider">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
