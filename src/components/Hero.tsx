
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { MouseEvent, useRef } from 'react'

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 5 }}
      transition={{ delay: 0.65, duration: 0.8, type: 'spring', bounce: 0.35 }}
      className="hero-portrait relative h-[min(68vw,27rem)] w-[min(68vw,27rem)]"
    >
      <div className="absolute inset-[5%] overflow-hidden rounded-[45%_55%_48%_52%] border-2 border-ink bg-coral">
        <img
          src="/mahesh-portrait.png"
          alt="Mahesh Basavaraj Teli"
          className="h-full w-full object-cover object-center grayscale-[15%]"
        />
      </div>

      <span className="absolute bottom-[5%] left-0 rounded-pill border border-ink bg-cream px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em]">
        the person behind the pixels
      </span>

      <span className="absolute right-0 top-[5%] flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-ink font-mono text-[8px] uppercase leading-[1.1] text-center text-cream sm:h-16 sm:w-16">
        idea<br />in motion
      </span>
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
      <ArrowUpRight
        size={14}
        strokeWidth={1.5}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex min-h-[calc(100svh-76px)] flex-col overflow-hidden px-5 pb-5 pt-0 sm:px-8 sm:pb-7 lg:px-12"
    >
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[78%] opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="grain absolute inset-0 -z-0" />

      <div className="relative z-10 grid items-start gap-8 py-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.65fr)] lg:gap-10">
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
            <span className="ml-[8vw] text-coral">
              I make things happen.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68 }}
            className="mt-7 max-w-[34rem] text-base leading-[1.45] sm:text-lg"
          >
            A CSE student exploring AI and technology, a creative builder
            turning ideas into experiences, and a curious mind always looking
            for the next thing to create.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.82 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <MagneticLink href="#journey">
              Explore my journey
            </MagneticLink>

            <a
              href="#contact"
              className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em]"
            >
              Let&apos;s connect
              <MoveUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="relative flex min-h-[17rem] items-center justify-center pt-10 sm:pt-14 lg:min-h-[25rem] lg:pt-20">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute right-0 top-0 max-w-[9rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em]"
          >
            Curious by nature.<br />
            Creative by choice.<br />
            Always building.
          </motion.p>

          <Portrait />

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
            <div
              key={index}
              className="flex items-center gap-7"
              aria-hidden={index === 1}
            >
              <span>build</span>
              <span className="text-coral">✳</span>
              <span>experiment</span>
              <span className="text-lime">✳</span>
              <span>create</span>
              <span className="text-coral">✳</span>
              <span>connect</span>
              <span className="text-lime">✳</span>
              <span>grow</span>
              <span className="text-coral">✳</span>
              <span>repeat</span>
              <span className="text-lime">✳</span>
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
          Scroll to begin
          <ArrowDownRight
            size={17}
            strokeWidth={1.5}
            className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  )
}
