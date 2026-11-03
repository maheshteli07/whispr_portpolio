type SectionShellProps = {
  id: string
  index: string
  label: string
  title: string
}

export function SectionShell({ id, index, label, title }: SectionShellProps) {
  return (
    <section id={id} className="flex min-h-[55vh] scroll-mt-24 items-end border-t border-ink/20 py-8">
      <div className="flex w-full items-end justify-between gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-coral">
          {index} / {label}
        </p>
        <h2 className="font-display max-w-3xl text-right text-[clamp(3rem,8vw,8rem)] font-semibold uppercase leading-[0.82]">
          {title}
        </h2>
      </div>
    </section>
  )
}
