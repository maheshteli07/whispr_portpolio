import { useLayoutEffect, useRef, useState } from 'react'
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
    const loadingTimer = window.setTimeout(() => setIsLoading(false), 850)
    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
  }, [])

  return (
    <div ref={appRef} className="min-h-screen overflow-x-hidden bg-cream text-ink">
      {isLoading && (
        <div className="site-loader fixed inset-0 z-[100] flex items-center justify-center bg-cream text-ink" role="status" aria-label="Loading mahesh.exe">
          <div className="w-[min(18rem,80vw)]">
            <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em]">
              <span>mahesh.exe</span>
              <span>booting...</span>
            </div>
            <div className="h-px overflow-hidden bg-ink/15">
              <div className="loader-line h-full w-1/3 bg-coral" />
            </div>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/50">The making of Mahesh<span className="loading-dots">...</span></p>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <FutureSections />
      </main>
    </div>
  )
}

export default App
