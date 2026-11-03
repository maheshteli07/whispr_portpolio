import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'

type Project = {
  number: string
  title: string
  image: string
  intro: string
  category: string
  technologies: string[]
  problem: string
  contribution: string
  process: string
  challenges: string
  learned: string
  accent: 'lime' | 'coral'
  shape: 'orbit' | 'blocks' | 'window' | 'rings' | 'signal' | 'scan'
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Emergency Corridor Optimization Using Quantum Machine Learning',
    image: '/projects/emergency-corridor.png',
    intro: 'An exploration of how quantum machine learning could help make emergency movement more intelligent.',
    category: 'Research / Optimization',
    technologies: ['Quantum machine learning', 'Route optimization', 'Emergency systems'],
    problem: 'Emergency routes need to account for changing conditions while keeping the path practical and fast.',
    contribution: 'Explored the project direction, the optimization problem, and how a quantum machine learning approach could support emergency corridor planning.',
    process: 'The project frames emergency movement as an optimization problem and studies how a quantum-inspired model can be used to search for better corridor decisions.',
    challenges: 'Working with an emerging technical area meant translating a complex concept into a problem that could be tested and explained clearly.',
    learned: 'I learned to treat a big technology question as a sequence of smaller, testable questions.',
    accent: 'lime',
    shape: 'orbit',
  },
  {
    number: '02',
    title: 'Cancer Prediction System Using Random Forest',
    image: '/projects/cancer-prediction.png',
    intro: 'A machine learning project using a Random Forest model to predict cancer from the breast cancer dataset.',
    category: 'Machine Learning / Classification',
    technologies: ['Python', 'Random Forest', 'Breast cancer dataset'],
    problem: 'Clinical datasets contain patterns that can support cancer prediction, but those patterns need to be handled carefully and translated into a useful classification workflow.',
    contribution: 'Worked on training a Random Forest model using the breast cancer dataset to explore cancer prediction from clinical features.',
    process: 'The workflow prepares the breast cancer dataset, trains a Random Forest classifier, and uses the learned decision patterns to predict the likely class for new input data.',
    challenges: 'The challenge was working with clinical data responsibly while understanding how preprocessing, model choices, and evaluation affect a prediction system.',
    learned: 'I learned how an ensemble model can combine many decision trees into one classification approach, and why model results need careful interpretation.',
    accent: 'coral',
    shape: 'blocks',
  },
  {
    number: '03',
    title: 'Hospital Operating Management System',
    image: '/projects/hospital-management.png',
    intro: 'A digital system focused on bringing patients, doctors, and appointments into one clearer workflow.',
    category: 'Systems / Digital Operations',
    technologies: ['Patient management', 'Doctor management', 'Appointment workflows'],
    problem: 'Hospital operations involve many connected details, and scattered information makes everyday coordination harder.',
    contribution: 'Worked on the concept of a digital system that organizes patient records, doctor information, and appointment management in one place.',
    process: 'The system is structured around the relationships between patients, doctors, and appointments, making the key operating flows easier to manage.',
    challenges: 'The challenge was thinking through the different users and keeping the experience understandable while the underlying relationships stayed accurate.',
    learned: 'I learned that good software is often about making complex coordination feel simple.',
    accent: 'lime',
    shape: 'window',
  },
  {
    number: '04',
    title: 'QR-Based Smart Retail Checkout',
    image: '/projects/smart-retail-checkout.png',
    intro: 'An experiment in making retail checkout faster through QR-based technology.',
    category: 'Experiment / Retail Technology',
    technologies: ['QR technology', 'Retail workflows', 'Checkout experience'],
    problem: 'Checkout can become a friction point when a simple purchase requires too much waiting or manual coordination.',
    contribution: 'Explored how a QR-based flow could make the retail checkout experience faster and more direct.',
    process: 'The idea uses a QR touchpoint to connect the shopper and the checkout workflow, reducing unnecessary steps between selection and completion.',
    challenges: 'The challenge was thinking about speed without making the experience confusing, fragile, or difficult to trust.',
    learned: 'I learned to evaluate an idea not only by its technical possibility, but by the small moments it removes for a real person.',
    accent: 'coral',
    shape: 'scan',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual-${project.shape} group/visual relative h-64 overflow-hidden rounded-[2rem] border border-ink/20 bg-ink sm:h-80`}>
      <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/visual:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/10" />
      <span className="absolute left-5 top-5 rounded-pill border border-cream/50 bg-ink/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-cream backdrop-blur-sm">case / {project.number}</span>
      <span className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream">mahesh.exe</span>
    </div>
  )
}

function ProjectModal({ project, onClose, onPrevious, onNext }: { project: Project; onClose: () => void; onPrevious: () => void; onNext: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrevious])

  const sections = [
    ['The problem', project.problem],
    ['My idea + contribution', project.contribution],
    ['How it works', project.process],
    ['The challenge', project.challenges],
    ['What I learned', project.learned],
  ]

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-ink/60 p-3 backdrop-blur-sm sm:p-6 lg:p-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cream text-ink"
      >
        <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4 sm:px-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-coral">Case study / {project.number}</span>
          <button type="button" onClick={onClose} aria-label="Close case study" className="rounded-full border border-ink/20 p-2 transition-colors hover:bg-lime">
            <X size={15} strokeWidth={1.4} />
          </button>
        </div>
        <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:p-14">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProjectVisual project={project} />
            <p className="mt-4 font-mono text-[9px] uppercase leading-[1.4] tracking-[0.1em] text-ink/60">{project.category}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-pill border border-ink/20 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em]">{technology}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold uppercase leading-[0.8]">{project.title}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-[1.4] sm:text-xl">{project.intro}</p>
            <div className="mt-12 border-t border-ink/20">
              {sections.map(([label, content]) => (
                <div key={label} className="grid gap-3 border-b border-ink/20 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-coral">{label}</p>
                  <p className="max-w-xl leading-[1.5] text-ink/80">{content}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
              <button type="button" onClick={onPrevious} className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em]">
                <ChevronLeft size={15} className="transition-transform group-hover:-translate-x-1" /> Previous
              </button>
              <button type="button" onClick={onNext} className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em]">
                Next <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const closeProject = () => setActiveProject(null)
  const showPrevious = () => setActiveProject((current) => current === null ? null : (current - 1 + projects.length) % projects.length)
  const showNext = () => setActiveProject((current) => current === null ? null : (current + 1) % projects.length)

  return (
    <>
      <section id="projects" className="scroll-mt-24 border-t border-ink/20 py-20 sm:py-28 lg:py-36">
        <div className="mb-16 flex items-start justify-between gap-6 sm:mb-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">04 / selected work</p>
          <p className="max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">Less talk.<br />More work making.</p>
        </div>
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <h2 className="font-display text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.76]">Less talk,<br /><span className="text-coral">more making.</span></h2>
          <p className="max-w-sm text-lg leading-[1.4] sm:text-xl">A few things I&apos;ve explored, built, and learned from. Open a project when you want the story behind the output.</p>
        </div>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.6 }}
              className={`group ${index % 2 === 1 ? 'md:mt-24' : ''}`}
            >
              <button type="button" onClick={() => setActiveProject(index)} className="block w-full text-left">
                <ProjectVisual project={project} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.12em] text-coral">{project.number} / {project.category}</p>
                    <h3 className="max-w-lg font-display text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.84] transition-colors group-hover:text-coral">{project.title}</h3>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-lime">
                    <ArrowUpRight size={15} strokeWidth={1.4} />
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-[1.45] text-ink/70">{project.intro}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-pill border border-ink/15 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-ink/60">{technology}</span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] underline decoration-ink/30 underline-offset-4 transition-colors group-hover:text-coral">View case study <ArrowUpRight size={12} /></span>
              </button>
            </motion.article>
          ))}
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-ink/20 pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-ink/55">{projects.length} stories / still becoming</p>
          <span className="hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] sm:flex"><Check size={13} /> built through experiments</span>
        </div>
      </section>
      <AnimatePresence>
        {activeProject !== null && (
          <ProjectModal
            project={projects[activeProject]}
            onClose={closeProject}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </>
  )
}
