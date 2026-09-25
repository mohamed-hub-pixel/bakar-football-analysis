import { useState } from 'react'
import { goalOfTheWeek } from '../data/mockData'

export default function GoalOfWeek() {
  const [goals, setGoals] = useState(goalOfTheWeek)
  const [votedId, setVotedId] = useState(null)

  const sorted = [...goals].sort((a, b) => b.votes - a.votes)
  const leader = sorted[0]

  const vote = (id) => {
    if (votedId) return
    setGoals((gs) => gs.map((g) => (g.id === id ? { ...g, votes: g.votes + 1 } : g)))
    setVotedId(id)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-sm font-medium text-gold-bright">Cast your vote</p>
      <h2 className="mt-2 font-display text-4xl text-chalk">Goal of the Week</h2>
      <p className="mt-2 max-w-xl text-muted">
        Four contenders from Matchweek {'7'}. Pick the one you'd want on repeat.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {sorted.map((g) => {
          const isLeader = g.id === leader.id
          return (
            <article
              key={g.id}
              className={`rounded-sm border p-6 ${
                isLeader ? 'border-gold bg-gold/10' : 'border-ink-line bg-ink-panel'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-muted">
                  {g.minute}' · vs {g.opponent}
                </span>
                {isLeader && (
                  <span className="rounded-sm bg-gold px-2 py-0.5 text-[11px] font-semibold text-ink">
                    Leading
                  </span>
                )}
              </div>
              <h3 className="mt-2 font-display text-xl text-chalk">{g.scorer}</h3>
              <p className="text-sm text-muted">{g.team}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-chalk/90">{g.description}</p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm tnum text-muted">{g.votes.toLocaleString()} votes</span>
                <button
                  onClick={() => vote(g.id)}
                  disabled={!!votedId}
                  className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                    votedId === g.id
                      ? 'bg-pitch text-white'
                      : 'bg-gold text-ink hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-60'
                  }`}
                >
                  {votedId === g.id ? 'Voted' : 'Vote'}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
