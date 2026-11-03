import { ArrowUpRight, Menu } from 'lucide-react'

const links = [
  { label: 'The story', href: '#journey' },
  { label: 'The work', href: '#projects' },
  { label: 'Say hello', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <a href="#" className="font-mono text-[11px] font-medium uppercase tracking-[0.18em]">
        mahesh<span className="text-coral">.</span>exe
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[10px] uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="group flex items-center gap-2 rounded-pill border border-ink/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-lime"
      >
        available
        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      <button aria-label="Open menu" className="ml-3 md:hidden">
        <Menu size={20} strokeWidth={1.5} />
      </button>
    </header>
  )
}
