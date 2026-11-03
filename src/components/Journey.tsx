import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ChevronDown, CircleDot, Sparkles } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export type JourneyMilestone = {
  number: string
  title: string
  summary: string
  story: string
  accent: 'lime' | 'coral'
}

export const journeyMilestones: JourneyMilestone[] = [
  { number: '01', title: 'The first line of code', summary: 'Discovering programming opened a door.', story: 'I started coding to understand how things worked — and kept going because every answer made me more curious.', accent: 'lime' },
  { number: '02', title: 'Learning the fundamentals', summary: 'Java, data structures, and algorithms.', story: 'These foundations taught me to slow down, think clearly, and enjoy turning a messy problem into a shape I could work with.', accent: 'coral' },
  { number: '03', title: 'Making the interface matter', summary: 'Exploring frontend development with React.', story: 'Frontend gave my ideas a place to live. I started building websites that felt less like exercises and more like experiences.', accent: 'lime' },
  { number: '04', title: 'Looking behind the screen', summary: 'Moving into backend development and databases.', story: 'I learned how the systems behind a product give it memory, structure, and room to grow.', accent: 'coral' },
  { number: '05', title: 'Asking bigger questions', summary: 'Exploring artificial intelligence and machine learning.', story: 'AI and ML pulled me into finding patterns, testing assumptions, and thinking about what technology might make possible.', accent: 'lime' },
  { number: '06', title: 'Learning by doing', summary: 'Projects, hackathons, and real experiments.', story: 'Practical experiments became my classroom, especially when an idea had to become something people could use.', accent: 'coral' },
  { number: '07', title: 'Making space for people', summary: 'Becoming a web team lead at an SITC student branch.', story: 'The role gave me a chance to work with people, take responsibility, and learn that building is always a team sport.', accent: 'lime' },
  { number: '08', title: 'The wider picture', summary: 'Growing interest in marketing, creativity, and community.', story: 'I started looking beyond the build and toward how good ideas find their people.', accent: 'coral' },
]

function MilestoneRow({ milestone, isOpen, onToggle, index }: { milestone: JourneyMilestone; isOpen: boolean; onToggle: () => void; index: number }) {
  const accentClass = milestone.accent === 'lime' ? 'bg-lime' : 'bg-coral'

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: Math.min(index * 0.04, 0.24), duration: 0.45 }}
      className="relative border-b border-ink/15"
    >
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="group grid w-full grid-cols-[2.4rem_1fr_auto] items-center gap-3 py-4 text-left sm:grid-cols-[3.5rem_1fr_1.2fr_auto] sm:gap-5 sm:py-5">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-ink ${accentClass} font-mono text-[9px]`}>{milestone.number}</span>
        <span className="font-display text-[clamp(1.7rem,3vw,3rem)] font-semibold uppercase leading-[0.86] transition-colors group-hover:text-coral">{milestone.title}</span>
        <span className="hidden max-w-xs text-sm leading-[1.35] text-ink/65 sm:block">{milestone.summary}</span>
        <ChevronDown size={17} strokeWidth={1.4} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-coral' : 'text-ink/50'}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="max-w-2xl pb-5 pl-[3.3rem] text-sm leading-[1.5] text-ink/75 sm:pl-[5.5rem] sm:text-base">{milestone.story}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openMilestone, setOpenMilestone] = useState<number | null>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.fromTo('.journey-progress', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.journey-timeline', start: 'top 78%', end: 'bottom 78%', scrub: true },
      })
    }, sectionRef)
    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} id="journey" className="relative scroll-mt-24 border-t border-ink/20 py-12 sm:py-16 lg:py-20">
      <div className="mb-10 flex items-start justify-between gap-6 sm:mb-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">03 / an evolving story</p>
        <p className="max-w-[11rem] text-right font-mono text-[10px] uppercase leading-[1.4] tracking-[0.1em] text-ink/60">No perfect plan.<br />Just the next experiment.</p>
      </div>
      <div className="relative mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
        <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="font-display text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.76]">
          Everything<br />started <span className="text-coral">somewhere.</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative max-w-sm border-l border-ink/20 pl-5 text-base leading-[1.4] sm:text-lg">
          <Sparkles className="absolute -left-3 -top-5 bg-cream text-coral" size={20} strokeWidth={1.3} />
          <p>Small obsessions, useful detours, and people who made me want to go further.</p>
        </motion.div>
      </div>
      <div className="journey-timeline relative pl-0 sm:pl-2">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-ink/15 sm:left-[1.55rem]">
          <div className="journey-progress absolute inset-0 origin-top bg-coral" />
        </div>
        {journeyMilestones.map((milestone, index) => (
          <MilestoneRow key={milestone.number} milestone={milestone} index={index} isOpen={openMilestone === index} onToggle={() => setOpenMilestone(openMilestone === index ? null : index)} />
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-ink/20 pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/55">Click a chapter to open it</p>
        <a href="#projects" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em]">See what came from it <ArrowUpRight size={14} strokeWidth={1.4} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
      </div>
      <ArrowDown className="absolute bottom-5 right-0 hidden text-coral sm:block" size={17} strokeWidth={1.2} />
    </section>
  )
}
