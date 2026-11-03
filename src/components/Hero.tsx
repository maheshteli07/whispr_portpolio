import { motion } from 'framer-motion'
import { ArrowDownRight, MousePointer2 } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="hero scroll-mt-24 relative flex min-h-[calc(100vh-76px)] flex-col justify-between px-5 pb-8 pt-14 sm:px-8 lg:px-12 lg:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[78%] opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="grain absolute inset-0 -z-0" />

      <div className="relative z-10 flex items-start justify-between">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-[155px] font-mono text-[10px] uppercase leading-[1.4] tracking-[0.12em] sm:max-w-[200px]"
        >
          An interactive archive of ideas, experiments & becoming.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 8, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring' }}
          className="hidden h-24 w-24 items-center justify-center rounded-full bg-coral text-center font-mono text-[10px] uppercase leading-[1.3] tracking-[0.08em] sm:flex"
        >
          <span>scroll<br />to explore</span>
        </motion.div>
      </div>

      <div className="relative z-10 my-auto py-16">
        <motion.p
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-coral"
        >
          01 / the origin story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-6xl text-[clamp(4.5rem,15vw,14rem)] font-semibold uppercase leading-[0.78]"
        >
          The making
          <br />
          <span className="ml-[12vw] text-coral">of</span> Mahesh<span className="text-lime">.</span>
        </motion.h1>
      </div>

      <div className="relative z-10 flex items-end justify-between border-t border-ink/20 pt-4">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em]">
          <MousePointer2 size={14} strokeWidth={1.5} />
          <span>Mahesh Basavaraj Teli</span>
        </div>
        <motion.a
          href="#journey"
          whileHover={{ x: 4, y: 4 }}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]"
        >
          Begin the story <ArrowDownRight size={17} strokeWidth={1.5} />
        </motion.a>
      </div>
    </section>
  )
}
