import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,169,110,0.1)]'
          : 'mix-blend-difference'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
            <span className="text-white text-xs tracking-[0.2em] font-[family-name:var(--font-ui)]">M</span>
          </div>
          <span className="text-white text-lg tracking-[0.15em] font-[family-name:var(--font-heading)]">MAISON ÉCLAT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-xs tracking-[0.15em] uppercase transition-colors duration-300 group"
            >
              <span className={pathname === l.to ? 'text-white' : 'text-white/50 group-hover:text-white transition-colors duration-300'}>
                {l.label}
              </span>
              <span className={`absolute -bottom-1 left-0 h-px bg-[#c9a96e] transition-all duration-500 ${
                pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col items-center py-10 gap-8">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                    pathname === l.to ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500"
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
