import { motion } from 'framer-motion'
import { ArrowUpRight, Handshake, Lightbulb, UsersRound } from 'lucide-react'

const waysOfWorking = [
  {
    number: '01',
    title: 'Lead',
    icon: Handshake,
    color: 'bg-lime',
    copy: 'As a web team lead at the I3BLSIT student branch, I got to take ownership of work that needed coordination as much as code. I helped keep ideas moving, worked with team members, and took responsibility for getting the web side of student activities ready.',
    note: 'ownership / coordination / responsibility',
  },
  {
    number: '02',
    title: 'Create',
    icon: Lightbulb,
    color: 'bg-coral',
    copy: 'I contributed to event websites and digital experiences, turning early code ideas into something people could actually visit and use. The fun part was figuring out how a visual idea, a useful flow, and a real event could belong in the same experience.',
    note: 'websites / event ideas / making it real',
  },
  {
    number: '03',
    title: 'Share',
    icon: UsersRound,
    color: 'bg-lime',
    copy: 'Working with students also meant helping juniors learn web technologies, answering questions, and sharing what I was figuring out. I am still learning too, but explaining something to another person often makes the lesson stick for both of us.',
    note: 'helping / learning / growing together',
  },
]

export function Community() {
  return (
    <section id="community" className="relative scroll-mt-24 border-t border-ink/20 py-14 sm:py-16 lg:py-24">
      <div className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">05 / people make the work</p>
        <p className="max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
          Ideas get better<br />when they move.
        </p>
      </div>

      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-display max-w-5xl text-[clamp(3.7rem,9vw,9rem)] font-semibold uppercase leading-[0.76]"
          >
            Some of my
            <br />
            best work
            <br />
            happens <span className="text-coral">with people.</span>
          </motion.h2>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -3, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative mx-auto flex aspect-[1.15] max-w-md items-center justify-center overflow-hidden rounded-[2rem] border border-ink bg-ink p-8 text-cream"
          >
            <div className="absolute inset-5 rounded-[1.5rem] border border-cream/20" />
            <div className="relative text-center">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.16em] text-lime">field notes / I3BLSIT</p>
              <div className="mb-5 flex justify-center -space-x-3">
                {[0, 1, 2, 3].map((item) => (
                  <span key={item} className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink font-display text-xl text-ink ${item % 2 === 0 ? 'bg-lime' : 'bg-coral'}`}>
                    {String.fromCharCode(65 + item)}
                  </span>
                ))}
              </div>
              <p className="font-display text-4xl font-semibold uppercase leading-[0.82]">Make it<br />together.</p>
            </div>
            <span className="absolute bottom-5 left-6 font-mono text-[8px] uppercase tracking-[0.12em] text-cream/50">web team / student branch</span>
            <span className="absolute right-6 top-5 rotate-90 font-mono text-[8px] uppercase tracking-[0.12em] text-cream/50">01 — 03</span>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 border-t border-ink/20 pt-6 sm:mt-20">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.82]">
            How I show up<br /><span className="text-coral">with a team.</span>
          </h3>
          <p className="hidden max-w-[13rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] sm:block">
            Not a title.<br />A way of working.
          </p>
        </div>
        <div className="grid border-t border-ink/20 lg:grid-cols-3">
          {waysOfWorking.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-ink/20 py-7 lg:border-b-0 lg:border-r lg:px-7 lg:py-8 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="mb-16 flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink ${item.color} transition-transform duration-300 group-hover:rotate-12`}>
                    <Icon size={19} strokeWidth={1.4} />
                  </span>
                  <span className="font-mono text-[9px] text-ink/50">{item.number}</span>
                </div>
                <h4 className="font-display text-5xl font-semibold uppercase leading-[0.8] transition-transform duration-300 group-hover:-translate-y-1">{item.title}</h4>
                <p className="mt-6 max-w-sm text-base leading-[1.45] text-ink/80">{item.copy}</p>
                <div className="mt-7 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.1em] text-ink/55">
                  <span className="h-px w-6 bg-coral" /> {item.note}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-end">
        <a href="#contact" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em]">
          Build something with people <ArrowUpRight size={14} strokeWidth={1.4} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
