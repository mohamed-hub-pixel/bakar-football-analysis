import { useMemo, useState } from 'react'
import { players } from '../data/mockData'

const POSITIONS = ['ALL', 'GK', 'DEF', 'MID', 'FWD']
const COLUMNS = [
  { key: 'name', label: 'Player' },
  { key: 'team', label: 'Club' },
  { key: 'apps', label: 'Apps' },
  { key: 'goals', label: 'Goals' },
  { key: 'assists', label: 'Assists' },
  { key: 'rating', label: 'Rating' },
]

export default function PlayerStats() {
  const [query, setQuery] = useState('')
  const [position, setPosition] = useState('ALL')
  const [sort, setSort] = useState({ key: 'rating', dir: 'desc' })

  const rows = useMemo(() => {
    let result = players.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.team.toLowerCase().includes(query.toLowerCase())
      const matchesPos = position === 'ALL' || p.pos === position
      return matchesQuery && matchesPos
    })
    result = [...result].sort((a, b) => {
      const dir = sort.dir === 'asc' ? 1 : -1
      if (typeof a[sort.key] === 'string') {
        return a[sort.key].localeCompare(b[sort.key]) * dir
      }
      return (a[sort.key] - b[sort.key]) * dir
    })
    return result
  }, [query, position, sort])

  const toggleSort = (key) => {
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'desc' }
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm font-medium text-gold-bright">The full sheet</p>
      <h2 className="mt-2 font-display text-4xl text-chalk">Player stats</h2>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search a player or club"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-sm border border-ink-line bg-ink-panel px-4 py-2.5 text-sm text-chalk placeholder:text-muted focus:border-gold sm:max-w-xs"
        />
        <div className="flex gap-1 overflow-x-auto">
          {POSITIONS.map((pos) => (
            <button
              key={pos}
              onClick={() => setPosition(pos)}
              className={`whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                position === pos
                  ? 'bg-gold text-ink'
                  : 'border border-ink-line text-muted hover:text-chalk'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-sm border border-ink-line">
        <table className="w-full min-w-[600px] text-sm">
          <thead className="bg-ink-panel">
            <tr>
              {COLUMNS.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left">
                  <button
                    onClick={() => toggleSort(col.key)}
                    className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted hover:text-chalk"
                  >
                    {col.label}
                    {sort.key === col.key && (
                      <span className="text-gold-bright">{sort.dir === 'asc' ? '▲' : '▼'}</span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="tnum">
            {rows.map((p) => (
              <tr key={p.id} className="border-t border-ink-line/70">
                <td className="px-4 py-3 text-chalk">
                  {p.name}
                  <span className="ml-2 rounded-sm bg-ink-line px-1.5 py-0.5 text-[10px] text-muted">
                    {p.pos}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted">{p.team}</td>
                <td className="px-4 py-3 text-muted">{p.apps}</td>
                <td className="px-4 py-3 text-chalk">{p.goals}</td>
                <td className="px-4 py-3 text-chalk">{p.assists}</td>
                <td className="px-4 py-3 font-semibold text-gold-bright">{p.rating.toFixed(1)}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  No players match that search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
