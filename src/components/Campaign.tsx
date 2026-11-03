
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Megaphone, Mic2, UsersRound, Wrench } from 'lucide-react'
import { useState } from 'react'

type CampaignStage = {
  number: string
  name: string
  title: string
  copy: string
  activation: string
  metric: string
  icon: typeof Mic2
}

const stages: CampaignStage[] = [
  {
    number: '01',
    name: 'Discover',
    title: 'Make the possibility visible.',
    copy: 'Short-form videos demonstrate how students can turn spoken thoughts into project ideas, content drafts, plans, and everyday tasks. The goal is to show how voice can make creating and communicating easier, while introducing students to Wispr Flow.',
    activation: 'Short-form content',
    metric: 'Engagement',
    icon: Megaphone,
  },
  {
    number: '02',
    name: 'Try',
    title: 'Let them experience the difference.',
    copy: 'Interactive campus workshops give students a chance to experience voice-powered productivity firsthand. Through simple live demonstrations, they can speak an idea, turn it into meaningful content, and understand how voice can fit into their everyday workflow.',
    activation: 'Campus workshops and live demos',
    metric: 'Activation',
    icon: Mic2,
  },
  {
    number: '03',
    name: 'Create',
    title: 'Turn curiosity into creation.',
    copy: 'A campus creator challenge encourages students to use Wispr Flow to bring an idea to life. From writing and planning to coding and content creation, participants showcase what they can accomplish using their voice.',
    activation: 'Campus creator challenge',
    metric: 'Participation',
    icon: Wrench,
  },
  {
    number: '04',
    name: 'Share',
    title: 'Let students lead the movement.',
    copy: 'A student ambassador network helps introduce Wispr Flow across college communities. Ambassadors can organize demonstrations, conduct peer-to-peer sessions, share practical use cases, and encourage more students to explore voice-first workflows.',
    activation: 'Student ambassador network',
    metric: 'Community reach',
    icon: UsersRound,
  },
  {
    number: '05',
    name: 'Refer',
    title: 'Make every experience worth sharing.',
    copy: 'Encourage students to share their experiences, creative work, and personal use cases. Authentic stories and peer recommendations can build trust, inspire new users, and create a natural referral cycle within student communities.',
    activation: 'Student stories and referrals',
    metric: 'Referrals',
    icon: BarChart3,
  },
]

const measurement = [
  ['Signups', 'How many students create an account after discovering the product?'],
  ['Activation', 'How many students complete their first meaningful voice workflow?'],
  ['Engagement', 'Which content, workshops, and activities attract the most interest?'],
  ['Retention', 'How many students continue using the product over time?'],
  ['Referrals', 'How many users recommend the product or invite their peers?'],
]

export function Campaign() {
  const [activeStage, setActiveStage] = useState(0)
  const stage = stages[activeStage]
  const Icon = stage.icon

  return (
    <section id="experiments" className="relative scroll-mt-24 border-t border-ink/20 py-14 sm:py-16 lg:py-24">
      <div className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">
          08 / growth experiment
        </p>
        <p className="max-w-[12rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
          A proposed strategy.<br />No results claimed.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.16em] text-coral">
            Wispr Flow × Indian college students
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="font-display text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.74]"
          >
            What if an
            <br />
            idea could
            <br />
            reach <span className="text-coral">10,000</span>
            <br />
            people<span className="text-lime">?</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-[2rem] bg-ink p-7 text-cream sm:p-10"
        >
          <span className="absolute right-7 top-7 font-mono text-[9px] uppercase tracking-[0.13em] text-lime">
            proposal / 001
          </span>

          <p className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.8]">
            Speak your<br />
            <span className="text-lime">ideas into</span><br />
            existence.
          </p>

          <p className="mt-8 max-w-sm text-base leading-[1.45] text-cream/75">
            A proposed campus growth strategy to introduce students to
            voice-powered productivity and inspire them to turn their
            ideas into something real using Wispr Flow.
          </p>

          <div className="mt-8 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-cream/55">
            <span className="h-2 w-2 rounded-full bg-lime" />
            proposed, not executed
          </div>
        </motion.div>
      </div>

      <div className="mt-16 rounded-[2rem] bg-ink p-5 text-cream sm:mt-20 sm:p-8 lg:p-12">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-cream/20 pb-5">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-coral">
              The growth journey
            </p>
            <h3 className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.8]">
              From thought<br />
              <span className="text-lime">to movement.</span>
            </h3>
          </div>

          <p className="hidden max-w-[13rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-cream/50 sm:block">
            Tap a stage.<br />Follow the idea.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div className="flex flex-col">
            {stages.map((item, index) => {
              const StageIcon = item.icon

              return (
                <button
                  type="button"
                  key={item.number}
                  onClick={() => setActiveStage(index)}
                  aria-pressed={activeStage === index}
                  className={`group flex items-center gap-4 border-b border-cream/15 py-4 text-left transition-colors ${
                    activeStage === index
                      ? 'text-lime'
                      : 'text-cream/55 hover:text-cream'
                  }`}
                >
                  <span className="font-mono text-[9px]">{item.number}</span>
                  <StageIcon size={16} strokeWidth={1.3} />
                  <span className="font-display text-3xl font-semibold uppercase leading-none">
                    {item.name}
                  </span>
                  <span
                    className={`ml-auto h-2 w-2 rounded-full transition-transform ${
                      activeStage === index
                        ? 'scale-150 bg-coral'
                        : 'bg-cream/30'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] border border-cream/15 bg-cream p-6 text-ink sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="relative flex h-full flex-col"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime">
                    <Icon size={22} strokeWidth={1.3} />
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-coral">
                    Stage {stage.number} / {stage.metric}
                  </span>
                </div>

                <h4 className="mt-12 max-w-xl font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[0.8]">
                  {stage.title}
                </h4>

                <p className="mt-6 max-w-2xl text-base leading-[1.45] text-ink/75 sm:text-lg">
                  {stage.copy}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/55">
                    Activation / {stage.activation}
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-coral">
                    Next stage <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-coral">
              How I would measure it
            </p>
            <h3 className="font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.8]">
              Signal, not<br />
              <span className="text-coral">speculation.</span>
            </h3>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-ink/50 sm:block">
            Proposed campaign metrics
          </span>
        </div>

        <div className="grid border-t border-ink/20 sm:grid-cols-5">
          {measurement.map(([label, description], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              className="border-b border-ink/20 py-5 sm:border-b-0 sm:border-r sm:px-4 sm:py-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-[9px] text-ink/50">
                  0{index + 1}
                </span>

                <BarChart3
                  size={15}
                  strokeWidth={1.3}
                  className={index % 2 === 0 ? 'text-coral' : 'text-ink'}
                />
              </div>

              <h4 className="font-display text-2xl font-semibold uppercase leading-[0.85]">
                {label}
              </h4>

              <p className="mt-3 text-sm leading-[1.4] text-ink/65">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
