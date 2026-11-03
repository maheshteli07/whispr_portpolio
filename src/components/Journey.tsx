import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, CircleDot, Sparkles } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export type JourneyMilestone = {
  number: string
  title: string
  story: string
  accent: 'lime' | 'coral'
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    number: '01',
    title: 'The first line of code',
    story: 'Discovering programming opened a door I did not know was there. I started coding simply to understand how things worked — and kept going because every answer made me more curious.',
    accent: 'lime',
  },
  {
    number: '02',
    title: 'Learning the fundamentals',
    story: 'Java, data structures, and algorithms taught me to slow down, think clearly, and enjoy the process of turning a messy problem into a shape I could work with.',
    accent: 'coral',
  },
  {
    number: '03',
    title: 'Making the interface matter',
    story: 'Frontend development gave my ideas a place to live. I explored React and started building websites that felt less like exercises and more like experiences.',
    accent: 'lime',
  },
  {
    number: '04',
    title: 'Looking behind the screen',
    story: 'Then I moved toward backend development and databases — learning how the invisible systems behind a product give it memory, structure, and room to grow.',
    accent: 'coral',
  },
  {
    number: '05',
    title: 'Asking bigger questions',
    story: 'Artificial intelligence and machine learning pulled me into a new kind of exploration: finding patterns, testing assumptions, and thinking about what technology might make possible.',
    accent: 'lime',
  },
  {
    number: '06',
    title: 'Learning by doing',
    story: 'Projects and hackathons became my practical classroom. Real experiments taught me more than perfect plans ever could — especially when an idea had to become something people could use.',
    accent: 'coral',
  },
  {
    number: '07',
    title: 'Making space for people',
    story: 'Becoming a web team lead at a reputable SITC student branch gave me the chance to work with people, take responsibility, and learn that building is always a team sport.',
    accent: 'lime',
  },
  {
    number: '08',
    title: 'The wider picture',
    story: 'Along the way, I started looking beyond the build: toward growth marketing, creativity, and community building — and how good ideas find their people.',
    accent: 'coral',
  },
]

function MilestoneCard({ milestone, index }: { milestone: JourneyMilestone; index: number }) {
  const isEven = index % 2 === 0
  const accentClass = milestone.accent === 'lime' ? 'bg-lime' : 'bg-coral'

  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`journey-card relative grid gap-5 pb-20 pl-12 sm:pb-28 sm:pl-16 lg:w-[calc(50%-2.5rem)] lg:pl-0 ${isEven ? 'lg:mr-auto lg:pr-16 lg:text-right' : 'lg:ml-auto lg:pl-16'}`}
    >
      <div className={`absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-ink ${accentClass} lg:left-1/2 lg:-translate-x-1/2`}>
        <span className="font-mono text-[8px]">{milestone.number}</span>
      </div>
      <div className={`flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/50 ${isEven ? 'lg:justify-end' : ''}`}>
        <CircleDot size={11} strokeWidth={1.3} />
        <span>chapter {milestone.number}</span>
      </div>
      <h3 className="font-display text-[clamp(2.4rem,4vw,4.7rem)] font-semibold uppercase leading-[0.82]">
        {milestone.title}
      </h3>
      <p className="max-w-xl text-base leading-[1.45] text-ink/80 sm:text-lg">{milestone.story}</p>
      <div className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-coral ${isEven ? 'lg:justify-end' : ''}`}>
        <span className="h-px w-8 bg-coral" />
        still in motion
      </div>
    </motion.article>
  )
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        '.journey-progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.journey-timeline',
            start: 'top 68%',
            end: 'bottom 72%',
            scrub: true,
          },
        },
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} id="journey" className="relative scroll-mt-24 border-t border-ink/20 py-20 sm:py-28 lg:py-36">
      <div className="mb-20 flex items-start justify-between gap-6 sm:mb-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">03 / an evolving story</p>
        <p className="max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
          No perfect plan.<br />Just the next experiment.
        </p>
      </div>

      <div className="relative mb-24 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="font-display max-w-5xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.76]"
          >
            Everything
            <br />
            started <span className="text-coral">somewhere.</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-sm justify-self-end border-l border-ink/20 pl-5 text-lg leading-[1.35] sm:pl-7 sm:text-xl"
        >
          <Sparkles className="absolute -left-3 -top-5 bg-cream text-coral" size={22} strokeWidth={1.3} />
          <p>There was never one big leap. Just a trail of small obsessions, useful detours, and people who made me want to go further.</p>
        </motion.div>
      </div>

      <div className="journey-timeline relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-ink/15 lg:left-1/2">
          <div className="journey-progress absolute inset-0 origin-top bg-coral" />
        </div>
        <div className="absolute left-[0.6rem] top-0 -translate-y-7 font-mono text-[8px] uppercase tracking-[0.14em] text-ink/50 lg:left-1/2 lg:-translate-x-1/2">
          now
        </div>
        {journeyMilestones.map((milestone, index) => (
          <MilestoneCard key={milestone.number} milestone={milestone} index={index} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink/20 pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink/55">The timeline keeps moving</p>
        <a href="#projects" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em]">
          See what came from it <ArrowUpRight size={14} strokeWidth={1.4} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
      <ArrowDown className="absolute bottom-6 right-0 hidden text-coral sm:block" size={17} strokeWidth={1.2} />
    </section>
  )
}
