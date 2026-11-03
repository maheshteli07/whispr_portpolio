import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FutureSections } from './components/FutureSections'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const loadingTimer = window.setTimeout(() => setIsLoading(false), prefersReducedMotion ? 0 : 1200)
    const context = gsap.context(() => {
      if (isLoading || prefersReducedMotion) return

      gsap.to('.hero-grid', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, appRef)

    return () => {
      window.clearTimeout(loadingTimer)
      context.revert()
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [isLoading])

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="site-loader fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink px-5 text-cream"
            role="status"
            aria-label="Loading mahesh.exe"
          >
            <div className="absolute inset-0 loader-grid opacity-20" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute left-0 right-0 top-1/2 h-px origin-left bg-cream/20"
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
            >
              <div className="mb-12 flex items-center justify-between border-b border-cream/20 pb-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em]">
                <span>mahesh.exe</span>
                <span className="text-lime">The making of Mahesh</span>
                <span>01 / 09</span>
              </div>
              <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-coral">Loading a curious mind</p>
                  <p className="font-display text-[clamp(4rem,13vw,12rem)] font-semibold uppercase leading-[0.7]">
                    Mahesh<span className="text-lime">.</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 md:pb-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/40 font-display text-2xl text-coral"
                  >
                    +
                  </motion.span>
                  <p className="max-w-[9rem] font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-cream/60">build / experiment / connect</p>
                </div>
              </div>
              <div className="mt-16 flex items-center gap-4">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-cream/15">
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full origin-left rounded-full bg-coral"
                  />
                </div>
                <span className="font-mono text-[10px] text-lime">ready</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Navbar />
            <main>
              <Hero />
              <FutureSections />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
