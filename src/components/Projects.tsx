
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2, X } from 'lucide-react'
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
    title: 'Smart Emergency Corridor Optimization',
    image: '/projects/emergency-corridor.png',
    intro:
      'Exploring how quantum machine learning and intelligent route planning can help emergency vehicles navigate changing traffic conditions.',
    category: 'Quantum ML / Route Optimization',
    technologies: [
      'Python',
      'Variational Quantum Classifier',
      'A* Algorithm',
      'SUMO / TraCI',
      'NetworkX',
    ],
    problem:
      'Emergency vehicles need routes that account for changing traffic conditions. A route that looks shortest on a map may not be the fastest when congestion and signal delays are involved.',
    contribution:
      'Worked on an approach that combines quantum machine learning for traffic congestion prediction with A* search for congestion-aware emergency route planning.',
    process:
      'The system uses traffic-related inputs such as vehicle count, average speed, weather, and signal delay to estimate congestion. The prediction is then used to influence road costs in the A* route-planning process.',
    challenges:
      'The main challenge was connecting an emerging quantum machine learning approach with a practical route optimization problem and making the overall workflow understandable and testable.',
    learned:
      'I learned how machine learning predictions can influence algorithmic decision-making, and how simulation can help explore solutions to real-world transportation problems.',
    accent: 'lime',
    shape: 'orbit',
  },
  {
    number: '02',
    title: 'Breast Cancer Prediction Using Random Forest',
    image: '/projects/cancer-prediction.png',
    intro:
      'A machine learning project exploring how a Random Forest classifier can identify patterns in breast cancer data.',
    category: 'Machine Learning / Classification',
    technologies: [
      'Python',
      'Random Forest',
      'Scikit-learn',
      'Pandas',
      'NumPy',
    ],
    problem:
      'Medical datasets contain patterns that can support classification tasks, but those patterns need to be processed and interpreted carefully before they can be used for prediction.',
    contribution:
      'Worked on preparing the breast cancer dataset and training a Random Forest classification model to explore predictions based on clinical features.',
    process:
      'The workflow involves preparing the dataset, processing the input features, training a Random Forest classifier, and using the trained model to predict a class for new inputs.',
    challenges:
      'The challenge was understanding how data preprocessing, model selection, and evaluation influence the quality of predictions, especially when working with medical data.',
    learned:
      'I learned how an ensemble model combines multiple decision trees and why model evaluation and careful interpretation matter in machine learning applications.',
    accent: 'coral',
    shape: 'blocks',
  },
  {
    number: '03',
    title: 'Hospital OPD Management System',
    image: '/projects/hospital-management.png',
    intro:
      'A digital OPD management system designed to organize patient records, doctor information, and appointment workflows.',
    category: 'Full Stack / Healthcare Management',
    technologies: [
      'React',
      'Java Spring Boot',
      'MongoDB',
      'JWT Authentication',
      'REST APIs',
    ],
    problem:
      'Managing patient details, doctor information, and appointments can become difficult when information is scattered across different records and workflows.',
    contribution:
      'Worked on developing an OPD management system that brings patient registration, doctor management, and appointment handling into one centralized application.',
    process:
      'The application connects a React frontend with a Spring Boot backend and MongoDB database. Its main workflows are organized around patient records, doctor details, and appointment management, with admin authentication.',
    challenges:
      'The challenge was connecting frontend and backend workflows, managing data relationships, and making sure the application handled patient and appointment information consistently.',
    learned:
      'I learned how full-stack applications bring together interfaces, APIs, databases, and authentication to support a practical management workflow.',
    accent: 'lime',
    shape: 'window',
  },
  {
    number: '04',
    title: 'QR-Based Smart Retail Checkout',
    image: '/projects/smart-retail-checkout.png',
    intro:
      'An experiment exploring how QR technology can make the retail checkout process faster and more convenient.',
    category: 'Experiment / Retail Technology',
    technologies: [
      'QR Technology',
      'Retail Workflows',
      'Digital Checkout',
      'User Experience',
    ],
    problem:
      'Traditional checkout experiences can involve unnecessary waiting and manual steps, creating friction between selecting a product and completing a purchase.',
    contribution:
      'Explored a QR-based checkout concept focused on simplifying the connection between product selection and the checkout process.',
    process:
      'The concept uses a QR touchpoint to connect the shopper with a digital checkout workflow, aiming to reduce unnecessary steps and make the experience more direct.',
    challenges:
      'The challenge was thinking about convenience and speed while keeping the checkout experience clear, reliable, and easy to understand.',
    learned:
      'I learned to evaluate technology from the user’s perspective and think about how even a small change in a workflow can improve an everyday experience.',
    accent: 'coral',
    shape: 'scan',
  },
]

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual project-visual-${project.shape} group/visual relative h-64 overflow-hidden rounded-[2rem] border border-ink/20 bg-ink sm:h-80`}
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/visual:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/10" />

      <span className="absolute left-5 top-5 rounded-pill border border-cream/50 bg-ink/30 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
        case / {project.number}
      </span>

      <span className="absolute bottom-5 right-5 font-mono text-[9px] uppercase tracking-[0.14em] text-cream">
        mahesh.exe
      </span>
    </div>
  )
}

function ProjectModal({
  project,
  onClose,
  onPrevious,
  onNext,
}: {
  project: Project
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}) {
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
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-coral">
            Case study / {project.number}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-full border border-ink/20 p-2 transition-colors hover:bg-lime"
          >
            <X size={15} strokeWidth={1.4} />
          </button>
        </div>

        <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:p-14">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <ProjectVisual project={project} />

            <p className="mt-4 font-mono text-[9px] uppercase leading-[1.4] tracking-[0.1em] text-ink/60">
              {project.category}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-pill border border-ink/20 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] font-semibold uppercase leading-[0.8]">
              {project.title}
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-[1.4] sm:text-xl">
              {project.intro}
            </p>

            <div className="mt-12 border-t border-ink/20">
              {sections.map(([label, content]) => (
                <div
                  key={label}
                  className="grid gap-3 border-b border-ink/20 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-coral">
                    {label}
                  </p>

                  <p className="max-w-xl leading-[1.5] text-ink/80">
                    {content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={onPrevious}
                className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em]"
              >
                <ChevronLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Previous
              </button>

              <button
                type="button"
                onClick={onNext}
                className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em]"
              >
                Next
                <ChevronRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
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

  const showPrevious = () =>
    setActiveProject((current) =>
      current === null ? null : (current - 1 + projects.length) % projects.length
    )

  const showNext = () =>
    setActiveProject((current) =>
      current === null ? null : (current + 1) % projects.length
    )

  return (
    <>
      <section
        id="projects"
        className="scroll-mt-24 border-t border-ink/20 pb-0 pt-14 sm:pt-16 lg:pt-24"
      >
        <div className="mb-12 flex items-start justify-between gap-6 sm:mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">
            04 / selected work
          </p>

          <p className="max-w-[11rem] text-right font-mono text-[9px] uppercase leading-[1.4] tracking-[0.12em] text-ink/60">
            Less talk.
            <br />
            More work making.
          </p>
        </div>

        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <h2 className="font-display text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.76]">
            Less talk,
            <br />
            <span className="text-coral">more making.</span>
          </h2>

          <p className="max-w-sm text-lg leading-[1.4] sm:text-xl">
            A few things I&apos;ve explored, built, and learned from. Open a
            project when you want the story behind the output.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.6 }}
              className={`group ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <button
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={`View ${project.title} case study`}
                className="block w-full text-left"
              >
                <ProjectVisual project={project} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.12em] text-coral">
                      {project.number} / {project.category}
                    </p>

                    <h3 className="max-w-lg font-display text-[clamp(2rem,4vw,4rem)] font-semibold uppercase leading-[0.84] transition-colors group-hover:text-coral">
                      {project.title}
                    </h3>
                  </div>

                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-lime">
                    <ArrowUpRight size={15} strokeWidth={1.4} />
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-[1.45] text-ink/70">
                  {project.intro}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-pill border border-ink/15 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-ink/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] underline decoration-ink/30 underline-offset-4 transition-colors group-hover:text-coral">
                  View case study
                  <ArrowUpRight size={12} />
                </span>
              </button>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 border-t border-ink/20 pt-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-ink/70">
            {projects.length} stories / still becoming
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://leetcode.com/u/maheshteli07/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-32 items-center justify-between overflow-hidden rounded-[1.5rem] border border-ink/20 bg-[#ffb84d] px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-7"
            >
              <span className="absolute -right-3 -top-8 font-display text-[8rem] font-semibold leading-none text-ink/10">
                01
              </span>

              <span className="absolute bottom-3 right-20 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-ink/55">
                solve / learn
              </span>

              <span className="relative flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-cream text-ink shadow-[3px_3px_0_#171717]">
                  <span className="font-mono text-lg font-medium">
                    &lt;/&gt;
                  </span>
                </span>

                <span>
                  <span className="flex items-center gap-2 font-display text-3xl font-bold uppercase leading-none">
                    LeetCode
                    <Code2 size={18} strokeWidth={1.8} />
                  </span>

                  <span className="mt-2 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink/85">
                    maheshteli07
                  </span>
                </span>
              </span>

              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink bg-lime transition-transform group-hover:rotate-[-12deg]">
                <ChevronRight size={17} strokeWidth={1.5} />
              </span>
            </a>

            <a
              href="https://codeforces.com/profile/maheshteli_07"
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-32 items-center justify-between overflow-hidden rounded-[1.5rem] border border-ink/20 bg-ink px-5 py-5 text-cream transition-transform duration-300 hover:-translate-y-1 sm:px-7"
            >
              <span className="absolute -right-3 -top-8 font-display text-[8rem] font-semibold leading-none text-cream/10">
                02
              </span>

              <span className="absolute bottom-3 right-20 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-cream/60">
                compete / grow
              </span>

              <span className="relative flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-cream bg-coral text-ink shadow-[3px_3px_0_#d7ff64]">
                  <span className="font-display text-2xl font-semibold">
                    CF
                  </span>
                </span>

                <span>
                  <span className="flex items-center gap-2 font-display text-3xl font-bold uppercase leading-none">
                    Codeforces
                    <Code2 size={18} strokeWidth={1.8} />
                  </span>

                  <span className="mt-2 block font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-cream/85">
                    maheshteli_07
                  </span>
                </span>
              </span>

              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream bg-lime text-ink transition-transform group-hover:rotate-[-12deg]">
                <ChevronRight size={17} strokeWidth={1.5} />
              </span>
            </a>
          </div>
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
