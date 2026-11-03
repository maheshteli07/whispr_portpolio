import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { MouseEvent, useRef } from 'react'

function FloatingCharacter() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 5 }}
      transition={{ delay: 0.65, duration: 0.8, type: 'spring', bounce: 0.35 }}
      className="hero-character relative h-[min(56vw,25rem)] w-[min(56vw,25rem)]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [5, 1, 5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[8%] rounded-[42%_58%_58%_42%] border-2 border-ink bg-lime"
      >
        <span className="absolute left-[27%] top-[35%] h-4 w-4 rounded-full bg-ink sm:h-5 sm:w-5" />
        <span className="absolute right-[25%] top-[31%] h-4 w-4 rounded-full bg-ink sm:h-5 sm:w-5" />
        <span className="absolute bottom-[25%] left-1/2 h-10 w-16 -translate-x-1/2 rounded-[0_0_2rem_2rem] border-b-2 border-ink sm:h-12 sm:w-20" />
        <span className="absolute -left-[7%] top-[18%] h-8 w-12 -rotate-45 rounded-full border-2 border-ink bg-coral sm:h-10 sm:w-16" />
        <span className="absolute -right-[6%] bottom-[20%] h-8 w-12 rotate-45 rounded-full border-2 border-ink bg-coral sm:h-10 sm:w-16" />
      </motion.div>
      <motion.span
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute right-0 top-[8%] flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-cream font-mono text-[8px] uppercase leading-[1.1] text-center sm:h-16 sm:w-16"
      >
        idea<br />in motion
      </motion.span>
    </motion.div>
  )
}

function MagneticLink({ href, children }: { href: string; children: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 18 })
  const springY = useSpring(y, { stiffness: 280, damping: 18 })

  const handlePointerMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.16)
    y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.16)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handlePointerMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className="group flex w-fit items-center gap-3 rounded-pill border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-cream transition-colors hover:bg-coral"
    >
      {children}
      <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  )
}

export function Hero() {
  return (
    <section id="home" className="hero relative flex min-h-[calc(100vh-76px)] flex-col overflow-hidden px-5 pb-5 pt-10 sm:px-8 sm:pb-7 lg:px-12 lg:pt-14">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[78%] opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="grain absolute inset-0 -z-0" />

      <div className="relative z-10 flex items-start justify-between">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-[155px] font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] sm:max-w-[210px] sm:text-[10px]"
        >
          growth-minded,<br />creative by nature,<br />built to experience,<br />experiment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 8, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring' }}
          className="hidden h-20 w-20 items-center justify-center rounded-full bg-coral text-center font-mono text-[9px] uppercase leading-[1.3] tracking-[0.08em] sm:flex"
        >
          <span>scroll<br />to explore</span>
        </motion.div>
      </div>

      <div className="relative z-10 my-auto grid items-center gap-8 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:gap-10 lg:py-14">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-coral sm:text-[11px]"
          >
            01 / meet the maker
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display mb-2 text-[clamp(4.5rem,15vw,12rem)] font-semibold uppercase leading-[0.7] text-ink"
          >
            Mahesh<span className="text-lime">.</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-5xl text-[clamp(2.5rem,6.1vw,6rem)] font-semibold uppercase leading-[0.87] tracking-[-0.08em]"
          >
            I don&apos;t just build things;
            <br />
            <span className="ml-[8vw] text-coral">I make things happen.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="mt-7 max-w-[34rem] text-base leading-[1.35] sm:text-lg"
          >
            I am Mahesh, a curious mind, a creative builder, and someone who loves turning ideas into reality.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <MagneticLink href="#journey">Explore my world</MagneticLink>
            <a href="#contact" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em]">
              Let&apos;s connect
              <MoveUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="relative flex min-h-[17rem] items-center justify-center lg:min-h-[25rem]">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute right-0 top-0 max-w-[9rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em]"
          >
            Making ideas<br />a little more real<br />since day one.
          </motion.p>
          <FloatingCharacter />
          <motion.span
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: -12 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-4 left-0 font-display text-5xl text-coral sm:text-7xl"
          >
            +
          </motion.span>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-ink/20 py-3">
        <div className="hero-ticker flex w-max items-center gap-7 font-mono text-[10px] uppercase tracking-[0.16em]">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex items-center gap-7" aria-hidden={index === 1}>
              <span>build</span><span className="text-coral">✳</span>
              <span>experiment</span><span className="text-lime">✳</span>
              <span>create</span><span className="text-coral">✳</span>
              <span>connect</span><span className="text-lime">✳</span>
              <span>repeat</span><span className="text-coral">✳</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between pt-4">
        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          <span>Mahesh Basavaraj Teli</span>
        </div>
        <a
          href="#journey"
          className="group ml-auto flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          Scroll to begin <ArrowDownRight size={17} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  )
}
