import { motion } from 'framer-motion'
import { ArrowDownRight, Heart, Sparkles } from 'lucide-react'

const drivers = [
  { number: '01', label: 'Curiosity', detail: 'Keep asking why.' },
  { number: '02', label: 'Creativity', detail: 'Find another angle.' },
  { number: '03', label: 'Experimentation', detail: 'Learn by making.' },
  { number: '04', label: 'Technology', detail: 'Turn possibility real.' },
  { number: '05', label: 'People', detail: 'Build it together.' },
]

export function Above() {
  return (
    <section id="above" className="relative scroll-mt-24 border-t border-ink/20 py-20 sm:py-28 lg:py-36">
      <div className="absolute right-[8%] top-16 hidden h-20 w-20 rotate-12 items-center justify-center rounded-full border border-ink/20 sm:flex">
        <Sparkles size={16} strokeWidth={1.2} />
        <span className="absolute font-mono text-[8px] uppercase tracking-[0.12em]">a little context</span>
      </div>

      <div className="mb-16 flex items-start justify-between gap-6 sm:mb-24">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">02 / the person behind the pixels</p>
        <p className="max-w-[10rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
          Less bio,<br />more hello.
        </p>
      </div>

      <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative mx-auto flex aspect-square max-w-[19rem] items-center justify-center rounded-[45%_55%_48%_52%] bg-coral p-8 text-center sm:max-w-[24rem]"
          >
            <div className="absolute inset-3 rounded-[45%_55%_48%_52%] border border-ink/40" />
            <div className="relative">
              <Heart className="mx-auto mb-4 fill-lime text-ink" size={28} strokeWidth={1.3} />
              <p className="font-display text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.82]">
                Make room<br />for wonder.
              </p>
            </div>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-5 left-[8%] rounded-pill border border-ink bg-lime px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em]"
          >
            currently curious
          </motion.span>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="font-display max-w-5xl text-[clamp(3.2rem,7vw,7.5rem)] font-semibold uppercase leading-[0.82]"
          >
            The person
            <br />
            behind the <span className="text-coral">pixels.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="mt-10 max-w-2xl space-y-5 text-lg leading-[1.45] sm:text-xl"
          >
            <p>
              Hi, I&apos;m <span className="rounded bg-lime px-1">Mahesh Basavaraj Teli</span> — a computer science and engineering student finding my way through artificial intelligence and machine learning.
            </p>
            <p>
              I like exploring technology, building projects, trying ideas before they feel ready, and working with people who make the process more interesting.
            </p>
            <p>
              But programming is only one part of the picture. I&apos;m equally drawn to creativity, marketing, storytelling, and community — to that magic moment when an idea finds the people it was meant for.
            </p>
          </motion.div>
          <a href="#journey" className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            Get to know the journey
            <ArrowDownRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      <div className="mt-28 border-t border-ink/20 pt-6 sm:mt-36">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.85]">
            Things that<br /><span className="text-coral">drive me.</span>
          </h3>
          <p className="hidden max-w-[12rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] sm:block">
            Five forces behind<br />the way I think & make.
          </p>
        </div>
        <div className="grid border-t border-ink/20 sm:grid-cols-5">
          {drivers.map((driver, index) => (
            <motion.div
              key={driver.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group border-b border-ink/20 py-5 sm:border-b-0 sm:border-r sm:px-4 sm:py-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <div className="mb-12 flex items-center justify-between font-mono text-[9px] text-ink/50">
                <span>{driver.number}</span>
                <span className="h-2 w-2 rounded-full bg-lime transition-transform duration-300 group-hover:scale-[2]" />
              </div>
              <h4 className="font-display text-3xl font-semibold uppercase leading-[0.85] transition-transform duration-300 group-hover:-translate-y-1">
                {driver.label}
              </h4>
              <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.08em] text-ink/60">{driver.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
