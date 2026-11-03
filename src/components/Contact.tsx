import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const tableItems = [
  { number: '01', label: 'Curiosity', detail: 'to explore new ideas' },
  { number: '02', label: 'Creativity', detail: 'to communicate them' },
  { number: '03', label: 'Ownership', detail: 'to execute them' },
  { number: '04', label: 'Technology', detail: 'to bring them to life' },
  { number: '05', label: 'People skills', detail: 'to grow them' },
]

const contactLinks = [
  {
    label: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/mahesh-teli-328b28332/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    detail: 'See the work in progress',
    href: 'https://github.com/maheshteli07',
    icon: Github,
  },
  {
    label: 'Email',
    detail: 'Start a conversation',
    href: 'mailto:maheshteli729@gmail.com',
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-ink/20 py-14 sm:py-16 lg:py-24">
      <div className="grain absolute inset-0 -z-0 opacity-10" />
      <div className="relative z-10 mb-12 flex items-start justify-between gap-6 sm:mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">09 / the next chapter</p>
        <p className="max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
          Still writing.<br />Still becoming.
        </p>
      </div>

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="font-display max-w-6xl text-[clamp(3.9rem,10vw,10rem)] font-semibold uppercase leading-[0.74]"
          >
            The next
            <br />
            chapter is
            <br />
            still being <span className="text-coral">written.</span>
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="relative max-w-md justify-self-end border-l border-ink/20 pl-5 text-lg leading-[1.4] sm:pl-7 sm:text-xl"
        >
          <Sparkles className="absolute -left-3 -top-5 text-coral" size={22} strokeWidth={1.3} />
          <p>
            I want to bring creativity, technology, growth, and community building into the same room — then make something meaningful happen there.
          </p>
          <p className="mt-5 text-ink/65">
            I am not looking for a place to simply fit in. I am looking for a problem, a team, and a reason to build with intention.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 mt-16 border-t border-ink/20 pt-6 sm:mt-20">
        <div className="mb-9 flex items-end justify-between">
          <h3 className="font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.8]">
            What I bring<br /><span className="text-coral">to that table.</span>
          </h3>
          <p className="hidden max-w-[12rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] sm:block">
            Five ways I turn<br />possibility into progress.
          </p>
        </div>
        <div className="grid border-t border-ink/20 sm:grid-cols-5">
          {tableItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="group border-b border-ink/20 py-5 sm:border-b-0 sm:border-r sm:px-4 sm:py-7 sm:first:pl-0 sm:last:border-r-0"
            >
              <div className="mb-14 flex items-center justify-between font-mono text-[9px] text-ink/50">
                <span>{item.number}</span>
                <span className={`h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-[2] ${index % 2 === 0 ? 'bg-lime' : 'bg-coral'}`} />
              </div>
              <h4 className="font-display text-3xl font-semibold uppercase leading-[0.84] transition-transform duration-300 group-hover:-translate-y-1">
                {item.label}
              </h4>
              <p className="mt-3 font-mono text-[9px] uppercase leading-[1.4] tracking-[0.08em] text-ink/60">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-16 overflow-hidden rounded-[2rem] bg-ink p-5 text-cream sm:mt-20 sm:p-8 lg:p-12">
        <div className="grain absolute inset-0 opacity-10" />
        <div className="relative">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.15em] text-lime">Let&apos;s make the next thing</p>
              <h3 className="font-display max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.74]">
                Have an idea?
                <br />
                <span className="text-coral">Let&apos;s talk.</span>
              </h3>
            </div>
            <ArrowDownRight className="hidden text-coral sm:block" size={42} strokeWidth={1} />
          </div>

          <div className="mt-14 grid border-t border-cream/20 sm:grid-cols-3">
            {contactLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between border-b border-cream/20 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full text-ink ${index === 1 ? 'bg-coral' : 'bg-lime'}`}>
                      <Icon size={16} strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block font-display text-2xl font-semibold uppercase leading-none">{link.label}</span>
                      <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.08em] text-cream/50">{link.detail}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={16} strokeWidth={1.3} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              )
            })}
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-cream/50">Open to thoughtful collaborations, useful problems, and the next build.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-16 border-y border-ink/20 py-8 text-center sm:mt-20 sm:py-12"
      >
        <motion.p
          animate={{ x: ['-1%', '1%', '-1%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="font-display text-[clamp(2.6rem,7vw,7rem)] font-semibold uppercase leading-[0.78]"
        >
          This isn&apos;t the end.
          <br />
          <span className="text-coral">It&apos;s just the next build.</span>
        </motion.p>
      </motion.div>

      <div className="relative z-10 mt-6 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.13em] text-ink/50">
        <span>mahesh.exe / the making of Mahesh</span>
        <span>© 2026</span>
      </div>
    </section>
  )
}
