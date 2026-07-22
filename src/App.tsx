import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './Layout'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  const location = useLocation()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AnimatePresence mode="popLayout">
      <Suspense fallback={<div className="flex items-center justify-center h-screen bg-[#0d0d0d]"><div className="text-[#c9a96e] text-sm tracking-wider">Loading...</div></div>}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={
            <div className="flex items-center justify-center h-screen bg-[#0d0d0d] text-center px-4">
              <div>
                <h1 className="text-6xl font-[family-name:var(--font-heading)] text-[#c9a96e] mb-4">404</h1>
                <p className="text-[#a69c94] mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="inline-block border border-[#c9a96e]/60 text-[#c9a96e] px-8 py-3 text-sm tracking-[0.2em] uppercase hover:bg-[#c9a96e] hover:text-[#0d0d0d] transition-colors duration-500">Return Home</a>
              </div>
            </div>
          } />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}
