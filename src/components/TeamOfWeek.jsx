import { teamOfTheWeek } from '../data/mockData'

const ROWS = [
  ['GK'],
  ['LB', 'CB', 'CB', 'RB'],
  ['CM', 'CM', 'CM'],
  ['LW', 'ST', 'RW'],
]

function findPlayer(lineup, slot, used) {
  return lineup.find((p) => p.slot === slot && !used.has(p.id))
}

export default function TeamOfWeek() {
  const { lineup, formation, matchweek } = teamOfTheWeek
  const used = new Set()

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm font-medium text-gold-bright">Matchweek {matchweek}</p>
      <h2 className="mt-2 font-display text-4xl text-chalk">Team of the Week</h2>
      <p className="mt-2 text-muted">Formation: {formation}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative overflow-hidden rounded-sm border border-pitch-deep bg-pitch/90 p-4">
          <div className="pointer-events-none absolute inset-4 rounded-sm border border-white/25" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-40 -translate-x-1/2 border border-t-0 border-white/25" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-40 -translate-x-1/2 border border-b-0 border-white/25" />

          <div className="relative flex flex-col justify-between gap-6 py-6">
            {ROWS.map((row, i) => (
              <div key={i} className="flex justify-around">
                {row.map((slot, j) => {
                  const player = findPlayer(lineup, slot, used)
                  if (player) used.add(player.id)
                  return (
                    <div key={slot + j} className="flex flex-col items-center text-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-xs font-semibold text-gold-bright shadow">
                        {player ? player.rating.toFixed(1) : '-'}
                      </div>
                      <p className="mt-1 max-w-[88px] text-[11px] font-medium leading-tight text-white">
                        {player ? player.name : slot}
                      </p>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {lineup.map((p) => (
            <div key={p.id} className="rounded-sm border border-ink-line bg-ink-panel p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-chalk">
                  {p.name} <span className="text-xs text-muted">· {p.team}</span>
                </p>
                <span className="rounded-sm bg-gold/15 px-2 py-0.5 text-xs font-semibold text-gold-bright">
                  {p.rating.toFixed(1)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
