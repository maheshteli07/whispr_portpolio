import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'My story', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Contact', href: '#contact' },
]

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false)
    window.setTimeout(() => scrollToSection(href), 50)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 px-4 py-3 transition-all duration-500 sm:px-7 lg:px-10 ${
          isScrolled ? 'bg-cream/90 py-2 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between rounded-pill border border-ink/15 px-4 py-2.5 sm:px-5">
          <button
            type="button"
            onClick={() => handleLinkClick('#home')}
            className="group font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
          >
            mahesh<span className="text-coral">.</span>exe
            <span className="ml-2 inline-block h-px w-0 bg-ink align-middle transition-all duration-300 group-hover:w-5" />
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="nav-link relative py-1 font-mono text-[9px] uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em]">Mahesh Teli</span>
              <span className="text-ink/30">×</span>
              <span className="font-display text-sm font-semibold uppercase tracking-[-0.06em]">Canto</span>
            </div>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault()
                handleLinkClick('#contact')
              }}
              className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-lime text-center font-mono text-[7px] uppercase leading-[1.05] tracking-[0.04em] transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14 sm:text-[8px]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              <span className="ml-1">Open to<br />opportunities</span>
            </a>
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 lg:hidden"
            >
              {isMenuOpen ? <X size={15} strokeWidth={1.5} /> : <Menu size={15} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-end bg-ink px-6 pb-10 pt-28 text-cream sm:px-10"
          >
            <div className="grain absolute inset-0 opacity-10" />
            <div className="relative">
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.16em] text-coral">Navigate the archive</p>
              <nav className="flex flex-col items-start">
                {links.map((link, index) => (
                  <motion.button
                    key={link.href}
                    type="button"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + index * 0.06 }}
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-baseline gap-3 font-display text-[clamp(3rem,13vw,6rem)] font-semibold uppercase leading-[0.9]"
                  >
                    <span className="font-mono text-[10px] font-normal text-coral">0{index + 1}</span>
                    <span className="transition-colors group-hover:text-lime">{link.label}</span>
                  </motion.button>
                ))}
              </nav>
              <div className="mt-14 flex items-center justify-between border-t border-cream/20 pt-4 font-mono text-[9px] uppercase tracking-[0.13em] text-cream/60">
                <span>Mahesh Teli × Canto</span>
                <span>mahesh.exe / 2026</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
