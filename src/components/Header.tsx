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
          : 'bg-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
            <span className="text-white text-xs tracking-[0.2em] font-[family-name:var(--font-ui)]">M</span>
          </div>
          <span className="text-white text-lg tracking-[0.15em] font-[family-name:var(--font-heading)]">MAISON ÉCLAT</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={pathname === l.to ? 'page' : undefined}
              className="relative text-xs tracking-[0.15em] uppercase transition-colors duration-300 group focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 rounded-sm"
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
            className="text-xs tracking-[0.15em] uppercase px-6 py-3.5 border border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500 focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-11 h-11 flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 rounded-sm"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
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
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/5"
          >
            <motion.div
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              initial="closed"
              animate={open ? 'open' : 'closed'}
              className="flex flex-col items-center py-10 gap-8"
            >
              {links.map(l => (
                <motion.div
                  key={l.to}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -10 },
                  }}
                >
                  <Link
                    to={l.to}
                    aria-current={pathname === l.to ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2 rounded-sm ${
                      pathname === l.to ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase px-8 py-4 border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 focus-visible:outline-2 focus-visible:outline-[#c9a96e] focus-visible:outline-offset-2"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
