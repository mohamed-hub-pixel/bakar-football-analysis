const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'pundits', label: 'Pundits' },
  { id: 'stats', label: 'Player Stats' },
  { id: 'team-of-the-week', label: 'Team of the Week' },
  { id: 'goal-of-the-week', label: 'Goal of the Week' },
]

export default function Navbar({ active, onNavigate }) {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/80 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 font-display text-xl tracking-wide text-chalk"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold text-ink font-bold">
            BB
          </span>
          BAKAR BROTHERS FOOTBALL ANALYSTS
        </button>

        <nav className="hidden gap-1 md:flex">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                active === s.id
                  ? 'bg-ink-panel text-gold-bright'
                  : 'text-muted hover:text-chalk'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <select
          className="rounded-sm border border-ink-line bg-ink-panel px-2 py-2 text-sm text-chalk md:hidden"
          value={active}
          onChange={(e) => onNavigate(e.target.value)}
        >
          {SECTIONS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  )
}
